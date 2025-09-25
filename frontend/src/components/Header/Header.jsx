import React from "react";
import "./Header.css";

const Header = () => {
  return (
    <div className="header">
      <div className="header-contents">
        <h2>Order your favourite food here</h2>
        <p>
          Welcome to our restaurant app! Explore our wide range of delicious
          dishes, browse through the menu, and choose your favorite meals with
          just a few taps. Customize your order the way you like and enjoy a
          smooth, hassle-free dining experience.
        </p>
        <button>View Menu</button>
      </div>
    </div>
  );
};

export default Header;
