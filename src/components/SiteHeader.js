import React from 'react';
import config from '../../config';

// import Logo from "../assets/images/thalogo.png"

export default function SiteHeader() {
  return (


    <>

      <h1 className="site-heading text-center text-white d-none d-lg-block">
        <span className="site-heading-upper text-primary mb-3">

          {config.heading}<br />

        </span>
        <span className="site-heading-lower">{config.siteTitle}</span>
      </h1>
      <label
      ><input type="checkbox" class="theme-changer" />
        <div class="mode-container">
          <i class="gg-sun"></i><i class="gg-moon"></i></div
        ></label>
    </>
  );
}
