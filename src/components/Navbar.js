import React from "react";
import {Link} from "react-router-dom";

export default function Navbar() {
    return <nav className="nav">
        <a href="/" className="fsvfalke95">FSVFALKE95</a>
        <ul>
            <li className="active"><Link to="/news">NEWS</Link></li>
            <li className="active"><Link to="/teams">TEAMS</Link></li>
            <li className="active"><Link to="/vereinsspielplan">VEREINSSPIELPLAN</Link></li>
            <li className="active"><Link to="/kidsclub">KIDSCLUB</Link></li>
            <li className="active"><Link to="/anfahrt">ANFAHRT</Link></li>
            <li className="active"><Link to="/verein">VEREIN</Link></li>
            <li className="active"><Link to="/links">LINKS</Link></li>
        </ul>
    </nav>
}


