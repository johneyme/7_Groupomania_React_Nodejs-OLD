import React, { Component } from 'react';
//import axios from 'axios';
import './Login.css';
//const API = 'http://localhost:8080/api/messages';

class App extends Component {

  state = {
  }

  render() {

    return (
      <div className="login">
          <h1>Connexion au compte</h1>
            <div className="inputLogin">
          <label htmlFor="identifiant">Identifiant</label>
          <br /><input id="identifiant"></input>
          <br /><label htmlFor="mdp">Mot de passe</label>
          <br /><input id="mdp"></input>
          <br/><button className="validerLogin">Valider</button>
          </div>
          <div>
            <p>Pour créer un profil, cliquez <span><a href="/register">ICI</a></span></p>
            </div>
      </div>
    );
  }

}


export default App;