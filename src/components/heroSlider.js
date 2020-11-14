import React from 'react';
import AliceCarousel from 'react-alice-carousel';
// import 'react-alice-carousel/lib/alice-carousel.css';

import pen from "../assets/images/Pen.jpg"
import club from "../assets/images/SerorityClub.jpg"
import snowy from "../assets/images/Snowy.jpg"
import sunsetcolor from "../assets/images/SunsetColor.jpg"
import foggy from "../assets/images/foggy.jpg"
import sunset from "../assets/images/sunset.jpg"
import teens from "../assets/images/Teens.jpg"
import Trio from "../assets/images/trio.jpg"


export default function HeroSlider() {
  return (

    <AliceCarousel autoPlay autoPlayInterval="2000" infinite>
      <img src={teens} className="sliderHeroimg" alt="test" />
      <img src={snowy} className="sliderHeroimg" alt="test" />
      <img src={club} className="sliderHeroimg" alt="test" />
      <img src={sunsetcolor} className="sliderHeroimg" alt="test" />
      <img src={foggy} className="sliderHeroimg" alt="test" />
      <img src={pen} className="sliderHeroimg" alt="test" />
      <img src={sunset} className="sliderHeroimg" alt="test" />
      {/* <img src={sign} className="sliderHeroimg" alt="test" /> */}
      <img src={Trio} className="sliderHeroimg" alt="test" />
    </AliceCarousel>

  )
};

