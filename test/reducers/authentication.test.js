import authReducer from '../../src/reducers/authentication'
import * as types from '../../src/actions/types'


describe('Authenticatin reducer', () => {
  it('handles action with unknown type', () => {
    expect(authReducer([], {})).toEqual([])
  })

  it('handles action of type CHANGE_AUTH', () => {
    const expectedValue = true
    const action = {
      type: types.CHANGE_AUTH,
      payload: true
    }
    expect(authReducer(false, action)).toEqual(expectedValue)
  })
})
