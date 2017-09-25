import React from 'react'

import { mount } from 'enzyme'
import { createStore } from 'redux'
import { Provider } from 'react-redux'
import { BrowserRouter as Router } from 'react-router-dom'

import reducers from '../src/reducers'


/**
 * Helper to test components that need the redux provider
 * 
 * mount is used because it's necessary to render all tree
 * due to Provider wrapper and connect hoc.
 * 
 * @param {@reactElement} Component Component to be mounted
 * @param {object} state Current app state for tests
 * @param {objeact} props Current component's props
 * @returns {reactElement} The Component wrapped in a Provider container
 */
export const renderComponent = (Component, state = {}, props = {}) => {
  return mount(
    <Provider store={createStore(reducers, state)}>
      <Router>
        <Component {...props} />
      </Router>
    </Provider>
  )
}
