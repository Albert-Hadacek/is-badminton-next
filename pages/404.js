import AuthLayout from '../src/layouts/auth/AuthLayout'

const page404 = () => (
  <AuthLayout>
    <div className="not-found">
      <span>404 - </span>
      Stránka nebyla nalezena
    </div>
  </AuthLayout>
)

export default page404
