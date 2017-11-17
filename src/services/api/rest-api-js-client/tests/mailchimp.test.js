'use strict';


const jsc = require('jsverify');

const Ru = require('rutils');
const B = require('bluebird');

const assert = require('chai').assert;


const mkApi = require('../index.js');









let token = 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VySWQiOjMyLCJBZGRhcHMiOnsidXNlcklkIjozMn0sImlhdCI6MTUwMDAyODkxNH0.vX7ojZDuboDLcBLNs30ePXNohpuVwKqHZ3f6G7Q4ctU';

let mailchimpApi = mkApi( {
    getToken: () => B.resolve( token ),
    setToken: t => {
        token = t;
        return B.resolve()
    } ,

    rootUrl: 'https://us16.api.mailchimp.com',
    version: '3.0',

    logger: true

    // xfOutput: Ru.prop('data'),
} );





describe("GET ", function() {



    it('http Authentication', function() {

        let password =  'ad10cdc8c5f7fc9e949dea9650c49223-us16';       //mailchimp api key
        let username = 'alex0vi_addaps';

        let authHeaderStr = 'Basic ' + new Buffer(`${username}:${password}`).toString('base64')

        let fetchSpec = {
            headers: {
                'Authorization': authHeaderStr
            }
        }

        let spec = { fetchSpec };

        return(
            mailchimpApi
            .get('', {}, spec)
            .tap( console.log )
            // .then( Ru.unless( Ru.I, () => B.reject( new Error(JSON.stringify(validateUser.errors, null, 1)) ) ) )
        )
    })

})
