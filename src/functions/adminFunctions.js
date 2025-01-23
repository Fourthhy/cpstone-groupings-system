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

    const sortStudentsByVouched = () => {
      const DEV = ["dev"]
      const PM = ["pm"]
      const UIUX1 = ["ui/ux1"]
      const UIUX2 = ["ui/ux2"]
      const NOROLE = ["norole"]

      results.forEach((student) => {
        if (student.vouches.length == 0 ) {
          if(!NOROLE.includes(student.id)) {
            NOROLE.push(atob(student.id))
          }
        }
        student.vouches.forEach((vouch) => {
          switch (vouch.role) {
            case "DEV":
              if (!DEV.includes(vouch.id)) {
                DEV.push(atob(vouch.id))
              }
              break;
            case "PM":
              if (!PM.includes(vouch.id)) {
                PM.push(atob(vouch.id))
              }
              break;
            case "UI/UX1":
              if (!UIUX1.includes(vouch.id)) {
                UIUX1.push(atob(vouch.id))
              }
              break;
            case "UI/UX2":
              if (!UIUX2.includes(vouch.id)) {
                UIUX2.push(atob(vouch.id))
              }
              break;
          }
        })
      })
      console.log(results)
      console.log(DEV, PM, UIUX1, UIUX2, NOROLE);
      return { DEV, PM, UIUX1, UIUX2, NOROLE };
    }

    const output = sortStudentsByVouched()
    return output;

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