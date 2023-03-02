import { Link } from "react-router-dom";
import FalkeLoader from "./FalkeLoader";
import Article from "./Article";

const News = ({ articles }) => {
  return articles.length ? (
    <div className="news">
      <div className="articles">
        {articles &&
          articles.map((articles) => (
            <Link to={`/articles/${articles._id}`}>
              <p key={articles._id}>{articles.headline}</p>
              <div className="articleimage">
                <img src={articles.image} alt="Foto" />
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
