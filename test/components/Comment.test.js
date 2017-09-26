import React from 'react'

import { renderComponent } from '../test_helper'
import Comment from '../../src/components/Comment'
import CommentBox from '../../src/components/CommentBox'
import CommentList from '../../src/components/CommentList'


describe('<Comment />', () => {
  describe('User is authenticated', () => {
    let wrapper
    beforeEach(() => {
      wrapper = renderComponent(Comment, { authenticated: true })
    })
    it('shows a CommentBox component', () => {
      expect(wrapper.contains(<CommentBox />)).toBeTruthy()
    })

    it('shows a CommentList component', () => {
      expect(wrapper.contains(<CommentList comments={[]} />)).toBeTruthy()
    })
  })

  /**
   * If the user is not authenticated the function push will be called
   */
  describe('User is not authenticated', () => {
    it('redirects to the home page', () => {
      const history = {
        push: () => {}
      }
      const spy = jest.spyOn(history, 'push')

      renderComponent(Comment, {}, { history })
      expect(spy).toHaveBeenCalled()
    })
  })
})
