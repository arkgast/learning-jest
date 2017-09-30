import asyncMiddleware from '../../src/middlewares/async'


const create = () => {
  const store = {
    getState: jest.fn(() => ({})),
    dispatch: jest.fn()
  }
  const next = jest.fn()
  const invoke = (action) => asyncMiddleware(store)(next)(action)

  return {store, next, invoke}
}

it('should go to the next middleware', () => {
  const { next, invoke } = create()
  const action = {}
  invoke(action)
  expect(next).toHaveBeenCalledWith(action)
})

it('should dispatch a new action when the promise is resolved', () => {
  const { store, invoke } = create()
  invoke({
    payload: {
      then: jest.fn(() => {
        store.dispatch('TEST')
      })
    }
  })
  expect(store.dispatch).toHaveBeenCalled()
  expect(store.dispatch).toHaveBeenCalledWith('TEST')
})
