import Navbar from "../Components/NavbarItems/Navbar";
import Footer from "../Components/Footer/Footer";
import HeroOther from "../Components/HeroSection/HeroOther";
import GalleryCoverPic from "../Components/Assets/Gallery/GalleryCoverPage.jpg";
import PhotoGallery2019RS from "../Components/Gallery/PhotoGallery2019/PhotoGallery2019RS/PhotoGallery2019RS";
import PhotoGallery2019Dorian from "../Components/Gallery/PhotoGallery2019/PhotoGallery2019Dorian/PhotoGallery2019Dorian";
import PhotoGallery2019ML from "../Components/Gallery/PhotoGallery2019/PhotoGallery2019ML/PhotoGallery2019ML";

function GCH2019() {
  return (
    <>
      <Navbar />
      <HeroOther
        cName="hero-gallery"
        heroImg={GalleryCoverPic}
        titleOther="GCH Gallery"
        btnClass="hide"
      />
      <PhotoGallery2019ML />
      <PhotoGallery2019RS />
      <PhotoGallery2019Dorian />
      <Footer />
    </>
  );
}

export default GCH2019;
