'use strict'

import Ru from 'rutils'

import up from 'updeep'

import { REHYDRATE } from 'redux-persist/lib/constants'

let initialState = {
  profile: {
    firstName: '',
    lastName: '',
    email: '',
  },
  'token': null,
  isLoggedIn: false
}


const updateLoggeInStatus = ( state, payload ) => {
  return {
    isLoggedIn: payload
  }
}


const updateProfile = ( state, payload ) => {
  return {
    profile: Ru.merge( state.profile, payload )
  }
}


const updateToken = ( state, payload ) => {
  return {
    token: payload
  }
}



let actionHandlers = {
  UPDATE_LOGGED_IN_STATUS: updateLoggeInStatus,
  UPDATE_PROFILE: updateProfile,
  UPDATE_TOKEN: updateToken
}


const reducer = ( state = initialState, action ) => {

  let {
    type,
    payload,
    meta
  } = action

  console.log('action-state:::: ', state)
  console.log('action:::: ', action)

  if ( type === REHYDRATE && Ru.isNotNil(payload)) {
    return {
      ...state,
      ...payload.user
    }
  }


  let actionHandler = actionHandlers[ type ]

  if ( !Ru.isNil( actionHandler ) ) {
    let statePropertyUpdated = Ru.defaultTo( {}, actionHandler(state, payload) )

    return up( statePropertyUpdated, state )
  }

  // console.log('action-after-state:::: ', state)
  return state
}


export default reducer
