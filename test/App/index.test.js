import React from 'react'
import { shallow } from 'enzyme'
import App from '../../src/App'


describe('<App />', () => {
  it('Should render', () => {
    shallow(<App />)
  })

  it('Shoud have one h1 tag', () => {
    const wrapper = shallow(<App />)
    expect(wrapper.find('h1').length).toEqual(1)
  })
})
