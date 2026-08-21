import Navbar from "../Components/NavbarItems/Navbar";
import Footer from "../Components/Footer/Footer";
import HeroOther from "../Components/HeroSection/HeroOther";
import GalleryCoverPic from "../Components/Assets/Gallery/GalleryCoverPage.jpg";
import PhotoGallery2023TE from "../Components/Gallery/PhotoGallery2023/PhotoGallery2023TE/PhotoGallery2023TE";
import PhotoGallery2023BC from "../Components/Gallery/PhotoGallery2023/PhotoGallery2023BC/PhotoGallery2023BC";

function GCH2023() {
  return (
    <>
      <Navbar />
      <HeroOther
        cName="hero-gallery"
        heroImg={GalleryCoverPic}
        titleOther="GCH Gallery"
        btnClass="hide"
      />
      <PhotoGallery2023TE />
      <PhotoGallery2023BC />
      <Footer />
    </>
  );
}

export default GCH2023;
