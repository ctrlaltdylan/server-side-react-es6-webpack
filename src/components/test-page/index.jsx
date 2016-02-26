/**
* @file TestPage component
* @module components/test-page
* @see TestPage
*/

import React from 'react';
import {Link} from 'react-router';
import './styles';

const TestPage = () => (
  <div className="test">
    HERE IS A TEST PAGE
    <p><Link to="/">go home</Link></p>
  </div>
);

export default TestPage;
