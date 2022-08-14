import React from 'react';
import { About, Footer, Header, Navigation, Portfolios } from '.';

export const Home = () => (
  <div id="page-top">
    <Navigation />
    <Header />
    <Portfolios />
    <About />
    <Footer />
  </div>
);
