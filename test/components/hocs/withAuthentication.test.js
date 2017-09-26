import React from 'react'

import { renderComponent } from '../../test_helper'
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
})
