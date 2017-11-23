'use strict'

import Ru from 'rutils'

import React, { PureComponent } from 'react'

import { withRouter, Link } from 'react-router-dom';

import B from 'bluebird'


@withRouter
class NeedConfirmationEmailSent extends PureComponent {

    constructor(props) {
        super(props);
    }


    render(){
        return(
            <section id="confirmation" className="confirmation-section section" >
                <div className="container">
                    <div className="row">
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
                             <div className="btn-contain">
                                 <Link to="/login" className="btn btn-login">Log In</Link>
                             </div>
                        </div>
                    </div>
                </div>
            </section>
        )
    }
}

export default NeedConfirmationEmailSent
