import studentList from "../json/studentList.json"
import { createCollection } from "./backendFunction";
export default function Auto() {

  return (
    <div>
      <button onClick={createCollection} className="border-black border-[1px]">Click to Create Collection</button>
      {studentList.map((name) => (
        <div style={{display: 'flex'}}>
            <p className="font-bold"> {atob(name.studentName)} </p>
            {/* <p> &nbsp; Random User Code: User-{Math.floor(Math.random() * 1000)} </p> */}
        </div>
      ))}
    </div>
  );
}
