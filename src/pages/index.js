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
        <div className="text-center bg-faded p-4 rounded ">
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

    <section className="page-section cta">
      <div className="container">
        <div className="row">
          <div className="col-xl-9 mx-auto ">
            <div className="cta-inner  p-4 rounded">
              <h2 className="section-heading mb-4">
                <span className="section-heading-upper text-center">Our Promise</span>
                <span className="section-heading-lower text-center">What Makes Us Unique?</span>
              </h2>
              <p className="mb-0 paragraph">
                Most of our horses live in 2 and 3 horse group pens. They are provided with free choice grass hay. We use Hayhuts to ensure the hay is fresh and all hay is fed in Hay Chix nets to monitor consumption. This system is ideal, because it allows horses to graze all day as nature intended. Free feeding also greatly cuts down on negative herd interactions. Our horses are very happy and safe in their group pens and we wouldn't allow it any other way.  We also have a limited number of individual runs on a controlled hay diet.
              </p>
              <p className="mb-0 paragraph">
                In the summer and fall months we have approx. 3 acres of beautiful grass pasture turnout available to our boarders.  A rarity in Northern Colorado!
              </p>
              <p className="mb-0 paragraph">
                At THA we offer both partial board and full board options/levels.  This is a big part of what makes our farm so appealing, as it helps accommodate a range of budgets.  It also allows you to be involved in your own horses care, if you choose to be.  Our Farm Managers oversee and care for all horses equally, whether they are partial or full board clients.
                 </p>
            </div>
          </div>
        </div>
      </div>
    </section>

  </Layout>
);

export default IndexPage;
