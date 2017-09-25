import { SAVE_COMMET } from '../../src/actions/types'
import { saveComment } from '../../src/actions'


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
})
