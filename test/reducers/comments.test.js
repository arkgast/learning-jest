import commentReducer from '../../src/reducers/comments'
import * as types from '../../src/actions/types'


describe('Comments Reducers', () => {
  it('handles action with unknow type', () => {
    const action = {
      type: 'NONE'
    }
    expect(commentReducer([], action)).toEqual([])
  })

  it('handles action of type SAVE_COMMENT', () => {
    const action = {
      type: types.SAVE_COMMET,
      payload: 'New comment'
    }
    const expectedValue = ['New comment']
    expect(commentReducer([], action)).toEqual(expectedValue)
  })
})
