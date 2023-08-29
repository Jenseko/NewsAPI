import { Link, useLocation } from "react-router-dom";

const NewsArticleDetails = () => {
  // const idParams = useParams()
  const location = useLocation();

  return (
    <article className="article_details">
      <p>{location.state.source.name}</p>
      <h1>{location.state.title}</h1>
      <p>{`Published at ${location.state.publishedAt} by ${location.state.author}`}</p>
      <p>{location.state.description}</p>
      <img src={location.state.urlToImage} alt="" />
      <p>{location.state.content}</p>
      <Link
        to={`${location.state.url}`}
      >{`Read More at: ${location.state.url}`}</Link>
    </article>
  );
};

export default NewsArticleDetails;
