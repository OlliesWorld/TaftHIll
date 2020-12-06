import React from 'react';
import AliceCarousel from 'react-alice-carousel';
import 'react-alice-carousel/lib/alice-carousel.css';

import Pen from "../assets/images/Pen.jpg"
import Club from "../assets/images/SerorityClub.jpg"
import Snowy from "../assets/images/Snowy.jpg"
import Sunsetcolor from "../assets/images/SunsetColor.jpg"
import Foggy from "../assets/images/foggy.jpg"
import Sunrise from "../assets/images/sunset.jpg"
import Teens from "../assets/images/Teens.jpg"
import Trio from "../assets/images/trio.jpg"
import Jump from "../assets/images/jumping.jpg"


export default function HeroSlider() {
  return (

    <AliceCarousel autoPlay autoPlayInterval="2000" autoHeight infinite>
      <img src={Teens} className="sliderHeroimg" alt="three horse noses sticking through gate at boarding facility" />
      <img src={Snowy} className="sliderHeroimg" alt="Snowy look across bridge toward boarded horses in Fort Collin Colorado"/>
      <img src={Club} className="sliderHeroimg" alt="Horses in shelter while it rains in Fort Collins" />
      <img src={Sunsetcolor} className="sliderHeroimg" alt="Cloudy Sunset with horses at horse boarding facility"  />
      <img src={Jump} className="sliderHeroimg" alt="Jumps available to use at Taft Hill Acres"  />
      <img src={Foggy} className="sliderHeroimg" alt="Foggy morning looking across the pens of horses"  />
      <img src={Pen} className="sliderHeroimg" alt="Horses eating out of hayhut in group boarding pen" />
      <img src={Sunrise} className="sliderHeroimg" alt="Horses watching sunrise at Taft Hill Acres Fort Collins Colorado"  />
      <img src={Trio} className="sliderHeroimg" alt="Trio of horses in the morning sun at horse boarding facility" />
    </AliceCarousel>

  )
};

