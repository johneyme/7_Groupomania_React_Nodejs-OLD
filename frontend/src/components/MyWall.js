import React, { Component } from 'react';
import axios from 'axios';
import "./MyWall.css"
const API = 'http://localhost:8080/api/messages';

class MyWall extends Component {

  
  // default State object
  state = {
    messages: []
  }

  componentDidMount() {
    axios
      .get(API)
      .then(response => {

        // create an array of contacts only with relevant data
        const newMessage = response.data.map(c => {
          return {
            id: c.id,
            title: c.title,
            content: c.content,
            User: c.User
          };
        });

        // create a new "State" object without mutating 
        // the original State object. 
        const newState = Object.assign({}, this.state, {
          messages: newMessage
        });

        // store the new state object in the component's state
        this.setState(newState);
        console.log(newMessage)
        
        
        
      })
      
      .catch(error => console.log(error));
  }
  
  

    render() {

      const allMessage = this.state.messages.map((message)=> <div className="messages"  key={message.id}>
        <h3>{message.User.username}</h3><h4>{message.title}</h4><p>{message.content}</p></div>)
     
  
        return (
            
            <div>
                <h2>Bonjour, {this.props.name} !</h2>
                {allMessage}
                
                
            </div>
        )
    };
}

export default MyWall;

/*
import React, { Component } from "react";

import UserService from "../services/user.service";

export default class Home extends Component {
  constructor(props) {
    super(props);

    this.state = {
      content: ""
    };
  }

  componentDidMount() {
    UserService.getPublicContent().then(
      response => {
        this.setState({
          content: response.data
        });
      },
      error => {
        this.setState({
          content:
            (error.response && error.response.data) ||
            error.message ||
            error.toString()
        });
      }
    );
  }

  render() {
    return (
      <div className="container">
        <header className="jumbotron">
          <h3>{this.state.content}</h3>
        </header>
      </div>
    );
  }
}
*/