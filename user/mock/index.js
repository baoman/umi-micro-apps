import mockjs from 'mockjs';
export default {
  'GET /api/user/list': mockjs.mock({
    'data|30': [
      {
        'id|+1': 1,
        name: '@cname',
        address: '@city',
        'type|+1': 1,
        'dept|+1': 1
      },
    ],
  }),
  'GET /api/user/detail': mockjs.mock({
    'data': {
      name: '@cname',
      address: '@city',
      create: '@datetime',
      year: '18',
      type: 2,
      dept: 3
    },
  }),
};
