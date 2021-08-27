import React from "react"
import { Link } from "react-router-dom"

function TotallySpies() {
  return (
    <>
    <div>
        <h1>Challenge number #</h1> 
        <h2>Name this show</h2>
    </div>

      <div>
        <img src={'./images/totally-spies.jpeg'} />
      </div>

      <div>
        <Link to={"/"}> Kim Possible</Link>
      </div>

      <div>
        <Link to={"/Dragonball"}> Totally Spies</Link>
      </div>

      <div>
        <Link to={"/"}> PowerPuff Girls</Link>
      </div>
    </>


  )
}

export default TotallySpies
