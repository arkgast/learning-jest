import React, { Component } from 'react'


export default class CommentBox extends Component {
  constructor (props) {
    super(props)
    this.state = {
      comment: ''
    }
    this.handleChange = this.handleChange.bind(this)
    this.handleSubmit = this.handleSubmit.bind(this)
  }
  handleChange (event) {
    this.setState({
      comment: event.target.value
    })
  }
  handleSubmit (event) {
    event.preventDefault()
    this.setState({
      comment: ''
    })
  }
  render () {
    return (
      <form onSubmit={this.handleSubmit}>
        <textarea
          value={this.state.comment}
          onChange={this.handleChange}
        />
        <button action='submit'>Add comment</button>
      </form>
    )
  }
}
