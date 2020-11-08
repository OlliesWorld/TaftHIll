import React from 'react';

import Layout from '../components/Layout';
import ContactFormPage from '../components/Form';


const ContactPage = () => (
    <Layout activeLink="home">
        <section className="page-section">


            <div className="form-cont">
                <div className="mr-auto">
                    <div className=" p-3 rounded">

                        <ContactFormPage />
                    </div>
                </div>
                <div className="product-item-description d-flex mr-auto">
                    <div className="bg-faded p-5 col-8 ml-5 rounded">
                        <p className="mb-0">
                            We are conveniently located within 2 miles of CSU, and old town. There is close access to Reservoir Ridge and the Poudre Trail as well as lovely open space riding at the back of the property.
              </p>
                    </div>
                </div>

            </div>
        </section>
        <div>

        </div>
        <div className="min-vw-100 text-center p-2 rounded">
            <p className="mb-3 blue">
                1012 N Taft Hill Rd <br />
                Fort Collins, CO 80521
                        </p>
        </div>

    </Layout >
);

export default ContactPage;