import React from 'react';
import { NavLink } from "react-router-dom";
import './NavBar.css';

const NavBar= () => {
  return(
    <div>
      <NavLink className="NavLink" to="/">Home</NavLink>
      <NavLink className="NavLink" to="/notre-histoire">History</NavLink>
      <NavLink className="NavLink" to="/about">About</NavLink>
      <NavLink className="NavLink" to="/contact">Contact</NavLink>
    </div>
  );
}

export default NavBar;