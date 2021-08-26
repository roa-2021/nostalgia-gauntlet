import React from "react"
import { Route } from "react-router-dom"
import Home from "./Home"
import Nav from './Nav'
import Pokemon from './Pokemon'
import TotallySpies from "./TotallySpies"

function App() {
  return (
    <>
      <div>
        <h1>This is the gauntlet</h1>
      </div>

      <div>
        <Route path="/" component={Nav} />
        <Route path="/Pokemon" component={Pokemon} />
        <Route path="/TotallySpies" component={TotallySpies} />
        <Route exact path='/' component={Home} />

      </div>
    </>
  )
}

export default App
