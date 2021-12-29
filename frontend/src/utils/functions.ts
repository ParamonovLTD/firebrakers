import { axiosInstance } from '../core/axios';

export const formatNumber = (x: number) => {
  const parts = x.toString().split('.');
  parts[0] = parts[0].replace(/\B(?=(\d{3})+(?!\d))/g, ',');
  return parts.join('.');
};

export const numRound = (num: number) => Math.round(num * 2) / 2;
// eslint-disable-next-line consistent-return
export const refreshTokens = async () => {
  try {
    const refreshToken = localStorage.getItem('refreshToken');
    const res = await axiosInstance.post('/auth/refresh_tokens', { refreshToken });
    localStorage.setItem('authToken', res.data.authToken);
    localStorage.setItem('refreshToken', res.data.refreshToken);
    return res.data.authToken;
  } catch (error) {
    throw new Error('Bye-Bye');
  }
};
