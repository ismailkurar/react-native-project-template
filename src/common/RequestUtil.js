import axios from 'axios';

class RequestUtil {
  constructor() {
    const baseURL = 'https://jsonplaceholder.typicode.com';

    this.axios = axios.create({
      baseURL,
      timeout: 0
    });
  }

  makeRequest(request) {
    return this.axios(request);
  }
}

export default new RequestUtil();
