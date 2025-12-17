import { useEffect, useState } from "react";

export default function AdminDashboard() {
  const [issues,setIssues]=useState([]);

  useEffect(()=>{
    fetch("http://localhost:5000/api/issues")
      .then(res=>res.json())
      .then(data=>setIssues(data));
  },[]);

  return (
    <div className="container">
      <h2>Admin Dashboard</h2>
      {issues.map((i)=>(
        <div key={i._id}>
          <p><b>{i.studentName}</b>: {i.description}</p>
          <p>Status: {i.status}</p>
        </div>
      ))}
    </div>
  );
}
