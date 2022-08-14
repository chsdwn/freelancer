import React from 'react';
import { Route, Routes as RRDRoutes } from 'react-router-dom';

import { AddPortfolio, Home, NotFound } from '@/components';

export const Routes = () => {
  return (
    <RRDRoutes>
      <Route path="/" element={<Home />} />
      <Route path="/add" element={<AddPortfolio />} />
      <Route path="/edit/:id" element={<AddPortfolio />} />
      <Route path="*" element={<NotFound />} />
    </RRDRoutes>
  );
};
