import { fetchAsync } from "../utils";

export default class login {
  constructor(client) {
    this.client = client;
    if (!this.client) throw new Error(`invalid arg client=${client}!`);
  }

  async test() {
    console.log("init baidu env");
    const response = await fetchAsync({
      uri: "https://wappass.baidu.com/",
      resolveWithFullResponse: true
    });

    console.debug(response);

    console.log("get baidu server time");
    console.log("getBaiduRSAPublicKeyModulus");
    console.log("getTraceID");

    console.log("bdcrypto.RSAEncryptOfWapBaidu");

    console.log("https://wappass.baidu.com/wp/api/login");

    console.log("parseCookies");

    debugger;
  }
}
