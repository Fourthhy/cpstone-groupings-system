import { db } from "../firebase"
import { doc, setDoc, getDoc, getDocs, collection } from "firebase/firestore";

const handleAddToSubCollection = async (roomCode, userCode, role, userCode1, userCode2, userCode3, role1, role2, role3) => {
    const subcollectionRef1 = doc(db, roomCode, userCode, 'mutuals', btoa(userCode1) );
        await setDoc(subcollectionRef1, { role: role1 });
    const subcollectionRef2 = doc(db, roomCode, userCode, 'mutuals', btoa(userCode2) );
        await setDoc(subcollectionRef2, { role: role2 });
    const subcollectionRef3 = doc(db, roomCode, userCode, 'mutuals', btoa(userCode3) );
        await setDoc(subcollectionRef3, { role: role3 });

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
      const subcollectionRef = collection(db, roomCode, userCode, 'mutuals');
      const querySnapshot = await getDocs(subcollectionRef);
      const membersWithRole = querySnapshot.docs.map((doc) => ({
        role: doc.data().role, 
        userCode: doc.id
     }));
      return membersWithRole;
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