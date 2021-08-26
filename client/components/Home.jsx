import React from "react"
import { Link } from 'react-router-dom'

function Home() {
  return (
    <div>
      <h1>Home page</h1>
      <Link to={'/Pokemon'}> Link to first challenge (Pokemon)</Link>
    </div>
  )
}

export default Home
