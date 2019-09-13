import React from 'react'
// import { useDispatch, useSelector } from 'react-redux'
import { Link } from 'react-router-dom'
import {Form, Input} from '@rocketseat/unform'
import * as Yup from 'yup'
// import {logInRequest} from ''
import logo from '../../assets/img/gobarber_logo.svg'

const schema = Yup.object().shape({
  email: Yup.string()
    .email('Email invalido')
    .required('E-mail is required'),
  password: Yup.string().required('Password is Required')
})

export default function LogIn() {
  // const dispatch = useDispatch()
  // const loading = useSeletor(state => state.auth.loading)

  function handleSubmit({ email, password }) {
    // dispatch(logInRequest(email, password))
  }
  return (
    <>
      <h1>
        <img src={logo} alt='GoBarber'/>
      </h1>
      <Form schema={schema} onSubmit={handleSubmit}>
        <Input name="email" type="email" placeholder="Seu e-mail" />
        <Input name="password" type="password" placeholder="Sua senha" />
        {/* <button type="submit">{loading ? 'Loading...' : 'Log In'}</button> */}
        <Link to="/singup">Sign Up</Link>
      </Form>
    </>
  )
}