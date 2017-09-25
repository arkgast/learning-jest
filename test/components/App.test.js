import { renderComponent } from '../test_helper'
import App from '../../src/components/App'


describe('App', () => {
  let wrapper
  beforeEach(() => {
    wrapper = renderComponent(App)
  })

  it('shows a h1', () => {
    expect(wrapper.find('h1').length).toEqual(1)
  })

  it('shows a nav', () => {
    expect(wrapper.find('nav').length).toEqual(1)
  })
})
