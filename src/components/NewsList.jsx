import { useState, useEffect } from "react";
import NewsArticle from "./NewsArticle";

const NewsList = () => {
  const [news, setNews] = useState({ articles: [] });

  useEffect(() => {
    fetch(
      "https://newsapi.org/v2/everything?q=apple&sortBy=publishedAt&language=de&apiKey=b84a8c15c511430e8129c81d6bf6f788"
    )
      .then((response) => response.json())
      .then((data) => setNews(data));
  }, []);

  console.log(news);

  return (
    <section className="flexcontainer">
      {news.articles.map((item, i) => {
        return (
          <div key={i}>
            <NewsArticle
              urlToImage={item.urlToImage}
              name={item.source.name}
              title={item.title}
              description={item.description}
              allArticles={item}
            />
          </div>
        );
      })}
    </section>
  );
};

export default NewsList;
