import React from 'react'
import { Route } from 'react-router-dom'

const AdminRoute = ({isAuth, component: Component, errorComponent: ErrorPage, isAdmin, ...others}) => {
  return (
    <Route
      {...others}
      render={() => {
        if(isAuth !== null) {
          if(isAdmin) {
            return <Component />
          } else {
            setTimeout(() => {
              window.location.replace('/home')
            }, 3000);
            return <ErrorPage />
          }
        } else {
          return (
            window.location.replace('/')
          )
        }
      }}
    />
  )
}

export default AdminRoute