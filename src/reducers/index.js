import { combineReducers } from 'redux'
import comments from './comments'
import authenticated from './authentication'
import users from './users'


export default combineReducers({
  comments,
  authenticated,
  users
})
