/**
* @file app component, the react app base
* @module components/app
* @see App
*/

import React from 'react';
import './styles';

const App = ({children}) => (
  <div>
    <h1>TESTING SERVER SIDE RENDERING W/ REACT + ES6</h1>
    {children}
  </div>
);

export default App;
