import "./VorstandStyles.css"
import { useEffect } from "react"
import { Link } from "react-router-dom";

function Vorstand() {

    useEffect(() => {
        window.scrollTo(0, 0);
    }, []);

    return (
        <>
            <div className="historie-container">
                <h1>Vorstand</h1>
                <h2>Aktuelle Mitglieder</h2>
                <p>Vorstandsvorsitzender: Sebastian Schläger</p>
                <p>2. Vorsitzender: Frank Recknagel</p>
                <p>Männer: Donald Schwarz</p>
                <p>Senioren: Uwe Liebig</p>
                <p>Junioren: Immo Röschke</p>
            </div>

            <p></p>
            <Link to="/">
                <button className="button">Homepage</button>
            </Link>
            <p></p>

        </>
    )

}


export default Vorstand