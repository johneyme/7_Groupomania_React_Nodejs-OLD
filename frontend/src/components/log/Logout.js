  
import React from "react";
import axios from "axios";
const API = 'http://localhost:8080/api/users/'

const Logout = () => {
  

  const logout = async () => {
    await axios({
      method: "get",
      url: API + 'logout',
      withCredentials: true,
    })
      .then(() => console.log("Supprimé"))
      .catch((err) => console.log(err));
    
    //window.location = "/";
  };

  return (
    <div>
      <button onClick={logout} className="logout">Se Déconnecter</button>
    </div>
  );
};

export default Logout;