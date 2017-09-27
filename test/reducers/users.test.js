import usersReducer from '../../src/reducers/users'
import * as types from '../../src/actions/types'


describe('Users reducer', () => {
  it('handles action with unknown type', () => {
    expect(usersReducer(undefined, {})).toEqual([])
  })

  it('handles action of type FETCH_USERS', () => {
    const users = [
      { name: 'Ana' },
      { name: 'Noemi' }
    ]
    const action = {
      type: types.FETCH_USERS,
      payload: users
    }
    expect(usersReducer([], action)).toEqual(users)
  })
})
