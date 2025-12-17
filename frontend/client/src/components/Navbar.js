import React from "react";
import { Link } from "react-router-dom";

function Navbar() {
  return (
    <div className="navbar">
      <h2>HelpDesk</h2>

      <div>
        <Link to="/">Home</Link>
        <Link to="/student-login">Student Login</Link>
        <Link to="/student-register">Student Register</Link>
        <Link to="/admin-login">Admin Login</Link>
      </div>
    </div>
  );
}

export default Navbar;
