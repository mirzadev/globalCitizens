import Navbar from "../Components/NavbarItems/Navbar";
import Footer from "../Components/Footer/Footer";
import HeroOther from "../Components/HeroSection/HeroOther";
import GchGallery from "../Components/Gallery/GchGalley";
import GalleryCoverPic from "../Components/Assets/Gallery/GalleryCoverPage.jpg";
import MotherLanguageDay from "../Components/Gallery/MotherLanguage";
import FoodAidDorian from "../Components/Gallery/FoodDorian";
import AntiPlasticActivities from "../Components/Gallery/AntiPlasticActivities";

function Gallery() {
  return (
    <>
      <Navbar />
      <HeroOther
        cName="hero-gallery"
        heroImg={GalleryCoverPic}
        titleOther="GCH Gallery"
        btnClass="hide"
      />
      <GchGallery />
      <MotherLanguageDay />
      <FoodAidDorian />
      <AntiPlasticActivities />
      <Footer />
    </>
  );
}

export default Gallery;
