import React from 'react'
import { shallow } from 'enzyme'
import Home from '../../src/components/Home'


describe('<Home />', () => {
  it('renders correctly', () => {
    shallow(<Home />)
  })
})
