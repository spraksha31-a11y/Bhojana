import React from "react";
import "./Navbar.css";
import { assets } from "../../assets/assets";

const Navbar = () => {
  return (
    <div className="navbar">
      <div className="nav-left">
        <img className="logo" src={assets.logo} alt="" />
        <div className="admin">
          <h1>Admin Panel</h1>
        </div>
      </div>
      <img className="profile" src={assets.profile_image} alt="" />
    </div>
  );
};

export default Navbar;
