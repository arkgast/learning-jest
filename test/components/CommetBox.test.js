import React from 'react'

import { Provider } from 'react-redux'
import { createStore } from 'redux'
import { mount } from 'enzyme'

import CommentBox from '../../src/components/CommentBox.js'
import reducers from '../../src/reducers'


describe('CommentBox', () => {
  let wrapper
  beforeEach(() => {
    wrapper = mount(
      <Provider store={createStore(reducers)}>
        <CommentBox />
      </Provider>
    )
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
