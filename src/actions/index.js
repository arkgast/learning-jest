import {
  SAVE_COMMET,
  CHANGE_AUTH,
  FETCH_USERS
} from './types'


export const saveComment = (comment) => {
  return {
    type: SAVE_COMMET,
    payload: comment
  }
}

export const authenticate = (state) => {
  return {
    type: CHANGE_AUTH,
    payload: state
  }
}

export const fetchUsers = () => {
  return {
    type: FETCH_USERS,
    payload: [
      { name: 'Ana' },
      { name: 'Noemi' }
    ]
  }
}
