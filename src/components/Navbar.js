import React from "react";
import { Link } from "react-router-dom";
import logo from "../images/Logo Falke 1.png";

export default function Navbar() {
    return <nav className="nav">
        
        <Link to="/">
        <img className="falkelogo" src={logo} alt="Logo" />
      </Link>

        {/*<a><img href="/" className="falkelogo" src={logo} alt="Logo" /></a> */}
        {/* <img href="/" className="falkelogo" src={logo} alt="Logo" /> */} 
       {/* <a href="/" className="fsvfalke95">FSVFALKE95</a>  */} 
        <ul>
            <li className="active"><Link to="/news">NEWS</Link></li>
            <li className="active"><Link to="/teams">TEAMS</Link></li>
            <li className="active"><Link to="/vereinsspielplan">VEREINSSPIELPLAN</Link></li>
            <li className="active"><Link to="/anfahrt">ANFAHRT</Link></li>
            <li className="active"><Link to="/instagram">INSTAGRAM</Link></li> 
            <li className="active"><Link to="/links">LINKS</Link></li>
        </ul>
    </nav>
}


