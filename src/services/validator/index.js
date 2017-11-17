'use strict'

const validateEmail = emailStr => {

    const re = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/

    return re.test( emailStr )
}


const validateFullName = fullName => {

    const re = /([a-zA-Z]+\s?\b){2,}/

    return re.test( fullName )
}


const validatePassword = pwd => {

    const reAllEquals = /^(.)\1*$/

    const reLimit = /.{6,}/

    return !reAllEquals.test( pwd ) && reLimit.test( pwd )
}


export default {
    validateEmail,
    validateFullName,
    validatePassword
}
