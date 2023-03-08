import "./KidsclubStyles.css"
import { useEffect } from "react"
import { Link } from "react-router-dom";

function Kidsclub() {

    useEffect(() => {
        window.scrollTo(0, 0);
    }, []);

    return (
        <>
            <div className="impressum-container">
                <h1>Kidsclub</h1>
                <h2>Hier findet Ihr alle Infos zu unseren Jugendteams</h2>
                
                <p>
                </p>
                
            </div>
            <p></p>
            <Link to="/">
                <button className="button">Homepage</button>
            </Link>
            <p></p>
        </>

    )

}


export default Kidsclub