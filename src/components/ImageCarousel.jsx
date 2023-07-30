import React, { useState, useEffect } from "react";
// import "./ImageCarousel.css"; // Create this file for custom CSS styles

const ImageCarousel = ({ images }) => {
  const [currentImageIndex, setCurrentImageIndex] = useState(0);

  // Function to go to the previous image
  const prevImage = () => {
    setCurrentImageIndex((prevIndex) =>
      prevIndex === 0 ? images.length - 1 : prevIndex - 1
    );
  };

  // Function to go to the next image
  const nextImage = () => {
    setCurrentImageIndex((prevIndex) => (prevIndex + 1) % images.length);
  };

  // Set up the interval for automatic sliding
  useEffect(() => {
    const slideInterval = setInterval(nextImage, 2000);
    return () => clearInterval(slideInterval);
  }, []);

  return (
    <div className="carousel-wrapper">
      <div className="caro-txt">
        GET STARTED WITH YOUR FAVOURITE SHOPPING
        <button className="caro-btn">
          Buy Now
        </button>
      </div>
      <div className="carousel-image">
        <img
          src={images[currentImageIndex]}
          alt={`Slide ${currentImageIndex}`}
        />
      </div>
    
    </div>
  );
};

export default ImageCarousel;
