import React, { useState } from "react";
import "./PhotoGallery2023BCStyles.css";
import image1 from "../../../../Components/Assets/Gallery/AntiPlastic/AntiPLasticCampaign-30.jpg";
import image2 from "../../../../Components/Assets/Gallery/AntiPlastic/AntiPLasticCampaign-8.jpg";
import image3 from "../../../../Components/Assets/Gallery/AntiPlastic/AntiPLasticCampaign-28.jpg";
import image4 from "../../../../Components/Assets/Gallery/AntiPlastic/AntiPLasticCampaign-11.jpg";
import image5 from "../../../../Components/Assets/Gallery/AntiPlastic/AntiPLasticCampaign-13.jpg";
import image6 from "../../../../Components/Assets/Gallery/AntiPlastic/AntiPLasticCampaign-14.jpg";
import image7 from "../../../../Components/Assets/Gallery/AntiPlastic/AntiPLasticCampaign-15.jpg";
import image8 from "../../../../Components/Assets/Gallery/AntiPlastic/AntiPLasticCampaign-19.jpg";
import image9 from "../../../../Components/Assets/Gallery/AntiPlastic/AntiPLasticCampaign-20.jpg";
import image10 from "../../../../Components/Assets/Gallery/AntiPlastic/AntiPLasticCampaign-21.jpg";
import image11 from "../../../../Components/Assets/Gallery/AntiPlastic/AntiPLasticCampaign-23.jpg";
import image12 from "../../../../Components/Assets/Gallery/AntiPlastic/AntiPLasticCampaign-25.jpg";
import image13 from "../../../../Components/Assets/Gallery/AntiPlastic/AntiPLasticCampaign-26.jpg";
import image14 from "../../../../Components/Assets/Gallery/AntiPlastic/AntiPLasticCampaign-1.jpg";
import image15 from "../../../../Components/Assets/Gallery/AntiPlastic/AntiPLasticCampaign-2.jpg";
import image16 from "../../../../Components/Assets/Gallery/AntiPlastic/AntiPLasticCampaign-3.jpg";
import image17 from "../../../../Components/Assets/Gallery/AntiPlastic/AntiPLasticCampaign-4.jpg";
import image18 from "../../../../Components/Assets/Gallery/AntiPlastic/AntiPLasticCampaign-5.jpg";
import image19 from "../../../../Components/Assets/Gallery/AntiPlastic/AntiPLasticCampaign-7.jpg";
import image20 from "../../../../Components/Assets/Gallery/AntiPlastic/AntiPLasticCampaign-29.jpg";
import image21 from "../../../../Components/Assets/Gallery/AntiPlastic/AntiPLasticCampaign-12.jpg";
import image22 from "../../../../Components/Assets/Gallery/AntiPlastic/AntiPLasticCampaign-16.jpg";
import image23 from "../../../../Components/Assets/Gallery/AntiPlastic/AntiPLasticCampaign-17.jpg";
import image24 from "../../../../Components/Assets/Gallery/AntiPlastic/AntiPLasticCampaign-18.jpg";
import image25 from "../../../../Components/Assets/Gallery/AntiPlastic/AntiPLasticCampaign-22.jpg";
import image26 from "../../../../Components/Assets/Gallery/AntiPlastic/AntiPLasticCampaign-24.jpg";
import image27 from "../../../../Components/Assets/Gallery/AntiPlastic/AntiPLasticCampaign-27.jpg";

const PhotoGallery2023BC = () => {
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
    image18,
    image19,
    image20,
    image21,
    image22,
    image23,
    image24,
    image25,
    image26,
    image27,
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
      <h1>ANTIPLASTIC CAMPAIGN - BEACH CLEANING(2023)</h1>

      <p className="photo-gallery-intro">
        To contribute in environmental campaign against use of plastic by
        cleaning beach.
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

export default PhotoGallery2023BC;
