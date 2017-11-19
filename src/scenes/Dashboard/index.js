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
                                    <p className="number"> 0.60 USD </p>
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
