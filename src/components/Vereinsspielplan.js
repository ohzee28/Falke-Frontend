import { useEffect } from "react";
import { Link } from "react-router-dom";

export default function Vereinsspielplan() {
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
                new window.fussballdeWidgetAPI().showWidget(
                    "widget1",
                    "02L2H8AF48000000VUM1DNPHVUOHQJP4"
                );
            }
        }, 100);
    }, []);

    return (<><div className="margin-top-extra" id="widget1">

    </div>

        <p></p>
        <Link to="/">
            <button className="button">Homepage</button>
        </Link>
        <p></p>
    </>);




    //   return (
    //     <>
    //       <h1>Vereinsspielplan</h1>
    //       <div id="widget1"></div>
    //       <script
    //         type="text/javascript"
    //         src="https://www.fussball.de/static/layout/fbde2/egm//js/widget1.js"
    //       ></script>
    //       <script type="text/javascript">
    //         new fussballdeWidgetAPI().showWidget('widget1',
    //         '02L2H8AF48000000VUM1DNPHVUOHQJP4');
    //       </script>
    //     </>
    //   );
}
