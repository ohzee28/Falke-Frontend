import { Link } from "react-router-dom";
import FalkeLoader from "./FalkeLoader";
import Article from "./Article";
import { useEffect } from "react"

const News = ({ articles }) => {

    useEffect(() => {
        window.scrollTo(0, 0);
    }, []);

    return articles.length ? (
        <div className="news margin-top">
            <div className="articles">
                {articles &&
                    articles.map((articles) => (
                        <Link to={`/articles/${articles._id}`}>
                            <div className="article-container">
                                <p key={articles._id}>{articles.headline}</p>
                                <img className="news-image" src={articles.image} alt="Foto" />
                                {/* <Article articles={articles} /> */}
                            </div>
                        </Link>
                    ))}
            </div>
        </div>
    ) : (
        <FalkeLoader />
    );
};

export default News;
