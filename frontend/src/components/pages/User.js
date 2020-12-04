import React, { Component } from 'react';
//import axios from 'axios';
import Logout from "../log/Logout"
import Delete from "../log/Delete"
import '../style/User.css';


class Users extends Component {

  state = {
  }
  render() {

  const tokenId = JSON.parse(localStorage.getItem(('userTokenLog')))
  if(tokenId === null) {
    window.location = "/login"
  }
    return (
      <div className="User">
        <h1>Profil</h1>
        <Logout />
        <br /><Delete />
      </div>
    );
  }

}


export default Users;

