import React, { Component } from 'react'
import { connect } from 'react-redux'

import withAuthentication from './hocs/withAuthentication'
import CommentBox from './CommentBox'
import CommentList from './CommentList'


/**
 * This component is wrapped by withAuthentication hoc
 * because is necessary to be authenticated to it's content
 *
 * @extends {Component}
 */
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


const App = withAuthentication(Comment)
export default connect(mapStateToProps, null)(App)
