import React from 'react'
import { Link } from 'react-router-dom'
import Form from './Form'

function Home() {
  return (
    <>
      <div>
        <h1>Welcome challenger!</h1>

        <Form/>

        <Link to={'/Pokemon'}><h3 className='enter-challenge'>😬 Click here for your first challenge 😬</h3></Link>
      </div>
    </>
  )
}

export default Home
