import LoginForm from '../src/auth/LoginForm'
import AuthLayout from '../src/layouts/auth/AuthLayout'

const Index = () => (
  <AuthLayout maxWidth={450}>
    <LoginForm />
  </AuthLayout>
)

export default Index
