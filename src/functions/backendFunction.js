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

const addStudentsToList = async (code) => {
    studentList.map(async (item) => {
        const docRef = doc(db, code, item.studentName);
        await setDoc(docRef, { 
            id: item.id,
            userCode: `User-${Math.floor(1000 + Math.random() * 9000)}`,
            roleIndex: '',
            isVouched: false
        });
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
        return code
    } catch (err) {
        alert(err);
    }
};

export { 
    createCollection,
};