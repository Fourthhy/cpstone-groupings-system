import { doc, setDoc, Timestamp } from 'firebase/firestore';
import { db } from "../firebase";
import studentList from "../json/studentList.json"

const generateCode = () => {
    const code = Math.floor(100000 + Math.random() * 900000).toString();
    return code;
};

const addCodeToList = async (code) => {
    const creationDate = Timestamp.now();
    try {
        const docRef = doc(db, 'roomList', code);
        await setDoc(docRef, { roomCode: code, timestamp: creationDate });
    } catch (err) {
        alert(err);
    }
}

const studentSubcollection = async (code, studentName) => {
    const creationDate = Timestamp.now();
    const subcollectionRef = doc(db, code, studentName, 'mutuals', 'date');
    await setDoc(subcollectionRef, { creationDate: creationDate });
}

const addStudentsToList = async (code) => {
    studentList.map(async (item) => {
        const docRef = doc(db, code, item.studentName);
        await setDoc(docRef, { 
            id: item.id,
            userCode: `User-${Math.floor(Math.random() * 1000)}`,
            role: ''
        });
        studentSubcollection(code, item.studentName)
    })
}

const createCollection = async () => {
    const creationDate = Timestamp.now();
    try {
        const code = generateCode();
        const docRef = doc(db, code, 'date');
        await setDoc(docRef, { creationDate: creationDate });
        addCodeToList(code)
        addStudentsToList(code)
        alert('Collection created ' + code);
        return code
    } catch (err) {
        alert(err);
    }
};

export { 
    createCollection,
};