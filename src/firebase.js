import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";

const firebaseConfig = {
  apiKey: "AIzaSyAGqD9Lvy5ekuc0EBPDLn4WyNQguSSjjXg",
  authDomain: "capstone-grouping-system.firebaseapp.com",
  projectId: "capstone-grouping-system",
  storageBucket: "capstone-grouping-system.firebasestorage.app",
  messagingSenderId: "664965385969",
  appId: "1:664965385969:web:34b8ee66f7ac11422fa350"
};

const app = initializeApp(firebaseConfig);
const db = getFirestore(app)

export { db }