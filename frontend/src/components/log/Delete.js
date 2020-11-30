  
import React from "react";
import axios from "axios";
import cookie from "js-cookie";
const API = 'http://localhost:8080/api/users/'

const Delete = () => {
  const removeCookie = (key) => {
    if (window !== "undefined") {
      cookie.remove(key, { expires: 1 });
    }
  };

  const deleteProfile = async () => {
    await axios({
      method: "post",
      url: API + 'delete',
    })
      .then(() => removeCookie("jwt"))
      .catch((err) => console.log(err));
    
    //window.location = "/";
  };

  return (
    <div onClick={deleteProfile}>
      <button className="delete">Supprimer son profil</button>
    </div>
  );
};

export default Delete;

