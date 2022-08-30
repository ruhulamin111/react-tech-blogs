import React from "react";
import Logo from "../../Assets/Image/logo.png";
import "./Navbar.css";
import { NavLink } from "react-router-dom";


const Navbar = () => {
  const style = ({ isActive }) => {
    return {
      color: isActive ? '#1b4388' : '',
    }
  }

  return (
    <nav>
      <div className='logo-container'>
        <img src={Logo} alt='' />
      </div>
      <div className='link-container'>
        <NavLink style={style} className='link' to='/home'>Home</NavLink>
        <NavLink style={style} className='link' to='/videos'>Videos</NavLink>
        <NavLink style={style} className='link' to='/login'>Login</NavLink>
      </div>
    </nav >
  );
};

export default Navbar;
