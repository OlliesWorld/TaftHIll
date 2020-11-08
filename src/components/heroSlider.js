import React from 'react';
import AliceCarousel from 'react-alice-carousel';
// import 'react-alice-carousel/lib/alice-carousel.css';

import pen from "../assets/images/Pen.jpg"
import club from "../assets/images/SerorityClub.jpg"
import snowy from "../assets/images/Snowy.jpg"
import sunsetcolor from "../assets/images/sunsetColor.jpg"
import snowbarn from "../assets/images/SnowyBarn.jpg"
import sunset from "../assets/images/sunset.jpg"
import teens from "../assets/images/Teens.jpg"
import trio from "../assets/images/Trio.jpg"

export default function HeroSlider() {
  return (

    <AliceCarousel autoPlay autoPlayInterval="2000" infinite>

      <img src={snowy} className="sliderHeroimg" alt="test" />
      <img src={club} className="sliderHeroimg" alt="test" />
      <img src={sunsetcolor} className="sliderHeroimg" alt="test" />
      <img src={snowbarn} className="sliderHeroimg" alt="test" />
      <img src={pen} className="sliderHeroimg" alt="test" />
      <img src={sunset} className="sliderHeroimg" alt="test" />
      <img src={teens} className="sliderHeroimg" alt="test" />
      <img src={trio} className="sliderHeroimg" alt="test" />
    </AliceCarousel>

  )
};

