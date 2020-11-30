import React, { Component } from 'react';
//import axios from 'axios';
import Logout from "../log/Logout"
import Delete from "../log/Delete"
import '../style/User.css';
//const API = 'http://localhost:8080/api/users/me';

class Users extends Component {

  state = {
  }

  render() {

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

