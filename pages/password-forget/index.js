import React from 'react'
import AuthLayout from '../../src/layouts/auth/AuthLayout'
import ForgetForm from '../../src/auth/ForgetForm'

const PasswordForget = () => (
  <AuthLayout maxWidth={450}>
    <ForgetForm />
  </AuthLayout>
)

export default PasswordForget
