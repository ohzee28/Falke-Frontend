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
        <div>
            <h1>News Artikel</h1>
            {thisArticle.headline}
        </div>
    ) : "not found";
}

export default Article;