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

  describe('Entering some text', () => {
    beforeEach(() => {
      wrapper.find('textarea').simulate('change', {
        target: {value: 'New comment'}
      })
    })

    it('shows that text in the textarea', () => {
      expect(wrapper.find('textarea').props().value).toBe('New comment')
    })

    it('when submitted, clears the input', () => {
      wrapper.find('form').simulate('submit', {
        preventDefault: () => {}
      })
      expect(wrapper.find('textarea').props().value).toBe('')
    })
  })
})
