import React, { useEffect, useState } from 'react';

import { Loading, Portfolio } from '.';
import { getPortfolios } from '@/api';
import { IPortfolio } from '@/types';
import { Link } from 'react-router-dom';

export const Portfolios = () => {
  const [loading, setLoading] = useState(false);
  const [portfolios, setPortfolios] = useState<IPortfolio[]>([]);

  useEffect(() => {
    const getPortfoliosAsync = async () => {
      setLoading(true);
      const portfolioList = await getPortfolios();
      setPortfolios(portfolioList);
      setLoading(false);
    };
    getPortfoliosAsync();
  }, []);

  if (loading) return <Loading />;

  return (
    <section className="page-section portfolio" id="portfolio">
      <div className="container">
        <h2 className="page-section-heading text-center text-uppercase text-secondary mb-0">
          Portfolio
        </h2>
        <div className="divider-custom">
          <div className="divider-custom-line"></div>
          <div className="divider-custom-icon">
            <i className="fas fa-star"></i>
          </div>
          <div className="divider-custom-line"></div>
        </div>
        <div className="row justify-content-center">
          {portfolios.length === 0 && (
            <>
              <p className="text-center">No portfolio found.</p>
              <Link to="/add" className="btn btn-primary w-auto" type="button">
                Add New
              </Link>
            </>
          )}
          {portfolios.length > 0 &&
            portfolios.map((portfolio) => (
              <Portfolio
                key={portfolio._id}
                id={portfolio._id}
                imageUrl={portfolio.imageUrl}
              />
            ))}
        </div>
      </div>
    </section>
  );
};
