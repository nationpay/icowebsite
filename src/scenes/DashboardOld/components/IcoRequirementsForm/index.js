'use strict'

import Ru from 'rutils'

import React, { PureComponent } from 'react'

import autobind from 'autobind-decorator'



@autobind
class icoRequirementsForm extends PureComponent {

    constructor(props) {
        super(props)
    }

    render(){
        return(
            <section id="icoRequirements" className="dashboard-section section" >
                <div className="container">
                    <div className="row">
                        <div className="col-md-12">
                            <h2 className="section-heading wow fadeIn" data-wow-duration="1s">
                                Ico Requisits
                            </h2>
                        </div>
                    </div>
                    <div className="row">
                        <div className="col-sm-4 col-sm-offset-4">
                          <div className="panel panel-default">
                            <div className="panel-body">
                               Here goes ICO requisits
                            </div>
                          </div>
                        </div>
                    </div>
                </div>
            </section>
        )
    }
}

export default icoRequirementsForm
