import { useState } from "react";
import { useNavigate } from "react-router-dom";

export default function AdminLogin() {
  const [data,setData]=useState({});
  const nav=useNavigate();

  const login=async()=>{
    const res=await fetch("http://localhost:5000/api/admin/login",{
      method:"POST",
      headers:{"Content-Type":"application/json"},
      body:JSON.stringify(data)
    });
    if(res.ok){
      localStorage.setItem("admin","true");
      nav("/admin-dashboard");
    }else alert("Invalid admin");
  };

  return (
    <div className="container">
      <h2>Admin Login</h2>
      <input placeholder="Email" onChange={e=>setData({...data,email:e.target.value})}/>
      <input placeholder="Password" type="password" onChange={e=>setData({...data,password:e.target.value})}/>
      <button onClick={login}>Login</button>
    </div>
  );
}
