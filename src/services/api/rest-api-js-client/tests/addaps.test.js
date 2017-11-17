'use strict';


const jsc = require('jsverify');

const Ru = require('rutils');
const B = require('bluebird');

const assert = require('chai').assert;


const mkApi = require('../index.js');









let token = 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VySWQiOjMyLCJBZGRhcHMiOnsidXNlcklkIjozMn0sImlhdCI6MTUwMDAyODkxNH0.vX7ojZDuboDLcBLNs30ePXNohpuVwKqHZ3f6G7Q4ctU';

let addapsApi = mkApi( {
    getToken: () => B.resolve( token ),
    setToken: t => {
        token = t;
        return B.resolve()
    } ,

    rootUrl: 'http://localhost:4000',
    version: 2,
    versionUrl: n => `v${n}`,
    apiRoute: 'api',

    xfOutput: Ru.prop('data'),
} );









describe("GET ", function() {

    it('GET user', function() {

        return(
            addapsApi
            .get('user')
            // .then( Ru.unless( Ru.I, () => B.reject( new Error(JSON.stringify(validateUser.errors, null, 1)) ) ) )
        )
    })


    it('loggin, get session', function() {

        let credentials = {
            email: 'emilio@addaps.com',
            password: '987'
        }

        return(
            addapsApi
            .post('session', credentials)
            .tap( console.log )
            // .then( Ru.unless( Ru.I, () => B.reject( new Error(JSON.stringify(validateUser.errors, null, 1)) ) ) )
        )
    })

})
