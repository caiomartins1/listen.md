import { stringify } from 'node:querystring';
import { headers } from '../constants/headers';
import { urls } from '../constants/urls';
import HttpClient from '../interfaces/http-client';

interface GetAccessTokenServiceResponse {
  access_token: string;
  token_type: string;
  expires_in: number;
  refresh_token: string;
  scope: string;
}

export default class GetAccessTokenService {
  constructor(
    private readonly httpClient: HttpClient,
    private readonly accessToken: string,
  ) {}

  async exec(): Promise<GetAccessTokenServiceResponse> {
    const data = {
      grant_type: 'refresh_token',
      refresh_token: this.accessToken,
    };

    const response = await this.httpClient.post(
      urls.spotify.accessToken,
      stringify(data),
      {
        headers: headers,
      },
    );

    return {
      access_token: response.data.access_token,
      token_type: response.data.token_type,
      expires_in: response.data.expires_in,
      refresh_token: response.data.refresh_token || '',
      scope: response.data.scope,
    };
  }
}
