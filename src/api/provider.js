import { converter } from "./converter";

class TaskApi {
  constructor({ url, token }) {
    this.url = url;
    this.token = token;
  }

  /* getUrlWithQueries(queries) {
    return `${this.url}?${queries}`;
  } */

  get getTasks() {
    return fetch(this.url)
      .then((response) => response.json())
      .then((data) => converter(data));
  }
}

export default new TaskApi({ url: 'https://www.nbrb.by/api/exrates/rates?periodicity=0' });
