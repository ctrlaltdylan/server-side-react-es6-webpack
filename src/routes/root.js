// polyfill webpack require.ensure
if (typeof require.ensure !== 'function') {
  require.ensure = (d, c) => c(require);
}

import Index from '../components/index';
import testRoute from './test';
// import loadTestRoute from 'bundle-loader?lazy!./test';

export default [
  {
    path: '/',
    component: Index,
  },
  testRoute,
];
