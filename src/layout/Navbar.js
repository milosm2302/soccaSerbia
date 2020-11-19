import React from 'react';
import { Link } from 'react-router-dom';
import './Navbar.css';
import Logo from '../img/logo.png'

 const Navbar = () => {
   console.log()
    return (
      <nav>
        <div className="logo">
         <Link to={"/"}> <img src={Logo} alt="LogoSocca"/></Link>
        </div>
        <div className="links">
          <ul>
            <li><Link to={"/"}>Home</Link></li>
            <li><Link to={"/standings"}>Standings</Link></li>
            <li><Link to={"/about"}>About</Link></li>
            <li><Link to={"/contact"}>Contact</Link></li>
            </ul>
        </div>
         
      </nav>
    )
}
export default Navbar
