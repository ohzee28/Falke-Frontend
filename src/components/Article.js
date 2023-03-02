import React from "react";
import { useParams, Link } from 'react-router-dom';

function Article({ articles }) {
    const { id } = useParams();

    const thisArticle =
        articles && articles.length && articles.find((e) => e._id == id);
    console.log('this article', thisArticle);
    // console.log(useParams())
    // console.log(articles);

    return thisArticle ? (
        <div className="articlecontainer">
            <div className="articleheadline">
                <h2>{thisArticle.headline}</h2>
            </div>
            <div className="articlefoto">
                <img src={thisArticle.image} alt="Foto" />
            </div>
            <div className="articlebody">
                {thisArticle.body}
            </div>
            <div className="articleauthor">
                {thisArticle.author}
            </div>
            <Link to="/news">
                <button className="button">Zurück zur Newsseite</button>
            </Link>
        </div>

    ) : "not found";
}

export default Article;