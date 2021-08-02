import { defineConfig } from 'umi';

export default defineConfig({
  nodeModulesTransform: {
    type: 'none',
  },
  qiankun: {
    master: {
      apps: [{
        name: 'customer',
        entry: 'http://localhost:8001',
        props: {
          loginFetch: () => { },
          name: 'xx'
        },
      }, {
        name: 'user',
        entry: 'http://localhost:8002',
        props: {
          loginFetch: () => { },
          name: 'xx'
        },
      }],
      prefetch: 'all'
    },
  },
  routes: [
    {
      path: '/',
      component: '@/layouts/index',
      routes: [
        { path: '/', component: '@/pages/index' },
        { path: '/customer', microApp: 'customer' },
        { path: '/user', microApp: 'user' },
      ]
    }
  ],
  proxy: {
    '/api/customer': {
      target: 'http://localhost:8001',
    },
    '/api/user': {
      target: 'http://localhost:8002',
    },
  },
  outputPath: 'build'
});
