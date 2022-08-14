import React from 'react';
import { Avatar } from '.';

export const Header = () => {
  return (
    <header className="masthead bg-primary text-white text-center">
      <div className="container d-flex align-items-center flex-column">
        <Avatar className="masthead-avatar mb-5" />
        <h1 className="masthead-heading text-uppercase mb-0">
          Hulusi Kafalıer
        </h1>
        <div className="divider-custom divider-light">
          <div className="divider-custom-line"></div>
          <div className="divider-custom-icon">
            <i className="fas fa-star"></i>
          </div>
          <div className="divider-custom-line"></div>
        </div>
        <p className="masthead-subheading font-weight-light mb-0">
          Software Developer
        </p>
      </div>
    </header>
  );
};
