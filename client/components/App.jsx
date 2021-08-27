import React from 'react'
import { Route, Link } from 'react-router-dom'

import Home from './Home'
import Nav from './Nav'
import Pokemon from './Pokemon'
import TotallySpies from './TotallySpies'
import Dragonball from './Dragonball'

const App = () => {
  return (
    <>
      <div className="header">
        <Link to={'/'}><h2>This is the gauntlet</h2></Link>
        <Route path="/" component={Nav} />
      </div>

      <div className="task-challenge">
        <Route path="/Pokemon" component={Pokemon} />
        <Route path="/TotallySpies" component={TotallySpies} />
        <Route path="/Dragonball" component={Dragonball} />
        <Route exact path='/' component={Home} />
      </div>

      <div className="footer">
        <p>© Digi Digi ©</p>
      </div>
    </>
  )
}

export default App
