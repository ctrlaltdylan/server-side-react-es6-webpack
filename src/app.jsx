/**
* @file The main Nest Service application
*/

import React from 'react';
import ReactDOM from 'react-dom';
import {Router, browserHistory} from 'react-router';
import routes from './routes/root';

ReactDOM.render(<Router routes={routes} history={browserHistory} />, document.querySelector('#main'));
