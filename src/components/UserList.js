import React, { Component } from 'react'
import { connect } from 'react-redux'
import * as actions from '../actions'


class UserList extends Component {
  renderUser (user, i) {
    return (
      <div key={`user-${i}`} className='user'>
        <h3>{user.name}</h3>
        <p>Super enterprise</p>
        <button>hi!</button>
      </div>
    )
  }
  renderUsers () {
    const { users } = this.props
    if (users.length === 0) {
      return (
        <div className='message'>
          There is no users yet
        </div>
      )
    }
    return users.map(this.renderUser)
  }
  render () {
    return (
      <div>
        {this.renderUsers()}
      </div>
    )
  }
}

const mapStateToProps = (state) => {
  const { users } = state
  return { users }
}


export default connect(mapStateToProps, actions)(UserList)
