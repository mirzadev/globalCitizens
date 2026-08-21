import React, { useState } from "react";
import "./PhotoGallery2024CPStyles.css";
import GCHLogo from "../../../../Components/Assets/Navbar/gch_logo.png";
import image1 from "../../../../Components/Assets/Gallery/psychologist_Seminar_24/PsychologistSemi_2024_003.jpg";
import image2 from "../../../../Components/Assets/Gallery/psychologist_Seminar_24/PsychologistSemi_2024_004.jpg";
import image3 from "../../../../Components/Assets/Gallery/psychologist_Seminar_24/PsychologistSemi_2024_005.jpg";
import image4 from "../../../../Components/Assets/Gallery/psychologist_Seminar_24/PsychologistSemi_2024_006.jpg";
import image5 from "../../../../Components/Assets/Gallery/psychologist_Seminar_24/PsychologistSemi_2024_006A.jpg";
import image6 from "../../../../Components/Assets/Gallery/psychologist_Seminar_24/PsychologistSemi_2024_007.jpg";
import image7 from "../../../../Components/Assets/Gallery/psychologist_Seminar_24/PsychologistSemi_2024_008.jpg";
import image8 from "../../../../Components/Assets/Gallery/psychologist_Seminar_24/PsychologistSemi_2024_009.jpg";
import image9 from "../../../../Components/Assets/Gallery/psychologist_Seminar_24/PsychologistSemi_2024_010.jpg";

const PhotoGallery2024CP = () => {
  const images = [
    image1,
    image2,
    image3,
    image4,
    image5,
    image6,
    image7,
    image8,
    image9,
  ];

  const [isModalOpen, setIsModalOpen] = useState(false);
  const [currentImageIndex, setCurrentImageIndex] = useState(0);

  const openModal = (index) => {
    setIsModalOpen(true);
    setCurrentImageIndex(index);
  };

  const closeModal = () => {
    setIsModalOpen(false);
  };

  const nextImage = () => {
    setCurrentImageIndex((prevIndex) => (prevIndex + 1) % images.length);
  };

  const prevImage = () => {
    setCurrentImageIndex(
      (prevIndex) => (prevIndex - 1 + images.length) % images.length,
    );
  };

  return (
    <div className="photo-gallery-container">
      <div className="photo-gallery-logo">
        <img src={GCHLogo} alt="Shikhaa The Light Logo" />
      </div>

      <h1>SEMINAR ON CHILDREN'S PSYCHOLOGY( JUNE 2024 )</h1>

      <p className="photo-gallery-intro">
        To educate parents and also childs about their psychology on each other
        in today's life.
      </p>

      <div className="photo-gallery-grid">
        {images.map((image, index) => (
          <div
            className="thumbnail"
            key={index}
            onClick={() => openModal(index)}
          >
            <img src={image} alt={`Shikhaa gallery ${index + 1}`} />
          </div>
        ))}
      </div>

      {isModalOpen && (
        <div className="gallery-modal">
          <button className="gallery-close" onClick={closeModal}>
            ×
          </button>

          <button className="gallery-arrow gallery-prev" onClick={prevImage}>
            ❮
          </button>

          <img
            src={images[currentImageIndex]}
            alt={`Shikhaa full view ${currentImageIndex + 1}`}
            className="gallery-modal-image"
          />

          <button className="gallery-arrow gallery-next" onClick={nextImage}>
            ❯
          </button>
        </div>
      )}
    </div>
  );
};

export default PhotoGallery2024CP;
