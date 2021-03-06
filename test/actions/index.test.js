import axios from 'axios'
import { SAVE_COMMET, CHANGE_AUTH, FETCH_USERS } from '../../src/actions/types'
import { saveComment, authenticate, fetchUsers } from '../../src/actions'


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
      action = authenticate(true)
    })

    it('has the correct type', () => {
      expect(action.type).toEqual(CHANGE_AUTH)
    })

    it('has the correct payload', () => {
      expect(action.payload).toBeTruthy()
    })
  })

  describe('fetchUsers', () => {
    // Right now the action 'fetchUsers' is returning a fake user list
    it('should fetch users', async () => {
      const expectedValue = {
        type: FETCH_USERS,
        payload: [
          { id: '1', name: 'Ana', email: 'ana@email.com' },
          { id: '2', name: 'Noemi', email: 'noemi@email.com' }
        ]
      }
      axios.get = jest.fn(() => {
        return expectedValue.payload
      })
      const users = await fetchUsers()
      expect(users).toEqual(expectedValue)
    })
  })
})
