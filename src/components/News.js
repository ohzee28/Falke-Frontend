import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import Article from "./Article";

const News = ({ articles }) => {

    return (
        <div className="news">
            <div className="articles">
                {articles && articles.map((articles) => (
                    <Link to={`/articles/${articles._id}`}>
                        <p key={articles._id}>{articles.headline}</p>
                        <img src={articles.image} alt="Foto" />
                        {/* <Article articles={articles} /> */}
                    </Link>
                ))}
            </div>
        </div>
    )
}

export default News