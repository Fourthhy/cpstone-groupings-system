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

const displayVouchForRoles = async (roomCode) => {
  try {
    const collectionRef = collection(db, roomCode);
    const querySnapshot = await getDocs(collectionRef);
    const studentList = querySnapshot.docs.map((doc) => ({
      id: doc.id,
    }));

    const getVouches = async (docId) => {
      try {
        const subCollectionRef = collection(db, roomCode, docId, "mutuals");
        const querySnapshot = await getDocs(subCollectionRef);
        return querySnapshot.docs.map((doc) => ({
            id: doc.id,
            role: doc.data().role
        })); 
      } catch (error) {
        console.error("Error getting documents:", error);
        return [];
      }
    };

    const results = await Promise.all(
      studentList.map(async (doc) => ({
        id: doc.id,
        vouches: await getVouches(doc.id), 
      }))
    );

    console.log(results); 
    return results; 

  } catch (error) {
    console.error("Error getting documents:", error);
    return []; 
  }
};


export { 
    handleAdminCodeValidation, 
    fetchRoomList,
    deleteRoom,
    displayVouchForRoles
}