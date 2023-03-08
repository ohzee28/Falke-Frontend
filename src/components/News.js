import { Link } from "react-router-dom";
import FalkeLoader from "./FalkeLoader";
import Article from "./Article";
import { useEffect } from "react"

const News = ({ articles }) => {

    useEffect(() => {
        window.scrollTo(0, 0);
    }, []);

    function compare(a, b) {
        if (new Date(b.date).getTime() < new Date(a.date).getTime()) {
            return -1;
        }
        if (new Date(b.date).getTime() > new Date(a.date).getTime()) {
            return 1;
        }
        return 0;
    }

    const sortedArticles = articles.sort(compare)

    return articles.length && sortedArticles.length ? (
        <div className="news margin-top">
            <div className="articles">
                {articles &&
                    sortedArticles.map((articles) => (
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
