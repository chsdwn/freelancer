import axios from '@/lib/axios';
import { IPortfolio } from '@/types';

export const getPortfolio = async (id: string) => {
  const portfolios = await axios.get<IPortfolio>(`/portfolios/${id}`);
  return portfolios.data;
};
