import React, { useState } from "react";
import "./PhotoGallery2019RSStyles.css";
import image1 from "../../../../Components/Assets/Gallery/RetailAwareness/retailSecurity-2.jpg";
import image2 from "../../../../Components/Assets/Gallery/RetailAwareness/retailSecurity-3.jpg";
import image3 from "../../../../Components/Assets/Gallery/RetailAwareness/retailSecurity-4.jpg";
import image4 from "../../../../Components/Assets/Gallery/RetailAwareness/retailSecurity-5.jpg";
import image5 from "../../../../Components/Assets/Gallery/RetailAwareness/retailSecurity-6.jpg";
import image6 from "../../../../Components/Assets/Gallery/RetailAwareness/retailSecurity-8.jpg";
import image7 from "../../../../Components/Assets/Gallery/RetailAwareness/retailSecurity-9.jpg";
import image8 from "../../../../Components/Assets/Gallery/RetailAwareness/retailSecurity-11.jpg";
import image9 from "../../../../Components/Assets/Gallery/RetailAwareness/retailSecurity-12.jpg";
import image10 from "../../../../Components/Assets/Gallery/RetailAwareness/retailSecurity-7.jpg";

const PhotoGallery2019RS = () => {
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
      <h1>RETAIL SECURITY AWARENESS TRAINING(2019)</h1>
      <p className="photo-gallery-intro">
        To bring awareness among retail business and employees and minimize
        casualty by sharing knowledge.
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

export default PhotoGallery2019RS;
