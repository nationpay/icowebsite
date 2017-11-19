'use strict'

import Ru from 'rutils'

import React, { PureComponent } from 'react'

import { connect } from 'react-redux'

import { Grid, Row , Col } from 'react-bootstrap';

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
                <Grid>
                    <Row>
                        <Col md={ 5 } mdOffset={ 1 }>
                            <h2 className="section-heading">
                                Hi { this.props.profile.firstName }
                            </h2>
                            <p className="buy-tokens">BUY TOKENS</p>
                            <div className="box-tokens">
                                <p>Address will be available at the start of the pre-ICO, on March 1st at 10AM UTC.</p>
                                <p>PRE-ICO STARTS IN</p>
                                <div id ="getting-started" className="getting-started"> </div>
                            </div>
                        </Col>
                        <Col md={ 5 }>
                            <Row>
                                <Col className="balance" md={ 12 }>
                                    <p className="text"> YOUR BALANCE </p>
                                    <p className="number"> 0 NPT </p>
                                </Col>
                                <Col className="price" md={ 12 }>
                                    <p className="text"> NPT TOKEN PRICE </p>
                                    <p className="text-secondary">First 3,000,000 NPT - Private Investment Discount </p>
                                    <p className="number">1 NPT = $0.50 </p>
                                    <p className="text-secondary">Next 3,500,000 NPT - Early Adopter discount </p>
                                    <p className="number">1 NPT = $0.75  </p>
                                    <p className="text-secondary">Next 3,500,000 NPT - Final discount </p>
                                    <p className="number">1 NPT = $1.00  </p>
                                    <p className="text-secondary">Final 30,000,000 NPT - Nominal Price </p>
                                    <p className="number"> 1 NPT = $1.50 </p>
                                </Col>
                            </Row>
                        </Col>
                    </Row>
                </Grid>
            </section>
        )
    }
}

export default Dashboard
