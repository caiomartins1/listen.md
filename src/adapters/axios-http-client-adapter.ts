import axios from 'axios';
import HttpClient from '../interfaces/http-client';

export default class AxiosHttpClientAdapter implements HttpClient {
  constructor() {}

  async post(url: string, data: any, config?: any): Promise<any> {
    return await axios.post(url, data, config);
  }

  async put(url: string, data: any, config?: any): Promise<any> {
    return await axios.put(url, data, config);
  }

  async get(url: string, config?: any): Promise<any> {
    return await axios.get(url, config);
  }
}
