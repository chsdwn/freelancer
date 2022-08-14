import axios from '@/lib/axios';

export const deletePortfolio = async (id: string) => {
  await axios.delete(`/portfolios/${id}`);
};
