import React from 'react'
import {Link} from 'react-router-dom'

const Navbar = () => {
  return (
    <div>
        <div className="left"></div>
        <div className="right">
            <Link to={'/about'}>About</Link>
            <Link to={'/product'}>Courses</Link>
            <Link to={'/team'}>Team</Link>
            <Link to={'/contact'}>Contact</Link>
        </div>
    </div>
  )
}

export default Navbar