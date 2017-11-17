'use strict'

import Ru from 'rutils'

import React, { PureComponent } from 'react'

import { connect } from 'react-redux'


const mapStateToProps = ( state, ownProps ) => {

    return {
      profile : state.user.profile,
      token : state.user.token,
    }
}


@connect(mapStateToProps, null)
class Dashboard extends PureComponent {

    constructor(props) {
        super(props)
    }
    render(){
        return(
            <section id="dashboard" className="dashboard-section section" >
                <div className="container">
                    <div className="row">
                        <div className="col-md-12">
                            <h2 className="section-heading wow fadeIn" data-wow-duration="1s">
                                Welcome { this.props.profile.firstName } to Real Safe!
                            </h2>
                        </div>
                    </div>
                    <div className="row">
                        <div className="col-md-10 col-md-offset-1">
                             <p> Will contact you very soon once the ICO is ready </p>
                        </div>
                    </div>
                </div>
            </section>
        )
    }
}

export default Dashboard
