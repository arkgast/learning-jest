import CommentBox from '../../src/components/CommentBox.js'
import { renderComponent } from '../test_helper'


describe('CommentBox', () => {
  let wrapper
  beforeEach(() => {
    wrapper = renderComponent(CommentBox)
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
