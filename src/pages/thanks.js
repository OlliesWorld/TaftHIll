import React from 'react'
import Layout from '../components/Layout';

import wyatt from '../assets/images/Wyatt.jpg'

const ContactPage = () => (
    <Layout >
        <section className="page-section">
            <img
                className="sliderimg img-fluid mb-3 mb-lg-0 rounded"
                src={wyatt}
                alt=""
            />
            <h2 className="bg-faded site-header text-center p-5 m-5 rounded">Thank you for sending a message! <br></br><span role="img" aria-label="horse face emoji">🐴</span> We will get back to you as soon as the sun goes down!<span role="img" aria-label="horse face emoji">🐴</span></h2>
        </section>
    </Layout >
);

export default ContactPage;