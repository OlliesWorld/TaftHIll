import React from 'react';

import Layout from '../components/Layout';
import Grid from '../components/Grid'

import bridge from '../assets/images/bridgearena.jpg'


const IndexPage = () => (
  <Layout k="about">
    <section arial-label="About Taft Hill Acres" className="page-section about-heading">
      <div className="container">
        <img
          className="mx-auto d-flex contact-img"
          src={bridge}
          alt="Looking at main barn across bridge and sand arena"
        />
        <div className="about-heading-content">
          <div className="row">
            <div className="col-xl-9 col-lg-10 mx-auto">
              <div className="bg-faded rounded p-3">
                <h2 className="section-heading mb-4">
                  <span className="section-heading-upper">
                    The Basics
                  </span>
                  <span className="section-heading-lower">About</span>
                </h2>
                <p className="mb-3 paragraph">
                Most horses at Taft Hill live in herds of 2 to 5. However, we do offer a limited number of individual runs. The herds are free fed, with 24/7 access to high quality grass hay, as well as heated automatic waterers, and adequate shelter. Access to free choice hay is ideal because it allows the horses to graze all day as nature intended, and it  greatly reduces the number of negative herd interactions. We make sure that only fresh, dry hay is being fed by utilizing Haychix slow feed nets and Hayhut feeders. Our fencing consists of Bayco or wood post and rail. For the horses residing in our individual runs, feeding can be customized, to some extent, to suit their needs. Both the group pens and individual runs are cleaned daily. We take pride in being one of the cleanest facilities on the Front Range.

                </p>
                
                </div>
                </div>
            <div className="col-xl-9 col-lg-10 mt-4 mx-auto">
              <div className="bg-faded rounded p-3">
                <h2 className="section-heading mb-4">
                  <span className="section-heading-upper">
                    Beyond Basics
                  </span>
                  </h2>
                  <p className="mb-3 paragraph">
                  Taft Hill provides a few optional services beyond the basics. From blanketing and grain services, to turn-out services on our 3 acre pasture, a care plan can be created that meets your individual needs. While we would love to take credit for everything that makes our facility great, part of its charm comes from our location. Fort Collins has one of the best multi-purpose trail systems in Colorado and we are luckily enough to have direct access to this system. This means trail riding without trailering.
                </p>
            </div>
          </div>
        </div>
        </div>
      </div>
    </section>
    <section aria-label="Grid gallery of variety of horse and landscapes">
      <p className="text-center option-two">click photo to enlarge ⤵</p>
      <Grid />
    </section>
  </Layout>
);

export default IndexPage;
