import React from 'react';
import './navbar.scss';
import { Link } from 'react-router-dom';

const Navbar = () => {
  return <div className='navbar'>
      <div className="left">
       <h2><span style={{color: "Red", fontFamily: "monospace"}}>OYE</span><span style={{color: "#fff"}}>FLIX</span></h2>
      </div>
      <div className="right">
        <ul>
            <Link style={{textDecoration: "none", color: "#fff"}} to="/"><li>Home</li></Link>
            <Link style={{textDecoration: "none", color: "#fff"}} to="/profile"><li>About</li></Link>
            <Link style={{textDecoration: "none", color: "#fff"}} to="/users"><li>Movies</li></Link>
        </ul>
      </div>
  </div>;
};

export default Navbar;
