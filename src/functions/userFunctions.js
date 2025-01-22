import { db } from "../firebase"
import { collection, doc, addDoc } from "firebase/firestore";

const handleAddToSubCollection = (
    roomCode, userCode, userCode1, userCode2, userCode3, role, role1, role2, role3 
) => {
    const list = [
        {"userCode": userCode1, "role": role1},
        {"userCode": userCode2, "role": role2},
        {"userCode": userCode3, "role": role3},
    ]
    const collectionRef = doc(db, roomCode, userCode)

    const subCollectionRef = collection(collectionRef, "roles")
    list.forEach( async (item) => {
        const docRef = await addDoc(subCollectionRef, item)
    })
}

export { 
    handleAddToSubCollection 
} 