import React, { Component } from 'react';
import MyWall from './components/pages/MyWall';
import User from './components/pages/User';
import Login from './components/log/Login';
import Register from './components/log/Register';
import AddMessage from './components/pages/AddMessage';
import Welcome from './components/pages/Welcome';
import { Route, BrowserRouter as Router, Switch, Link } from "react-router-dom"
import './App.css';
import logo from './images/icon-left-font-monochrome-white.png'


class App extends Component {

  state = {
    nom: "nom de l'utilisateur"
  }
  // ATTENTION A BIEN REMETTRE MYWALL AU LIEU DE REGISTER
  render() {

    return (
      <Router>

        <div className="App">
          <header>
            <div>
              <Link to="/"><img src={logo} alt="logo" className='logo'></img></Link>
              </div>
            <div className="icons">
              <Link to="/mywall"><i className="fas fa-align-justify fa-3x"></i></Link>
              <Link to="/addmessage"><i className="fas fa-plus-circle fa-3x"></i></Link>
              <Link to="/user"><i className="fas fa-user fa-3x"></i></Link>
            </div>
          </header>
          <div className='mur'>
            <Switch>
              <Route path='/' exact component={Welcome} />
              <Route path='/mywall' exact component={MyWall} />
              <Route path='/user' exact component={User} />
              <Route path='/addmessage' exact component={AddMessage} />
              <Route path='/register' exact component={Register} />
              <Route path='/Login' exact component={Login} />

            </Switch>
          </div>
        </div>


      </Router>
    );
  }

}


export default App;