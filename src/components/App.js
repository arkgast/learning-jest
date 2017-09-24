import React from 'react'
import CommentBox from './CommentBox'
import CommentList from './CommentList'


export default () => (
  <div>
    <h1>React rocks!</h1>
    <CommentBox />
    <CommentList list={[]} />
  </div>
)
