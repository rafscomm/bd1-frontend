import axios, { AxiosInstance } from 'axios';

import basePath from '../constants/api';

const client: AxiosInstance = axios.create({
  baseURL: basePath,
});

export const getFornecedores = async (): Promise<any> => {
  const userDate = await client.get('/fornecedores');
  return userDate;
};
