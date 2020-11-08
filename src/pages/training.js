import React from 'react';

import Layout from '../components/Layout';

// import training from '../../content/training.md';

import cayla from '../assets/images/cayla.jpg';

const IndexPage = () => (
  <Layout>
    <section className="page-section">
      <div className="container">
        {/* <div className="product-item">*/}
        <div className=" d-flex">
          <div className="bg-faded p-5 d-flex ml-auto rounded">
            <h2 className="section-heading mb-0">
              <span className="section-heading-upper">
                Cayla Stone - Trainer
                </span>
              <span className="section-heading-lower">
                Taft Hill Acres is very excited to have Cayla Stone training at the farm.
                </span>
            </h2>
          </div>
        </div>
        <img
          className="product-item-img mx-auto d-flex rounded img-fluid mb-3 mb-lg-0"
          src={cayla}
          alt=""
        />
        <div className="product-item-description d-flex mr-auto">
          <div className="bg-faded p-5 rounded">
            <p className="mb-0">
              Cayla has a particular love and interest in promoting Mustangs in the english riding disciplines and has become well-known as a Mustang trainer. She is a graduate of the CSU Equine Science program, a two-time finalist in the Extreme Mustang Makeover Competition, an established TIP trainer, and Eventing Trainer. Over the last six years, Cayla has trained or assisted in the training of over 30 Mustangs. This is a huge feat given that she only has one or two in training at any given time! Cayla believes that the more awareness she can bring to the versatility of the breed, the more adoptable these horses will become. Cayla shows her 2016 Mustang Makeover 5th place finisher, Atalanta in Eventing and won 10th place at the 2018 American Eventing Championships. Cayla also won the overall award for best adult pony rider.
              </p>
          </div>
        </div>
        {/* </div>*/}
      </div>
    </section>

    <section className="page-section">
      <div className="container">
        <div className="product-item">
          <div className="product-item-title d-flex">
            <div className="bg-faded p-5 d-flex mr-auto rounded">
              <h2 className="section-heading mb-0">
                <span className="section-heading-upper">
                  Delicious Treats, Good Eats
                </span>
                {/* <ReactMarkdown source={training} /> */}
                {/* <span className="section-heading-lower">
                  Bakery &amp; Kitchen
                </span> */}
              </h2>
            </div>
          </div>
          {/* <img
            className="product-item-img mx-auto d-flex rounded img-fluid mb-3 mb-lg-0"
            src={product2}
            alt=""
          /> */}
          <div className="product-item-description d-flex ml-auto">
            <div className="bg-faded p-5 rounded">
              <p className="mb-0">
                Our seasonal menu features delicious snacks, baked goods, and
                even full meals perfect for breakfast or lunchtime. We source
                our ingredients from local, oragnic farms whenever possible,
                alongside premium vendors for specialty goods.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>



  </Layout >
);

export default IndexPage;
