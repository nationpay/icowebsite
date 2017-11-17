'use strict'

import Ru from 'rutils'

import { createAction } from 'redux-actions'

import { batchActions } from 'redux-batched-actions'

import { auth } from '../../services'


const updateProfile            = createAction('UPDATE_PROFILE')
const updateToken              = createAction('UPDATE_TOKEN')
const updateLoggedInStatus     = createAction('UPDATE_LOGGED_IN_STATUS')

const logOut     = createAction('LOG_OUT')

const authServicesResToDispatchParam = spec => {

  console.log('authServicesResToDispatchParam', spec)

  let {
    user,
    token
  } = spec

  let actions = [
    updateProfile( user ),
    updateToken( token ),
    updateLoggedInStatus(true)
  ]

  return batchActions( actions, 'LOGIN_SUCCESS' )
}


const login = Ru.curry( ( credentials, dispatch, getState ) => {
  return (
    auth
    .login( credentials )
    .then( res => {
      return dispatch( authServicesResToDispatchParam(res) )
    })
  )
})


const logout = Ru.curry(( _, dispatch, getState ) => {

  let {
    token
  } = getState()

  return (
    auth
    .logout( token )
    .then( res => {
      return dispatch( logOut() )
    })
  )
})


// const verifyAccount = Ru.curry( ( spec, dispatch, getState ) => {
//   let {
//     credentials,
//     code
//   } = spec
//
//   let {
//     email,
//     password
//   } = credentials
//
//   return (
//     auth
//     .verifyAccount( { email, password, code })
//     .then( res => {
//       dispatch( authServicesResToDispatchParam(res) )
//     })
//   )
// })


const register = Ru.curry( ( registerData, dispatch, getState) => {

  let fields = [
    'firstName',
    'lastName',
    'email',
    'password'
  ]

  return (
    auth
    .register( Ru.pick( fields, registerData ) )
    .tap( res => auth.setNewRegistryStatus(true) )
  )
})



export {
  login,
  register,
  logout
}
