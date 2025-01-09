// SlideShow.js
import React, { useState } from "react";
import "./Slideshows.css";

const SlideShow = ({ slides }) => {
  const [currentSlide, setCurrentSlide] = useState(0);

  const nextSlide = () => {
    setCurrentSlide((prevSlide) => (prevSlide + 1) % slides.length);
  };

  const prevSlide = () => {
    setCurrentSlide(
      (prevSlide) => (prevSlide - 1 + slides.length) % slides.length
    );
  };

  return (
    <div className="slideshow">
      <button onClick={prevSlide} className="nav-button prev-button">
        &lt;
      </button>
      <div className="slide-container">
        {slides.map((slide, index) => (
          <div
            key={index}
            className={`slide ${index === currentSlide ? "active" : ""}`}
          >
            {slide}
          </div>
        ))}
      </div>
      <button onClick={nextSlide} className="nav-button next-button">
        &gt;
      </button>
    </div>
  );
};

export default SlideShow;
