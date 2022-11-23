import axios, { AxiosInstance } from 'axios';

import basePath from '../constants/api';

const client: AxiosInstance = axios.create({
  baseURL: basePath,
});

export const getCaixas = async (): Promise<any> => {
  const caixaData = await client.get('/caixas');
  return caixaData;
};
