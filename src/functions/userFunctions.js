import { db } from "../firebase"
import { doc, setDoc, getDoc, getDocs, collection } from "firebase/firestore";

const handleAddToSubCollection = async (roomCode, userCode, role, userCode1, userCode2, userCode3, userCode4, role1, role2, role3, role4) => {
    const subcollectionRef1 = doc(db, roomCode, userCode, 'mutuals', btoa(userCode1));
    await setDoc(subcollectionRef1, { role: role1 });
    const subcollectionRef2 = doc(db, roomCode, userCode, 'mutuals', btoa(userCode2));
    await setDoc(subcollectionRef2, { role: role2 });
    const subcollectionRef3 = doc(db, roomCode, userCode, 'mutuals', btoa(userCode3));
    await setDoc(subcollectionRef3, { role: role3 });
    if (userCode4 !== "" && role4 !== "") {
        const subcollectionRef4 = doc(db, roomCode, userCode, 'mutuals', btoa(userCode4));
        await setDoc(subcollectionRef4, { role: role4 });
    }
 
    const collectionRef = doc(db, roomCode, userCode);
    const docSnap = await getDoc(collectionRef);
    if (docSnap.exists()) {
        const docData = docSnap.data();
        await setDoc(collectionRef, {
            id: docData.id,
            userCode: docData.userCode,
            role: role
        });
    }
}

const handleSearchUsercode = async (roomCode, userCode) => {
    const collectionRef = doc(db, roomCode, userCode)
    const docSnap = await getDoc(collectionRef);
    if (docSnap.exists()) {
        const docData = docSnap.data();
        return docData.userCode
    }
    return false
}

const handleCheckMutal = async (roomCode, userCode) => {

    const handleGetUserDocId = async (roomCode, userCode) => {
        const collectionRef = collection(db, roomCode);
        const querySnapshot = await getDocs(collectionRef);
        const userDoc = querySnapshot.docs.find(doc => doc.data().userCode === userCode);
        if (userDoc) {
            return userDoc.id;
        }
        return null;
    };

    try {
        const userDocId = await handleGetUserDocId(roomCode, userCode);
        if (userDocId) {
            return userDocId; // User found
        } else {
            return false; // User not found
        }
    } catch (error) {
        console.error("Error checking document:", error);
        return false;
    }
};

const handleMutualMember = async (roomCode, userCode) => {

    try {
        const subcollectionFetch = collection(db, roomCode, userCode, 'mutuals');
        const querySnapshotFetch = await getDocs(subcollectionFetch);

        const membersWithRole = querySnapshotFetch.docs.map((doc) => ({
            role: doc.data().role,
            userCode: doc.id
        }));
        const mutuals = await Promise.all(
            membersWithRole.map(async (member) => {
                try {
                    const mutualsSubcollection = collection(db, roomCode, member.userCode, 'mutuals');
                    const querySnapshotMutuals = await getDocs(mutualsSubcollection);

                    const isMutual = querySnapshotMutuals.docs.some(doc => doc.id === userCode);
                    return {
                        userCode: member.userCode,
                        role: member.role,
                        mutual: isMutual
                    };
                } catch (error) {
                    console.error("Error getting mutuals:", error);
                    return { userCode: member.userCode, role: member.role, mutual: false };
                }
            })
        );

        console.log(mutuals)
        return mutuals;

    } catch (error) {
        console.error("Error getting documents: ", error);
    }
};


export {
    handleAddToSubCollection,
    handleSearchUsercode,
    handleCheckMutal,
    handleMutualMember
} 