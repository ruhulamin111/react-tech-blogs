import React from "react";
import Logo from "../../Assets/Image/logo.png";
import "./Navbar.css";

const Navbar = () => {
  return (
    <nav>
      <div className='logo-container'>
        <img src={Logo} alt='' />
      </div>
      <div className='link-container'></div>
    </nav>
  );
};

export default Navbar;
