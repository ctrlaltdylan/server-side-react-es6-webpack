/**
 * @file Component for React that automatically binds methods
 * @module util/bound-component
 * @see BoundComponent
 */

import React from 'react';
import bindMethods from './bind-methods';

/*
 * Creates a new Base React component with self-bound methods.
 * @constructor
 * @alias BoundComponent
 * @requires React
 * @requires module:util/bind-methods
 * @extends React.Component
 */
export default class BoundComponent extends React.Component {
  constructor(props) {
    super(props);
    bindMethods(this);
  }
}
