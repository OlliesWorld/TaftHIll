import React from 'react';

import Layout from '../components/Layout';

import barn from '../assets/images/barn.jpeg';
import rainbow from '../assets/images/rainbow.jpg';
const IndexPage = () => (
  <Layout activeLink="about">
    <section className="page-section about-heading">
      <div className="container">
        <img
          className="intro-img img-fluid mb-3 mb-lg-0 rounded"
          src={barn}
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
          className="intro-img rounded right-side offset-6 mt-n5 "

          src={rainbow}
          alt=""
        />
      </div>
    </section>
  </Layout>
);

export default IndexPage;
