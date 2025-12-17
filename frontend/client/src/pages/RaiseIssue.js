import { useState } from "react";

export default function RaiseIssue() {
  const student = JSON.parse(localStorage.getItem("student"));
  const [issue, setIssue] = useState({});

  const submit = async () => {
    await fetch("http://localhost:5000/api/issues/raise", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({
        ...issue,
        studentName: student.name,
        studentEmail: student.email
      })
    });
    alert("Issue submitted");
  };

  return (
    <div className="container">
      <h2>Raise Issue</h2>
      <select onChange={e=>setIssue({...issue,category:e.target.value})}>
        <option>Hostel</option>
        <option>Academics</option>
        <option>Transport</option>
      </select>
      <textarea onChange={e=>setIssue({...issue,description:e.target.value})}/>
      <button onClick={submit}>Submit</button>
    </div>
  );
}
