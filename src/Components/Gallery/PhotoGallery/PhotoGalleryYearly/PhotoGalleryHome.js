import "./PhotoGalleryStyles.css";
import PhotoGalleryData from "./PhotoGalleryData";
import PhotoGallery1 from "../../../../Components/Assets/Gallery/GalleryMain/PhotoGallery/rohingya-5.jpg";
import PhotoGallery2 from "../../../../Components/Assets/Gallery/GalleryMain/PhotoGallery/motherLang-1.jpg";
import PhotoGallery3 from "../../../../Components/Assets/Gallery/GalleryMain/PhotoGallery/Turkey-12.jpg";
import PhotoGallery4 from "../../../../Components/Assets/Gallery/GalleryMain/PhotoGallery/PsychologistSemi_2024_002.jpg";
import PhotoGallery5 from "../../../../Components/Assets/Gallery/GalleryMain/PhotoGallery/GreenEco-00.jpeg";
import PhotoGallery6 from "../../../../Components/Assets/Gallery/GalleryMain/PhotoGallery/Eq_Venezuela-1.jpg";

function PhotoGalleryAll() {
  return (
    <div className="page-container">
      <h1>GCH ACTIVITIES GALLERY</h1>
      <p>Select Your Galery To View</p>
      <div className="page-overview-cart">
        <PhotoGalleryData
          image={PhotoGallery1}
          heading="GCH - 2018"
          url="/gch2018"
        />
        <PhotoGalleryData
          image={PhotoGallery2}
          heading="GCH - 2019"
          url="/gch2019"
        />
        <PhotoGalleryData
          image={PhotoGallery3}
          heading="GCH - 2023"
          url="/gch2023"
        />
        <PhotoGalleryData
          image={PhotoGallery4}
          heading="GCH - 2024"
          url="/gch2024"
        />
        <PhotoGalleryData
          image={PhotoGallery5}
          heading="GCH - 2025"
          url="/gch2025"
        />
        <PhotoGalleryData
          image={PhotoGallery6}
          heading="GCH - 2026"
          url="/gch2026"
        />
      </div>
    </div>
  );
}

export default PhotoGalleryAll;
