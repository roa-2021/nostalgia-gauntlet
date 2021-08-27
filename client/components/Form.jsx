import React, { useState, useEffect } from "react"

function Form () {
    const [name, setName] = useState('')
    const [selectedName, setSelectedName] = useState('')
    const challengerName = setSelectedName(name)

    const handleSubmit = (evt) => {
      evt.preventDefault()
      
      setName('')
    }
    
    const handleChange = (evt) => {
      setName(evt.target.value)
      
    }
    
    return (
      <>
        <form onSubmit={handleSubmit}>
          <label htmlFor="name" >What is your name?</label>
          <input name="What is your name" placeholder='Challenger Name' value={name} type="text" onChange={handleChange} />
          <button className='btn btn-warning btn-sm'>Submit</button>
            {selectedName}
        </form>
      </>
    )
  }

export default Form
