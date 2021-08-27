import React, { useState } from 'react'

function TotallySpies (props) {
  const rightAnswer = () => {
    rightClickHandler()
    setTimeout(() => {
      props.history.push('/Rugrats')
    }, 1000)
  }

  const wrongAnswer = (target) => {
    wrongClickHandler(target)
    setTimeout(() => {
      props.history.push('/')
    }, 1000)
  }

  const [colour, setColour] = useState({
    PowerPuff: 'btn btn-warning q-opt',
    KimPoss: 'btn btn-warning q-opt',
    TotallySpies: 'btn btn-warning q-opt'
  })

  const rightClickHandler = () => {
    setColour({
      PowerPuff: 'btn btn-danger q-opt',
      KimPoss: 'btn btn-danger q-opt',
      TotallySpies: 'btn btn-success q-opt'
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
        <h1>Challenge number 2</h1>
        <h2>Name this show</h2>
      </div>

      <div>
        <img src={'./images/totally-spies.jpeg'} />
      </div>

      <div>
        <button className={colour.PowerPuff} type='button' onClick={() => wrongAnswer('PowerPuff')}>PowerPuff Girls</button>
      </div>

      <div>
        <button className={colour.KimPoss} type='button' onClick={() => wrongAnswer('KimPoss')}>Kim Possible</button>
      </div>

      <div>
        <button className={colour.TotallySpies} type='button' onClick={() => rightAnswer('TotallySpies')}>Totally Spies</button>

      </div>
    </>
  )
}

export default TotallySpies
