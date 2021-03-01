import React from 'react'
import AuthLayout from '../src/layouts/auth/AuthLayout'
import RegisterForm from '../src/auth/RegisterForm'

const Register = () => (
  <AuthLayout maxWidth={450}>
    <RegisterForm />
  </AuthLayout>
)

export default Register
