//import 'babel-polyfill'
import React from 'react'
import ReactDOM from 'react-dom'
import Component from '../../lib'
import styles from './styles.css'

const demo = (
  <div>
    <Component><div>Child</div></Component>
  </div>
)
ReactDOM.render(
  demo,
  document.getElementById('root')
)

// document.querySelector('[rel="shortcut icon"]').href = require('file!./favicon.png')
