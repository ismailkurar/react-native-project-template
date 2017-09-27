import requestUtil from '../../common/RequestUtil';

class HomeApi {

   getMockData() {
    const request = {
      url: '/posts/1',
      method: 'get'
    };

    return requestUtil.makeRequest(request);
  }
}

export default new HomeApi();