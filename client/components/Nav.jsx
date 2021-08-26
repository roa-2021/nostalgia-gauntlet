import React from 'react'
import { Link } from 'react-router-dom'

function Nav () {
  return (
    <>
      <ul>
        <Link to={'/'} className='btn btn-outline-warning btn-sm nav-button'> Home</Link>
        <Link to={'/about-us'} className='btn btn-outline-warning btn-sm nav-button'> About Us</Link>
      </ul>
    </>
  )
}

export default Nav
