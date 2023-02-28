import { useEffect, useState } from "react";
import { Link } from "react-router-dom";


const News = () => {
    const [articles, setArticles] = useState(null)

    useEffect(() => {
        const fetchArticles = async () => {
            const response = await fetch('https://falkebackend.onrender.com/articles')
            const json = await response.json()
            console.log(articles)
            if (response.ok) {
                setArticles(json)
            }

        }
        fetchArticles()
    }, [])

    return (
        <div className="news">
            <div className="articles">
                {articles && articles.map((articles) => (
                <Link to={`/articles/${articles._id}`}> 
                <p key={articles._id}>{articles.headline}</p> 
                <img src={articles.image} alt="Foto"/>
                </Link>
                ))}
            </div>
        </div>
    )
}

export default News