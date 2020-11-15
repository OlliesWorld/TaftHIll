import React from 'react';
import HeroSlider from '../components/heroSlider';

import Layout from '../components/Layout';

// import arena from '../assets/images/arena.jpg';

const IndexPage = () => (
  <Layout activeLink="home">
    <section className="page-section clearfix">
      <div className="container">
        <div className="intro">

          <HeroSlider />
        </div>
        <div className="text-center bg-faded p-3 rounded ">
          <h2 className="section-heading mb-2">
            <span className="section-heading-upper">Our priority</span>
            <span className="section-heading-lower">Happy and Healthy Horse</span>
          </h2>
          <p className="mb-0 paragraph">
            Taft Hill Acres, located on 10 acres, minutes away from Colorado State University was established as a boarding facility in Fort Collins, Colorado in 2012. It is owned and operated by Megan and Rene Lizarraga. Megan received her B.S. in Equine Science from Colorado State University in 1992. In addition she spent a year studying stable management in England with The British Horse Society and has worked for several prominent horse facilities on the front range. Rene is hands on, managing the daily needs of the horses and the boarding facility.
            </p>
          <br />
          <p className="mb-3 paragraph">Taft Hill Acres strives to create an atmosphere that is friendly and relaxed with the health and happiness of the horses as our number one priority. </p>
          <div className="intro-button mx-auto">
            <a className="btn btn-outline-dark btn-xl" href="/contact">
              Visit Us Today!
              </a>
          </div>
        </div>
      </div>

    </section>

  </Layout>
);

export default IndexPage;
