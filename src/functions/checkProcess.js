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

const handleCheckVouchRoom = async (roomCode, userCode) => {

  const handleGetUserDocId = async (roomCode, userCode) => {
    const collectionRef = collection(db, roomCode);
    const querySnapshot = await getDocs(collectionRef);
    const userDoc = querySnapshot.docs.find(doc => doc.data().userCode === userCode);
    if (userDoc) {
      return userDoc.id;
    }
    return null;
  };

  try {
    const userDocId = await handleGetUserDocId(roomCode, userCode);
    if (userDocId) {
      return userDocId; // User found
    } else {
      return false; // User not found
    }
  } catch (error) {
    console.error("Error checking document:", error);
    return false;
  }
};

const handleMutualMember = async (roomCode, userCode) => {

  try {
      const subcollectionFetch = collection(db, roomCode, userCode, 'mutuals');
      const querySnapshotFetch = await getDocs(subcollectionFetch);

      const membersWithRole = querySnapshotFetch.docs.map((doc) => ({
          roleIndex: doc.data().roleIndex,
          userCode: doc.id
      }));
      const mutuals = await Promise.all(
          membersWithRole.map(async (member) => {
              try {
                  const mutualsSubcollection = collection(db, roomCode, member.userCode, 'mutuals');
                  const querySnapshotMutuals = await getDocs(mutualsSubcollection);

                  const isMutual = querySnapshotMutuals.docs.some(doc => doc.id === userCode);
                  return {
                      userCode: member.userCode,
                      roleIndex: member.roleIndex,
                      mutual: isMutual
                  };
              } catch (error) {
                  console.error("Error getting mutuals:", error);
                  return { userCode: member.userCode, roleIndex: member.roleIndex, mutual: false };
              }
          })
      );

      console.log(mutuals)
      return mutuals;

  } catch (error) {
      console.error("Error getting documents: ", error);
  }
};

const handleCheckMutal = async (roomCode, userCode) => {

  const handleGetUserDocId = async (roomCode, userCode) => {
      const collectionRef = collection(db, roomCode);
      const querySnapshot = await getDocs(collectionRef);
      const userDoc = querySnapshot.docs.find(doc => doc.data().userCode === userCode);
      if (userDoc) {
          return userDoc.id;
      }
      return null;
  };

  try {
      const userDocId = await handleGetUserDocId(roomCode, userCode);
      if (userDocId) {
          return userDocId; // User found
      } else {
          return false; // User not found
      }
  } catch (error) {
      console.error("Error checking document:", error);
      return false;
  }
};

export {
  fetchRoomList,
  handleCheckVouchRoom,
  handleMutualMember,
  handleCheckMutal
}