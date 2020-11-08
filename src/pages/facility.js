import React from 'react';

import Layout from '../components/Layout';



const IndexPage = () => (
  <Layout >
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

            </div>
          </div>
        </div>
      </div>
    </section>


  </Layout >
);

export default IndexPage;
