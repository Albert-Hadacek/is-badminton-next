import { Grid } from 'semantic-ui-react'
import Footer from '../Footer'


const AuthLayout = ({ children, maxWidth }) => (
  <>
    <Grid
      textAlign="center"
      style={{ height: '97vh' }}
      verticalAlign="middle"
      padded
    >
      <Grid.Column style={{ maxWidth }} className="auth-form-container">{children}</Grid.Column>
    </Grid>
    <Footer />
  </>
)

export default AuthLayout
