import { db } from "../firebase"
import { doc, setDoc, getDoc, getDocs, collection } from "firebase/firestore";

const fetchRoomList = async () => {
    const roomList = [];
    const querySnapshot = await getDocs(collection(db, "roomList"));
    querySnapshot.forEach((doc) => {
      roomList.push({ roomCode: doc.id, timestamp: doc.data().timestamp })
    });
    return roomList
  }

export {
    fetchRoomList
}