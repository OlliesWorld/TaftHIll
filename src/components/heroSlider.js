import React from 'react';
import AliceCarousel from 'react-alice-carousel';
// import 'react-alice-carousel/lib/alice-carousel.css';

import lake from "../assets/images/IMG_0042-9.jpg"
import pond from "../assets/images/IMG_0004.jpeg"
import sunset from "../assets/images/IMG_0173.jpeg"
import mountain from "../assets/images/IMG_4323.png"
import river from "../assets/images/IMG_4537.jpeg"


export default function HeroSlider() {
    return (
      
<AliceCarousel autoPlay autoPlayInterval="2000" infinite>
      
  <img src={lake} className="sliderHeroimg" alt="test"/>
  <img src={pond}  className="sliderHeroimg" alt="test"/>
  <img src={sunset}  className="sliderHeroimg" alt="test"/>
  <img src={mountain}  className="sliderHeroimg" alt="test"/>
  <img src={river}  className="sliderHeroimg" alt="test"/>
  </AliceCarousel>
 
  )
};

