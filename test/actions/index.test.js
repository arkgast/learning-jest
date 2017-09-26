import { SAVE_COMMET, CHANGE_AUTH } from '../../src/actions/types'
import { saveComment, changeAuth } from '../../src/actions'


describe('actions', () => {
  describe('saveComment', () => {
    let action
    beforeEach(() => {
      action = saveComment('New comment')
    })

    it('has the correct type', () => {
      expect(action.type).toEqual(SAVE_COMMET)
    })

    it('has the correct payload', () => {
      expect(action.payload).toEqual('New comment')
    })
  })

  describe('changeAuth', () => {
    let action
    beforeEach(() => {
      action = changeAuth(true)
    })

    it('has the correct type', () => {
      expect(action.type).toEqual(CHANGE_AUTH)
    })

    it('has the correct payload', () => {
      expect(action.payload).toBeTruthy()
    })
  })
})
