import React from 'react';

import Layout from '../components/Layout';
import Form from '../components/Form';
import anna from '../assets/images/anna.jpg'

const ContactPage = () => (
    <Layout activeLink="home">
        <section className="clearfix">
            <div className="container offset-md-5">
                <div className="intro">

                    <div className="intro-text left-0 text-center bg-faded p-5 mb-5 rounded">

                        <img src={anna} className="contact-img" alt="Anna with Taft Hill Acres Jacket" /> {/* <h2 className="section-heading mb-4">
                            <span className="section-heading-upper">Location</span>
                            <span className="section-heading-lower">Taft Hill Acres</span>
                        </h2>
                        <p className="mb-3">
                            We are conveniently located within 2 miles of CSU, and old town. There is close access to Reservoir Ridge and the Poudre Trail as well as lovely open space riding at the back of the property.
                        </p> */}
                    </div>




                </div>
            </div>
        </section>
        <div>
            <Form />
        </div>
        {/* <div className="min-vw-100 text-center p-2 rounded">
            <p className="mb-3 blue">
                1012 N Taft Hill Rd <br />
                Fort Collins, CO 80521
                        </p>
        </div> */}

    </Layout >
);

export default ContactPage;