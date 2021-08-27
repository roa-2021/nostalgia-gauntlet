import React, { useState } from 'react'

const Pokemon = (props) => {
  const rightAnswer = () => {
    rightClickHandler()
    console.log('that was right')
    setTimeout(() => {
      props.history.push('/TotallySpies')
    }, 1000)
  }

  const wrongAnswer = (target) => {
    wrongClickHandler(target)
    console.log('that was wrong')
    setTimeout(() => {
      props.history.push('/')
    }, 1000)
  }

  const [colour, setColour] = useState({
    Evie: 'btn btn-warning q-opt',
    Jigglypuff: 'btn btn-warning q-opt',
    Meowth: 'btn btn-warning q-opt'
  })

  const rightClickHandler = () => {
    setColour({
      Evie: 'btn btn-success q-opt',
      Jigglypuff: 'btn btn-danger q-opt',
      Meowth: 'btn btn-danger q-opt'
    })
  }

  const wrongClickHandler = (char) => {
    setColour({
      ...colour,
      [char]: 'btn btn-danger q-opt'
    })
  }

  return (
    <>
      <div>
        <h1>Challenge number 1</h1> 
        <h2>Who's that Pokemon?</h2>
      </div>

      <div>
        <img src={'./images/pokemans.png'} />
      </div>

      <div>
        <button className={colour.Evie} type='button' onClick={rightAnswer}>Evie</button>
      </div>

      <div>
        <button className={colour.Jigglypuff} type='button' onClick={() => wrongAnswer('Jigglypuff')}>Jigglypuff</button>
      </div>

      <div>
        <button className={colour.Meowth} type='button' onClick={() => wrongAnswer('Meowth')}>Meowth</button>
      </div>
    </>
  )
}

export default Pokemon
