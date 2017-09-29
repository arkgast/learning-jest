import usersReducer from '../../src/reducers/users'
import * as types from '../../src/actions/types'


describe('Users reducer', () => {
  it('handles action with unknown type', () => {
    expect(usersReducer(undefined, {})).toEqual([])
  })

  it('handles action of type FETCH_USERS', () => {
    const action = {
      type: types.FETCH_USERS,
      payload: {
        data: [
          { id: '1', name: 'Ana', email: 'ana@email.com' },
          { id: '2', name: 'Noemi', email: 'noemi@email.com' }
        ]
      }
    }
    expect(usersReducer(undefined, action)).toEqual(action.payload.data)
  })
})
