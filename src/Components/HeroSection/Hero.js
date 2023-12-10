import "./HeroStyles.css";
import { Link } from "react-router-dom";

function Hero(props) {
  return (
    <>
      <div className={props.CName}>
        <img alt="HeroImg" id="home-cover-image" src={props.heroImg} />
        <div className="hero-text">
          <h1>{props.title}</h1>
          <p>{props.text}</p>
          <Link to={props.url} className={props.btnClass}>
            {props.buttonText}
          </Link>
        </div>
      </div>
    </>
  );
}

export default Hero;
