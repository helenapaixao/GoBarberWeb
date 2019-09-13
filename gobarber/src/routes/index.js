import React from 'react'
import {Switch} from 'react-router-dom'
import Router from './Route'
import LogIn from '../pages/LogIn'

export default function Routes() {
  return(
    <Switch>
      <Router exact path='/' component={LogIn} />
    </Switch>
  )
}