import { fetch } from "../src/utils";
import BaiduClient from "../src/baidu-client";
async function test() {
  const client = new BaiduClient();
  client.init();

  console.log("test fetch");
  const t = await fetch("https://wappass.baidu.com/");
  console.log(t);
}

test().then(() => console.debug("test ok"));
