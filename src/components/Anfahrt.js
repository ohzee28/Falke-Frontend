import React from "react";
import { Link } from "react-router-dom";

function Anfahrt() {
  return (
    <>
    <div className="map-container margin-top">
      <h2 className="anfahrt-ort">Ketzin</h2>
      <div className="mapouter">
        <div class="gmap_canvas">
          <iframe
            width="585"
            height="500"
            id="gmap_canvas"
            src="https://maps.google.com/maps?q=ketzin,%20friedrich%20ludwig%20jahn%20weg&t=k&z=15&ie=UTF8&iwloc=&output=embed"
            frameborder="0"
            marginheight="0"
            marginwidth="0"
          ></iframe>
        </div>
      </div>
      <h2 className="anfahrt-ort">Falkenrehde</h2>

      <div className="mapouter">
        <div class="gmap_canvas">
          <iframe
            width="585"
            height="500"
            id="gmap_canvas"
            src="https://maps.google.com/maps?q=falkenrede%20sportplatz&t=k&z=15&ie=UTF8&iwloc=&output=embed"
            frameborder="0"
            marginheight="0"
            marginwidth="0"
          ></iframe>
        </div>
      </div>
    </div>

    <p></p>
            <Link to="/">
                <button className="button">Homepage</button>
            </Link>
            <p></p>

    </>
  );
}

export default Anfahrt;
