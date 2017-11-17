'use strict'

import React, { PureComponent } from 'react'

import Ru from 'rutils'

import TextField from 'material-ui/TextField';

import { login } from '../../actionCreators/auth'

import { bindActionCreators } from 'redux'

import { withRouter, Link } from 'react-router-dom';

import autobind from 'autobind-decorator'

import { connect } from 'react-redux'

import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';

import { crypto } from '../../services'

import B from 'bluebird'

import { store } from '../../store.js'

import Alert from 'react-alert'

import 'url-search-params-polyfill'

const mapDispatchToProps = ( dispatch, ownProps ) => {
  let actions = {
    login
  }

  return {
    actions: bindActionCreators( actions, dispatch )
  }
}

const styles = {
  underlineStyle: {
    borderColor: '#009688',
  },
  floatingLabelFocusStyle: {
    color: '#009688',
  },
};

@withRouter
@connect( null, mapDispatchToProps )
@autobind
class Login extends PureComponent {

    constructor(props) {
        super(props)
        this.state = {
          email:'',
          password:'',
          submitted: false,
          error: null,
          // fromConfirmLink: false,
          // confirmedUser: {
          //   name: '',
          //   email: ''
          // }
        }

        this.alertOptions = {
          offset: 20,
          position: 'top center',
          theme: 'light',
          time: 5000,
          transition: 'fade'
        }
    }


    componentDidMount(){
      let search = new URLSearchParams (this.props.location.search)

      let name = search.get('name')
      let email = search.get('email')

      if ( Ru.isNotNil(name) && Ru.isNotNil(email) ) {
        // this.state({
        //   fromConfirmLink: true,
        //   confirmedUser: {
        //     name: decodeURIComponent(name),
        //     email: decodeURIComponent(email)
        //   }
        // })

        this.msg.show(
          `Thank you ${name} for registering. \nPlease, login now to buy tokens and view your dashboard`,
          {
            time: 10000,
            type: 'success',
            //  icon: <img src="path/to/some/img/32x32.png" />
          }
        )

      }
    }

    handleSubmit(e) {
        e.preventDefault();

        console.log('this.props:::', this.props);

        this.setState({ submitted: true, error: null });

        let { email, password } = this.state

        let { history, actions } = this.props

        let credentials = {
          email,
          password: crypto.hash(password)
        }

        const isNotEmpty = Ru.o(Ru.eq(false), Ru.isEmpty)

        const isValid = x => Ru.isNotNil(x) && isNotEmpty(x)

        let areCredentialsSet = Ru.all( isValid, [ email, password ])

        B
        .resolve( areCredentialsSet )
        .then( Ru.when( Ru.equals(true), () => actions.login( credentials ).then(Ru.T) ) )
        .then( Ru.when( Ru.equals(true), () => {
          console.log( 'store at login ', store.getState() )
          history.push('/dashboard')
        }))
        .catch(err => {
          console.log( 'Err-Login', err );
          this.setState({ error: err }, this.showAlert )
        })


    }

    showAlert(){
       this.msg.show(this.state.error.description, {
         time: 10000,
         type: 'error',
        //  icon: <img src="path/to/some/img/32x32.png" />
       })
     }


    handleChange(e) {
        let { name, value } = e.target;
        this.setState({ [name]: value });
    }

    render(){
        const { email, password, submitted, error } = this.state
        return(
             <MuiThemeProvider>
                <section className="login-section section">
                    <div className='container'>
                        <div className='row text-center'>
                            <div className='col-md-6 col-md-offset-3'>
                                <Alert ref={a => this.msg = a} {...this.alertOptions} />
                                <form name="form" className="form" onSubmit={this.handleSubmit}>
                                    <h2 className="section-heading">Log In</h2>
                                    <div className={'form-group' + (submitted && !email ? ' has-error' : '')}>
                                        <TextField
                                        type="inputText"
                                        className="inputText"
                                        name="email"
                                        value={email}
                                        onChange={this.handleChange}
                                        floatingLabelFocusStyle={styles.floatingLabelFocusStyle}
                                         underlineFocusStyle={styles.underlineStyle}
                                         floatingLabelText="Email"
                                       />
                                       {submitted && !email &&
                                            <div className="help-block">Email is required</div>
                                        }

                                    </div>
                                    <div className={'form-group' + (submitted && !password ? ' has-error' : '')}>
                                        <TextField
                                        type="password"
                                        className="inputText"
                                        name="password"
                                        value={password}
                                        onChange={this.handleChange}
                                         underlineFocusStyle={styles.underlineStyle}
                                        floatingLabelFocusStyle={styles.floatingLabelFocusStyle}
                                         floatingLabelText="Enter your password"
                                       />
                                       {submitted && !password &&
                                            <div className="help-block">Password is required</div>
                                        }

                                    </div>
                                    <div className="btn-contain">
                                        <button className="btn btn-login">Log In</button>
                                        <Link to="/register" className="btn btn-link">Sign Up</Link>
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

export default Login
