import React from 'react'
import { Route } from 'react-router-dom'

import Header from './Header'
import Home from './Home'
import Comment from './Comment'


export default () => (
  <div>
    <h1>React rocks!</h1>
    <Header />
    <div className='content-wrapper'>
      <Route path='/' exact component={Home} />
      <Route path='/comments' component={Comment} />
    </div>
  </div>
)
