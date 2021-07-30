import request from '../../utils/request';

export async function query() {
    return request('/user/list');
}
export async function queryDetail() {
    return request('/user/detail');
}
