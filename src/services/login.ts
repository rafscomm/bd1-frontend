import axios, { AxiosInstance } from 'axios';

import basePath from '../constants/api';

const client: AxiosInstance = axios.create({
  baseURL: basePath,
});

export const login = async (cpf: string, senha: string): Promise<any> => {
  const data = {
    cpf,
    senha,
  };
  const userDate = await client.post('/login', data);
  return userDate;
};
