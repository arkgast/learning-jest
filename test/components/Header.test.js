import { renderComponent } from '../test_helper'
import Header from '../../src/components/Header'


describe('<Header />', () => {
  let wrapper
  beforeEach(() => {
    wrapper = renderComponent(Header)
  })

  it('shows all LI', () => {
    // The number of items are 3 right now
    // Home - Users - Comments - Sign in | out
    expect(wrapper.find('li').length).toBe(4)
  })

  describe('Button text', () => {
    let button
    beforeEach(() => {
      button = wrapper.find('li button')
    })
    it('shows Sign in text', () => {
      expect(button.text()).toEqual('Sign in')
    })

    it('shows Sign out text', () => {
      button.simulate('click')
      expect(button.text()).toEqual('Sign out')
    })
  })
})
