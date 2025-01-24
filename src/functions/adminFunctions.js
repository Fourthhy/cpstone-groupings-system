import { db } from "../firebase";
import { doc, getDoc, getDocs, collection, deleteDoc } from "firebase/firestore"

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

  try { //GETTING ALL THE ENCODED STUDENT NAMES
    const collectionRef = collection(db, roomCode);
    const querySnapshot = await getDocs(collectionRef);
    const studentList = querySnapshot.docs.map((doc) => ({
      id: doc.id,
    }));

    //CREATE FUNCTION TO GET ALL THE VOUCHES FOR EACH STUDENT
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

    //GETTING ALL THE VOUCHES FOR EACH STUDENT
    const results = await Promise.all(
      studentList.map(async (doc) => ({
        id: doc.id,
        vouches: await getVouches(doc.id),
      }))
    );

    const fetchUserCodes = async () => {
      try {
        const collectionRef = collection(db, roomCode)
        const querySnapshot = await getDocs(collectionRef)
        const userCodes = querySnapshot.docs.map((doc) => ({
          studentCode: doc.id,
          userCode: doc.data().userCode
        }))
        return userCodes
      } catch (err) { consle.log(err) }
    }

    const convertToUserCode = async (array) => {
      try {
          const userCodes = await fetchUserCodes();
          const convertedArray = array.map((studentCode) => {
              const match = userCodes.find((item) => item.studentCode === studentCode)
              if (match && match.userCode) { 
                  return match.userCode;
              } else {
                  return null; 
              }
          }).filter(code => code !== null); 
  
          return convertedArray;
      } catch (err) {
          console.error(err);
          return []; 
      }
  };


    const sortStudentsByVouched = async () => {
      const DEVarray = []
      const PMarray = []
      const UIUXarray = []
      let NOROLEarray = []
      NOROLEarray = (await convertToUserCode(studentList.map(student => student.id)));

      results.forEach((student) => {
        student.vouches.forEach((vouch) => {
          switch (vouch.role) {
            case "DEV":
              if (!DEVarray.includes(vouch.id)) {
                DEVarray.push(vouch.id);
                NOROLEarray.pop(vouch.id)
              }
              break;
            case "PM":
              if (!PMarray.includes(vouch.id)) {
                PMarray.push(vouch.id);
                NOROLEarray.pop(vouch.id)
              }
              break;
            case "UI/UX1":
            case "UI/UX2":
              if (!UIUXarray.includes(vouch.id)) {
                UIUXarray.push(vouch.id);
                NOROLEarray.pop(vouch.id)
              }
              break;
          }
        });
      });

      const DEV = await convertToUserCode(DEVarray, 'DEV')
      const PM = await convertToUserCode(PMarray, 'PM')
      const UIUX = await convertToUserCode(UIUXarray, 'UIUX')
      return [DEV, PM, UIUX, NOROLEarray]
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