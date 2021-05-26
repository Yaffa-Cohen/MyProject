
import React, { useState } from 'react';





function connectToServer(userName,password){
    
    fetch(`http://localhost:3000/login?user=${userName}&password=${password}`)
    .then((res) => res.json())
    .then((data) => console.log(data))
    .catch((err) => {
      console.log("error", err);
    });

}
export default connectToServer;