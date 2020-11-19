import React from 'react';

import Layout from '../components/Layout';
import Grid from '../components/Grid'

import bridge from '../assets/images/bridgearena.jpg'


const IndexPage = () => (
  <Layout activeLink="about">
    <section arial-label="About Taft Hill Acres" className="page-section about-heading">
      <div className="container">
        <img
          className="sliderimg img-fluid mb-1 mb-lg-0 rounded"
          src={bridge}
          alt="Looking at main barn across bridge"
          aria-label="Looking at main barn across bridge"
        />
        <div className="about-heading-content">
          <div className="row">
            <div className="col-xl-9 col-lg-10 mx-auto">
              <div className="bg-faded rounded p-3">
                <h2 className="section-heading mb-4">
                  <span className="section-heading-upper">
                    Healthy & Happy
                  </span>
                  <span className="section-heading-lower">About</span>
                </h2>
                <p className="mb-3">
                  Most horses at Taft Hill Acres live in herds of 2 to 5 horses. All horses have free access to high quality grass hay, automatic heated waterers, and adequate shelter. All pens have safe Bayco fencing and are cleaned daily. We pride ourselves on having one of the cleanest horse farms on the front range.  We use Haychix slow feed nets and hay is fed from Hayhut feeders to ensure hay is fresh and dry at all times. Free feeding horses is ideal because horses can graze all day as nature intended but it also cuts down greatly on negative herd interactions. The horses are happy and peaceful in their herds at our Fort Collins boarding facility.
                </p>
                <p className="mb-3">
                  Taft Hill Acres provides partial and full care options to meet individual’s needs. All horse regardless of board option are cared for and overseen by the farm. We have approximately 3 acres of grass for turnout and have options for turnout, blanketing and grain services. We provide group  pens as well as have a limited number of individual runs. </p>

                <p className="mb-3">
                  Fort Collins has one of the best bike/equestrian trail systems on the front range. Taft Hill Acres as direct access to the trail system. You can actually ride your horse to Old Town if you want! Several remote riding opportunities are available with just a short trailer drive.
                </p>
              </div>
            </div>
          </div>
        </div>
        
      </div>
    </section>
    <section aria-label="Grid gallery of variety of photos">
      <p className="text-center option-two">click photo to enlarge ⤵</p>
      <Grid />
    </section>
  </Layout>
);

export default IndexPage;
