

const signup=(userName, password, address, email)=>{
    return fetch('http://localhost:3000/signup',
    {
        method:'POST',
        headers:{
            'content-Type': 'application/json',
        },
        body:JSON.stringify({
            user_id:userName,
            user_password:password,
            user_address:address,
            user_email:email
        })
    })
    .then((res)=>res.json())
    .then((data)=>{
        return data;
    })
    .catch((err)=>{
        console.log("error",err);
    });
}

export default signup;