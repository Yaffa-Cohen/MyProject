import React from 'react';

const insertProductApi=(nameP,colorP,priceP,descP,imgUrlP,categoryP) => {
    debugger;
     fetch('http://localhost:3000/insertProduct',{
        method:'POST',
      headers: {
        Accept: 'application/json',
        'Content-Type': 'application/json',
      },
        body:JSON.stringify({nameP: nameP,
            colorP:colorP,
            priceP: priceP,
            descP:descP,
            imgUrlP:imgUrlP,
            categoryP: categoryP
        })
    })
    .then((res) => res.json())
  .then((data) =>{ 
    return data;
    }
   )
  .catch((err) => {
    console.log("error", err);
  });
}

  

//  const insertProductApi=(nameP,colorP,priceP,descP,imgUrlP,categoryP)=>{
//     debugger;
//     return fetch('http://localhost:3001/insertProduct',
//     {
//         method:'POST',
//         headers: {
//           'Content-Type': 'application/json',
//         },
//         body:JSON.stringify({ nameP: nameP,
//             colorP:colorP,
//             priceP: priceP,
//             descP:descP,
//             imgUrlP:imgUrlP,
//             categoryP: categoryP})
//     }).then((res)=>res.json())
//     .then((data)=>{
//         debugger;
//         console.log(data);
//         return data;
//     })
//     .catch((err)=>{
//         console.log('error', err);
//     });
// }

export default insertProductApi;



//  const signupPApi = (email, password,governessCode, childName,childId) => {
//   return fetch('http://localhost:3001/signUpP',
//   {
//       method:'POST',
//       headers: {
//         'Content-Type': 'application/json',
//       },
//       body:JSON.stringify({email:email,
//             password:password,
//             governessCode:governessCode,
//             childName:childName,
//             childId:childId})
//   })
//   .then((res) => res.json())
//   .then((data) =>{ 
//     return data;
//     }
//    )
//   .catch((err) => {
//     console.log("error", err);
//   });
// }