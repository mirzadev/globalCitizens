import Navbar from "../Components/NavbarItems/Navbar";
import Footer from "../Components/Footer/Footer";
import HeroOther from "../Components/HeroSection/HeroOther";
import GalleryCoverPic from "../Components/Assets/Gallery/GalleryCoverPage.jpg";
import PhotoGallery2026EQ from "../Components/Gallery/PhotoGallery2026/PhotoGallery2026EQ/PhotoGallery2026EQ";
import PhotoGallery2026CW from "../Components/Gallery/PhotoGallery2026/PhotoGallery2026CW/PhotoGallery2026CW";
import PhotoGallery2026MS from "../Components/Gallery/PhotoGallery2026/PhotoGallery2026MS/PhotoGallery2026MS";

function GCH2026() {
  return (
    <>
      <Navbar />
      <HeroOther
        cName="hero-gallery"
        heroImg={GalleryCoverPic}
        titleOther="GCH Gallery"
        btnClass="hide"
      />
      <PhotoGallery2026CW />
      <PhotoGallery2026MS />
      <PhotoGallery2026EQ />
      <Footer />
    </>
  );
}

export default GCH2026;
