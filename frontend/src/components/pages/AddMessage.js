import React, { Component } from 'react';
//import axios from 'axios';
import '../style/AddMessage.css';
//const API = 'http://localhost:8080/api/messages';

class AddMessage extends Component {

  state = {
  }

  render() {

    return (
      <div className="ajoutmessage">
          <h1>Ajouter un message</h1>
          <div className="inputMessage">
                <label htmlFor="titre">Titre</label>
          <br /><input id="titre"></input>
          <br /><label htmlFor="contenu">Contenu du message</label>
          <br /><textarea id="contenu"></textarea>
          <br /><input id="upload" type="file"></input>
          <br/><button className="post">Poster le message</button>
          </div>
      </div>
    );
  }

}


export default AddMessage;