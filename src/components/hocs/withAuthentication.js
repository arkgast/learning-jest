import React, { Component } from 'react'
import { connect } from 'react-redux'


export default (ComposedComponent) => {
  class Authentication extends Component {
    componentWillReceiveProps (nextProps) {
      if (!nextProps.authenticated) {
        this.props.history.push('/')
      }
    }
    componentWillMount () {
      if (!this.props.authenticated) {
        this.props.history.push('/')
      }
    }
    render () {
      const { authenticated, dispatch, ...props } = this.props
      return (
        <ComposedComponent {...props} />
      )
    }
  }

  const mapStateToProps = (state) => {
    const { authenticated } = state
    return { authenticated }
  }

  return connect(mapStateToProps, null)(Authentication)
}
