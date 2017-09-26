import { SAVE_COMMET, CHANGE_AUTH } from './types'


export const saveComment = (comment) => {
  return {
    type: SAVE_COMMET,
    payload: comment
  }
}

export const changeAuth = (state) => {
  return {
    type: CHANGE_AUTH,
    payload: state
  }
}
