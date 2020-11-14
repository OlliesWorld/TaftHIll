import React from 'react'
import Layout from '../components/Layout';
import { Link } from 'gatsby'
import wyatt from '../assets/images/Wyatt.jpg'

const ThanksPage = () => (
    <Layout >
        <section className="page-section">
            <img
                className="sliderimg mb-3 mb-lg-0 rounded"
                src={wyatt}
                alt=""
            />
            <h2 className="bg-faded site-header text-center p-3 m-5 rounded">Thank you for sending a message! <br></br><span role="img" aria-label="horse face emoji">🐴</span> We will get back to you as soon as the sun goes down!<span role="img" aria-label="horse face emoji">🐴</span></h2>
            <div class="blue text-center">
                <Link to="/">Go back to the homepage</Link>
            </div>
        </section>
    </Layout >
);

export default ThanksPage;