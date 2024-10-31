import "./GchGalleryStyles.css";
import antiPlastic1 from "../Assets/Gallery/BangladeshFlood/Flood_Bangladesh_24_001.jpg";
import antiPlastic2 from "../Assets/Gallery/BangladeshFlood/Floor_Bangladesh_24_002.jpg";
import antiPlastic3 from "../Assets/Gallery/BangladeshFlood/Floor_Bangladesh_24_003.jpg";
import antiPlastic4 from "../Assets/Gallery/BangladeshFlood/Floor_Bangladesh_24_004.jpg";
import antiPlastic5 from "../Assets/Gallery/BangladeshFlood/Floor_Bangladesh_24_005.jpg";
import antiPlastic6 from "../Assets/Gallery/BangladeshFlood/Floor_Bangladesh_24_006.jpg";
import antiPlastic7 from "../Assets/Gallery/BangladeshFlood/Floor_Bangladesh_24_007.jpg";
import antiPlastic8 from "../Assets/Gallery/BangladeshFlood/Floor_Bangladesh_24_008.jpg";
import antiPlastic9 from "../Assets/Gallery/BangladeshFlood/Floor_Bangladesh_24_009.jpg";

function FloodBangladesh() {
  return (
    <div className="gallery-container">
      <div className="GCH-event-activity-heading">
        <h4>Assistance to Flood Victims in Bangladesh(September 2024)</h4>
      </div>
      <div className="GCH-event-activity-gallery">
        <div>
          <img alt="child-image" src={antiPlastic1} />
          <img alt="child-image" src={antiPlastic2} />
          <img alt="child-image" src={antiPlastic3} />
          <img alt="child-image" src={antiPlastic4} />
          <img alt="child-image" src={antiPlastic9} />
        </div>
        <div>
          <img alt="child-image" src={antiPlastic5} />
          <img alt="child-image" src={antiPlastic6} />
          <img alt="child-image" src={antiPlastic7} />
          <img alt="child-image" src={antiPlastic8} />
        </div>
      </div>
    </div>
  );
}

export default FloodBangladesh;
