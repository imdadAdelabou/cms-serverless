import Home from './home/Home'
import Login from './auth/Login'
import Register from './auth/Register'
import LandingPage from './home/LandingPage'
import SeeMore from './home/SeeMore'
import CreateArticle from './home/CreateArticle'
import {Switch, Route} from "react-router-dom"
import './App.css'

function App() {
  return (
    <div className="App">
      <Switch>
        <Route exact path="/">
          <LandingPage />
        </Route>
        <Route path="/home">
          <Home />
        </Route>
        <Route path="/login">
          <Login />
        </Route>
        <Route path="/register">
          <Register />
        </Route>
        <Route path="/see-more">
          <SeeMore />
        </Route>
        <Route path="/create-article">
          <CreateArticle />
        </Route>
      </Switch>
    </div>
  )
}

export default App
