import mockjs from 'mockjs';

export default {
  'GET /api/customer/list': mockjs.mock({
    'data|30': [
      {
        'id|+1': 1,
        name: '@cword(3, 5)',
        address: '@city',
      },
    ],
  }),
  'GET /api/customer/detail': mockjs.mock({
    'data': {
      name: '@cname',
      address: '@city',
      create: '@datetime',
      url: '@url',
    },
  }),
};
