// root route for '/index'
import App from '../components/app';
import Index from '../components/index';

// set up '/test' route for lazy loading
import loadTestRoute from 'bundle-loader?lazy!./test';

export default [
  {
    path: '/',
    component: App,
    getChildRoutes(location, cb) {
      // when this child route is called, the './test' route is loaded
      loadTestRoute(file => {
        cb(null, [file]);
      });
    },
    indexRoute: {
      component: Index,
    },
  },
] ;
