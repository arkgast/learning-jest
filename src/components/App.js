import React from 'react'
import { Route } from 'react-router-dom'

import Header from './Header'
import Home from './Home'
import Comment from './Comment'
import UserList from './UserList'


export default () => (
  <div>
    <h1>React rocks!</h1>
    <Header />
    <div className='content-wrapper'>
      <Route path='/' exact component={Home} />
      <Route path='/users' component={UserList} />
      <Route path='/comments' component={Comment} />
    </div>
  </div>
)
