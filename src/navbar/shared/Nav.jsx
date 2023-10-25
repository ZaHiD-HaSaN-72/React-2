import React from 'react'
import { Link } from 'react-router-dom'

const Nav = () => {
  return (
    <div className="navbar bg-base-200">
  <div className="flex-1">
    <a className="btn btn-ghost normal-case text-xl">Zahid</a>
  </div>
  <div className="flex-none">
    <ul className="menu menu-horizontal px-1">
      <li><Link to='/Layout/home'>Home</Link></li>
      <li><Link to='/Layout/about'>About</Link></li> 
     <li><Link to='/Layout/contact'>Contact</Link></li>
     <li><Link to='/Layout/student'>Student</Link></li>
    </ul>
  </div>
</div>
  )
}

export default Nav
