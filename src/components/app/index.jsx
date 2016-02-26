/**
* @file app component
* @module components/app
* @see App
*/

import React from 'react';
import {Link} from 'react-router';

const App = ({children}) => (
  <div>
    <h1>App</h1>
    <ul>
      <li><Link to="/">Home</Link></li>
      <li><Link to="/test">Test</Link></li>
    </ul>
    {children}
  </div>
);

export default App;
