import React from 'react'
import Slider from "react-slick";
import {slidesData} from './Data';

const SimpleSlider = () => {
  console.log(slidesData);
    var settings = {
        dots: true,
        infinite: true,
        speed: 500,
        slidesToShow: 1,
        slidesToScroll: 1
      };
      
    
      return (
        <div className="carousel">
    
          <div className="slider-wrapper">
    
            <Slider {...settings}>
    
              {slidesData.map((slide) =>
    
                <div className="slick-slide" key={slide.id}>
                    <h2 className="slick-slide-title">{slide.title}</h2>
                    <img className="slick-slide-image" src={`${slide.img}`} alt={slide.title} />
                    <div className="slick-slide-buttons">
                        <a href={`${slide.demo}`} title='view demo'><i class="fas fa-eye fa-2x"></i></a>
                        <a href={`${slide.github}`} title="Github"><i className="fab fa-github fa-2x"></i></a>
                    </div>
                    
                    
                </div>
    
              )}
    
            </Slider>
    
          </div>
    
        </div>
      );
}

export default SimpleSlider
