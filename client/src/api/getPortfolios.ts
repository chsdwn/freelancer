import axios from '@/lib/axios';
import { IPortfolio } from '@/types';

export const getPortfolios = async () => {
  const portfolios = await axios.get<IPortfolio[]>('/portfolios/');
  return portfolios.data;
};
