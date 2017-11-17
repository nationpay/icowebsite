import React, { PureComponent } from 'react'


import {
  Route,
  Redirect,
} from 'react-router-dom'



const PrivateRoute = ({component: Component, whenTrue, ...rest}) => {

  return (
    <Route
      {...rest}
      render={
        (props) => whenTrue() ?
                        <Component {...props} />
                      : <Redirect to={{pathname: '/login', state: {from: props.location}}} />
        }
    />
  )
}


export default PrivateRoute
