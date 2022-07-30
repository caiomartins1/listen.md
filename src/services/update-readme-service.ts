import { urls } from '../constants/urls';
import HttpClient from '../interfaces/http-client';

export default class UpdateReadmeService {
  constructor(
    private readonly httpService: HttpClient,
    private readonly accessToken: string,
  ) {}

  async exec(artist: string, music: string) {
    const { sha, text } = await this.getCurrentReadmeData();

    const updatedText = text.replace(
      /\{\{(.*?)\}\}/g,
      `{{ ${artist} - ${music} }}`,
    );

    await this.httpService.put(
      urls.github.repoUrl,
      {
        message: `updating last listened music - ${new Date().toDateString()}`,
        committer: {
          name: 'caiomartins1',
          email: 'dev.caiomartins@gmail.com',
        },
        sha,
        content: Buffer.from(updatedText).toString('base64'),
      },
      {
        headers: {
          Accept: 'application/vnd.github+json',
          Authorization: `token ${this.accessToken}`,
        },
      },
    );
  }

  private async getCurrentReadmeData() {
    const response = await this.httpService.get(urls.github.repoUrl, {
      headers: {
        Authorization: `token ${this.accessToken}`,
      },
    });

    const { sha, content } = response.data;

    return {
      sha,
      text: Buffer.from(content, 'base64').toString('utf8'),
    };
  }
}
