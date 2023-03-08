import { useEffect } from "react";
import { Link } from "react-router-dom";
import FalkeLoader from "./FalkeLoader";
import Hero from "./Hero";

export default function Homepage({ articles }) {
    useEffect(() => {
        window.scrollTo(0, 0);
    }, []);

    console.log("articles in home", articles);

    //1. filtern, welche Artikel ein Bild haben
    const filteredArticles =
        articles.length &&
        articles.filter((article) => article["image"] !== undefined);

    console.log("filtered articles", filteredArticles);

    //2. Artkel sortieren
    const sortedArticles =
        filteredArticles.length &&
        filteredArticles
            .slice()
            .sort((a, b) => new Date(b.date).getTime() - new Date(a.date).getTime());

    return articles.length && sortedArticles.length ? (
        <div className="home-container">
            <Hero />
            <p className="news-headline-home">FALKE NACHRICHTEN</p>
            <div className="latest-news-container">
            
                <div className="latest-news-card">
                    <img
                        className="latest-news-img"
                        src={sortedArticles[0].image}
                        alt={sortedArticles[0].headline}
                    />
                    <Link to={`/articles/${sortedArticles[0]._id}`}>
                        <h3>{sortedArticles[0].headline}</h3>{" "}
                    </Link>
                </div>
                <div className="latest-news-card">
                    <img
                        className="latest-news-img"
                        src={sortedArticles[1].image}
                        alt={sortedArticles[1].headline}
                    />
                    <Link to={`/articles/${sortedArticles[1]._id}`}>
                        <h3>{sortedArticles[1].headline}</h3>
                    </Link>
                </div>{" "}
                <div className="latest-news-card">
                    <img
                        className="latest-news-img"
                        src={sortedArticles[2].image}
                        alt={sortedArticles[2].headline}
                    />{" "}
                    <Link to={`/articles/${sortedArticles[2]._id}`}>
                        <h3>{sortedArticles[2].headline}</h3>
                    </Link>
                </div>{" "}
               
            </div>

            <li className="home-link-container">
                <div className="homelink">
                    <Link to="/news">NEWS</Link>
                </div>
                <div className="homelink">
                    <Link to="/teams">TEAMS</Link>
                </div>
                <div className="homelink">
                    <Link to="/vereinsspielplan">VEREINSSPIELPLAN</Link>
                </div>
                <div className="homelink">
                    <Link to="/kidsclub">KIDSCLUB</Link>
                </div>
                <div className="homelink">
                    <Link to="/anfahrt">ANFAHRT</Link>
                </div>
                <div className="homelink">
                    <Link to="/sponsoren">SPONSOREN</Link>
                </div>
                <div className="homelink">
                    <Link to="/shop">SHOP</Link>
                </div>
                <div className="homelink">
                    <Link to="/instagram">INSTAGRAM</Link>
                </div>
                <div className="homelink">
                    <Link to="/historie">HISTORIE</Link>
                </div>
                <div className="homelink">
                    <Link to="/vorstand">VORSTAND</Link>
                </div>
                <div className="homelink">
                    <Link to="/links">LINKS</Link>
                </div>
                <div className="homelink">
                    <Link to="/impressum">IMPRESSUM</Link>
                </div>
            </li>
        </div>
    ) : (
        <FalkeLoader />
    );
}