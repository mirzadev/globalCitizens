import "./HeroStyles.css";

function HeroOther(props) {
  return (
    <>
      <div className={props.CName}>
        <img alt="HeroImg" id="home-cover-image" src={props.heroImg} />
        <div className="hero-other-page">
          <h2 id="other-page-title">{props.titleOther}</h2>
        </div>
      </div>
    </>
  );
}

export default HeroOther;
