import { renderComponent } from '../test_helper'
import CommentList from '../../src/components/CommentList'


describe('CommentList', () => {
  it('shows all comments', () => {
    const list = [
      { id: 1, comment: 'new comment 1' },
      { id: 2, comment: 'new comment 2' },
      { id: 3, comment: 'new comment 3' }
    ]
    const wrapper = renderComponent(CommentList, {comments: list})
    list.forEach(item => {
      expect(wrapper.find(`li[data-id='${item.id}']`).text()).toEqual(item.comment)
    })
  })

  it('shows a message if the list is empty', () => {
    const wrapper = renderComponent(CommentList, {comments: []})
    expect(wrapper.find('li').length).toEqual(1)
    expect(wrapper.find('li').text()).toEqual('There is no comments yet')
  })
})
