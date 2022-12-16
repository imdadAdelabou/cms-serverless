import { useState } from 'react'
import reactLogo from './assets/react.svg'
import './App.css'
import {Link, Switch, Route} from "react-router-dom"
import Home from './home/Home'
import Login from './auth/Login'
import Register from './auth/Register'
import LandingPage from './home/LandingPage'

function App() {
  const [count, setCount] = useState(0)

  return (
    <div className="App">
      <Switch>
        <Route exact path="/" component={LandingPage}></Route>
        <Route path="/home" component={Home} ></Route>
        <Route path="/login" component={Login}></Route>
        <Route path="/register" component={Register}></Route>
      </Switch>
    </div>
  )
}

export default App
