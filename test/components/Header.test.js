import React from 'react'
import { shallow } from 'enzyme'
import Header from '../../src/components/Header'


describe('<Header />', () => {
  let wrapper
  beforeEach(() => {
    wrapper = shallow(<Header />)
  })

  it('shows all LI', () => {
    expect(wrapper.find('li').length).toBe(3)
  })
})
