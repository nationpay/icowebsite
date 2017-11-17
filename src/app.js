import React, { PureComponent } from 'react'
import TopBar from './components/TopBar'
import Footer from './components/Footer'

import LoginScene from './scenes/Login'
import NeedConfirmationEmailSentScene from './scenes/NeedConfirmationEmailSent'
import RegisterScene from './scenes/Register'
import DashboardScene from './scenes/Dashboard'

import { Provider } from 'react-redux'

import { store, persistor } from './store.js'

import { PersistGate } from 'redux-persist/es/integration/react'

import { auth } from './services/index.js';


import Ru from 'rutils'

import {
  BrowserRouter as Router,
  HashRouter,
  Route,
  Redirect,
  Switch
} from 'react-router-dom'


import PrivateRoute from './components/PrivateRoute'

import { logout } from './actionCreators/auth'

import { bindActionCreators } from 'redux'
import { connect } from 'react-redux'


const mapDispatchToProps = ( dispatch, ownProps ) => {
  let actions = {
    logout
  }

  return {
    actions: bindActionCreators( actions, dispatch )
  }
}


@connect(null, mapDispatchToProps)
class App extends PureComponent {

  constructor(props) {
      super(props);

      // this.linksSpec2 = [
      //   {
      //     type: 'url',
      //     item: {
      //       pointer: 'http://www.sharla.io/realsafe',
      //       title: 'HOME',
      //       sameTab: true,
      //       icon: null,
      //       showIf: Ru.K(true),
      //       className: null
      //     }
      //   },
      //   {
      //     type: 'anchor',
      //     item: {
      //       pointer: '#roadmap',
      //       title: 'ROAD MAP',
      //       icon: null,
      //       showIf: Ru.K(true),
      //       className: null,
      //       isActive: true
      //     }
      //   },
      //   {
      //     type: 'route',
      //     item: {
      //       pointer: '/register',
      //       title: 'register',
      //       icon: null,
      //       showIf: Ru.K(true),
      //       className: null,
      //       isActive: true
      //     }
      //   },
      //   {
      //     type: 'custom',
      //     item: {
      //       onClickAction: Ru.I,
      //       title: 'logout',
      //       icon: null,
      //       showIf: Ru.K(true),
      //       className: null
      //     }
      //   }
      // ]

      this.linksSpec = [
        {
          type: 'url',
          item: {
            pointer: 'https://realsafe.co',
            title: 'HOME',
            sameTab: true,
            icon: null,
            showIf: Ru.K(true),
            className: null
          }
        },
        {
          type: 'url',
          item: {
            pointer: 'https://www.medium.com',
            title: 'BLOG', //Medium blog
            sameTab: false,
            icon: null,
            showIf: Ru.K(false),
            className: null
          }
        },
        {
          type: 'url',
          item: {
            pointer: 'https://realsafe.co',
            title: 'TOKEN FAQ',
            sameTab: false,
            icon: null,
            showIf: Ru.K(false),
            className: null
          }
        },
        {
          type: 'url',
          item: {
            pointer: 'https://realsafe.co/assets/doc/RealSafe_Whitepaper_v3.pdf',
            title: 'WHITEPAPER',
            sameTab: false,
            icon: null,
            showIf: Ru.K(true),
            className: null
          }
        },
        {
          type: 'route',
          item: {
            pointer: '/register',
            title: 'REGISTER',
            icon: null,
            // showIf: Ru.complement( auth.isLoggedIn ),
            showIf: Ru.K( false ),
            className: null,
            isActive: true
          }
        }
     ]
  }

  componentWillMount() {

    const logout = Ru.curry(( spec, e ) => {
        e.preventDefault();

        let { actions } = this.props
        let { history } = spec

        actions
        .logout(null)
        .then( () => {
          // console.log( 'store at login ', store.getState() )
          history.push('/')
        })
        .catch(err => {
          console.log( 'Err-Login', err );
          // [ TODO ] --> we should show alert
        })
    })


    this.linksSpec.push({
      type: 'custom',
      item: {
        onClickAction: logout,
        title: 'LOG OUT',
        icon: 'fa fa-sign-out',
        showIf: auth.isLoggedIn,
        className: null
      }
    })
  }

  render(){
      return(
          <HashRouter>
            <div>
              <TopBar linksSpec = { this.linksSpec } />
              <Switch>
                <Route
                  exact
                  path="/"
                  render={
                    (props) => auth.isLoggedIn() ?
                                  <Redirect to={{pathname: '/dashboard', state: {from: props.location}}} />
                                  : <Redirect to={{pathname: '/login', state: {from: props.location}}} />
                    }
                />
                <Route path="/login" component={LoginScene} />
                <Route path="/register" component={RegisterScene} />
                <PrivateRoute path='/dashboard' whenTrue = { auth.isLoggedIn } component={DashboardScene} />
                <PrivateRoute path='/needConfirmationEmailSent' whenTrue = { auth.isNewRegistry } component={NeedConfirmationEmailSentScene} />
                <Redirect to="/" />
              </Switch>
              <Footer/>
            </div>
          </HashRouter>
      )
  }

}


class AppWrapper extends PureComponent {
  constructor(props) {
    super(props)
  }

  render(){
    return (
      <Provider store={ store }>
        <PersistGate
          loading={<div>I am loading</div>}
          persistor={ persistor }>
          <App />
        </PersistGate>
      </Provider>
    )
  }
}

export default AppWrapper
