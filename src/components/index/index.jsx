/**
* @file index component
* @module components/index
* @see Index
*/

import React from 'react';
import {Link} from 'react-router';
import './styles';

const Index = () => (
  <div>
    THIS IS THE INDEX PAGE
    <p><Link to="/test">try the test page</Link></p>
  </div>
);

export default Index;
