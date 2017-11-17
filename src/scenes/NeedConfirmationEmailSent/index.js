'use strict'

import Ru from 'rutils'

import React, { PureComponent } from 'react'

import { withRouter } from 'react-router-dom';

import B from 'bluebird'


@withRouter
class NeedConfirmationEmailSent extends PureComponent {

    constructor(props) {
        super(props);
    }


    render(){
        return(
            <section id="confirmation" className="confirmation-section section" >
                <div className="container text-center">
                    <div className="row">
                        <div className="col-md-12">
                            <h2 className="section-heading wow fadeIn" data-wow-duration="1s">
                                Confirmation email successfully sent...
                            </h2>
                        </div>
                    </div>
                    <div className="row">
                        <div className="col-md-10 col-md-offset-1">
                             <p> A confirmation email has been sent to your email. Please go your email for verifying your account.  </p>
                        </div>
                    </div>
                </div>
            </section>
        )
    }
}

export default NeedConfirmationEmailSent
