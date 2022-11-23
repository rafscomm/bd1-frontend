import axios, { AxiosInstance } from 'axios';

import basePath from '../constants/api';

const client: AxiosInstance = axios.create({
  baseURL: basePath,
});

export const getProdutos = async (): Promise<any> => {
  const userDate = await client.get('/produtos');
  return userDate;
};

export const sendProdutos = async (data:any) : Promise<any> =>{
  const userDate = await client.post('/produtos/criar', data);
  return userDate;
};