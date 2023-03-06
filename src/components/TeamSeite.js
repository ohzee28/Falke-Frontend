import React, { useEffect } from "react";
import { useParams, Link } from "react-router-dom";
import FalkeLoader from "./FalkeLoader";

function TeamSeite({ teams }) {
    useEffect(() => {
        window.scrollTo(0, 0);
    }, []);

    const { id } = useParams();

    const thisTeam = teams && teams.length && teams.find((e) => e._id == id);

    useEffect(() => {
        const script = document.createElement("script");
        script.type = "text/javascript";
        script.src =
            "https://www.fussball.de/static/layout/fbde2/egm//js/widget2.js";
        script.async = true;
        document.head.appendChild(script);

        return () => {
            document.head.removeChild(script);
        };
    }, []);

    useEffect(() => {
        const intervalId = setInterval(() => {
            if (typeof fussballdeWidgetAPI !== "undefined") {
                clearInterval(intervalId);
                thisTeam &&
                    thisTeam.websitekeys.length &&
                    thisTeam.websitekeys.map((el, index) => {
                        console.log("key", el);
                        return new window.fussballdeWidgetAPI().showWidget(
                            `widget${index + 1}`,
                            `${el}`
                        );
                    });
            }
        }, 100);
    }, []);

    return thisTeam ? (
        <div className="teamcontainer">
            <div id="widget1"></div>
            {thisTeam.websitekeys.length > 1 ? <div id="widget2"></div> : ""}
            <div className="teamname">
                <h2>{thisTeam.teamname}</h2>
            </div>
            <div className="teamfoto">
                <img className="teamimage" src={thisTeam.image} alt="Foto" />
            </div>

            <Link to="/teams">
                <button className="button">Zurück zur Teamübersicht</button>
            </Link>
        </div>
    ) : (
        <FalkeLoader />
    );
}

export default TeamSeite;
