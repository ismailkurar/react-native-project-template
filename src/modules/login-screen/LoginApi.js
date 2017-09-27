import requestUtil from '../../common/RequestUtil';

class LoginApi {

   getMockData() {
    const request = {
      url: '/posts/1',
      method: 'get'
    };

    return requestUtil.makeRequest(request);
  }
}

export default new LoginApi();