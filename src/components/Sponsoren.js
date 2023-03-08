import "./ShopStyles.css"
import { useEffect } from "react"
import { Link } from "react-router-dom";

function Sponsoren() {

    useEffect(() => {
        window.scrollTo(0, 0);
    }, []);

    return (
        <>
            <div className="impressum-container">
                <h1>Sponsoren</h1>
                <h2>Wir bedanken uns herzlich bei allen Sponsoren die uns unterstützen:</h2>

                <p>EMB Energie Mark Brandenburg GmbH</p>
                <p>Ketziner Baustoffhandel
                    Inhaber Thomas Mier</p>
                <p>EDEKA Dorfmann Ketzin</p>
                <p>Priorter Backstübchen</p>
                <p>Glanzfaktor Inhaber Marcus Schulz</p>
                <p>TSB-Trennwandsystembau GmbH</p>
                <p>Adler-Apotheke Ketzin
                    Apotheker Jens Welle</p>
                <p>GDMcom mbH</p>
                <p>FTF – Fahrzeugtechnik Falkenrehde GmbH</p>
                <p>REWE Markt Fleischer</p>
                <p>Malereibetrieb Heiko Kaatz</p>
                <p>Marlis Konrad
                    Malerei und Grafik</p>
                <p>Havelbar Ketzin</p>
                <p>Lackiererei Kockjoy</p>
                <p>Hennebach Reparaturen & Service</p>

            </div>
            <p></p>
            <Link to="/">
                <button className="button">Homepage</button>
            </Link>
            <p></p>
        </>

    )

}


export default Sponsoren