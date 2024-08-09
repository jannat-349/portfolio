import React from 'react';
import Slider from 'react-slick';
import '../styles/Carousel.css';

// Import images
import image1 from '../assets/images/homepage_bg3.jpeg';
import image2 from '../assets/images/homepage_bg4.jpeg';
import image3 from '../assets/images/homepage_bg5.jpeg';
import image4 from '../assets/images/homepage_bg6.jpeg';
import image5 from '../assets/images/homepage_bg7.jpeg';

const Carousel = () => {
    const settings = {
        dots: true,
        infinite: true,
        speed: 500,
        slidesToShow: 1,
        slidesToScroll: 1,
        autoplay: true,
        autoplaySpeed: 3000,
    };

    return (
        <Slider {...settings} className="carousel">
            <div className="carousel-item">
                <img src={image1} alt="Slide 1" />
            </div>
            <div className="carousel-item">
                <img src={image2} alt="Slide 2" />
            </div>
            <div className="carousel-item">
                <img src={image3} alt="Slide 3" />
            </div>
            <div className="carousel-item">
                <img src={image4} alt="Slide 4" />
            </div>
            <div className="carousel-item">
                <img src={image5} alt="Slide 5" />
            </div>
        </Slider>
    );
};

export default Carousel;
