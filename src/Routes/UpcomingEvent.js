import HeroOther from "../Components/HeroSection/HeroOther";
import Footer from "../Components/Footer/Footer";
import Navbar from "../Components/NavbarItems/Navbar";
import EventUpcoming from "../Components/Upcoming/EventsUpcoming";
import UpcomingCoverPic from "../Components/Assets/Upcoming/upcomingEvent.jpg";

function Upcoming() {
  return (
    <>
      <Navbar />
      <HeroOther
        cName="hero-upcoming"
        heroImg={UpcomingCoverPic}
        titleOther="Upcoming Events"
        btnClass="hide"
      />
      <EventUpcoming />
      <Footer />
    </>
  );
}

export default Upcoming;
