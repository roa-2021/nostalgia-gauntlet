import React, { useState } from 'react'

const Rugrats = (props) => {
  const rightAnswer = () => {
    rightClickHandler()
    console.log('that was right')
    setTimeout(() => {
      props.history.push('/Dragonball')
    }, 1000)
  }

  const wrongAnswer = (target) => {
    wrongClickHandler(target)
    setTimeout(() => {
      props.history.push('/')
    }, 1000)
  }

  const [colour, setColour] = useState({
    Kimi: 'btn btn-warning q-opt',
    Didi: 'btn btn-warning q-opt',
    Pickels: 'btn btn-warning q-opt'
  })

  const rightClickHandler = () => {
    setColour({
      Pickels: 'btn btn-success q-opt',
      Didi: 'btn btn-danger q-opt',
      Kimi: 'btn btn-danger q-opt'
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
        <h1>Challenge number 3</h1> 
        <h2>Who isn't a character in Rugrats?</h2>
      </div>

      <div>
        <img src={'./images/rugrats.jpg'} />
      </div>

      <div>
        <button className={colour.Kimi} type='button' onClick={() => wrongAnswer('Kimi')}>Kimi</button>
      </div>

      <div>
        <button className={colour.Didi} type='button' onClick={() => wrongAnswer('Didi')}>Didi</button>
      </div>

      <div>
        <button className={colour.Pickels} type='button' onClick={rightAnswer}>Pickels</button>
      </div>
    </>
  )
}

export default Rugrats
