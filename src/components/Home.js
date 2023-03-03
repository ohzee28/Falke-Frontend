import { useEffect } from "react"
import { Link } from "react-router-dom";
import FalkeLoader from "./FalkeLoader";
import Article from "./Article";

export default function Homepage({ articles }) {
    useEffect(() => {
        window.scrollTo(0, 0);
    }, []);

    console.log("articles in home", articles);

    const sortedArticles =
        articles.length && articles.sort((a, b) => b.date - a.date);

    const latestArticle = sortedArticles[0];

    console.log("sortedArticles", sortedArticles);


    return articles.length ? (
        <section>
            <div>HERO // STATISCHES BILD</div>
            <div className="latest-news">
                <div><img src={articles[3].image} /></div>
                <div><img src={articles[2].image} /></div>
                <div><img src={articles[1].image} /></div>
            </div>



            <ul>
                <li className="active"><Link to="/news">NEWS</Link></li>
                <li className="active"><Link to="/teams">TEAMS</Link></li>
                <li className="active"><Link to="/vereinsspielplan">VEREINSSPIELPLAN</Link></li>
                <li className="active"><Link to="/kidsclub">KIDSCLUB</Link></li>
                <li className="active"><Link to="/anfahrt">ANFAHRT</Link></li>
                <li className="active"><Link to="/sponsoren">SPONSOREN</Link></li>
                <li className="active"><Link to="/shop">SHOP</Link></li>
                <li className="active"><Link to="/instagram">INSTAGRAM</Link></li>
                <li className="active"><Link to="/historie">HISTORIE</Link></li>
                <li className="active"><Link to="/vorstand">VORSTAND</Link></li>
                <li className="active"><Link to="/links">LINKS</Link></li>
                <li className="active"><Link to="/impressum">IMPRESSUM</Link></li>
            </ul>
        </section>
    ) : <FalkeLoader />
    console.log(articles);

}
