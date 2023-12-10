import "./styles.css";
import Navbar from "./Components/NavbarItems/Navbar";
import { Route, Routes } from "react-router-dom";
import Home from "./Routes/Home";

export default function App() {
  return (
    <div className="App">
      <Navbar />

      <Routes>
        <Route path="/" element={<Home />} />
        {/* <Route path="/about" element={<About />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/children" element={<Children />} />
        <Route path="/events" element={<Events />} />
        <Route path="/ekCupCha" element={<EkCupCha />} />
        <Route path="/boishakh" element={<Boishakh />} />
        <Route path="/kpCulture" element={<KpCulture />} />
        <Route path="/kpNews" element={<KpNews />} />
        <Route path="/upcoming" element={<UpcomingEvent />} />
        <Route path="/members" element={<MembersCorner />} /> */}
      </Routes>
    </div>
  );
}
