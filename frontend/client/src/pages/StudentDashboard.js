import { useNavigate } from "react-router-dom";

export default function StudentDashboard() {
  const nav = useNavigate();

  if (!localStorage.getItem("student")) {
    nav("/student-login");
  }

  return (
    <div className="container">
      <h2>Student Dashboard</h2>
      <button onClick={()=>nav("/raise-issue")}>Raise Issue</button>
    </div>
  );
}
