import Navbar from "../Components/NavbarItems/Navbar";
import Footer from "../Components/Footer/Footer";
import HeroOther from "../Components/HeroSection/HeroOther";
import GchGallery from "../Components/Gallery/GchGalley";
import GalleryCoverPic from "../Components/Assets/Gallery/GalleryCoverPage.jpg";

function Gallery() {
  return (
    <>
      <Navbar />
      <HeroOther
        cName="hero-gallery"
        heroImg={GalleryCoverPic}
        titleOther="Activity Gallery"
        btnClass="hide"
      />
      <GchGallery />
      <Footer />
    </>
  );
}

export default Gallery;
