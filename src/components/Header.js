import React, { Component } from 'react'

import { Link } from 'react-router-dom'
import { connect } from 'react-redux'

import * as actions from '../actions'


class Header extends Component {
  authButton () {
    const { authenticated } = this.props
    let btnText = 'Sign in'
    if (authenticated) {
      btnText = 'Sign out'
    }
    return <button
      onClick={() => this.props.authenticate(!authenticated)}
    >
      {btnText}
    </button>
  }
  render () {
    return (
      <nav>
        <ul>
          <li><Link to='/'>Home</Link></li>
          <li><Link to='/users'>Users</Link></li>
          <li><Link to='/comments'>Comments</Link></li>
          <li>{this.authButton()}</li>
        </ul>
      </nav>
    )
  }
}

const mapStateToProps = (state) => {
  const { authenticated } = state
  return {
    authenticated
  }
}


export default connect(mapStateToProps, actions)(Header)
