import "./FooterStyles.css";
import GchLogo from "../Assets/Navbar/gch_logo.png";
import FaceBook from "../Assets/Footer/Facebook.png";
import Twiter from "../Assets/Footer/Twiter.png";
import YouTube from "../Assets/Footer/YouTube.png";
import Location from "../Assets/Footer/Location_Symbol.png";
import Telephone from "../Assets/Footer/Telephone_Logo.png";
import Email from "../Assets/Footer/Email_Logo.png";
import pspTechLogo from "../Assets/Footer/pspTech-logo.png";
import { Link } from "react-router-dom";

const Footer = () => {
  return (
    <div className="footer">
      <div className="top">
        <div id="footer-header">
          <div className="footer-title">
            <a data-testid="link" href="/">
              <img
                id="karigor-logo"
                src={GchLogo}
                alt="logo"
                height="73"
                width="80"
              ></img>
            </a>
            <a class="footer-link" href="/">
              <span id="footer-app-title">Global Citizens For Humanity</span>
            </a>
          </div>
          <p>
            DEDICATED TO PROTECT, PRESERVE, PROGRESS AND THE PROSPERITY OF
            HUMANITY
          </p>
        </div>
      </div>

      <div className="bottom">
        <div className="social-media-div">
          <h4>Social Media</h4>
          <div className="social-media">
            <Link
              to="https://www.facebook.com/globalcitizensforhumanity/"
              target="_blank"
              rel="noreferrer"
            >
              <img src={FaceBook} alt="facebook" height="40" width="40" />
            </Link>
            <Link to="/" target="_blank" rel="noreferrer">
              <img
                className="twiter"
                src={Twiter}
                alt="twiter"
                height="40"
                width="40"
              />
            </Link>
            <Link
              to="https://www.youtube.com/channel/UCab9jAh9INNKgmZlY8bx8jg"
              target="_blank"
              rel="noreferrer"
            >
              <img src={YouTube} alt="youtube" height="40" width="50" />
            </Link>
          </div>
        </div>
        <div className="useful-links">
          <h4>Useful Links</h4>
          <div className="link-menues">
            <div className="link-menu-1">
              <Link to="/">Home</Link>
              <Link to="/about">About Us</Link>
              <Link to="/contact">Contact Us</Link>
              <Link to="/members">Members</Link>
            </div>
            <div className="link-menu-2">
              <Link to="/gallery">Gallery</Link>
              <Link to="/activity">Activity</Link>
              <Link to="/ongoing">Ongoing</Link>
              <Link to="/upcoming">Upcoming</Link>
            </div>
          </div>
        </div>
        <div className="footer-contact-us">
          <h4>Contact Us</h4>
          <div className="location-address">
            <Link
              to="https://maps.app.goo.gl/ikGgEMFzbUWarHpu7"
              target="_blank"
              rel="noreferrer"
            >
              <img src={Location} alt="location" height="50" width="50" />
            </Link>
            <Link
              to="https://maps.app.goo.gl/ikGgEMFzbUWarHpu7"
              target="_blank"
              rel="noreferrer"
            >
              <div>
                <p className="address-loc">10443 Galleria St,</p>
                <p className="address-loc">Wellington, FL-33414</p>
              </div>
            </Link>
          </div>
          <div className="telephone">
            <Link to="/">
              <img src={Telephone} alt="telephone" height="35" width="35" />
            </Link>
            <a>
              <p className="telephone-number">1(646) 301 5257 (Cell)</p>
            </a>
          </div>
          <div className="email">
            <Link
              to="mailto:globalcitizensforhumanity@gmail.com"
              target="_blank"
              rel="noreferrer"
            >
              <img src={Email} alt="email" height="40" width="40" />
            </Link>
            <Link
              to="mailto:globalcitizensforhumanity@gmail.com"
              target="_blank"
              rel="noreferrer"
            >
              <p className="email-address">
                globalcitizensforhumanity@gmail.com
              </p>
            </Link>
          </div>
        </div>
      </div>
      <hr />

      <div className="copyright-note">
        <p>Copyright @</p>
        <Link to="https://psptech.net/" target="_blank" rel="noreferrer">
          <img src={pspTechLogo} alt="psptech" height="35" width="35" />
        </Link>
        <Link to="https://psptech.net/" target="_blank" rel="noreferrer">
          <p>PSP Technology Inc</p>
        </Link>
      </div>
    </div>
  );
};

export default Footer;
