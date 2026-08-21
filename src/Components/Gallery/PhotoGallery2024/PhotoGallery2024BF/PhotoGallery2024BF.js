import React, { useState } from "react";
import "./PhotoGallery2024BFStyles.css";
import image1 from "../../../../Components/Assets/Gallery/BangladeshFlood/Floor_Bangladesh_24_008.jpg";
import image2 from "../../../../Components/Assets/Gallery/BangladeshFlood/Floor_Bangladesh_24_006.jpg";
import image3 from "../../../../Components/Assets/Gallery/BangladeshFlood/Floor_Bangladesh_24_003.jpg";
import image4 from "../../../../Components/Assets/Gallery/BangladeshFlood/Flood_Bangladesh_24_001.jpg";
import image5 from "../../../../Components/Assets/Gallery/BangladeshFlood/Floor_Bangladesh_24_002.jpg";
import image6 from "../../../../Components/Assets/Gallery/BangladeshFlood/Floor_Bangladesh_24_005.jpg";
import image7 from "../../../../Components/Assets/Gallery/BangladeshFlood/Floor_Bangladesh_24_007.jpg";
import image8 from "../../../../Components/Assets/Gallery/BangladeshFlood/Floor_Bangladesh_24_009.jpg";
import image9 from "../../../../Components/Assets/Gallery/BangladeshFlood/Floor_Bangladesh_24_004.jpg";

const PhotoGallery2024BF = () => {
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
      <h1>ASSISTANCE TO FLOOD VICTIMS IN BANGLADESH( SEPTEMBER 2024 )</h1>

      <p className="photo-gallery-intro">
        To assist flood victims in Bangladesh with medical support.
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

export default PhotoGallery2024BF;
