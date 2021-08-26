import React from 'react'
import { Link } from 'react-router-dom'

function Dragonball () {
  return (
    <>
      <div>
        <h1>Challenge number #</h1>
        <h2>Which of these characters is Goku?</h2>
      </div>

      <div>
      <Link to={"/"}><img src={'./images/DBZ1.jpeg'} /></Link>
      </div>

      <div>
      <Link to={"/NextPage"}><img src={'./images/DBZ2.jpeg'} /></Link>
      </div>

      <div>
      <Link to={"/"}><img src={'./images/DBZ3.jpeg'} /></Link>
      </div>

      <div>
      <Link to={"/"}><img src={'./images/DBZ4.jpeg'} /></Link>
      </div>

      <div>
        <Link to={'/'}></Link>
      </div>
    </>
  )
}

export default Dragonball
