import React from 'react';

import Layout from '../components/Layout';

import arena from '../assets/images/arenaskinny.jpg'
import jump from '../assets/images/jumping.jpg'
import penlength from '../assets/images/Penlength.jpg'
import runs from '../assets/images/runs.jpg'
import wash from '../assets/images/washrack.jpg'
import haybarn from '../assets/images/haybarn.jpg'

const IndexPage = () => (
  <Layout >
    <section className="page-section">
      <div className="container pb-sm-5">
        <div className="row">
          <div className="col-xs-12 col-md-8">
            <div className="cta-inner text-center rounded">
              <h2 className="section-heading mb-5">

                <span className="facility">Our facility</span>
              </h2>

              <ul className="list-unstyled list-hours mb-5 text-left mx-auto">
                <li className="list-unstyled-item list-hours-item d-flex">
                  150'x 300'  sand arena</li>
                <img
                  className="facility-img"
                  src={arena}
                  alt=""
                />
                <img
                  className="facility-img"
                  src={wash}
                  alt=""
                />
                <li className="list-unstyled-item list-hours-item d-flex">60' sand round pen
                </li>
                <li className="list-unstyled-item list-hours-item d-flex">
                  Sprinkler system for arena & fields</li>

                <li className="list-unstyled-item list-hours-item d-flex">Professional lessons and training
                </li>


                <li className="list-unstyled-item list-hours-item d-flex">
                  Professional lessons and training</li>
                <li className="list-unstyled-item list-hours-item d-flex">Access to stadium jumps
                </li>
                <img
                  className="facility-img"
                  src={penlength}
                  alt=""
                />
                <li className="list-unstyled-item list-hours-item d-flex">
                  Outdoor wash rack & Indoor Grooming Area</li>
                <li className="list-unstyled-item list-hours-item d-flex">Bathroom for boarders
                </li>
                <li className="list-unstyled-item list-hours-item d-flex">
                  Multiple locking tack rooms</li>
                <li className="list-unstyled-item list-hours-item d-flex">Trailer parking
                </li>
                <img
                  className="facility-img"
                  src={jump}
                  alt=""
                />
                <li className="list-unstyled-item list-hours-item d-flex">
                  Safe Bayco fencing throughout</li>
                <li className="list-unstyled-item list-hours-item d-flex">Automatic waterers
                </li>
                <li className="list-unstyled-item list-hours-item d-flex">
                  Trail riding directly off the property</li>
                <li className="list-unstyled-item list-hours-item d-flex">24-7 free feed hay in pens
                </li>
                <img
                  className="facility-img"
                  src={runs}
                  alt=""
                />
                <li className="list-unstyled-item list-hours-item d-flex">
                  TPartial and full board options</li>
                <li className="list-unstyled-item list-hours-item d-flex">Run & group pen boarding options
                </li>
              </ul>
              <img
                className="facility-img"
                src={haybarn}
                alt=""
              />
            </div>

          </div>
        </div>
      </div>
    </section>


  </Layout >
);

export default IndexPage;
