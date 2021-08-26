import React from "react"
import { Link } from 'react-router-dom'
import Form from './Form'

function Home() {
  return (
    <>
    <div>
      <h2>Welcome challenger.</h2>
      <Form/>
      <h3>Click here for your first challenge:</h3>
      <Link to={'/Pokemon'}> Link to first challenge (Pokemon)</Link>
    </div>
    </>
  )
}

export default Home
