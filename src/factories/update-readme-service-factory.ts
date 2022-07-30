import AxiosHttpClientAdapter from '../adapters/axios-http-client-adapter';
import UpdateReadmeService from '../services/update-readme-service';

import { config } from 'dotenv';
config();

export const updateReadmeService = new UpdateReadmeService(
  new AxiosHttpClientAdapter(),
  process.env.GITHUB_ACCESS_TOKEN || '',
);
