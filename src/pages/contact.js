import React from 'react';

import Layout from '../components/Layout';
import ContactFormPage from '../components/Form';



const ContactPage = () => (
    <Layout activeLink="contact">
        <section className="page-section">


            <div className="form-cont">
                <div className="mr-auto">
                    <div className=" p-3 rounded">

                        <ContactFormPage />
                    </div>
                </div>
                <div className="product-item-description d-flex mr-auto">
                    <div className="bg-faded p-3 col-4 ml-5  rounded">
                        <p className="mb-0 paragraph">
                            We are conveniently located within 2 miles of CSU, and Old Town. There is direct access to the Poudre Trail and close access to Lory State Park and Reservoir Ridge.
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