import React from 'react'

import { renderComponent } from '../test_helper'
import Comment from '../../src/components/Comment'
import CommentBox from '../../src/components/CommentBox'
import CommentList from '../../src/components/CommentList'


describe('<Comment />', () => {
  let wrapper
  beforeEach(() => {
    wrapper = renderComponent(Comment)
  })
  it('shows a CommentBox component', () => {
    expect(wrapper.contains(<CommentBox />)).toBeTruthy()
  })

  it('shows a CommentList component', () => {
    expect(wrapper.contains(<CommentList comments={[]} />)).toBeTruthy()
  })
})
