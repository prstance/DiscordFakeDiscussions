import { API_ENDPOINTS } from "./api";

class Client {
  async sendMessage(accountToken: string, channelId: string | number, content: string): Promise<void> {
    const url: string = API_ENDPOINTS.CORE.MESSAGE(channelId);

    const response = await fetch(url, {
      method: "POST",
      headers: {
        "Authorization": accountToken,
        "Content-Type": "application/json"
      },
      body: JSON.stringify({
        content: content
      })
    });

    console.log(await response.text());
  }
}

export default Client;