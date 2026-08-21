import React, { useState } from "react";
import "./PhotoGallery2025Styles.css";
import GCHLogo from "../../../Components/Assets/Navbar/gch_logo.png";
import image1 from "../../../Components/Assets/Gallery/GreenEco/GreenEco-01.jpeg";
import image2 from "../../../Components/Assets/Gallery/GreenEco/GreenEco-02.jpeg";
import image3 from "../../../Components/Assets/Gallery/GreenEco/GreenEco-03.jpeg";
import image4 from "../../../Components/Assets/Gallery/GreenEco/GreenEco-04.jpeg";
import image5 from "../../../Components/Assets/Gallery/GreenEco/GreenEco-05.jpeg";
import image6 from "../../../Components/Assets/Gallery/GreenEco/GreenEco-06.jpeg";
import image7 from "../../../Components/Assets/Gallery/GreenEco/GreenEco-07.jpeg";
import image8 from "../../../Components/Assets/Gallery/GreenEco/GreenEco-08.jpeg";
import image9 from "../../../Components/Assets/Gallery/GreenEco/GreenEco-09.jpeg";
import image10 from "../../../Components/Assets/Gallery/GreenEco/GreenEco-10.jpeg";
import image11 from "../../../Components/Assets/Gallery/GreenEco/GreenEco-11.jpeg";

const PhotoGallery2025 = () => {
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
    image10,
    image11,
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
      <h1>GREEN ECO - PLANTATION IN BANGLADESH( 2025 )</h1>

      <p className="photo-gallery-intro">
        A project to distribute and plant economy trees in Bangladeh.
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

export default PhotoGallery2025;
