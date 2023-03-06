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
        <div>
            <Hero />

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

            <ul>
                <li className="active">
                    <Link to="/news">NEWS</Link>
                </li>
                <li className="active">
                    <Link to="/teams">TEAMS</Link>
                </li>
                <li className="active">
                    <Link to="/vereinsspielplan">VEREINSSPIELPLAN</Link>
                </li>
                <li className="active">
                    <Link to="/kidsclub">KIDSCLUB</Link>
                </li>
                <li className="active">
                    <Link to="/anfahrt">ANFAHRT</Link>
                </li>
                <li className="active">
                    <Link to="/sponsoren">SPONSOREN</Link>
                </li>
                <li className="active">
                    <Link to="/shop">SHOP</Link>
                </li>
                <li className="active">
                    <Link to="/instagram">INSTAGRAM</Link>
                </li>
                <li className="active">
                    <Link to="/historie">HISTORIE</Link>
                </li>
                <li className="active">
                    <Link to="/vorstand">VORSTAND</Link>
                </li>
                <li className="active">
                    <Link to="/links">LINKS</Link>
                </li>
                <li className="active">
                    <Link to="/impressum">IMPRESSUM</Link>
                </li>
            </ul>
        </div>
    ) : (
        <FalkeLoader />
    );
}