import React from 'react';

import Layout from '../components/Layout';
import '../assets/sass/facilitySlider.css'

import arena from '../assets/images/arenaskinny.jpg'
import jump from '../assets/images/jumping.jpg'
// import penlength from '../assets/images/Penlength.jpg'
import runs from '../assets/images/runs.jpg'
import wash from '../assets/images/washrack.jpg'
import haybarn from '../assets/images/haybarn.jpg'
// import cayla from '../assets/images/Caylasroundpen.jpg';

const IndexPage = () => (
  <Layout activeLink="facility">
    <section className="page-section">

      <div className="container pb-sm-5">
        <div className="row">
          <div className="col-md-6">
            <div className="cta-inner ">
              <h2 className="section-heading mb-5">

                <span className="facility">Our facility</span>
              </h2>

              <ul className="list-unstyled list-hours mb-5 text-left mx-auto">
                <li className="list-unstyled-item list-hours-item d-flex">
                  150'x 300'  sand arena</li>


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



                <li className="list-unstyled-item list-hours-item d-flex">
                  Outdoor wash rack & Indoor Grooming Area</li>

                <li className="list-unstyled-item list-hours-item d-flex">Bathroom for boarders
                </li>
                <li className="list-unstyled-item list-hours-item d-flex">
                  Multiple locking tack rooms</li>
                <li className="list-unstyled-item list-hours-item d-flex">Trailer parking
                </li>

                <li className="list-unstyled-item list-hours-item d-flex">
                  Safe Bayco fencing throughout</li>
                <li className="list-unstyled-item list-hours-item d-flex">Automatic waterers
                </li>

                <li className="list-unstyled-item list-hours-item d-flex">
                  Trail riding directly off the property</li>

                <li className="list-unstyled-item list-hours-item d-flex">24-7 free feed hay in pens
                </li>

                <li className="list-unstyled-item list-hours-item d-flex">
                  Partial and full board options</li>


                <li className="list-unstyled-item list-hours-item d-flex">Run & group pen boarding options
                </li>

              </ul>
            </div>
          </div>
          <div className="col-md-6">
            <ul class="slides">
              <li id="slide1">
                <img
                  className=""
                  src={arena}
                  alt=""
                />
              </li>
              <li id="slide2">
                <img
                  className=""
                  src={jump}
                  alt=""
                />
              </li>
              <li id="slide3">
                <img
                  className=""
                  src={wash}
                  alt=""
                />
              </li>
              <li id="slide4">
                <img
                  className=""
                  src={haybarn}
                  alt=""
                />
              </li>
              <li id="slide5">
                <img
                  className=""
                  src={runs}
                  alt=""
                />
              </li>
            </ul>
            <ul class="thumbnails">
              <li>
                <a href="#slide1">
                  <img
                    className=""
                    src={arena}
                    alt=""
                  />
                </a>
              </li>
              <li>
                <a href="#slide2">
                  <img
                    className=""
                    src={jump}
                    alt=""
                  />
                </a>
              </li>
              <li>
                <a href="#slide3">
                  <img
                    className=""
                    src={wash}
                    alt=""
                  />
                </a>
              </li>
              <li>
                <a href="#slide4">
                  <img
                    className=""
                    src={haybarn}
                    alt=""
                  />
                </a>
              </li>
              <li>
                <a href="#slide5">
                  <img
                    className=""
                    src={runs}
                    alt=""
                  />
                </a>
              </li>
            </ul>
          </div>
        </div>
      </div>


    </section>


  </Layout >
);

export default IndexPage;
