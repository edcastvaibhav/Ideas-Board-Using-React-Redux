import { combineReducers } from 'redux'
import { syncHistoryWithStore, routerReducer as routing, routerMiddleware } from 'react-router-redux'
import users from './users'
import common from './common'

export default combineReducers({
  routing: routing,
  users,
  common
})