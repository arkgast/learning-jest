import React from 'react'


const CommentList = (props) => {
  const getList = () => {
    if (props.comments.length === 0) {
      return (
        <li>There is no comments yet</li>
      )
    }
    return props.comments.map((comment, i) => (
      <li key={i} data-id={`${i}`}>{comment}</li>
    ))
  }
  return (
    <ul>{getList()}</ul>
  )
}


export default CommentList
