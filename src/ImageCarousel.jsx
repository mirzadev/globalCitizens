import React, { useState, useEffect } from 'react';

const ImageCarousel = ({ images }) => {
    const [index, setIndex] = useState(0);
    const [isFullscreen, setIsFullscreen] = useState(false);

    const handleImageClick = () => {
        setIsFullscreen(true);
    };

    const handleCloseFullscreen = () => {
        setIsFullscreen(false);
    };


    useEffect(() => {
        const handleKeyDown = (event) => {
            if (event.key === 'ArrowLeft') {
                setIndex((prevIndex) => (prevIndex === 0 ? images.length - 1 : prevIndex - 1));
            } else if (event.key === 'ArrowRight') {
                setIndex((prevIndex) => (prevIndex === images.length - 1 ? 0 : prevIndex + 1));
            }
            else if (event.key === 'Escape') {
                handleCloseFullscreen();
            }
        };

        window.addEventListener('keydown', handleKeyDown);

        return () => {
            window.removeEventListener('keydown', handleKeyDown);
        };
    }, [images.length]);


    return (
        <div>
            {isFullscreen ? (
                <div className="fixed top-0 left-0 w-full h-full bg-black flex items-center justify-center" onClick={handleCloseFullscreen}>
                    <img src={images[index]} alt="Fullscreen" className="max-w-full max-h-full" />
                </div>
            ) : (
                <div className="w-400 h-400 relative">
                    <img src={images[index]} alt="Thumbnail" className="w-72 object-cover cursor-pointer" onClick={handleImageClick} />
                </div>
            )}
        </div>
    );
};

export default ImageCarousel;
