import request from '../../utils/request';

export async function query() {
  return request('/user/info');
}
