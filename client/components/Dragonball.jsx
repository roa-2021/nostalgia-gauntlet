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
        <Link to={'/'}><img className="img-circle" src={'./images/DBZ1.jpeg'} /></Link>
        <Link to={'/NextPage'}><img className="img-circle" src={'./images/DBZ2.jpeg'} /></Link>
      </div>


      <div>
        <Link to={'/'}><img className="img-circle" src={'./images/DBZ3.jpeg'} /></Link>
        <Link to={'/'}><img className="img-circle" src={'./images/DBZ4.jpeg'} /></Link>
      </div>

    </>
  )
}

export default Dragonball
