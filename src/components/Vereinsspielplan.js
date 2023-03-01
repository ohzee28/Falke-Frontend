import { useEffect } from "react"

export default function Vereinsspielplan() {

    useEffect(() => {
        const script = document.createElement('script');
        script.src = "https://www.fussball.de/static/layout/fbde2/egm//js/widget2.js"
        script.async = true;
        document.body.appendChild(script);

        console.log(script)

        return () => {
            document.body.removeChild(script);
        }
    }, [])



    return <><h1>Vereinsspielplan</h1>
        <div id="widget1"></div>

        {/* {new fussballdeWidgetAPI().showWidget('widget1', '02L2H8AF48000000VUM1DNPHVUOHQJP4')} */}
        {/* <div id="widget1"></div>
        <script type="text/javascript">
            new fussballdeWidgetAPI().showWidget('widget1', '02L2H8AF48000000VUM1DNPHVUOHQJP4');
        </script>; */}
    </>
}