import "./HistorieStyles.css"
import { useEffect } from "react"
import { Link } from "react-router-dom";

function Historie() {

    useEffect(() => {
        window.scrollTo(0, 0);
    }, []);

    return (
        <>
            <div className="historie-container">
                <h1>Geschichte</h1>
                <h2>Gründung 1995</h2>
                <p>Nach der Gründungsversammlung im Juni und der darauffolgenden Eintragung in das Vereinsregister am 21.11.1995 entstand durch den Zusammenschluss der Vorgängerverereine "SG 1962 Falkenrehde" und der "BSG Lokomotive Ketzin" der FSV 1995 Ketzin/Falkenrehde e.V.
                </p>
                <h2>Früher Erfolg</h2>
                <p>Der bislang größte Erfolg ist der Aufstieg der Ersten Männermannschaft aus der Landesliga in die Brandenburgliga im Jahr 1996. Vier Jahre konnte man sich in der höchsten Spielklasse in Brandenburg halten. In der Saison 1999/2000 erfolgte dann der Abstieg in die Landesliga.</p>
                <h2>Seit 2016 in der Kreisliga</h2>
                <p>Nachdem man lange Zeit in den 00er Jahren in der Landesklasse verbracht hat ging es danach bis in die Kreisklasse. Durch 2 aufeinanderfolgene Aufstiege spielt die Erste Männermannschaft seit der Saison 2016/2017 durchgehend in der Kreisliga A Havelland. In der Saison 2021/2022 schaffte man es lange an der Tabellenspitze zu stehen und landete am Ende auf dem 3. Tabellenplatz.</p>
            </div>

            <p></p>
            <Link to="/">
                <button className="button">Homepage</button>
            </Link>
            <p></p>

        </>
    )

}


export default Historie