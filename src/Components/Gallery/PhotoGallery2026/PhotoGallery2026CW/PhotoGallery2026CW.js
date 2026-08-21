import React, { useState } from "react";
import "./PhotoGallery2026StylesCW.css";
import GCHLogo from "../../../../Components/Assets/Navbar/gch_logo.png";
import image1 from "../../../../Components/Assets/Gallery/CarrierWorkshop/Career-01.jpeg";
import image2 from "../../../../Components/Assets/Gallery/CarrierWorkshop/Career-02.jpeg";
import image3 from "../../../../Components/Assets/Gallery/CarrierWorkshop/Career-03.jpeg";
import image4 from "../../../../Components/Assets/Gallery/CarrierWorkshop/Career-04.jpeg";
import image5 from "../../../../Components/Assets/Gallery/CarrierWorkshop/Career-05.jpeg";
import image6 from "../../../../Components/Assets/Gallery/CarrierWorkshop/Career-06.jpeg";
import image7 from "../../../../Components/Assets/Gallery/CarrierWorkshop/Career-07.jpeg";
import image8 from "../../../../Components/Assets/Gallery/CarrierWorkshop/Career-08.jpeg";
import image9 from "../../../../Components/Assets/Gallery/CarrierWorkshop/Career-09.jpeg";
import image10 from "../../../../Components/Assets/Gallery/CarrierWorkshop/Career-10.jpeg";
import image11 from "../../../../Components/Assets/Gallery/CarrierWorkshop/Career-48.jpeg";
import image12 from "../../../../Components/Assets/Gallery/CarrierWorkshop/Career-11.jpeg";
import image13 from "../../../../Components/Assets/Gallery/CarrierWorkshop/Career-12.jpeg";
import image14 from "../../../../Components/Assets/Gallery/CarrierWorkshop/Career-13.jpeg";
import image15 from "../../../../Components/Assets/Gallery/CarrierWorkshop/Career-14.jpeg";
import image16 from "../../../../Components/Assets/Gallery/CarrierWorkshop/Career-15.jpeg";
import image17 from "../../../../Components/Assets/Gallery/CarrierWorkshop/Career-16.jpeg";
import image18 from "../../../../Components/Assets/Gallery/CarrierWorkshop/Career-17.jpeg";
import image19 from "../../../../Components/Assets/Gallery/CarrierWorkshop/Career-18.jpeg";
import image20 from "../../../../Components/Assets/Gallery/CarrierWorkshop/Career-19.jpeg";
import image21 from "../../../../Components/Assets/Gallery/CarrierWorkshop/Career-20.jpeg";
import image22 from "../../../../Components/Assets/Gallery/CarrierWorkshop/Career-21.jpeg";
import image23 from "../../../../Components/Assets/Gallery/CarrierWorkshop/Career-22.jpeg";
import image24 from "../../../../Components/Assets/Gallery/CarrierWorkshop/Career-23.jpeg";
import image25 from "../../../../Components/Assets/Gallery/CarrierWorkshop/Career-24.jpeg";
import image26 from "../../../../Components/Assets/Gallery/CarrierWorkshop/Career-25.jpeg";
import image27 from "../../../../Components/Assets/Gallery/CarrierWorkshop/Career-26.jpeg";
import image28 from "../../../../Components/Assets/Gallery/CarrierWorkshop/Career-27.jpeg";
import image29 from "../../../../Components/Assets/Gallery/CarrierWorkshop/Career-28.jpeg";
import image30 from "../../../../Components/Assets/Gallery/CarrierWorkshop/Career-29.jpeg";
import image31 from "../../../../Components/Assets/Gallery/CarrierWorkshop/Career-30.jpeg";
import image32 from "../../../../Components/Assets/Gallery/CarrierWorkshop/Career-31.jpeg";
import image33 from "../../../../Components/Assets/Gallery/CarrierWorkshop/Career-32.jpeg";
import image34 from "../../../../Components/Assets/Gallery/CarrierWorkshop/Career-33.jpeg";
import image35 from "../../../../Components/Assets/Gallery/CarrierWorkshop/Career-34.jpeg";
import image36 from "../../../../Components/Assets/Gallery/CarrierWorkshop/Career-35.jpeg";
import image37 from "../../../../Components/Assets/Gallery/CarrierWorkshop/Career-36.jpeg";
import image38 from "../../../../Components/Assets/Gallery/CarrierWorkshop/Career-37.jpeg";
import image39 from "../../../../Components/Assets/Gallery/CarrierWorkshop/Career-38.jpeg";
import image40 from "../../../../Components/Assets/Gallery/CarrierWorkshop/Career-39.jpeg";
import image41 from "../../../../Components/Assets/Gallery/CarrierWorkshop/Career-40.jpeg";
import image42 from "../../../../Components/Assets/Gallery/CarrierWorkshop/Career-41.jpeg";
import image43 from "../../../../Components/Assets/Gallery/CarrierWorkshop/Career-42.jpeg";
import image44 from "../../../../Components/Assets/Gallery/CarrierWorkshop/Career-43.jpeg";
import image45 from "../../../../Components/Assets/Gallery/CarrierWorkshop/Career-44.jpeg";
import image46 from "../../../../Components/Assets/Gallery/CarrierWorkshop/Career-45.jpeg";
import image47 from "../../../../Components/Assets/Gallery/CarrierWorkshop/Career-46.jpeg";
import image48 from "../../../../Components/Assets/Gallery/CarrierWorkshop/Career-47.jpeg";
import image49 from "../../../../Components/Assets/Gallery/CarrierWorkshop/Career-49.jpeg";
import image50 from "../../../../Components/Assets/Gallery/CarrierWorkshop/Career-50.jpeg";

const PhotoGallery2026CW = () => {
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
    image48,
    image49,
    image50,
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

      <h1>CAREER WORKSHOP ( JANUARY 2026)</h1>

      <p className="photo-gallery-intro">
        To assist the youth in their career advancement with right advice from
        the ualified professionals.
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

export default PhotoGallery2026CW;
