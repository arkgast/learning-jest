import { renderComponent } from '../test_helper'
import UserList from '../../src/components/UserList'


describe('<UserList />', () => {
  it('should show an empty message', () => {
    const wrapper = renderComponent(UserList)
    expect(wrapper.find('.message').text()).toEqual('There is no users yet')
  })

  it('should render all users', () => {
    const wrapper = renderComponent(UserList, { users:
      [
        { name: 'Ana' },
        { name: 'Noemi' }
      ]
    })
    expect(wrapper.find('.user').length).toEqual(2)
  })
})
