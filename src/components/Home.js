export default function Homepage({ articles }) {
  console.log("articles in home", articles);

  const sortedArticles =
    articles.length && articles.sort((a, b) => b.date - a.date);

  const latestArticle = sortedArticles[0];

  console.log("sortedArticles", sortedArticles);
  return <h1>Homepage</h1>;
}
