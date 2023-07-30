import React from "react";
import SliderImage from "./SliderImage";

const App = () => {
  // Sample image URLs (you can replace them with your own images)
  const images = [
    "image1.jpg",
    "image2.jpg",
    "image3.jpg",
    // Add more image URLs as needed
  ];

  return (
    <div>
      <h1>My Image Slider</h1>
      <SliderImage images={images} interval={3000} />
    </div>
  );
};

export default App;
