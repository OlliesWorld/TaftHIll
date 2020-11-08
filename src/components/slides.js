import React from "react";

import AliceCarousel from 'react-alice-carousel';
import "react-alice-carousel/lib/alice-carousel.css";
import Kissing from '../assets/images/kissingkids.jpg';
import Cutie from '../assets/images/cutie.jpg';



export default function Slider() {
  return (
    <div className="Slider">
      <AliceCarousel autoPlay autoPlayInterval="2500">

        <img
          className="sliderimg"
          src={Kissing}
          alt="Horses kissing over fence"
        />
        <div className="intro-text left-0 text-center bg-faded p-5 rounded">
          <p className="mb-3">
            This is the best boarding facility I have ever had my horses at. Meg, Rene and Anna are great people, and it has been a pleasure to have them take care of my animals. I am extremely picky about the care of my horses, having taken care of horses professionally. This barn has an amazing group of boarders. In the long time that I've been here, there has never been any drama. Meg is excellent at addressing any issues that may arise in a prompt and efficient manner. I highly recommend this barn.
            </p>
          <h2 className="section-heading mb-4">
            <span className="section-heading-upper">~Marian</span>

          </h2>

        </div>


        <img
          className="sliderimg"
          src={Cutie}
          alt="Horse looking at camera"
        />
        <div className="intro-text left-0 text-center bg-faded p-5 rounded">
          <p className="mb-3">
            Best barn ever! Quality care for all of the horses and the nicest barn owners. Meg, Rene, and Anna go the extra mile to make sure all of the horses and their owners are well taken care of.
            </p>
          <h2 className="section-heading mb-4">
            <span className="section-heading-upper">~Janet, DVM</span>

          </h2>

        </div>


        <div className="intro-text left-0 text-center bg-faded p-5 rounded">
          <p className="mb-3">
            I have had my horse here for two years and he has never been happier! So much care and effort goes into grouping the horses together  appropriately in their pens. Everyone is extremely friendly and I am currently working with Taylor to start my horse.  The progress he has made has been incredible!  Taylor is great to work with, she truly cares about building the proper foundation on my young horse.  I can't wait to continue to train with her!
            </p>
          <h2 className="section-heading mb-4">
            <span className="section-heading-upper">~Kristin</span>

          </h2>


        </div>




      </AliceCarousel>
    </div>
  );
}