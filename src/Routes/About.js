import Navbar from "../Components/NavbarItems/Navbar";
import Footer from "../Components/Footer/Footer";
import HeroOther from "../Components/HeroSection/HeroOther";
import AboutUs from "../Components/AboutUs/AboutUs";
import aboutCoverPic from "../Components/Assets/AboutUs/aboutUsCoverPic.jpg";
function About() {
  return (
    <>
      <Navbar />
      <HeroOther
        cName="hero-about"
        heroImg={aboutCoverPic}
        titleOther="About GCH"
        btnClass="hide"
      />
      <AboutUs />
      <Footer />
    </>
  );
}

export default About;
