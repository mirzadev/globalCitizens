import { Component } from "react";
import "./HomeMainStyles.css";
class HomeMainData extends Component {
  render() {
    return (
      <div className="HomeMain-des">
        <div className="HomeMain-text">
          <h2>{this.props.heading}</h2>
          <p>{this.props.text}</p>
        </div>
        <div className="home-image">
          <img alt="img" src={this.props.img1} />
          <img alt="img" src={this.props.img2} />
          <img alt="img" src={this.props.img3} />
        </div>
      </div>
    );
  }
}

export default HomeMainData;
