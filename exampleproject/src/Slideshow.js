import React from 'react';
import { Slide, Fade, Zoom } from 'react-slideshow-image';
import { useState } from 'react';

const Slideshow = ({ type, images }) => {


  const renderSlideshow = () => {
    switch (type) {
      case 'slide':
        return (
          <Slide images={images}>
            {images.map((image, index) => (
              <div key={index} className="each-slide-effect">
                <div className="slide-item" style={{ 'backgroundImage': `url(${image})` }}>
                  
                </div>
              </div>
            ))}
          </Slide>
        );

      case 'fade':
        return (
          <Fade images={images}>
            {images.map((image, index) => (
              <div key={index} className="each-slide-effect">
                <img className="fade-item" src={image} />
              </div>
            ))}
          </Fade>
        );

      case 'zoom':
        return (
          <Zoom images={images}>
            {images.map((image, index) => (
              <div key={index} className="each-slide-effect">
                <img className="zoom-item" src={image} />
              </div>
            ))}
          </Zoom>
        );

      default:
        return null;
    }
  };

  return (
    <div className="slideshow">
      {renderSlideshow()}
    </div>
  );
};

export default Slideshow;
