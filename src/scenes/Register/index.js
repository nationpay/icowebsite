'use strict'

import React, { PureComponent } from 'react'

import Ru from 'rutils'

import { withRouter, Link } from 'react-router-dom';

import autobind from 'autobind-decorator'

import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';

import { TextField, SelectField, MenuItem, Checkbox } from 'material-ui';

import LaddaButton, { S, ZOOM_IN } from 'react-ladda';

import B from 'bluebird'

import { store } from '../../store.js'

import { auth, crypto, validator } from '../../services'

import Alert from 'react-s-alert';

const styles = {
  underlineStyle: {
    borderColor: '#00BCD4',
  },
  floatingLabelFocusStyle: {
    color: '#00BCD4',
  },
  checkbox: {
      marginBottom: 16,
  }
};


const items = [
  <MenuItem key={1} value={1} primaryText="Never" />,
  <MenuItem key={2} value={2} primaryText="Every Night" />,
  <MenuItem key={3} value={3} primaryText="Weeknights" />,
  <MenuItem key={4} value={4} primaryText="Weekends" />,
  <MenuItem key={5} value={5} primaryText="Weekly" />,
];


console.log(validator);

@withRouter
@autobind
class Register extends PureComponent {

    constructor(props) {
        console.log(' this.props-Register::: ', props )
        super(props)
        this.state = {
            user: {
                firstName: '',
                lastName: '',
                email: '',
                password: '',
                retypedPassword: '',
            },
            loading: false,
            submitted: false,
            validationError:{
              firstName: false,
              email: false,
              password: false,
              retypedPassword:false
            },
            alertError: null
        }

        this.alertOptions = {
          offset: 50,
          position: 'top-right',
          effect: 'slide',
          html: false,
          timeout: 5000,
        }
    }

    validateData(){

      const isNotEmpty = Ru.o(Ru.eq(false), Ru.isEmpty)

      const isFormatValid = x => Ru.isNotNil(x) && isNotEmpty(x)



      let { user } = this.state


      console.log('user', user);


      let isFullNameValid = isFormatValid(user.firstName) && validator.validateFullName(user.firstName)
      let isEmailValid = isFormatValid(user.email) && validator.validateEmail(user.email)
      let isPasswordValid = isFormatValid(user.password) && validator.validatePassword(user.password)
      let isRetypedPasswordValid = isFormatValid(user.retypedPassword) && validator.validatePassword(user.retypedPassword)

      let arePasswordEquals = user.password === user.retypedPassword

      let isDataValid = (
            isFullNameValid
        &&  isEmailValid
        &&  isPasswordValid
        &&  isRetypedPasswordValid
      )

      this.setState({
        validationError: {
          firstName: !isFullNameValid,
          email: !isEmailValid,
          password: !isPasswordValid,
          retypedPassword: !isRetypedPasswordValid,
        }
      }, () => {
        if ( isDataValid && !arePasswordEquals ) {
          const err = {
            description: "the password fields should be the same"
          }
          this.setState({ alertError: err, loading: false }, this.showAlert )
        }

      })

      return ( isDataValid &&  arePasswordEquals )
    }

    handleSubmit(event) {
        event.preventDefault()

        this.setState({ submitted: true, loading: true })

        let fields = [
          'firstName',
          'email',
          'password',
          // 'retypedPassword'
        ]

        let { user } = this.state

        let fieldsValues = Ru.pick(fields, user)

        let { history, actions } = this.props

        const whenT = Ru.when( Ru.equals(true) )

        const encryptPassword = Ru.over( Ru.lensProp('password'), crypto.hash )

        B
        .resolve( this.validateData() )
        .then( whenT( () => auth.register( encryptPassword(fieldsValues) ) ) )
        .tap( whenT( res => auth.setNewRegistryStatus(true) ) )
        .then( whenT( () => {
          console.log( 'store at registering ', store.getState() )
          console.log( ' registering status ', auth.isNewRegistry() )

          history.push(`/needConfirmationEmailSent?email=${user.email}`)
        }))
        .catch(err => {
          console.log( 'Err-register', err );
          this.setState({ alertError: err, loading: false }, this.showAlert )
        })
    }

    showAlert(){
        if ( this.state.submitted ) {
           Alert.error(
               this.state.alertError.description,
               this.alertOptions
           );
           this.setState({ submitted: false, loading: false })
         }
     }

    handleChange(event) {
        const { name, value } = event.target;
        const { user } = this.state;
        this.setState({
            user: {
                ...user,
                [name]: value
            }
        }, this.validateData)
    }

    handleButton(validationError) {
        let checkFields = prop => {
            if(prop === true) {
                this.setState({
                    loading: false }
                );
            }
         };

        let checking = Ru.map(checkFields, validationError);
    }

    render(){
        const { user, submitted, validationError, loading } = this.state
        return(
            <MuiThemeProvider>
                <section className="login-section section">
                    <div className='container'>
                        <div className='row text-center'>
                            <div className='col-md-6 col-md-offset-3'>
                                <Alert stack={{limit: 3}} />
                                <form name="form" className="form" onSubmit={this.handleSubmit}>
                                    <h2 className="section-heading">Sign Up</h2>
                                    <div className={'form-group' + (submitted && ( !user.firstName || validationError.firstName ) ? ' has-error' : '')}>
                                        <TextField
                                            type="text"
                                            className="inputText"
                                            name="firstName"
                                            value={user.firstName}
                                            onChange={this.handleChange}
                                            floatingLabelFocusStyle={styles.floatingLabelFocusStyle}
                                            underlineFocusStyle={styles.underlineStyle}
                                            floatingLabelText="Full Name"
                                         />
                                          {submitted && !user.firstName &&
                                              <div className="help-block">Full Name is required</div>
                                          }
                                          {submitted && user.firstName && validationError.firstName &&
                                              <div className="help-block"> Full Name should have atleast 2 names </div>
                                          }
                                    </div>
                                    {/*<div className={'form-group' + (submitted && !user.lastName ? ' has-error' : '')}>
                                        <TextField
                                              type="text"
                                              className="inputText"
                                              name="lastName"
                                              value={user.lastName}
                                              onChange={this.handleChange}
                                              floatingLabelFocusStyle={styles.floatingLabelFocusStyle}
                                              underlineFocusStyle={styles.underlineStyle}
                                              floatingLabelText="Last Name"
                                           />
                                          {submitted && !user.lastName &&
                                              <div className="help-block">Last Name is required</div>
                                          }
                                    </div> */}
                                    <div className={'form-group' + (submitted && ( !user.email || validationError.email ) ? ' has-error' : '')}>
                                        <TextField
                                              type="inputText"
                                              className="inputText"
                                              name="email"
                                              value={user.email}
                                              onChange={this.handleChange}
                                              floatingLabelFocusStyle={styles.floatingLabelFocusStyle}
                                              underlineFocusStyle={styles.underlineStyle}
                                              floatingLabelText="Email"
                                           />
                                          {submitted && !user.email &&
                                              <div className="help-block">Email is required</div>
                                          }
                                          {submitted && user.email && validationError.email &&
                                              <div className="help-block">Email format is not correct</div>
                                          }
                                    </div>
                                    <div className={'form-group' + (submitted && ( !user.password || validationError.password )? ' has-error' : '')}>
                                        <TextField
                                              type="password"
                                              className="inputText"
                                              name="password"
                                              value={user.password}
                                              onChange={this.handleChange}
                                              floatingLabelFocusStyle={styles.floatingLabelFocusStyle}
                                              underlineFocusStyle={styles.underlineStyle}
                                              floatingLabelText="Password"
                                           />
                                          {submitted && !user.password &&
                                              <div className="help-block">Password is required</div>
                                          }
                                          {submitted && user.password && validationError.password &&
                                              <div className="help-block">Password should contain atleat 6 alphanumeric characters not equals </div>
                                          }
                                    </div>
                                    <div className={'form-group' + (submitted && ( !user.retypedPassword || validationError.retypedPassword ) ? ' has-error' : '')}>
                                        <TextField
                                              type="password"
                                              className="inputText"
                                              name="retypedPassword"
                                              value={user.retypedPassword}
                                              onChange={this.handleChange}
                                              floatingLabelFocusStyle={styles.floatingLabelFocusStyle}
                                              underlineFocusStyle={styles.underlineStyle}
                                              floatingLabelText="Retype Password"
                                           />
                                          {submitted && !user.retypedPassword &&
                                              <div className="help-block">Password is required</div>
                                          }
                                          {submitted && user.retypedPassword && validationError.retypedPassword &&
                                              <div className="help-block">Password should contain atleat 6 alphanumeric characters not equals </div>
                                          }
                                    </div>
                                    <div className="btn-contain">
                                        <LaddaButton
                                            className="btn btn-login"
                                            loading={loading}
                                            data-color="#eee"
                                            onClick= { this.handleButton(validationError) }
                                            data-size={S}
                                            data-style={ZOOM_IN}
                                            data-spinner-size={30}
                                            data-spinner-color="#ddd"
                                            data-spinner-lines={12}
                                        >Sign up
                                        </LaddaButton>
                                          <Link to="/" className="btn btn-link">Log In</Link>
                                    </div>
                                </form>
                            </div>
                        </div>
                    </div>
                </section>
            </MuiThemeProvider>
        )
    }
}

export default Register
