'use strict'

import React, { PureComponent } from 'react'

import { Grid, Navbar, Nav, NavItem, NavDropdown, MenuItem } from 'react-bootstrap';

import Ru from 'rutils'

import autobind from 'autobind-decorator'

import {
  withRouter
} from 'react-router-dom'

import { HashLink as Link } from 'react-router-hash-link'

let pointerStyle = {
  cursor: 'pointer'
}

@withRouter
@autobind
class TopBar extends PureComponent {
    constructor(props){
        super(props)

        // this.state = {
        //     activeRoute: '/'
        // }

        this.linksSpec = this.updateLinkSpec(
          this.props.location.pathname,
          this.props.linksSpec
        )

        this.props.history.listen( (location, action) => {
          // console.log('location::: ', location);
          // this.manageTopBar(location.pathname)
          this.linksSpec = this.updateLinkSpec(
            location.pathname,
            this.props.linksSpec
          )
        })
    }




    render(){
          return(
            <header className="header-section navbar-fixed-top navbar-default header-floating header-fixed floating" >
                <Navbar collapseOnSelect>
                    <Navbar.Header>
                        <Navbar.Brand>
                              <a
                              style =  { pointerStyle }
                              href="https://nationpay.io"
                              >
                             <img className="logo-img" src={'assets/img/logo.png'}  alt=""/>
                                <span className="first">Nation</span>Pay
                             </a>
                        </Navbar.Brand>
                        <Navbar.Toggle />
                    </Navbar.Header>
                    <Navbar.Collapse>
                        <Nav pullRight>
                            {
                                Ru.addIndex(Ru.map)(this.renderLink, this.linksSpec)
                            }
                        </Nav>
                    </Navbar.Collapse>
                 </Navbar>
            </header>
        )
    }


    updateLinkSpec( activeRoute, linksSpec ){

        // console.log('activeRoute::: ', activeRoute);

        const setActiveForRoute = linkSpec => {
            let {
              type,
              item
            } = linkSpec

            let isActive = activeRoute === '/' ? false : item.pointer === activeRoute

            return {
              type,
              item: Ru.assoc('isActive', isActive, item)
            }
        }

        const setActiveForAnchor = linkSpec => {
            let {
              type,
              item
            } = linkSpec

            // console.log('`${item.pointer}${Ru.tail(item.path)}`::: ', `${item.pointer}${Ru.tail(item.path)}`);


            let isActive =  ( `${item.pointer}${Ru.tail(item.path)}` === activeRoute)

            return {
              type,
              item: Ru.assoc('isActive', isActive, item)
            }
        }


        const mapper = Ru.cond([
          [ Ru.propEq( 'type', 'url')       ,   Ru.I                ],
          [ Ru.propEq( 'type', 'custom')    ,   Ru.I                ],
          [ Ru.propEq( 'type', 'anchor')    ,   setActiveForAnchor  ],
          [ Ru.propEq( 'type', 'route')     ,   setActiveForRoute   ],
        ])





        return Ru.map( mapper, linksSpec )

    }


    renderLink(spec, i){
        let {
            type,
            item
        } =  spec


        const mkUrlProps = item => {
          let {
            pointer,
            sameTab,
            className
          } = item

          return {
            style: pointerStyle,
            href: pointer,
            target: sameTab ? '_self' : '_blank',
          }
        }

        const mkCustomProps = item => {
          let {
            onClickAction,
            className
          } = item

          return {
            style: pointerStyle,
            onClick: onClickAction( {
              history: this.props.history
            })
          }
        }

        const mkAnchorProps = item => {
          let {
            pointer,
            path,
            className,
          } = item

          return {
            style: pointerStyle,
            to: `${pointer}${path}`
          }
        }

        const mkRouteProps = item => {
          let {
            pointer,
            className,
          } = item

          return {
            style: pointerStyle,
            to: pointer
          }
        }

        const mkProps = Ru.cond([
          [ Ru.propEq( 'type', 'url')       ,   Ru.o( mkUrlProps    , Ru.prop('item') ) ],
          [ Ru.propEq( 'type', 'custom')    ,   Ru.o( mkCustomProps , Ru.prop('item') ) ],
          [ Ru.propEq( 'type', 'anchor')    ,   Ru.o( mkAnchorProps , Ru.prop('item') ) ],
          [ Ru.propEq( 'type', 'route')     ,   Ru.o( mkRouteProps  , Ru.prop('item') ) ],
        ])


        if ( type === 'route' || type === 'anchor') {
          return (
            item.showIf() ?
              <li key={i} className={ item.isActive?'isActive':'' }>
                <Link {...mkProps(spec)}>{ item.title }</Link>
              </li>
              :''
          )
        }

        return (
          item.showIf() ?
            <li key={i} className={ item.isActive?'isActive':'' }>
              <a {...mkProps(spec)} >
                { item.title } <i className={item.icon} aria-hidden="true"></i>
              </a>
            </li>
            :''
        )
    }
}

export default TopBar
