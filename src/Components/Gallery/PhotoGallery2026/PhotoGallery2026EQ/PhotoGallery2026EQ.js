import React, { useState } from "react";
import "./PhotoGallery2026StylesEQ.css";
import image1 from "../../../../Components/Assets/Gallery/Eq_Venezuela/Eq_Venezuela-1.jpeg";
import image2 from "../../../../Components/Assets/Gallery/Eq_Venezuela/Eq_Venezuela-2.jpeg";
import image3 from "../../../../Components/Assets/Gallery/Eq_Venezuela/Eq_Venezuela-3.jpeg";
import image4 from "../../../../Components/Assets/Gallery/Eq_Venezuela/Eq_Venezuela-4.jpeg";
import image5 from "../../../../Components/Assets/Gallery/Eq_Venezuela/Eq_Venezuela-5.jpeg";
import image6 from "../../../../Components/Assets/Gallery/Eq_Venezuela/Eq_Venezuela-6.jpeg";
import image7 from "../../../../Components/Assets/Gallery/Eq_Venezuela/Eq_Venezuela-10.jpeg";
import image8 from "../../../../Components/Assets/Gallery/Eq_Venezuela/Eq_Venezuela-11.jpeg";
import image9 from "../../../../Components/Assets/Gallery/Eq_Venezuela/Eq_Venezuela-7.jpeg";
import image10 from "../../../../Components/Assets/Gallery/Eq_Venezuela/Eq_Venezuela-8.jpeg";
import image11 from "../../../../Components/Assets/Gallery/Eq_Venezuela/Eq_Venezuela-9.jpeg";

const PhotoGallery2026EQ = () => {
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
      <h1>EARTHQUAKE IN VENEZUEALA ( JUNE 2026)</h1>

      <p className="photo-gallery-intro">
        To stand beside Venezueala people after earthquake in 2026.
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

export default PhotoGallery2026EQ;
