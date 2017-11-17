'use strict'

import Ru from 'rutils'

import mkApi from './rest-api-js-client'

const snakeCaseKeysIfObj = Ru.pipe(
    Ru.cond([
        [ Ru.isPlainObj,                    Ru.snakeCaseKeys    ],
        [ Ru.T,                             Ru.I                ]
    ])
)



const api = null

const getApi = token => mkApi({
  getToken: Ru.K(token),
  apiRoute: 'api',
  rootUrl: 'https://ico.realsafe.co',
  // rootUrl: 'http://localhost:3050',
  versionUrl: Ru.K(''),
  logger: true,
  // xfInput: snakeCaseKeysIfObj
})

export default getApi
