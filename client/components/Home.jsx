import React from "react"
import { Link } from 'react-router-dom'

function Home() {
  return (
    <div>
      <h2>Welcome challenger. <br/>Click here for your first challenge:</h2>
      <Link to={'/Pokemon'}> Link to first challenge (Pokemon)</Link>
    </div>
  )
}

export default Home
