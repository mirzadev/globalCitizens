import "./ContactFormStyles.css";
import React, { useRef } from "react";
import emailjs from "@emailjs/browser";
import FaceBook from "../Assets/ContactUs/Facebook.png";
import Twiter from "../Assets/ContactUs/Twiter.png";
import YouTube from "../Assets/ContactUs/YouTube.png";

function ContactForm() {
  const form = useRef();
  // To close the message after 10 second
  const messageFadeout = () => {
    setTimeout(() => {
      document.getElementById("divResults").innerHTML = "";
    }, 10000);
  };
  const sendEmail = (e) => {
    e.preventDefault();

    emailjs
      .sendForm(
        "service_zkk8d03",
        "template_qa5ab0i",
        form.current,
        "4dtjAuhZOvkBovNXV"
      )
      .then(
        (result) => {
          console.log(result.text);
          document.getElementById("divResults").innerHTML =
            "Your message has been successfully sent to Global Citizens For Humanity. Thanks for contacting us.";
          messageFadeout(); //executing fadeout
        },
        (error) => {
          console.log(error.text);
          document.getElementById("divResults").innerHTML =
            "Sorry ! Your message could not be sent. Please try again later.";
          messageFadeout();
        }
      );
    e.target.reset();
  };

  return (
    <div className="form-container">
      <h1>
        For Your Generous Donation or Participation - Please Contact GCH Using
        Any of The Following
      </h1>
      <div className="form-items">
        <form ref={form} onSubmit={sendEmail}>
          <input
            type="text"
            name="user_name"
            placeholder="Full Name"
            required
          />
          <input type="email" name="user_email" placeholder="Email" required />
          <input type="subject" name="subject" placeholder="Subject" />
          <textarea name="message" placeholder="Message" rows="4"></textarea>

          <button type="submit" className="btn">
            Send Message
          </button>
          {/*  this is to display the success message  */}
          <div id="divResults"></div>
        </form>

        <div className="contact-sections">
          <section className="email-section">
            <div>
              <span className="fa solid alt fa-envelope"></span>
              <span>Email</span>
            </div>
            <div>
              <a
                id="contact_email"
                href="https://mail.google.com"
                target="_blank"
                rel="noreferrer"
              >
                globalcitizensforhumanity@gmail.com
              </a>
            </div>
          </section>
          <section className="phone-section">
            <div>
              <span className="fa-solid fa-phone"></span>
              <span>Phone</span>
            </div>
            <div>
              <span>1(646) 301-5257</span>
            </div>
          </section>
          <section className="address-section">
            <div>
              <span className="fa-sharp fa-solid fa-house"></span>
              <span>Address</span>
            </div>
            <div>
              <a
                id="address-link"
                href="https://maps.app.goo.gl/ikGgEMFzbUWarHpu7"
                target="_blank"
                rel="noreferrer"
              >
                10443 Galleria St,
                <br />
                Wellington, FL-33414
                <br />
                United States of America
              </a>
            </div>
          </section>
          <section className="social-section">
            <a
              href="https://www.facebook.com/globalcitizensforhumanity/"
              target="_blank"
              rel="noreferrer"
            >
              <img src={FaceBook} alt="facebook" height="50" width="50" />
            </a>
            <a href="https://twitter.com/home" target="_blank" rel="noreferrer">
              <img
                className="twiter"
                src={Twiter}
                alt="twiter"
                height="50"
                width="50"
              />
            </a>
            <a
              href="https://www.youtube.com/channel/UCab9jAh9INNKgmZlY8bx8jg"
              target="_blank"
              rel="noreferrer"
            >
              <img src={YouTube} alt="youtube" height="50" width="60" />
            </a>
          </section>
        </div>
      </div>
    </div>
  );
}
export default ContactForm;
