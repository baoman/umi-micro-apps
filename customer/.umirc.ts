import { defineConfig } from 'umi';

export default defineConfig({
  nodeModulesTransform: {
    type: 'none',
  },
  base: 'customer',
  qiankun: {
    // master: {
    //   apps: [{
    //     name: 'user',
    //     entry: 'http://localhost:8002'
    //   }
    //   ]
    // },
    slave: {}
  },
  routes: [
    { path: '/', component: '@/pages/customerList' },
    { path: '/:customerId', component: '@/pages/customerDetail' },
  ],
  outputPath: 'build'
});
