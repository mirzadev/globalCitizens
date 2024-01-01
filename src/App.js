import "./styles.css";
import Navbar from "./Components/NavbarItems/Navbar";
import { Route, Routes } from "react-router-dom";
import Home from "./Routes/Home";
import About from "./Routes/About";
import Activity from "./Routes/Activity";
import Contact from "./Routes/Contact";
import Upcoming from "./Routes/UpcomingEvent";
import Ongoing from "./Routes/OngoingEvent";

export default function App() {
  return (
    <div className="App">
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/activity" element={<Activity />} />
        <Route path="/upcoming" element={<Upcoming />} />
        <Route path="/ongoing" element={<Ongoing />} />
        {/*<Route path="/events" element={<Events />} />
        
        <Route path="/members" element={<MembersCorner />} /> */}
      </Routes>
    </div>
  );
}
