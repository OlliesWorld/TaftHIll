import React from 'react';
import fbicon from '../assets/images/icons8-facebook-48.png';

export default function Footer() {
  return (
    <footer className="footer text-faded  py-5">
      <div className="container">
        <p className="m-0 small">&copy; {new Date().getFullYear()}  Taft Hill Acres</p>
        <p className="m-0 small">Made with <span role="img" aria-label="blue heart">💙</span> by</p> <p><a href="olliesworld.rocks">Ollie's World</a></p>
      </div>
      <div className="fb-container">
        <p>
          <a href="https://www.facebook.com/TaftHillAcres/?ref=hl" aria="Facebook Icon" class="fb-btn"><img src={fbicon} alt="Facebook Icon" /></a>
        </p>
      </div>

    </footer >
  );
}
