import React, { Component } from 'react'
import { connect } from 'react-redux'

import CommentBox from './CommentBox'
import CommentList from './CommentList'


class Comment extends Component {
  render () {
    return (
      <div>
        <CommentBox />
        <CommentList comments={this.props.comments} />
      </div>
    )
  }
}

const mapStateToProps = (state) => {
  const { comments } = state
  return {
    comments
  }
}

export default connect(mapStateToProps, null)(Comment)
