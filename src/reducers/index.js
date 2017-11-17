'use strict'

import { combineReducers } from 'redux'

import user from './user'

let appReducer = combineReducers({
  user
})

const rootReducer = ( state, action ) => {
  if ( action.type === 'LOG_OUT') {
    state= undefined
  }

  return appReducer( state, action )
}

export default rootReducer
