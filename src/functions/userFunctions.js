import { db } from "../firebase"
import { doc, setDoc, getDoc } from "firebase/firestore";

const handleAddToSubCollection = async (roomCode, userCode, role, userCode1, userCode2, userCode3, role1, role2, role3) => {
    const subcollectionRef1 = doc(db, roomCode, userCode, 'mutuals', userCode1 );
        await setDoc(subcollectionRef1, { role: role1 });
    const subcollectionRef2 = doc(db, roomCode, userCode, 'mutuals', userCode2 );
        await setDoc(subcollectionRef2, { role: role2 });
    const subcollectionRef3 = doc(db, roomCode, userCode, 'mutuals', userCode3 );
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
        console.log(docData.userCode)
        return docData.userCode
    }
    return false
}

export { 
    handleAddToSubCollection,
    handleSearchUsercode
} 