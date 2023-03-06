import React from "react";
import "./HeroStyles.css";
import picture from "../images/Teamkreis.JPG";

function Hero() {
    return (<>

        <div className="hero">
            <img className="hero-image" src={picture} alt="hero-image" />

            <div className="hero-text">
                <p>Willkommen auf der Website des</p>
                <h1>FSV FALKE 95</h1>
            </div>

        </div>

    </>
    )
}

export default Hero;