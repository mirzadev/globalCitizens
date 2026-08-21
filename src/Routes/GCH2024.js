import Navbar from "../Components/NavbarItems/Navbar";
import Footer from "../Components/Footer/Footer";
import HeroOther from "../Components/HeroSection/HeroOther";
import GalleryCoverPic from "../Components/Assets/Gallery/GalleryCoverPage.jpg";
import PhotoGallery2024CP from "../Components/Gallery/PhotoGallery2024/PhotoGallery2024CP/PhotoGallery2024CP";
import PhotoGallery2024BF from "../Components/Gallery/PhotoGallery2024/PhotoGallery2024BF/PhotoGallery2024BF";

function GCH2024() {
  return (
    <>
      <Navbar />
      <HeroOther
        cName="hero-gallery"
        heroImg={GalleryCoverPic}
        titleOther="GCH Gallery"
        btnClass="hide"
      />
      <PhotoGallery2024CP />
      <PhotoGallery2024BF />
      <Footer />
    </>
  );
}

export default GCH2024;
