export default interface HttpClient {
  post(url: string, data: any, config?: any): Promise<any>;
  put(url: string, data: any, config?: any): Promise<any>;
  get(url: string, config?: any): Promise<any>;
}
