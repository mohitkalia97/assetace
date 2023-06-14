import React from "react";
import "../assets/styles/navbar.css";

function Logout() {
  const handleLogout = () => {
    localStorage.removeItem("token");
    alert("Successfully logged out.");
    window.location.replace("/");
  };

  return (
    <li className="nav-item" onClick={handleLogout}>
        Logout
    </li>
  );
}
export default Logout;
