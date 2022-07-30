import AxiosHttpClientAdapter from '../adapters/axios-http-client-adapter';
import GetLastMusicService from '../services/get-last-music-service';

export const getLastMusicService = new GetLastMusicService(
  new AxiosHttpClientAdapter(),
);
