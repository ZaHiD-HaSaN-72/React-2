import { Outlet } from "react-router-dom"
import Nav from "../navbar/shared/nav"
import Footer from "../navbar/shared/Footer"


function Layout() {
  return (
    <div>
      <Nav/>
      <Outlet/>
      <Footer/>
    </div>
  )
}

export default Layout
