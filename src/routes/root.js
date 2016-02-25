import Index from '../components/index';
// import loadTestRoute from 'bundle-loader?lazy!./test';
import testRoute from './test';

export default [
  {
    path: '/',
    component: Index,
  },
  testRoute,
];
