import { doc, setDoc, Timestamp } from 'firebase/firestore';
import { db } from "../firebase";

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

const createCollection = async () => {
    const creationDate = Timestamp.now();

    try {
        const code = generateCode();
        const docRef = doc(db, code, 'date');
        await setDoc(docRef, { creationDate: creationDate });
        addCodeToList(code)
        alert('Collection created ' + code);

    } catch (err) {
        alert(err);
    }
};

export { createCollection };