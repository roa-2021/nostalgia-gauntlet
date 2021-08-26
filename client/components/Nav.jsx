import React from "react"
import { Link } from 'react-router-dom'

function Nav () {
  return (
    <>
      <ul>
        <Link to={"/"}> Home</Link>
      </ul>
    </>
  )
}

export default Nav
