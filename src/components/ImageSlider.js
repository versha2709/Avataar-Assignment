import React, { useState } from 'react';
import { FaArrowAltCircleRight, FaArrowAltCircleLeft } from 'react-icons/fa';
import './../styles/variable.scss';
import './../components/ImageSlider.scss';

const ImageSlider = ({ slides }) => {
  const [current, setCurrent] = useState(0);
  const length = slides.length;

  const nextSlide = () => {
    setCurrent(current === length - 1 ? 0 : current + 1);
  };

  const prevSlide = () => {
    setCurrent(current === 0 ? length - 1 : current - 1);
  };

  if (!Array.isArray(slides) || slides.length <= 0) {
    return null;
  }

  return (
    <section className='slider-container'>
      <FaArrowAltCircleLeft className='left-arrow' onClick={prevSlide} />
      <div className='slider'>
        <div className='prev-image'>
          <img src={slides[(current - 1 + length) % length].image} alt='prev' />
        </div>
        {slides.map((slide, index) => (
          <div
            className={index === current ? 'slide active' : 'slide'}
            key={index}
          >
            {index === current && (
              <div className='current-image'>
                <img src={slide.image} alt={`slide-${index}`} className='image' />
              </div>
            )}
          </div>
        ))}
        <div className='next-image'>
          <img src={slides[(current + 1) % length].image} alt='next' />
        </div>
      </div>
      <FaArrowAltCircleRight className='right-arrow' onClick={nextSlide} />
    </section>
  );
};

export default ImageSlider;
