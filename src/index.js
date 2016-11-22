import React, { Component, PropTypes } from 'react'
import ReactDOM from 'react-dom';

export default class Test extends Component {
  constructor(props) {
    super(props)
  }
  render() {
    return (
      <div>{this.props.children}</div>
    )
  }
}
