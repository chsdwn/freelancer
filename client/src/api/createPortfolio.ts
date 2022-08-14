import axios from '@/lib/axios';
import { IPortfolio } from '@/types';

export const createPortfolio = async (body: Omit<IPortfolio, '_id'>) => {
  await axios.post('/portfolios', body);
};
