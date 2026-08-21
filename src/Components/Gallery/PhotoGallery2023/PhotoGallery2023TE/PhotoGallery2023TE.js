import React, { useState } from "react";
import "./PhotoGallery2023TEStyles.css";
import GCHLogo from "../../../../Components/Assets/Navbar/gch_logo.png";
import image1 from "../../../../Components/Assets/Gallery/TurkeyEarthquake/Turkey-3.jpg";
import image2 from "../../../../Components/Assets/Gallery/TurkeyEarthquake/Turkey-5.jpg";
import image3 from "../../../../Components/Assets/Gallery/TurkeyEarthquake/Turkey-6.jpg";
import image4 from "../../../../Components/Assets/Gallery/TurkeyEarthquake/Turkey-8.jpg";
import image5 from "../../../../Components/Assets/Gallery/TurkeyEarthquake/Turkey-9.jpg";
import image6 from "../../../../Components/Assets/Gallery/TurkeyEarthquake/Turkey-2.jpg";
import image7 from "../../../../Components/Assets/Gallery/TurkeyEarthquake/Turkey-4.jpg";
import image8 from "../../../../Components/Assets/Gallery/TurkeyEarthquake/Turkey-7.jpg";
import image9 from "../../../../Components/Assets/Gallery/TurkeyEarthquake/Turkey-10.jpg";
import image10 from "../../../../Components/Assets/Gallery/TurkeyEarthquake/Turkey-11.jpg";
import image11 from "../../../../Components/Assets/Gallery/TurkeyEarthquake/Turkey-13.jpg";

const PhotoGallery2023TE = () => {
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

      <h1>ASSISTANCE TO TURKEY EARTHQUAKE(2024)</h1>

      <p className="photo-gallery-intro">
        To stand beside Turkey with tents after devastrating earthquake.
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

export default PhotoGallery2023TE;
