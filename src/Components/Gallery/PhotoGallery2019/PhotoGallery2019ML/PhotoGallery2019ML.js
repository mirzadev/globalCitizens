import React, { useState } from "react";
import "./PhotoGallery2019MLStyles.css";
import GCHLogo from "../../../../Components/Assets/Navbar/gch_logo.png";
import image1 from "../../../../Components/Assets/Gallery/MotherLanguage/motherLang-1.jpg";
import image2 from "../../../../Components/Assets/Gallery/MotherLanguage/motherLang-2.jpg";
import image3 from "../../../../Components/Assets/Gallery/MotherLanguage/motherLang-3.jpg";
import image4 from "../../../../Components/Assets/Gallery/MotherLanguage/motherLang-4.jpg";
import image5 from "../../../../Components/Assets/Gallery/MotherLanguage/motherLang-5.jpg";
import image6 from "../../../../Components/Assets/Gallery/MotherLanguage/motherLang-6.jpg";
import image7 from "../../../../Components/Assets/Gallery/MotherLanguage/motherLang-8.jpg";
import image8 from "../../../../Components/Assets/Gallery/MotherLanguage/motherLang-9.jpg";

const PhotoGallery2019ML = () => {
  const images = [
    image1,
    image2,
    image3,
    image4,
    image5,
    image6,
    image7,
    image8,
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

      <h1>INTERNATIONAL MOTHER'S LANGUAGE DAY(2019)</h1>

      <p className="photo-gallery-intro">
        Celebrate the international Mother's Language day and show due respect
        to the heroes with special emphasis on children and non bengali
        residents.
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

export default PhotoGallery2019ML;
