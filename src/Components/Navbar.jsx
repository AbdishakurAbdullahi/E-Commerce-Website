import React from 'react'
import { Link } from 'react-router-dom'

function Navbar() {
  return (
    <nav className='navbar'>
      <div className='navbar-container'>
        <Link className='navbar-brand' to='/'>ShopHub</Link>

        <div className="navbar-links">
            <Link className="navbar-link" to='/'>Home</Link>
            <Link className="navbar-link" to='/checkout'>Cart</Link>
        </div>

        <div className="navbar-auth">
            <div className="navbar-auth-links">
                <Link to='/auth' className='btn btn-secondary'>Sign In</Link>
                <Link to='auth' className='btn btn-primary'>Sign Up</Link>
            </div>
        </div>
      </div>
    </nav>
  )
}

export default Navbar
