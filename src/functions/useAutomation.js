import { doc, setDoc } from 'firebase/firestore';
import { db } from "../firebase";

const  useAutomation = async () => {
    try {
        const docRef = doc(db, 'sample collection', 'parent');
        await setDoc(docRef, {});
        console.log('collection created')
    } catch (err) {
        setError(err);
    }
};


export { useAutomation }