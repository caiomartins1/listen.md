import AxiosHttpClientAdapter from '../adapters/axios-http-client-adapter';
import GetAccessTokenService from '../services/get-access-token-service';

import { config } from 'dotenv';
config();

export const getAccessTokenService = new GetAccessTokenService(
  new AxiosHttpClientAdapter(),
  process.env.REFRESH_TOKEN || '',
);
