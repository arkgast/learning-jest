import { SAVE_COMMET } from './types'


export const saveComment = (comment) => {
  return {
    type: SAVE_COMMET,
    payload: comment
  }
}
