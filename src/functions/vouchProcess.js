import { db } from "../firebase"
import { doc, setDoc, getDoc, getDocs, collection } from "firebase/firestore";

const selfVouchentry = async (roomCode, userCode, roleIndex) => {
    const collectionRef = doc(db, roomCode, userCode);
    const docSnap = await getDoc(collectionRef);
    if (docSnap.exists()) {
        const docData = docSnap.data();
        await setDoc(collectionRef, {
            id: docData.id,
            userCode: docData.userCode,
            roleIndex: roleIndex
        });
    }
}

const memberVouchEntry = async (roomCode, userCode, memberVouch) => {
    if (!memberVouch[0].studentName) { return }
    else {
        alert(memberVouch[0].roleIndex)
        const subcollectionRef1 = doc(db, roomCode, userCode, 'mutuals', memberVouch[0].studentName);
        await setDoc(subcollectionRef1, { roleIndex: memberVouch[0].roleIndex });
    }
    if (!memberVouch[1].studentName) { return }
    else {
        alert(memberVouch[1].roleIndex)
        const subcollectionRef1 = doc(db, roomCode, userCode, 'mutuals', memberVouch[1].studentName);
        await setDoc(subcollectionRef1, { roleIndex: memberVouch[1].roleIndex });
    }
    if (!memberVouch[2].studentName) { return }
    else {
        alert(memberVouch[2].roleIndex)
        const subcollectionRef1 = doc(db, roomCode, userCode, 'mutuals', memberVouch[2].studentName);
        await setDoc(subcollectionRef1, { roleIndex: memberVouch[2].roleIndex });
    }
    if (!memberVouch[3].studentName) { return }
    else {
        alert(memberVouch[3].roleIndex)
        const subcollectionRef1 = doc(db, roomCode, userCode, 'mutuals', memberVouch[3].studentName);
        await setDoc(subcollectionRef1, { roleIndex: memberVouch[3].roleIndex });
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


export {
    selfVouchentry,
    memberVouchEntry,
    handleSearchUsercode
}
