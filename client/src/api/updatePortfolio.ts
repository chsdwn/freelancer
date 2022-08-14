import axios from '@/lib/axios';
import { IPortfolio } from '@/types';

export const updatePortfolio = async (
  id: string,
  body: Omit<IPortfolio, '_id'>,
) => {
  await axios.put(`/portfolios/${id}`, body);
};
