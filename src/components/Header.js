import React, { Component } from 'react'
import { Link } from 'react-router-dom'


export default class Header extends Component {
  authItem () {
    return <li><button>Sign in</button></li>
  }
  render () {
    return (
      <nav>
        <ul>
          <li><Link to='/'>Home</Link></li>
          <li><Link to='/comments'>Comments</Link></li>
          {this.authItem()}
        </ul>
      </nav>
    )
  }
}
