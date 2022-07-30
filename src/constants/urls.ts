import { config } from 'dotenv';
config();

export const urls = {
  spotify: {
    authorizationUrl: 'https://accounts.spotify.com/authorize',
    accessToken: 'https://accounts.spotify.com/api/token',
    rencently_played: 'https://api.spotify.com/v1/me/player/recently-played',
    callback: 'http://localhost:3000/spotify/callback',
  },
  github: {
    repoUrl: `https://api.github.com/repos/${process.env.GITHUB_USERNAME}/${process.env.GITHUB_USERNAME}/contents/README.md`,
  },
};
