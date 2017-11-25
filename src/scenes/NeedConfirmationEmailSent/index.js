'use strict'

import Ru from 'rutils'

import React, { PureComponent } from 'react'

import { withRouter, Link } from 'react-router-dom';

import autobind from 'autobind-decorator'

import B from 'bluebird'

import { auth } from '../../services'

import LaddaButton, { S, ZOOM_IN } from 'react-ladda';

import 'url-search-params-polyfill'

import Alert from 'react-s-alert';


@withRouter
@autobind
class NeedConfirmationEmailSent extends PureComponent {

    constructor(props) {
        super(props);
        this.state = {
          loading: false,
        }
    }

    onResend(){
      let search = new URLSearchParams (this.props.location.search)
      this.setState({
          loading: true
      });
      let email = search.get('email')

      console.log('Resend to this email', email);
      auth
      .resendConfirmationLink(email)
      .then( r => {
        console.log('Daniel::: ', r)

        Alert.success(
            `Email resent successfully`,
            {
                offset: 80,
                timeout: 7000,
                position: 'top',
                effect: 'flip'
            }
        )

        this.setState({
            loading: false
        });
      })
      .catch( err => {
        Alert.error(
            err.description,
            {
                offset: 50,
                position: 'top-right',
                effect: 'slide',
                html: false,
                timeout: 5000,
            }
        )
        this.setState({
            loading: false
        });

      })

    }

    render(){
        return(
            <section id="confirmation" className="confirmation-section section" >
                <div className="container">
                    <div className="row">
                        <div className="col-md-12 text-center">
                            <Alert stack={{limit: 3}}/>
                        </div>
                        <div className="col-md-6 col-md-offset-3">
                            <div className="number">
                                <i className="fa fa-check" aria-hidden="true"></i>
                            </div>
                            <h2 className="section-heading wow fadeIn" data-wow-duration="1s">
                                Almost there!
                            </h2>
                        </div>
                    </div>
                    <div className="row">
                        <div className="col-md-6 col-md-offset-3">
                             <p>You still need to confirm your account.<br/>
                             If there is not account associated with this email, you will receive instructions in your inbox. </p>
                             <p> If you can't find the email, click here to resend: </p>
                             <div className="btn-contain">
                                 <LaddaButton
                                     className="btn btn-login"
                                     loading={ this.state.loading }
                                     data-color="#eee"
                                     data-size={ S }
                                     onClick= { this.onResend }
                                     data-style={ ZOOM_IN }
                                     data-spinner-size={ 30 }
                                     data-spinner-color="#ddd"
                                     data-spinner-lines={ 12 }
                                 >Resend verification email
                                 </LaddaButton>
                             </div>
                        </div>
                    </div>
                </div>
            </section>
        )
    }
}

export default NeedConfirmationEmailSent
