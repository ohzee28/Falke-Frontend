import { useEffect, useState } from "react";

const News = () => {
    const [articles, setArticles] = useState(null)

    useEffect(() => {
        const fetchArticles = async () => {
            const response = await fetch('https://falkebackend.onrender.com/articles')
            const json = await response.json()

            if (response.ok) {
                setArticles(json)
            }

        }
        fetchArticles()
    }, [])

    return (
        <div className="news">
            <div className="articles">
            {articles && articles.map((article) => (
                <p key={article._id}>{article.headline}</p>
            ))}
            </div>
        </div>
    )
}

export default News