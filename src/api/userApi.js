
import React, { useState } from 'react';





const login = async (userName, password) => {
  const res = await fetch(`http://localhost:3000/login?user_id=${userName}&user_password=${password}`, {
    method: "GET",
    mode: "cors",
  })
  const data = await res.json()
  return data
  // fetch(`http://localhost:3001/login?user=${userName}&password=${password}`)

  // .then((res) => res.json())
  // .then((data) => console.log(data))
  // .catch((err) => {
  //   console.log("error", err);
  // });

}

export default login;