import React, { Component } from 'react';
import MyWall from './components/MyWall';
import './App.css';
import logo from './images/icon-left-font-monochrome-white.png'

class App extends Component {

  state = { 
    nom : "nom de l'utilisateur"
  }
  render() {

    return (
      <div className="App">
        <header>
          <div><img src={logo} alt="logo" className='logo'></img></div>
          <div className="icons"><a href='/'><i className="fas fa-plus-circle fa-3x"></i></a><i className="fas fa-user fa-3x"></i></div>
        </header>
        <div className='mur'>
        <MyWall nom={this.state.nom} />
        </div>
      </div>
    );
  }

  }
  

export default App;
