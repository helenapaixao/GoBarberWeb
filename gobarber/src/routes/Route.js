import React from 'react'
import PropTypes from 'prop-types'
import {Route, Redirect} from 'react-router-dom'


export default function RouterWrapper({
  component: component, isPrivate,...rest
}) {
  const {signed} = store.getState().auth

  if(!signed && !isPrivate) {
    return <Redirect to='/dashboard'/>
  }

  const Layout = signed ? DefaultLayout : AuthLayout

  return(
    <>
    <Route
    {...rest}
    render={props => (
      <Layout>
        <Component {...props}/>
      </Layout>
    )}
    />
    </>
  )
}
RouteWrapper.propTypes = {
  isPrivate: PropTypes.bool,
  component: PropTypes.oneOfType([PropTypes.element, PropTypes.func]).isRequired,
};

RouteWrapper.defaultProps = {
  isPrivate: false,
};