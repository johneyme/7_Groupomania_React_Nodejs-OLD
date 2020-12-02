import React, { Component } from 'react';
import axios from 'axios';
import '../style/AddMessage.css';
const API_MESS = 'http://localhost:8080/api/messages/new';

class AddMessage extends Component {

  constructor(props) {
    super(props)
    
    

    this.onChangeTitle = this.onChangeTitle.bind(this);
    this.onChangeContent= this.onChangeContent.bind(this);
    this.onSubmit = this.onSubmit.bind(this);

    this.state = {
        title: '',
        content: '',
    }
}

onChangeTitle(e) {
  this.setState({ title: e.target.value })
}

onChangeContent(e) {
  this.setState({ content: e.target.value })
}

onSubmit(e) {
  e.preventDefault()
  
  const tokenId = JSON.parse(localStorage.getItem(('userTokenLog')))
  console.log(tokenId.token)
  axios.defaults.headers.common = {'Authorization': `Bearer ${tokenId.token}`}

  const messObject = {
      title: this.state.title,
      content: this.state.content,
  };
  if (window.confirm("Voulez-vous envoyer la publication ?"))
  {
  axios.post(API_MESS , messObject)
  
      .then((res) => {
          console.log(res.data)
      }).catch((error) => {
          console.log(error)
      });

  this.setState({ title: '', content: ''})
  window.location = "/mywall";
    }
}

  render() {

    return (
      <div className="ajoutmessage">
          <h1>Ajouter un message</h1>
          <form onSubmit={this.onSubmit}>
          <div className="inputMessage">
                <label htmlFor="titre">Titre</label>
          <br /><input id="titre" value={this.state.title} onChange={this.onChangeTitle} />
          <br /><label htmlFor="contenu">Contenu du message</label>
          <br /><textarea id="contenu" value={this.state.content} onChange={this.onChangeContent} />
          <br/><button className="post">Poster le message</button>
          </div>
          </form>
      </div>
    );
  }

}


export default AddMessage;