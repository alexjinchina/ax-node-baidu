import { process } from "../utils";
import {} from "../common";

import Login from "./login";

export default class Client {
  constructor() {
    this.modules = {};
    this.modules.login = new Login(this);

    this.fetchOptions = {};
    this.inited = false;
  }

  async init(reset = false) {
    if (this.inited && !reset) return;
    this.inited = false;
    this.fetchOptions = {};
    this.inited = true;
  }
}
