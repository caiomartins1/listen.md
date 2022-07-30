import cron from 'node-cron';

import { updateReadmeService } from './factories/update-readme-service-factory';
import { getAccessTokenService } from './factories/get-access-token-service-factory';
import { getLastMusicService } from './factories/get-last-music-service-factory';

console.log('Script is running...');

const twiceADayCron = '1 10,22 * * *';
cron.schedule(twiceADayCron, async () => {
  // (async () => {
  try {
    const { access_token } = await getAccessTokenService.exec();
    const { artist, music } = await getLastMusicService.exec(access_token);

    await updateReadmeService.exec(artist, music);

    console.log('Updated readme', new Date().toDateString());
  } catch (e) {
    console.log(e);
  }
  // })();
});
