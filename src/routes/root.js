import Index from '../components/index';
import loadTestRoute from 'bundle-loader?lazy!./test';

export default [
  {
    path: '/',
    component: Index,
    getChildRoutes(location, cb) {
      loadTestRoute(file => {
        cb(null, [file]);
      });
    },
    indexRoute: {
      component: Index,
    },
  },
] ;
