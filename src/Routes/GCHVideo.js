import Navbar from "../Components/NavbarItems/Navbar";
import Footer from "../Components/Footer/Footer";
import HeroOther from "../Components/HeroSection/HeroOther";
import AboutUs from "../Components/AboutUs/AboutUs";
import aboutCoverPic from "../Components/Assets/AboutUs/aboutUsCoverPic.jpg";
import GCH_Video from "../Components/Gallery/Videos/GCH_Video";
function GCHVideo() {
  return (
    <>
      <Navbar />
      <HeroOther
        cName="hero-about"
        heroImg={aboutCoverPic}
        titleOther="GCH VIDEO"
        btnClass="hide"
      />
      <GCH_Video />
      <Footer />
    </>
  );
}

export default GCHVideo;
