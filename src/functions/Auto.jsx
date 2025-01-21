import studentList from "../json/studentList.json"
import { useAutomation } from "./useAutomation";
export default function Auto() {

  return (
    <div>
      <button onClick={useAutomation} style={{border: 'black', backgroundColor: 'white'}}>Click to Create Collection</button>
      {studentList.map((name) => (
        <div style={{display: 'flex'}}>
            <p> {atob(name.studentName)} </p>
            <p> &nbsp; Random User Code: User-{Math.floor(Math.random() * 1000)} </p>
        </div>
      ))}
    </div>
  );
}
