'use strict'

import Ru from 'rutils'

import up from 'updeep'

import { REHYDRATE } from 'redux-persist/lib/constants'

let initialState = {
  myTotalInvestment: 0,
  icoTotalInvestors: 0,
  icoTotalUSD: 0,
  icoTotalCoins: 0,
  icoListOfCoins: {
    'ETH': {
      name: 'ETH',
      totalCoins: 0,
      totalUSD: 0,
      totalRST: 0
    },
    'BTC': {
      name: 'BTC',
      totalCoins: 0,
      totalUSD: 0,
      totalRST: 0
    }
  },
  isLoggedIn: false
}


const updateLoggeInStatus = ( state, payload ) => {
  return {
    isLoggedIn: payload
  }
}

const addCoin = ( state, payload ) => {
  let {
    icoListOfCoins
  } = state

  let {
    name
  } = payload

  return {
    icoListOfCoins: Ru.assoc( name, payload, icoListOfCoins )
  }
}


const setTotalInvestment = ( state, payload ) => {
  return {
    myTotalInvestment: payload
  }

}

const setTotalUSD = ( state, payload ) => {
  return {
    icoTotalUSD: payload
  }

}

const setTotalCoins = ( state, payload ) => {
  return {
    icoTotalCoins: payload
  }
}

const setTotalInvestors = ( state, payload ) => {
  return {
    icoTotalInvestors: payload
  }

}



let actionHandlers = {
  ADD_ICO_COIN: addCoin,
  SET_MY_TOTAL_INVESTMENT: setTotalInvestment,
  SET_ICO_TOTAL_USD: setTotalUSD,
  SET_ICO_TOTAL_COINS: setTotalCoins,
  SET_ICO_TOTAL_INVESTORS: setTotalInvestors,
  UPDATE_LOGGED_IN_STATUS: updateLoggeInStatus
}


const reducer = ( state = initialState, action ) => {

  let {
    type,
    payload,
    meta
  } = action

  // console.log('action-state:::: ', state)
  // console.log('action:::: ', action)

  if ( type === REHYDRATE && Ru.isNotNil(payload)) {
    return {
      ...state,
      ...payload.dashboard
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
