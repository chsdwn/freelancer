import React from 'react';
import { useNavigate } from 'react-router-dom';

type Props = {
  id: string;
  imageUrl: string;
};

export const Portfolio = ({ id, imageUrl }: Props) => {
  const navigate = useNavigate();

  const handleClick = () => {
    navigate(`/edit/${id}`);
  };

  return (
    <div className="col-md-6 col-lg-4 mb-5">
      <div className="portfolio-item mx-auto" onClick={handleClick}>
        <div className="portfolio-item-caption d-flex align-items-center justify-content-center h-100 w-100">
          <div className="portfolio-item-caption-content text-center text-white">
            <i className="fas fa-pen fa-3x"></i>
          </div>
        </div>
        <img className="img-fluid" src={imageUrl} alt="..." />
      </div>
    </div>
  );
};
