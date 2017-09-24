import React from 'react'
import { shallow } from 'enzyme'
import App from '../../src/components/App'
import CommentBox from '../../src/components/CommentBox'
import CommentList from '../../src/components/CommentList'


describe('App', () => {
  let wrapper
  beforeEach(() => {
    wrapper = shallow(<App />)
  })

  it('shows a h1 tag', () => {
    expect(wrapper.length).toEqual(1)
  })

  it('shows a CommentBox component', () => {
    expect(wrapper.contains(<CommentBox />)).toBeTruthy()
  })

  it('shows a CommentList component', () => {
    expect(wrapper.contains(<CommentList list={[]} />)).toBeTruthy()
  })
})
