import { renderComponent } from '../test_helper'
import CommentList from '../../src/components/CommentList'


describe('CommentList', () => {
  it('shows all comments', () => {
    const comments = [ 'New comment', 'Another comment' ]
    const wrapper = renderComponent(CommentList, {}, {comments})
    comments.forEach((comment, i) => {
      expect(wrapper.find(`li[data-id='${i}']`).text()).toEqual(comment)
    })
  })

  it('shows a message if the list is empty', () => {
    const wrapper = renderComponent(CommentList, {}, {comments: []})
    expect(wrapper.find('li').length).toEqual(1)
    expect(wrapper.find('li').text()).toEqual('There is no comments yet')
  })
})
