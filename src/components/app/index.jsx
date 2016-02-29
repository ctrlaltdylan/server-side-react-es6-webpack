/**
* @file app component, the react app base
* @module components/app
* @see App
*/

import React from 'react';
import './styles';

const App = ({children}) => (
  <div>
    <h1>SERVER SIDE RENDERING W/ REACT + ES6 + WEBPACK</h1>
    {children}
    <h6>[blame <a href="http://twitter.com/jennschiffer">jenn</a>@bocoup.com]</h6>
  </div>
);

export default App;
