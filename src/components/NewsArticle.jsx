import { Link } from "react-router-dom";
// _____________________________________

const NewsArticle = (props) => {
  console.log(props);
  return (
    <article className="flex_article">
      <Link to={`/article/${props.id}`} state={props.allArticles}>
        <img src={props.urlToImage} alt="" />
      </Link>
      <article>
        <p>{props.name}</p>
        <Link to={`/article/${props.id}`}>
          <h3>{props.title}</h3>
        </Link>
        <p>{props.description}</p>
      </article>
    </article>
  );
};

export default NewsArticle;
