import Home from './home/Home';
import Login from './auth/Login';
import Register from './auth/Register';
import LandingPage from './home/LandingPage';
import Confirmation from './auth/Confirmation';
import CreateArticle from './home/CreateArticle';
import ProtectedRoute from './auth/ProtectedRoute';
import { Switch, Route } from "react-router-dom";
import './App.css';

function App() {
  return (
    <div className="App">
      <Switch>
        <Route exact path="/">
          <LandingPage />
        </Route>
        <Route path="/login">
          <Login />
        </Route>
        <Route path="/register">
          <Register />
        </Route>
        <Route path="/confirmation">
          <Confirmation />
        </Route>
        <Route path="/home">
          <ProtectedRoute component={Home} />
        </Route>
        <Route path="/create-article">
          <ProtectedRoute component={CreateArticle} />
        </Route>
      </Switch>
    </div>
  );
}

export default App
