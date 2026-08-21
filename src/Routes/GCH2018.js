import Navbar from "../Components/NavbarItems/Navbar";
import Footer from "../Components/Footer/Footer";
import HeroOther from "../Components/HeroSection/HeroOther";
import GalleryCoverPic from "../Components/Assets/Gallery/GalleryCoverPage.jpg";
import PhotoGallery2018 from "../Components/Gallery/PhotoGallery2018/PhotoGallery2018";

function GCH2018() {
  return (
    <>
      <Navbar />
      <HeroOther
        cName="hero-gallery"
        heroImg={GalleryCoverPic}
        titleOther="GCH Gallery"
        btnClass="hide"
      />
      <PhotoGallery2018 />

      <Footer />
    </>
  );
}

export default GCH2018;
