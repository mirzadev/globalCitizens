import Navbar from "../Components/NavbarItems/Navbar";
import Footer from "../Components/Footer/Footer";
import HomeMain from "../Components/HomePage/HomeMain";
import Hero from "../Components/HeroSection/Hero";
import home_cover from "../Components/Assets/Home/HomeCover.png";
import PageOverview from "../Components/PageOverview/PageOverviewHome";
function Home() {
  return (
    <>
      <Navbar />
      <Hero
        cName="hero"
        heroImg={home_cover}
        text="DEDICATED TO PROTECT, PRESERVE, PROGRESS AND THE PROSPERITY OF HUMANITY"
        title="GLOBAL CITIZENS FOR HUMANITY"
        buttonText="Donate Now"
        url="/contact"
        btnClass="show"
      />
      <HomeMain />
      <PageOverview />
      <Footer />
    </>
  );
}

export default Home;
