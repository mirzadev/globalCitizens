import HeroOther from "../Components/HeroSection/HeroOther";
import Footer from "../Components/Footer/Footer";
import Navbar from "../Components/NavbarItems/Navbar";
import EventOngoing from "../Components/Ongoing/EventsOngoing";
import OngoingCoverPic from "../Components/Assets/Ongoing/OngoingEvent.jpg";

function Ongoing() {
  return (
    <>
      <Navbar />
      <HeroOther
        cName="hero-Ongoing"
        heroImg={OngoingCoverPic}
        titleOther="Ongoing"
        btnClass="hide"
      />
      <EventOngoing />
      <Footer />
    </>
  );
}

export default Ongoing;
