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
      <li><Link to='/'>Home</Link></li>
      <li><Link to='/about'>About</Link></li> 
     <li><Link to='/contact'>Contact</Link></li>
     <li><Link to='/student'>Student</Link></li>
    </ul>
  </div>
</div>
  )
}

export default Nav
