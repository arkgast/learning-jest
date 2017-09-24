import React from 'react'
import { shallow } from 'enzyme'
import CommentList from '../../src/components/CommentList'


describe('CommentList', () => {
  it('shows all comments', () => {
    const list = [
      { id: 1, comment: 'new comment 1' },
      { id: 2, comment: 'new comment 2' },
      { id: 3, comment: 'new comment 3' }
    ]
    const wrapper = shallow(<CommentList list={list} />)
    list.forEach(item => {
      expect(wrapper.find(`li[data-id='${item.id}']`).text()).toEqual(item.comment)
    })
  })

  it('shows a message if the list is empty', () => {
    const wrapper = shallow(<CommentList list={[]} />)
    expect(wrapper.find('li').length).toEqual(1)
    expect(wrapper.find('li').text()).toEqual('There is no comments yet')
  })
})
