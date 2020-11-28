import React, { Component } from 'react';
import axios from 'axios';
import './Register.css';
const API = 'http://localhost:8080/api/messages';

class App extends Component {

  state = {
  }

  render() {

    return (
      <div className="register">
          <h1>Inscription</h1>
          <div className="inputRegister">
          <label htmlFor="identifiant">Numéro de téléphone</label>
          <br /><input id="identifiant"></input>
          <br /><label htmlFor="mdp">Mot de passe</label>
          <br /><input id="mdp"></input>
          <br/><button className="inscription">Inscription</button>
          </div>
      </div>
    );
  }

}


export default App;