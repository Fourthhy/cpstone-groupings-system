import { useState, useEffect } from 'react';
import { doc, setDoc } from 'firebase/firestore';
import { db } from "../firebase";
import studentList from "../json/studentList.json"

function Auto() {

  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState(null);

  const handleEffect = () => {
    useEffect(() => {
        const createParentDocument = async () => {
          setIsLoading(true);
          try {
            const docRef = doc(db, 'i2374112', 'parent');
            await setDoc(docRef, {}); // Create an empty document
            setIsLoading(false); 
            console.log('collection created')
          } catch (err) {
            setError(err);
            setIsLoading(false); 
          }
        };
    
        createParentDocument(); 
      }, []); 
  }

const encodeName = (name) => {
    return btoa(name);
}

const decodeName = (name) => {
    return atob(name);
}

const encodedName = encodeName(name);
const decodedName = decodeName(encodedName);

let container;

  return (
    <div>
      {/* <button onClick={handleEffect} style={{border: 'black', backgroundColor: 'white'}}>Click to Create Collection</button> */}
      {studentList.map((name) => (
        <div style={{display: 'flex'}}>
            {/* <p key={name.id}> {container = encodeName(name)} </p> */}
            <p> {decodeName(name.studentName)} </p>
            <p> &nbsp; Random User Code: User-{Math.floor(Math.random() * 1000)} </p>
        </div>
      ))}
    </div>
  );
}

export default Auto;
