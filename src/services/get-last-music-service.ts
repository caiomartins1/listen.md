import { urls } from '../constants/urls';
import HttpClient from '../interfaces/http-client';

interface GetLastMusicServiceResponse {
  music: string;
  artist: string;
}

export default class GetLastMusicService {
  constructor(private readonly httpClient: HttpClient) {}

  async exec(accessToken: string): Promise<GetLastMusicServiceResponse> {
    const headers = {
      'Content-Type': 'application/json',
      Authorization: `Bearer ${accessToken}`,
    };

    const response = await this.httpClient.get(urls.spotify.rencently_played, {
      headers,
      params: {
        limit: 1,
      },
    });

    return {
      music: response.data.items[0].track.name,
      artist: response.data.items[0].track.artists[0].name,
    };
  }
}
