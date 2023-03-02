import { Link } from "react-router-dom";
import { useEffect } from "react";
import FalkeLoader from "./FalkeLoader";

const Teams = ({ teams }) => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  console.log("teams in teams", teams);

  return teams.length ? (
    <div className="news">
      <div className="articles">
        {teams.length &&
          teams.map((team) => (
            <Link to={`/teamseite/${team._id}`}>
              <p key={team._id}>{team.teamname}</p>
              <div className="teamimage">
                <img src={team.image} alt="Foto" />
              </div>
            </Link>
          ))}
      </div>
    </div>
  ) : (
    <FalkeLoader />
  );
};

export default Teams;
