import React from 'react'

import { authenticate } from '../../../src/actions'
import { renderComponent, store } from '../../test_helper'
import withAuthentication from '../../../src/components/hocs/withAuthentication'


describe('withAuthentication hoc', () => {
  let Component = () => <h1>It rules</h1>
  let wrappedComponent
  beforeEach(() => {
    wrappedComponent = withAuthentication(Component)
  })

  it('shows the component if the user is authenticated', () => {
    const wrapper = renderComponent(wrappedComponent, {authenticated: true})
    expect(wrapper.contains(<Component />)).toBeTruthy()
  })

  it('redirects if the user is not authenticated', () => {
    const mockFn = jest.fn()
    const history = {
      push: () => mockFn()
    }
    renderComponent(wrappedComponent, {}, { history })
    expect(mockFn).toHaveBeenCalled()
  })

  // if the user is in a protected page and decides to sign out
  // it should be redirected to another page
  it('redirects if the user sign out', () => {
    const mockFn = jest.fn()
    const history = {
      push: () => mockFn()
    }
    renderComponent(wrappedComponent,
      { authenticated: true },
      { history }
    )
    store.dispatch(authenticate(false))
    expect(mockFn).toHaveBeenCalled()
  })
})
