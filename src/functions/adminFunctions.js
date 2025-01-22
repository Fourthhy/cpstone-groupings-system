import { db } from "../firebase";
import { getDocs, collection } from "firebase/firestore"

const handleAdminCodeValidation = (adminCode) => {
    if (adminCode === import.meta.env.VITE_ADMIN_CODE_1) {
        return true;
    }
    if (adminCode === import.meta.env.VITE_ADMIN_CODE_2) {
        return true;
    }
    else {
        return false;
    }
}

const fetchRoomList = async () => {
    const roomList = [];
    const querySnapshot = await getDocs(collection(db, "roomList"));
    querySnapshot.forEach((doc) => {
        roomList.push({ roomCode: doc.id, timestamp: doc.data().timestamp })
    });
    return roomList
}

export { 
    handleAdminCodeValidation, 
    fetchRoomList 
}