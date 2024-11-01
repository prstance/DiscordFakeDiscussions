const API_VERSION: number = 10;
const BASE_URL: string = `https://discord.com/api/v${API_VERSION}/`;

export const API_ENDPOINTS = {
  CORE: {
    MESSAGE: (channelId: string | number) => new URL(`channels/${channelId}/messages`, BASE_URL).toString(),
  }
};