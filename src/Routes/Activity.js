import Navbar from "../Components/NavbarItems/Navbar";
import Footer from "../Components/Footer/Footer";
import HeroOther from "../Components/HeroSection/HeroOther";
import GchActivity from "../Components/Activities/GchActivity";
import ActivityCoverPic from "../Components/Assets/Activity/ActivityCoverPic.jpg";
function About() {
  return (
    <>
      <Navbar />
      <HeroOther
        cName="hero-about"
        heroImg={ActivityCoverPic}
        titleOther="GCH Activities"
        btnClass="hide"
      />
      <GchActivity />
      <Footer />
    </>
  );
}

export default About;
