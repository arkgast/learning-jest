import { renderComponent } from '../test_helper'
import { UserList } from '../../src/components/UserList'


describe('<UserList />', () => {
  it('should call fetchUsers once', () => {
    const mockFn = jest.fn()
    renderComponent(UserList, {}, {
      users: [],
      fetchUsers: () => mockFn()
    })
    expect(mockFn.mock.calls.length).toBe(1)
    expect(mockFn).toHaveBeenCalled()
  })

  it('should show a message if empty', () => {
    const wrapper = renderComponent(UserList, {}, {
      users: [],
      fetchUsers: () => {}
    })
    expect(wrapper.find('.message').text()).toBe('There is no users yet')
  })

  it('should show all each user provided', () => {
    const users = [
      { id: 1, name: 'Ana', email: 'ana@email.com' },
      { id: 2, name: 'Noemi', email: 'noemi@email.com' }
    ]
    const wrapper = renderComponent(UserList, {}, {
      users,
      fetchUsers: () => {}
    })
    expect(wrapper.find('.user').length).toBe(users.length)
  })
})
