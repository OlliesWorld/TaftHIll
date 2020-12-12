import React from 'react';
import HeroSlider from '../components/heroSlider';

import Layout from '../components/Layout';



const IndexPage = () => (
  <Layout activeLink="home">

    <section className="page-section clearfix">
      <div className="container">
        <div aria-label="introduction" className="intro">

          <HeroSlider aria-label="images from around Taft Hill Acres"/>
        </div>
        <div className="text-center bg-faded p-3 rounded ">
          <h2 className="section-heading mb-2">
            <span className="section-heading-upper">Our priority</span>
            <span className="section-heading-lower">Happy and Healthy Horses</span>
          </h2>
          <p className="mb-0 paragraph">
          Happy and healthy horses have been the number one priority for Megan and Rene Lizarraga ever since the founding of Taft Hill Acres in 2012. A spacious, yet comfortable 10 acre boarding facility -- Taft Hill Acres is conveniently located 10 minutes north-west of the main CSU campus.
          </p>
          <br />
          <p className="mb-0 paragraph">
          Megan received her B.S. in Equine Science from Colorado State University in 1992. She has also spent a year studying stable management with the British Horse Society, and has worked for several prominent horse facilities on the Front Range. Taft Hill Acres is a family business. While Megan fulfills a management role, it is her husband Rene who takes care of the day to day operations.

            </p>
          <br />
          <p className="mb-3 paragraph">The team of two, along with help from the rest of the Taft Hill family, strive to create an atmosphere that is friendly and relaxed, with the health and happiness of the horses as their number one priority.
 </p>
 <br />
          <div className="intro-button mx-auto">
            <a aria-label="Contact Form Link" className="btn btn-outline-dark btn-xl" href="/contact">
              Visit Us Today!
              </a>
          </div>
        </div>
      </div>

    </section>

  </Layout>
);

export default IndexPage;
