import { config } from 'dotenv';
config();

export const headers = {
  'Content-Type': 'application/x-www-form-urlencoded',
  Authorization:
    'Basic ' +
    Buffer.from(
      process.env.CLIENT_ID + ':' + process.env.CLIENT_SECRET,
    ).toString('base64'),
};
