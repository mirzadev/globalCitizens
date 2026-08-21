import React, { useState } from "react";
import "./GCHPhotoGalleryStyles.css";
import image1 from "../../../Components/Assets/Gallery/GalleryMain/rohingya-3.jpg";
import image2 from "../../../Components/Assets/Gallery/GalleryMain/rohingya-6.jpg";
import image3 from "../../../Components/Assets/Gallery/GalleryMain/rohingya-12.jpg";
import image4 from "../../../Components/Assets/Gallery/GalleryMain/rohingya-21.jpg";
import image5 from "../../../Components/Assets/Gallery/GalleryMain/rohingya-25.jpg";
import image6 from "../../../Components/Assets/Gallery/GalleryMain/motherLang-7.jpg";
import image7 from "../../../Components/Assets/Gallery/GalleryMain/retailSecurity-1.jpg";
import image8 from "../../../Components/Assets/Gallery/GalleryMain/AntiPLasticCampaign-6.jpg";
import image9 from "../../../Components/Assets/Gallery/GalleryMain/AntiPLasticCampaign-10.jpg";
import image10 from "../../../Components/Assets/Gallery/GalleryMain/AntiPLasticCampaign-26.jpg";
import image11 from "../../../Components/Assets/Gallery/GalleryMain/Dorian-6.jpg";
import image12 from "../../../Components/Assets/Gallery/GalleryMain/Dorian-13.jpg";
import image13 from "../../../Components/Assets/Gallery/GalleryMain/Dorian-22.jpg";
import image14 from "../../../Components/Assets/Gallery/GalleryMain/Floor_Bangladesh_24_006.jpg";
import image15 from "../../../Components/Assets/Gallery/GalleryMain/PsychologistSemi_2024_001.jpg";
import image16 from "../../../Components/Assets/Gallery/GalleryMain/Turkey-1.jpg";
import image17 from "../../../Components/Assets/Gallery/GalleryMain/EQ_Venezuela-6.jpeg";
import image18 from "../../../Components/Assets/Gallery/GalleryMain/retailSecurity-10.jpg";

const GCHPhotoGallery = () => {
  // Array to hold image file paths
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
  ];

  const [isModalOpen, setIsModalOpen] = useState(false); // State for modal open/close
  const [currentImageIndex, setCurrentImageIndex] = useState(0); // Index for current image in modal

  // Open modal and set the selected image
  const openModal = (index) => {
    setIsModalOpen(true);
    setCurrentImageIndex(index);
  };

  // Close modal
  const closeModal = () => {
    setIsModalOpen(false);
  };

  // Go to the next image
  const nextImage = () => {
    setCurrentImageIndex((prevIndex) => (prevIndex + 1) % images.length);
  };

  // Go to the previous image
  const prevImage = () => {
    setCurrentImageIndex(
      (prevIndex) => (prevIndex - 1 + images.length) % images.length,
    );
  };

  return (
    <div className="PhotoGallery-container">
      <h1>GCH PHOTO GALLERY</h1>
      {/* Display the image thumbnails in a grid */}
      <div className="photo_gallery">
        {images.map((image, index) => (
          <div
            className="thumbnail"
            key={index}
            onClick={() => openModal(index)}
          >
            <img src={image} alt={`thumbnail-${index}`} />
          </div>
        ))}
      </div>

      {/* Modal for image enlargement */}
      {isModalOpen && (
        <div className="photo-modal">
          <button className="photo-close" onClick={closeModal}>
            ×
          </button>

          <button className="photo-arrow photo-prev" onClick={prevImage}>
            ❮
          </button>

          <img
            src={images[currentImageIndex]}
            alt={`modal-img-${currentImageIndex}`}
            className="photo-modal-image"
          />

          <button className="photo-arrow photo-next" onClick={nextImage}>
            ❯
          </button>
        </div>
      )}
    </div>
  );
};

export default GCHPhotoGallery;
