import "./PageOverviewStyles.css";
import { Link } from "react-router-dom";

function PageOverviewData(props) {
  const handleClick = () => {};
  return (
    <div className="pageOverviewDataCart">
      <div className="pageOverviewDataCart-image">
        <img src={props.image} alt="image" />
      </div>
      <h2>{props.heading}</h2>
      <p>{props.text}</p>
      <Link to={props.url}>
        <button onClick={handleClick} className="event-button">
          Event Details
        </button>
      </Link>
    </div>
  );
}

export default PageOverviewData;
