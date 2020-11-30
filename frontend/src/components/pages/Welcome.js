import React, { Component } from 'react';
import '../style/Welcome.css';


class Welcome extends Component {

  state = {
  }

  render() {

    return (
      <div className="pagewelcome">
          <h1>Bienvenue sur Groupomania Messenger</h1>
          <div>
          <div><a href='/login'><span className="lien">Connexion</span></a></div>
             <div><a href='/register'><span className="lien">Inscription</span></a></div>
              </div>
          
          
      </div>
    );
  }

}


export default Welcome;