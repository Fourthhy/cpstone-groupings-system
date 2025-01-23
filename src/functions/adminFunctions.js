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
      } catch (err) {consle.log(err)}
    }

    const convertToUserCode = async (array, arrayName) => {
      try {
        const userCodes = await fetchUserCodes();
        const convertedArray = array.map((studentCode) => {
          const match = userCodes.find((item) => item.studentCode === studentCode)
          if (match) {
            // console.log(arrayName + '' + match.userCode)
            return match.userCode
          } else { null }
        })

        return convertedArray
        
      } catch (err) {
        console.error(err);
        return []; // Return an empty array in case of an error
      }
    };

    const sortStudentsByVouched = () => {
      const DEVarray = []
      const PMarray = []
      const UIUXarray = []
      const NOROLEarray = []

      results.forEach((student) => {
        if (student.vouches.length == 0 ) {
          if(!NOROLEarray.includes(student.id)) {
            NOROLEarray.push(student.id)
          }
        }
        student.vouches.forEach((vouch) => {
          switch (vouch.role) {
            case "DEV":
              if (!DEVarray.includes(vouch.id)) {
                DEVarray.push(vouch.id)
              }
              break;
            case "PM":
              if (!PMarray.includes(vouch.id)) {
                PMarray.push(vouch.id)
              }
              break;
            case "UI/UX1":
              if (!UIUXarray.includes(vouch.id)) {
                UIUXarray.push(vouch.id)
              }
              break;
            case "UI/UX2":
              if (!UIUXarray.includes(vouch.id)) {
                UIUXarray.push(vouch.id)
              }
              break;
          }
        })
      })

      const conversion = async () => {
        try {
          const DEV = await convertToUserCode(DEVarray, 'DEV')
          const PM = await convertToUserCode(PMarray, 'PM')
          const UIUX = await convertToUserCode(UIUXarray, 'UIUX')
          const NOROLE = await convertToUserCode(NOROLEarray, 'NOROLE')
          return [DEV, PM, UIUX, NOROLE]  
        } catch (err) { console.log(err) }
      }
      return conversion()
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