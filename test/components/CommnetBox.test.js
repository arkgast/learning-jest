import React from 'react'
import { shallow } from 'enzyme'
import CommentBox from '../../src/components/CommentBox.js'


describe('CommentBox', () => {
  let wrapper
  beforeEach(() => {
    wrapper = shallow(<CommentBox />)
  })

  it('has a text area', () => {
    expect(wrapper.find('textarea').exists()).toBeTruthy()
  })

  it('has a button', () => {
    expect(wrapper.find('button').exists()).toBeTruthy()
  })
})
