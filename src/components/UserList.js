import React, { Component } from 'react'
import { connect } from 'react-redux'
import { fetchUsers } from '../actions'


class UserList extends Component {
  componentDidMount () {
    this.props.fetchUsers()
  }
  renderUser (user) {
    return (
      <div key={user.id} className='user'>
        <h3>{user.name}</h3>
        <p>{user.email}</p>
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
      <div className='user-container'>
        {this.renderUsers()}
      </div>
    )
  }
}

const mapStateToProps = (state) => {
  const { users } = state
  return { users }
}


export {
  UserList
}
export default connect(mapStateToProps, {fetchUsers})(UserList)
