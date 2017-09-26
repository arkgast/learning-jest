import { combineReducers } from 'redux'
import comments from './comments'
import authenticated from './authentication'


export default combineReducers({
  comments,
  authenticated
})
