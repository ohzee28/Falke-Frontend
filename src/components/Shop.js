import "./ShopStyles.css"
import { useEffect } from "react"
import { Link } from "react-router-dom";

function Shop() {

    useEffect(() => {
        window.scrollTo(0, 0);
    }, []);

    return (
        <>
            <div className="impressum-container">
                <h1>FSVFALKE95-Shop</h1>
                <h2>Der Shop befindet sich noch im Aufbau</h2>
                
                <p>Wenn ihr Interesse an unseren Fanartikeln habt, kommt zu den Heimspielen und sprecht unsere Verkäuferinnen im Verkauf an.
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


export default Shop