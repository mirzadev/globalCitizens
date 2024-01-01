import Navbar from "../Components/NavbarItems/Navbar";
import Footer from "../Components/Footer/Footer";
import HeroOther from "../Components/HeroSection/HeroOther";
import Membership from "../Components/Members/membership";
import MembersCoverPic from "../Components/Assets/Members/MembersCoverPic.jpg";

function Members() {
  return (
    <>
      <Navbar />
      <HeroOther
        cName="hero-members"
        heroImg={MembersCoverPic}
        titleOther="GCH Members"
        btnClass="hide"
      />
      <Membership />
      <Footer />
    </>
  );
}

export default Members;
