import Navbar from "../Components/NavbarItems/Navbar";
import Footer from "../Components/Footer/Footer";
import ContactForm from "../Components/ContactUs/contactForm";
import contactCoverPic from "../Components/Assets/ContactUs/contactUsCoverPic.jpg";
import HeroOther from "../Components/HeroSection/HeroOther";

function Contact() {
  return (
    <>
      <Navbar />
      <HeroOther
        cName="hero-contact"
        heroImg={contactCoverPic}
        titleOther="Contact Us"
        btnClass="hide"
      />
      <ContactForm />
      <Footer />
    </>
  );
}

export default Contact;
