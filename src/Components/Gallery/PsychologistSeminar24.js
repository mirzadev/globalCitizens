import "./GchGalleryStyles.css";
import PsyChildSeminar1 from "../Assets/Gallery/psychologist_Seminar_24/PsychologistSemi_2024_001.jpg";
import PsyChildSeminar2 from "../Assets/Gallery/psychologist_Seminar_24/PsychologistSemi_2024_002.jpg";
import PsyChildSeminar3 from "../Assets/Gallery/psychologist_Seminar_24/PsychologistSemi_2024_003.jpg";
import PsyChildSeminar4 from "../Assets/Gallery/psychologist_Seminar_24/PsychologistSemi_2024_004.jpg";
import PsyChildSeminar5 from "../Assets/Gallery/psychologist_Seminar_24/PsychologistSemi_2024_005.jpg";
import PsyChildSeminar6 from "../Assets/Gallery/psychologist_Seminar_24/PsychologistSemi_2024_006.jpg";
import PsyChildSeminar7 from "../Assets/Gallery/psychologist_Seminar_24/PsychologistSemi_2024_006A.jpg";
import PsyChildSeminar8 from "../Assets/Gallery/psychologist_Seminar_24/PsychologistSemi_2024_006B.jpg";
import PsyChildSeminar9 from "../Assets/Gallery/psychologist_Seminar_24/PsychologistSemi_2024_007.jpg";
import PsyChildSeminar10 from "../Assets/Gallery/psychologist_Seminar_24/PsychologistSemi_2024_008.jpg";
import PsyChildSeminar11 from "../Assets/Gallery/psychologist_Seminar_24/PsychologistSemi_2024_009.jpg";
import PsyChildSeminar12 from "../Assets/Gallery/psychologist_Seminar_24/PsychologistSemi_2024_010.jpg";

function PsySeminar2024() {
  return (
    <div className="gallery-container">
      <div className="GCH-event-activity-heading">
        <h4>Seminar on Children's Psychology(June 2024)</h4>
      </div>
      <div className="GCH-event-activity-gallery">
        <div>
          <img alt="child-image" src={PsyChildSeminar1} />
          <img alt="child-image" src={PsyChildSeminar2} />
          <img alt="child-image" src={PsyChildSeminar3} />
          <img alt="child-image" src={PsyChildSeminar4} />
          <img alt="child-image" src={PsyChildSeminar5} />
          <img alt="child-image" src={PsyChildSeminar6} />
        </div>
        <div>
          <img alt="child-image" src={PsyChildSeminar7} />
          <img alt="child-image" src={PsyChildSeminar8} />
          <img alt="child-image" src={PsyChildSeminar9} />
          <img alt="child-image" src={PsyChildSeminar10} />
          <img alt="child-image" src={PsyChildSeminar12} />
          <img alt="child-image" src={PsyChildSeminar11} />
        </div>
      </div>
    </div>
  );
}

export default PsySeminar2024;
