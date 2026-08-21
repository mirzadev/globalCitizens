import "./styles.css";
import Navbar from "./Components/NavbarItems/Navbar";
import { Route, Routes } from "react-router-dom";
import Home from "./Routes/Home";
import About from "./Routes/About";
import Activity from "./Routes/Activity";
import Contact from "./Routes/Contact";
import Upcoming from "./Routes/UpcomingEvent";
import Ongoing from "./Routes/OngoingEvent";
import Gallery from "./Routes/Gallery";
import GCH2018 from "./Routes/GCH2018";
import GCH2019 from "./Routes/GCH2019";
import GCH2023 from "./Routes/GCH2023";
import GCH2024 from "./Routes/GCH2024";
import GCH2025 from "./Routes/GCH2025";
import GCH2026 from "./Routes/GCH2026";
import Members from "./Routes/Members";
import GCHVDO from "./Routes/GCHVideo";
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
        <Route path="/gallery" element={<Gallery />} />
        <Route path="/gch2018" element={<GCH2018 />} />
        <Route path="/gch2019" element={<GCH2019 />} />
        <Route path="/gch2023" element={<GCH2023 />} />
        <Route path="/gch2024" element={<GCH2024 />} />
        <Route path="/gch2025" element={<GCH2025 />} />
        <Route path="/gch2026" element={<GCH2026 />} />
        <Route path="/members" element={<Members />} />
        <Route path="/video" element={<GCHVDO />} />
      </Routes>
    </div>
  );
}
