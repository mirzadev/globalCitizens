import { Component } from "react";
import GCH_Logo from "../Assets/Navbar/gch_logo.png";
import "./NavbarStyles.css";
import { MenuItems } from "./MenuItems";
import { Link } from "react-router-dom";

class Navbar extends Component {
  state = { clicked: false };
  handleClick = () => {
    this.setState({ clicked: !this.state.clicked });
  };
  render() {
    return (
      <nav className="NavbarItems">
        <h2>
          <Link data-testid="link" to="/">
            <span>
              <img id="GCH-logo" src={GCH_Logo}></img>
            </span>
          </Link>
        </h2>
        <Link class="header-link" to="/">
          <span id="app-title">GLOBAL CITIZENS FOR HUMANITY</span>
        </Link>
        <div className="menu-icons" onClick={this.handleClick}>
          <i
            className={this.state.clicked ? "fas fa-times" : "fas fa-bars"}
          ></i>
        </div>
        <ul className={this.state.clicked ? "nav-menu active" : "nav-menu"}>
          {MenuItems.map((item, index) => {
            return (
              <li key={index}>
                <Link className={item.CName} to={item.url}>
                  <i className={item.icon}></i>
                  {item.title}
                </Link>
              </li>
            );
          })}
          <Link to="/">
            <button className="membership" to="/members">
              Members
            </button>
          </Link>
        </ul>
      </nav>
    );
  }
}

export default Navbar;
