import React from 'react';

export default function Footer() {
  return (
    <footer className="footer text-faded text-center py-5">
      <div className="container">
        <p className="m-0 small">&copy; {new Date().getFullYear()}  Taft Hill Acres</p>
        <p className="m-0 small">Made with <span aria-label="blue heart">💙</span> by</p> <a href="olliesworld.rocks">Ollie's World</a> 
      </div>
    </footer>
  );
}
