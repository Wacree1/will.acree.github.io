import React, { useState } from 'react';
import './imageCarousel.css';

function ImageCarousel({ images, altText = 'Project screenshot' }) {
    const [currentIndex, setCurrentIndex] = useState(0);

    const goToPrevious = (e) => {
        e.stopPropagation();
        setCurrentIndex((prevIndex) =>
            prevIndex === 0 ? images.length - 1 : prevIndex - 1
        );
    };

    const goToNext = (e) => {
        e.stopPropagation();
        setCurrentIndex((prevIndex) =>
            prevIndex === images.length - 1 ? 0 : prevIndex + 1
        );
    };

    const goToSlide = (index) => {
        setCurrentIndex(index);
    };

    return (
        <div className="carousel-container">
            <div className="carousel-main">
                <img 
                    src={images[currentIndex]} 
                    alt={altText}
                    className="carousel-image"
                />
                {images.length > 1 && (
                    <>
                        <button className="carousel-button carousel-prev" onClick={goToPrevious}>
                            ❮
                        </button>
                        <button className="carousel-button carousel-next" onClick={goToNext}>
                            ❯
                        </button>
                    </>
                )}
            </div>
            
            {images.length > 1 && (
                <div className="carousel-indicators">
                    
                </div>
            )}
        </div>
    );
}

export default ImageCarousel;
