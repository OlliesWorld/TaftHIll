import React from 'react';

import Layout from '../components/Layout';
import Slider from '../components/slides';


const IndexPage = () => (
  <Layout activeLink="store">
    <section className="page-section">
      <div className="container pb-sm-5">
        <div className="row">
          <div className="col-xl-9 mx-auto">
            <div className="cta-inner text-center rounded">
              <h2 className="section-heading mb-5">

                <span className="facility">Our facility</span>
              </h2>
              <ul className="list-unstyled list-hours mb-5 text-left mx-auto">
                <li className="list-unstyled-item list-hours-item d-flex">
                  150'x 300'  sand arena
                  <span className="ml-auto">60' sand round pen</span>
                </li>
                <li className="list-unstyled-item list-hours-item d-flex">
                  Sprinkler system for arena & fields
                  <span className="ml-auto">Professional lessons and training </span>
                </li>
                <li className="list-unstyled-item list-hours-item d-flex">
                  Professional lessons and training
                  <span className="ml-auto">Access to stadium jumps</span>
                </li>
                <li className="list-unstyled-item list-hours-item d-flex">
                  Outdoor wash rack & Indoor Grooming Area
                  <span className="ml-auto">Bathroom for boarders</span>
                </li>
                <li className="list-unstyled-item list-hours-item d-flex">
                  Multiple locking tack rooms
                  <span className="ml-auto">Trailer parking</span>
                </li>
                <li className="list-unstyled-item list-hours-item d-flex">
                  Safe Bayco fencing throughout
                  <span className="ml-auto">Automatic waterers</span>
                </li>
                <li className="list-unstyled-item list-hours-item d-flex">
                  Trail riding directly off the property
                  <span className="ml-auto">24-7 free feed hay in pens</span>
                </li>
                <li className="list-unstyled-item list-hours-item d-flex">
                  TPartial and full board options
                  <span className="ml-auto">Run & group pen boarding options</span>
                </li>
              </ul>
              {/* <p className="address mb-5">
                <em>
                  <strong>1012 N Taft Hill Rd</strong>
                  <br />
                  Fort Collins, Colorado
                </em>
              </p>
              <p className="mb-0">

                <em>For more information or to schedule a tour:</em>


              </p> */}
              <div className="intro-button mx-auto">
                <a className="btn btn-primary btn-xl" href="/contact">
                  Contact Us Today!
              </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>

    <section className="page-section about-heading">
      <div className="container">

        <div className="col-xl-9 col-lg-10 mx-auto">

          <h2 className="section-heading mb-4">
            <span className="section-heading-upperlower">
              Testimonials
                  </span>
            
          </h2>
          <Slider />


        </div>
      </div>
    </section>
  </Layout >
);

export default IndexPage;
