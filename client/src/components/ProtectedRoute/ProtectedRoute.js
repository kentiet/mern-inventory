import React from 'react'
import { Redirect, Route } from 'react-router-dom'

const ProtectedRoute = ({isAuth, component: Component, ...others}) => {
  return (
    <Route
      {...others}
      render={(props) => {
        console.log("protected auth", isAuth)
        console.log("protected props", props)
        if(isAuth) {
          return <Component />
        } else {
          return (
            <Redirect to={{pathname: "/", state: {from: props.location }}} />
          )
        }
      }}
    />
  )
}

export default ProtectedRoute