import React from "react"
import { Route } from "react-router-dom"
import Nav from './Nav'

function App() {
  return (
    <>
      <div>
        <h1>This is the gauntlet</h1>
      </div>

      <div>
        <Route path="/" component={Nav} />

      </div>
    </>
  )
}

export default App
