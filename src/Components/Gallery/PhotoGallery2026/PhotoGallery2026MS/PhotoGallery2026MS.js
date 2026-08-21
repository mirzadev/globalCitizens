import React, { useState } from "react";
import "./PhotoGallery2026StylesMS.css";
import image1 from "../../../../Components/Assets/Gallery/MedicalSupport-AsianFair/AsianFair-01.jpeg";
import image2 from "../../../../Components/Assets/Gallery/MedicalSupport-AsianFair/AsianFair-02.jpeg";
import image3 from "../../../../Components/Assets/Gallery/MedicalSupport-AsianFair/AsianFair-03.jpeg";
import image4 from "../../../../Components/Assets/Gallery/MedicalSupport-AsianFair/AsianFair-04.jpeg";
import image5 from "../../../../Components/Assets/Gallery/MedicalSupport-AsianFair/AsianFair-05.jpeg";
import image6 from "../../../../Components/Assets/Gallery/MedicalSupport-AsianFair/AsianFair-06.jpeg";
import image7 from "../../../../Components/Assets/Gallery/MedicalSupport-AsianFair/AsianFair-07.jpeg";
import image8 from "../../../../Components/Assets/Gallery/MedicalSupport-AsianFair/AsianFair-08.jpeg";
import image9 from "../../../../Components/Assets/Gallery/MedicalSupport-AsianFair/AsianFair-09.jpeg";
import image10 from "../../../../Components/Assets/Gallery/MedicalSupport-AsianFair/AsianFair-10.jpeg";
import image11 from "../../../../Components/Assets/Gallery/MedicalSupport-AsianFair/AsianFair-11.jpeg";
import image12 from "../../../../Components/Assets/Gallery/MedicalSupport-AsianFair/AsianFair-12.jpeg";
import image13 from "../../../../Components/Assets/Gallery/MedicalSupport-AsianFair/AsianFair-13.jpeg";
import image14 from "../../../../Components/Assets/Gallery/MedicalSupport-AsianFair/AsianFair-14.jpeg";
import image15 from "../../../../Components/Assets/Gallery/MedicalSupport-AsianFair/AsianFair-15.jpeg";
import image16 from "../../../../Components/Assets/Gallery/MedicalSupport-AsianFair/AsianFair-16.jpeg";
import image17 from "../../../../Components/Assets/Gallery/MedicalSupport-AsianFair/AsianFair-17.jpeg";

const PhotoGallery2026MS = () => {
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
    image12,
    image13,
    image14,
    image15,
    image16,
    image17,
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
      <h1>MEDICAL ADVICE IN COMMUNITY PROGRAMS ( MARCH 2026)</h1>

      <p className="photo-gallery-intro">
        To provide medical advices and distribute blood pressure machines to the
        people.
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

export default PhotoGallery2026MS;
