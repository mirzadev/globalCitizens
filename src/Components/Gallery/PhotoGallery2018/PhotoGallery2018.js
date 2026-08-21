import React, { useState } from "react";
import "./PhotoGallery2018Styles.css";
import Footer from "../../Footer/Footer";
import GCHLogo from "../../../Components/Assets/Navbar/gch_logo.png";
import image1 from "../../../Components/Assets/Gallery/Rohingra/rohingya-1.jpg";
import image2 from "../../../Components/Assets/Gallery/Rohingra/rohingya-2.jpg";
import image3 from "../../../Components/Assets/Gallery/Rohingra/rohingya-4.jpg";
import image4 from "../../../Components/Assets/Gallery/Rohingra/rohingya-7.jpg";
import image5 from "../../../Components/Assets/Gallery/Rohingra/rohingya-8.jpg";
import image6 from "../../../Components/Assets/Gallery/Rohingra/rohingya-9.jpg";
import image7 from "../../../Components/Assets/Gallery/Rohingra/rohingya-10.jpg";
import image8 from "../../../Components/Assets/Gallery/Rohingra/rohingya-11.jpg";
import image9 from "../../../Components/Assets/Gallery/Rohingra/rohingya-13.jpg";
import image10 from "../../../Components/Assets/Gallery/Rohingra/rohingya-14.jpg";
import image11 from "../../../Components/Assets/Gallery/Rohingra/rohingya-15.jpg";
import image12 from "../../../Components/Assets/Gallery/Rohingra/rohingya-16.jpg";
import image13 from "../../../Components/Assets/Gallery/Rohingra/rohingya-17.jpg";
import image14 from "../../../Components/Assets/Gallery/Rohingra/rohingya-18.jpg";
import image15 from "../../../Components/Assets/Gallery/Rohingra/rohingya-19.jpg";
import image16 from "../../../Components/Assets/Gallery/Rohingra/rohingya-20.jpg";
import image17 from "../../../Components/Assets/Gallery/Rohingra/rohingya-22.jpg";
import image18 from "../../../Components/Assets/Gallery/Rohingra/rohingya-23.jpg";
import image19 from "../../../Components/Assets/Gallery/Rohingra/rohingya-25.jpg";
import image20 from "../../../Components/Assets/Gallery/Rohingra/rohingya-28.jpg";
import image21 from "../../../Components/Assets/Gallery/Rohingra/rohingya-29.jpg";
import image22 from "../../../Components/Assets/Gallery/Rohingra/rohingya-30.jpg";
import image23 from "../../../Components/Assets/Gallery/Rohingra/rohingya-34.jpg";
import image24 from "../../../Components/Assets/Gallery/Rohingra/rohingya-35.jpg";
import image25 from "../../../Components/Assets/Gallery/Rohingra/rohingya-37.jpg";
import image26 from "../../../Components/Assets/Gallery/Rohingra/rohingya-38.jpg";
import image27 from "../../../Components/Assets/Gallery/Rohingra/rohingya-39.jpg";
import image28 from "../../../Components/Assets/Gallery/Rohingra/rohingya-40.jpg";
import image29 from "../../../Components/Assets/Gallery/Rohingra/rohingya-41.jpg";
import image30 from "../../../Components/Assets/Gallery/Rohingra/rohingya-42.jpg";
import image31 from "../../../Components/Assets/Gallery/Rohingra/rohingya-43.jpg";
import image32 from "../../../Components/Assets/Gallery/Rohingra/rohingya-45.jpg";
import image33 from "../../../Components/Assets/Gallery/Rohingra/rohingya-46.jpg";
import image34 from "../../../Components/Assets/Gallery/Rohingra/rohingya-48.jpg";
import image35 from "../../../Components/Assets/Gallery/Rohingra/rohingya-50.jpg";
import image36 from "../../../Components/Assets/Gallery/Rohingra/rohingya-51.jpg";
import image37 from "../../../Components/Assets/Gallery/Rohingra/rohingya-1A.jpg";
import image38 from "../../../Components/Assets/Gallery/Rohingra/rohingya-24.jpg";
import image39 from "../../../Components/Assets/Gallery/Rohingra/rohingya-26.jpg";
import image40 from "../../../Components/Assets/Gallery/Rohingra/rohingya-27.jpg";
import image41 from "../../../Components/Assets/Gallery/Rohingra/rohingya-31.jpg";
import image42 from "../../../Components/Assets/Gallery/Rohingra/rohingya-32.jpg";
import image43 from "../../../Components/Assets/Gallery/Rohingra/rohingya-33.jpg";
import image44 from "../../../Components/Assets/Gallery/Rohingra/rohingya-36.jpg";
import image45 from "../../../Components/Assets/Gallery/Rohingra/rohingya-44.jpg";
import image46 from "../../../Components/Assets/Gallery/Rohingra/rohingya-47.jpg";
import image47 from "../../../Components/Assets/Gallery/Rohingra/rohingya-49.jpg";

const PhotoGallery2018 = () => {
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
    image28,
    image29,
    image30,
    image31,
    image32,
    image33,
    image34,
    image35,
    image36,
    image37,
    image38,
    image39,
    image40,
    image41,
    image42,
    image43,
    image44,
    image45,
    image46,
    image47,
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

      <h1>ROHINGYA ISSUE IN BANGLADESH(2018)</h1>

      <p className="photo-gallery-intro">
        Assistance to global humanity - Rohingya Refugees in Bangladesh. Global
        Citizens for Humanity Assisted with medicine and treatment of distress
        Rohingya in cooperation with Bangladesh Army Medical Team.
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
      {/* <Footer /> */}
    </div>
  );
};

export default PhotoGallery2018;
