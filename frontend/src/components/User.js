import React, { Component } from 'react';
//import axios from 'axios';
import './User.css';
const API = 'http://localhost:8080/api/messages';

class App extends Component {

  state = {
  }

  render() {

    return (
      <div className="User">
        <h1>Profil</h1>
        <button className="logout">Se Déconnecter</button>
        <br /><button className="delete">Supprimer son profil</button>
      </div>
    );
  }

}


export default App;
