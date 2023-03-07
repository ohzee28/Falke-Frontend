import "./ImpressumStyles.css"
import { useEffect } from "react"
import { Link } from "react-router-dom";

function Impressum() {

    useEffect(() => {
        window.scrollTo(0, 0);
    }, []);

    return (
        <>
            <div className="impressum-container">
                <h1>Impressum</h1>
                <h2>FSV ’95 Ketzin/Falkenrehde e.V.</h2>
                <h3>Der Vorstand</h3>
                <p>Zwei Vorstandsmitglieder sind gemeinschaftlich vertretungsbefugt:
                    Uwe Liebig, Frank Recknagel (1.Vors.), Sebastian Schläger (2. Vors.), Donald Schwarz, Corinna Stackebrandt
                </p>
                <h3>Postanschrift: Paretzer Weg 17, 14669 Ketzin/Havel</h3>
                <h3>Telefon: 033233/18464</h3>
                <h3>Vereinsregister: Amtsgericht Potsdam VR 5350</h3>
                <h3>Sitz des Vereins: Friedrich-Ludwig-Jahn-Weg 32, 14669 Ketzin/Havel</h3>
                <h3>Verantwortlicher i.S.d. § 55 Abs. 2 RStV Frank Recknagel, Paretzer Weg 17, 14669 Ketzin/Havel</h3>
                <h3>Anbieterkennzeichnung nach § 5 TMG</h3>
                <h3>Dieses Impressum gilt auch für die offiziellen Seiten in sozialen Medien</h3>
                <h3>Soweit auf unserer Seite links zu anderen Seiten führen, haften wir nicht für deren Rechtswidrigkeit. Wir prüfen die links sorgfältig, bevor wir sie setzen, aber für deren Veränderung nach dem Veröffentlichungsdatum können wir nicht garantieren.</h3>
                <h3>Verantwortlich für die Erstellung dieser Website: Oliver Zöllner</h3>
                <p></p>
            </div>
            <p></p>
            <Link to="/">
                <button className="button">Homepage</button>
            </Link>
            <p></p>
        </>

    )

}


export default Impressum