import studentList from "../json/studentList.json"
import { useAutomation } from "./backendFunction";
export default function Auto() {

  return (
    <div>
      <button onClick={useAutomation} className="border-black border-[1px]">Click to Create Collection</button>
      {studentList.map((name) => (
        <div style={{display: 'flex'}}>
            <p> {atob(name.studentName)} </p>
            <p> &nbs p; Random User Code: User-{Math.floor(Math.random() * 1000)} </p>
        </div>
      ))}
    </div>
  );
}
