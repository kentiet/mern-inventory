import React from 'react'
import { Redirect, Route } from 'react-router-dom'

const ProtectedRoute = ({isAuth, component: Component, isAdmin, ...others}) => {
  return (
    <Route
      {...others}
      render={(props) => {
        if(isAuth !== null) {
          return <Component />
        } else {
          return (
            window.location.replace('/')
            // <Redirect to={{pathname: "/", state: {from: props.location }}} />
          )
        }
      }}
    />
  )
}

export default ProtectedRoute