import React from 'react'
import { shallow } from 'enzyme'
import App from '../../src/components/App'


describe('App', () => {
  it('renders correctly', () => {
    shallow(<App />)
  })

  it('has a h1 tag', () => {
    const wrapper = shallow(<App />)
    expect(wrapper.length).toEqual(1)
  })
})
