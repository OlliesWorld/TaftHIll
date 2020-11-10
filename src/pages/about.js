import React from 'react';

import Layout from '../components/Layout';


import playdate from '../assets/images/Babyplaydate.jpg';
import bale from '../assets/images/Bale.jpg';
import kitties from '../assets/images/barnkitties.jpg';
import path from '../assets/images/bikepath2.jpg';
import foggy2 from '../assets/images/foggy2.jpg';

const IndexPage = () => (
  <Layout activeLink="about">
    <section className="page-section about-heading">
      <div className="container">
        <img
          className="sliderimg img-fluid mb-3 mb-lg-0 rounded"
          src={playdate}
          alt=""
        />
        <div className="about-heading-content">
          <div className="row">
            <div className="col-xl-9 col-lg-10 mx-auto">
              <div className="bg-faded rounded p-5">
                <h2 className="section-heading mb-4">
                  <span className="section-heading-upper">
                    Healthy & Happy
                  </span>
                  <span className="section-heading-lower">About Taft Hill Acres</span>
                </h2>
                <p className="mb-3">
                  Taft Hill Acres was established in 2012. It is owned and operated by Megan and Rene Lizarraga. Megan has been involved with horses her whole life, and received a B.S. in Equine Science from CSU in 1992. She spent a year training in England with the British Horse Society and has worked for several prominent trainers in Northern Colorado.
                </p>
                <p className="mb-3">
                  Taft Hill Acres is  located on 10 beautiful acres close to CSU and old town. We strive to create an atmosphere that is friendly and relaxed with the health and happiness of the horses as our number one priority.</p>

                <p className="mb-3">
                  Our clients are a mix of College
                  students and adults, western, english,
                  competitive and  pleasure riders.
                  It 's a small farm feeling with only 30
                  horses on the property.
                </p>
              </div>
            </div>
          </div>
        </div>
        <img
          className="sliderimg rounded right-side  mt-n5 "

          src={path}
          alt=""
        />
        <img
          className=" push-left rounded mt-3 "

          src={foggy2}
          alt=""
        />
        <img
          className="push-right rounded right-side offset-4 mt-n5 "

          src={bale}
          alt=""
        />
        <img
          className="sliderimg rounded right-side  mt-n5 "

          src={kitties}
          alt=""
        />
      </div>
    </section>
  </Layout>
);

export default IndexPage;
