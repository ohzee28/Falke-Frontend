import React from "react";
import { useParams, Link } from 'react-router-dom';

function TeamSeite({ teams }) {
    const { id } = useParams();

    const thisTeam =
        teams && teams.length && teams.find((e) => e._id == id);
    console.log('this teams', thisTeam);
    // console.log(useParams())
    console.log(thisTeam);

    return thisTeam ? (
        <div className="teamcontainer">
            <div className="teamname">
                <h2>{thisTeam.teamname}</h2>
            </div>
            <div className="teamfoto">
                <img src={thisTeam.image} alt="Foto" />
            </div>
            <Link to="/teams">
                <button className="button">Zurück zur Teamübersicht</button>
            </Link>
        </div>

    ) : "not found";
}

export default TeamSeite;