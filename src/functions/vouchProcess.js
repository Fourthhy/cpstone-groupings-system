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
            role: roleIndex
        });
    }
}

const memberVouchEntry = async (memberVouch) => {
    alert(memberVouch[0].studentName)
    alert('passed')
}



export {
    selfVouchentry,
    memberVouchEntry
}
