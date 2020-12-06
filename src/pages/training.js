import React from 'react';

import Layout from '../components/Layout';
import ScrollUpButton from "react-scroll-up-button";

import Cayla from '../assets/images/cayla.jpg';
import Caylacross from '../assets/images/caylacross.jpg';
import Wrlogo from '../assets/images/wr_logo_web.png';
import Temple from '../assets/images/temple.jpg';

const IndexPage = () => (
  <Layout activeLink="training">
        <ScrollUpButton />
    <section className="page-section">
      <div className="container">
        <div className=" d-flex">
          <div className="bg-faded p-2 d-flex ml-auto rounded">
            <h2 className="section-heading mb-0">
              <span className="section-heading-upper">
                Cayla Stone
                </span>
              <span className="section-heading-lower">
                Taft Hill Acres Trainer in Resident
              </span>
            </h2>
          </div>
        </div>
        <img
          className="product-item-img mx-auto d-flex rounded img-fluid mb-3 mb-lg-0"
          src={Caylacross}
          alt="Cayla Stone jumping mustag over cross country jump"
        />
        <div className="product-item-description d-flex mr-auto">
          <div className="bg-faded p-3 mt-2 rounded">
            <p className="mb-0 paragraph">
              Cayla is an Event rider and trainer, and has been teaching/training in Fort Collins since 2007. Cayla has a particular love and interest in promoting Mustangs in the English riding disciplines and has become well-known as a Mustang trainer. She is a graduate of the CSU Equine Science program, a two-time finalist in the Extreme Mustang Makeover Competition, an established TIP trainer, and Eventing trainer. Over the last six years, Cayla has trained, or assisted in the training of, over 50 Mustangs. This is a huge feat given that she only has one or two in training at any given time! Cayla believes that the more awareness she can bring to the versatility of the breed, the more adoptable these horses will become. Cayla shows her 2016 Mustang Makeover 5th place finisher, Atalanta, in Eventing and won 10th place at the 2018 American Eventing Championships. Cayla also won the overall award for best adult pony rider.
              </p>
          </div>

        </div>

      </div>
    </section>

    <section className="page-section">
      <div className="container">
        <div className="product-item">
          <div className="product-item-title d-flex">
            <div className="bg-faded p-3 d-flex mr-auto rounded">
              <h2 className="section-heading mb-0">
                <span className="section-heading-upper">
                  Wild Rose Mustang Advocacy Group
                </span>

                <span className="section-heading-lower">
                  From Wild to Mild
                </span>
              </h2>
            </div>
          </div>
          <img
            className="product-item-img mx-auto d-flex rounded img-fluid mb-3 mb-lg-0"
            src={Cayla}
            alt="Cayla Stone free rein on trained mustang"
            
          />
          <div className="product-item-description d-flex ml-auto">
            <div className="bg-faded p-3 rounded">
              <p className="mb-0 paragraph">Taft Hill Acres is pleased to host Wild Rose Mustang Advocacy Group. Wild Rose believes that every adoptable, off the range Mustang should receive excellent healthcare and individualized training to find their forever home.
              </p>
              <br />
              <p className="mb-0 paragraph">
                Their  goal is to help change the story of American Mustangs in the West by providing professional, under saddle training and increase adoptions of these amazing horses.
              </p>
              <div className="mt-2 text-center">
                <a className="btn" href="https://www.wildrosemagic.org/" target="/">

                  <img
                    className="wr-logo"
                    src={Wrlogo}
                    alt="Wild Rose Mustang Advocacy Group Logo"
                  />
                </a>
                <p className="mx-5 px-1 option-three"> Click for More Information</p>
              </div>

            </div>
          </div>
        </div>
      </div>
    </section>
    <section className="page-section">
      <div className="container">
        <div className="product-item">
          <div className="product-item-title d-flex">
            <div className="bg-faded p-3 d-flex mr-auto rounded">
              <h2 className="section-heading mb-0">
                <span className="section-heading-upper">
                  Wild Rose Mustang Advocacy Group
                </span>

                <span className="section-heading-lower">
                  Important News!
                </span>
              </h2>
            </div>
          </div>
          <img
            className="product-item-img mx-auto d-flex rounded img-fluid mb-3 mb-lg-0"
            src={Temple}
            alt="Temple Granding working with Wild Rose Mustangs trained mustang program"
            
          />
          <div className="product-item-description d-flex ml-auto">
            <div className="bg-faded p-3 rounded">
              <p className="mb-0 paragraph">WRMAGIC has some exciting news coming in 2021! We will be partnering with CSU Equine Behavior Instructor, Sarah Matlock, supported by the renowned, Temple Grandin, to conduct an in-depth study on mustang gentling techniques! 12 unhandled mustangs will be involved in a behavior study where our trainers will be gentling them with one of two methods: traditional 'pressure-release' or the combination of traditional methods with the addition of positive reinforcement via clicker training. Our hope is to establish 'Best Practices' for mustang gentling in order to minimize the stresses they experience during training. We've received a generous donation from Temple Grandin, but still need help with this large undertaking, so stay tuned for ways you can help! Most of the horses used in the study will be available for adoption as well. More info to come!
              </p>
           
              <div className="mt-2 text-center">
                <a className="btn" href="https://www.wildrosemagic.org/" target="/">

                  <img
                    className="wr-logo"
                    src={Wrlogo}
                    alt="Wild Rose Mustang Advocacy Group Logo"
                  />
                </a>
                <p className="mx-5 px-1 option-three"> Click for More Information</p>
              </div>

            </div>
          </div>
        </div>
      </div>
    </section>


  </Layout >
);

export default IndexPage;
