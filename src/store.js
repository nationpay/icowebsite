'use strict'

import rootReducer from './reducers/index.js'

import thunk from 'redux-thunk'

import { applyMiddleware, createStore, compose } from 'redux'

import { enableBatching } from 'redux-batched-actions'

import { persistStore, persistReducer } from 'redux-persist'

import storage from 'redux-persist/es/storage'

const config = {
  key: 'c9e29e7cd1cb495d282c', 
  storage,
}


const rootPersistReducer = persistReducer( config, rootReducer )


const store = createStore(
  enableBatching( rootPersistReducer ),
  undefined,
  compose(
    applyMiddleware(thunk),
    enableBatching,
  )
)


const persistor = persistStore( store )

console.log('My store:: ', store.getState())

export { persistor, store }
