import { db } from "../firebase";
import { doc, getDocs, collection, deleteDoc } from "firebase/firestore"

const handleAdminCodeValidation = (adminCode) => {
    if (adminCode === import.meta.env.VITE_ADMIN_CODE_1) {
        return true;
    }
    if (adminCode === import.meta.env.VITE_ADMIN_CODE_2) {
        return true;
    }
    if (adminCode === import.meta.env.VITE_ADMIN_CODE_3) {
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

const deleteRoom = async (code) => {
    const roomRef = doc(db, "roomList", code);
    await deleteDoc(roomRef);
}

export { 
    handleAdminCodeValidation, 
    fetchRoomList,
    deleteRoom
}