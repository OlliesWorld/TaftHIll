import React from 'react';

import Layout from '../components/Layout';
import ContactFormPage from '../components/Form';



const ContactPage = () => (
    <Layout activeLink="contact">
        <section className="page-section mt-0">
            <div className="form-cont">
                <div className="mr-auto">
                    <div className=" p-1 rounded">

                        <ContactFormPage />
                    </div>
                </div>
                <div className="blue d-flex mr-auto">
                    <div className="bg-faded p-5  ml-2  rounded">
                        <p className="mb-0 paragraph">
                            We are conveniently located within 2 miles of CSU, and Old Town. There is direct access to the Poudre Trail and close access to Lory State Park and Reservoir Ridge.
              </p>
                    </div>

                </div>

            </div>
        </section>
    
        <div className="min-vw-100 text-center p-2 rounded">
            <p className="mb-3 blue">
                1012 N Taft Hill Rd <br />
                Fort Collins, CO 80521
                        </p>
        </div>

    </Layout >
);

export default ContactPage;