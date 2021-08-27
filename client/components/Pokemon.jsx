import { Link } from "react-router-dom"
import React, { useState } from 'react'

function Pokemon (props) {
  const [colour, setColour] = useState({
    Evie: 'black;',
    Jigglypuff: 'black;',
    Meowth: 'black;'
  })
  const clickHandler = () => {
    setColour({
      ...colour,
      Evie: 'green;',
      Jigglypuff: 'red;',
      Meowth: 'red;'
    })
  }
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
        <Link to={'/TotallySpies'}> 
          <h2 style={{ color: `${colour.Evie}` }} onClick={clickHandler}>Evie</h2>
        </Link>
      </div>

      <div>
        <Link to={'/'}>
          <h2 style={{ color: `${colour.Jigglypuff}` }} onClick={clickHandler}>Jigglypuff</h2>
        </Link>
      </div>

      <div>
        <Link to={'/'}>
          <h2 style={{ color: `${colour.Meowth}` }} onClick={clickHandler}>Meowth</h2>
        </Link>
      </div>
    </>
  )
}

export default Pokemon
