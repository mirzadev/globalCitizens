import React, { useState } from "react";
import "./PhotoGallery2019DorianStyles.css";
import image1 from "../../../../Components/Assets/Gallery/FoodAidDorian/Dorian-1.jpg";
import image2 from "../../../../Components/Assets/Gallery/FoodAidDorian/Dorian-2.jpg";
import image3 from "../../../../Components/Assets/Gallery/FoodAidDorian/Dorian-4.jpg";
import image4 from "../../../../Components/Assets/Gallery/FoodAidDorian/Dorian-5.jpg";
import image5 from "../../../../Components/Assets/Gallery/FoodAidDorian/Dorian-7.jpg";
import image6 from "../../../../Components/Assets/Gallery/FoodAidDorian/Dorian-8.jpg";
import image7 from "../../../../Components/Assets/Gallery/FoodAidDorian/Dorian-10.jpg";
import image8 from "../../../../Components/Assets/Gallery/FoodAidDorian/Dorian-11.jpg";
import image9 from "../../../../Components/Assets/Gallery/FoodAidDorian/Dorian-14.jpg";
import image10 from "../../../../Components/Assets/Gallery/FoodAidDorian/Dorian-16.jpg";
import image11 from "../../../../Components/Assets/Gallery/FoodAidDorian/Dorian-17.jpg";
import image12 from "../../../../Components/Assets/Gallery/FoodAidDorian/Dorian-18.jpg";
import image13 from "../../../../Components/Assets/Gallery/FoodAidDorian/Dorian-20.jpg";
import image14 from "../../../../Components/Assets/Gallery/FoodAidDorian/Dorian-21.jpg";
import image15 from "../../../../Components/Assets/Gallery/FoodAidDorian/Dorian-22.jpg";
import image16 from "../../../../Components/Assets/Gallery/FoodAidDorian/Dorian-24.jpg";
import image17 from "../../../../Components/Assets/Gallery/FoodAidDorian/Dorian-15.jpg";
import image18 from "../../../../Components/Assets/Gallery/FoodAidDorian/Dorian-23.jpg";
import image19 from "../../../../Components/Assets/Gallery/FoodAidDorian/Dorian-9.jpg";
import image20 from "../../../../Components/Assets/Gallery/FoodAidDorian/Dorian-12.jpg";
import image21 from "../../../../Components/Assets/Gallery/FoodAidDorian/Dorian-3.jpg";
import image22 from "../../../../Components/Assets/Gallery/FoodAidDorian/Dorian-19.jpg";

const PhotoGallery2019Dorian = () => {
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
      <h1>FOOD AID ASSISTANCE TO BAHAMA(2019)</h1>

      <p className="photo-gallery-intro">
        To stand beside Bahama after hurricane Dorian with packed foods.
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

export default PhotoGallery2019Dorian;
