import React from "react"
import { Link } from "react-router-dom"

function Pokemon() {

  return (
    <>
    <div>
        <h1>Challenge number #</h1> 
        <h2>Who's that Pokemon?</h2>
    </div>

      <div>
        <img src={'./images/pokemans.png'} />
      </div>

      <div>
        <Link to={"/"}> Incorrect Answer</Link>
      </div>

      <div>
        <Link to={"/"}> Incorrect Answer</Link>
      </div>

      <div>
        <Link to={"/"}> Incorrect Answer</Link>
      </div>
    </>


  )
}

export default Pokemon
