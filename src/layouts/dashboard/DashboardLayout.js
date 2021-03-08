import Footer from '../Footer'
import Navbar from '../Navbar'

const DashboardLayout = ({ children }) => (
  <>
    <Navbar />
    <div className="dashboard-container">{children}</div>
    <Footer />
  </>
)

export default DashboardLayout
