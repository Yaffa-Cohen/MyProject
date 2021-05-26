import React, { useState } from 'react';
import { Button, Hidden, Input } from '@material-ui/core';
import FormControl from '@material-ui/core/FormControl';
import Container from '@material-ui/core/Container';
import TextField from '@material-ui/core/TextField';
import { ValidatorForm, TextValidator, validator } from 'react-material-ui-form-validator';
import { useHistory } from 'react-router-dom';
import connectToServer from '../../api/userApi';


const LogIn = () => {

    const [userName, setUserName] = useState();
    const [password, setPassword] = useState();
    const [UserDiv, setUserDiv] = useState(false);

    const [newUserDiv, setNewUserDiv] = useState(true);
    let history = useHistory();

    function handleChange(event) {
        var user = event.target.value;
        switch (event.target.name) {
            case 'UserName': setUserName(user); break;
            case 'Password': setPassword(user); break;

        }
    }

    function handleSubmit() {
        // console.log('submit');
        history.push("home");
        console.log(history.value());
    }

    function showNewDiv() {
        setNewUserDiv(false);
        setUserDiv(true);
    }

    function onClickButton(){
        history.push('./home');
         connectToServer(userName,password);
    }

    ValidatorForm.addValidationRule('isPhone', value => validator.isMobilePhone(value));


    return <div>
        <br /> <br /> <br /> <br /> <br /> <br />

        <div className="existUser" hidden={UserDiv}>
            משתמש קיים <br /> <br />
            <TextField id="standard-basic userName" label="User Name" variant="outlined" onChange={e=>setUserName(e.target.value)}/>
            <br /><br />
            <TextField id="standard-basic password" label="Password" variant="outlined" onChange={e=>setPassword(e.target.value)}/>
            <br /> <br />
            <Button onClick={onClickButton} variant="contained" size="medium">כניסה למערכת </Button>
            {/* <Button onClick={handleSubmit} variant="contained" size="medium">כניסה למערכת </Button> */}

            <br /><br />
            <Button onClick={showNewDiv} variant="contained" size="medium">משתמש חדש</Button>
            {/* 
            <ValidatorForm onError={errors => console.log(errors) }>
                <TextValidator id="userName" label="User Name" onChange={handleChange} name="userName" value={userName}
                    validators={['required']} errorMessages={'this field is required'} />
                      <TextValidator id="password" label="Password" onChange={handleChange} name="password" value={password}
                    validators={['required']} errorMessages={'this field is required'} />

            </ValidatorForm> */}


        </div>

        <div className="NewUser" hidden={newUserDiv}>
            משתמש חדש
            <br /><br />
            <TextField id="standard-basic" label="User Name" variant="outlined" />
            <br /><br />
            <TextField id="standard-basic" label="Password" variant="outlined" />
            <br /> <br />
            <TextField id="standard-basic" label="Address" variant="outlined" />
            <br /><br />
            <TextField id="standard-basic" label="E-mail" variant="outlined" />
            <br /> <br />
            {/* <Button onClick={handleSubmit} variant="contained" size="medium">כניסה למערכת </Button> */}
            <Button onClick={()=>{history.push('home')}} variant="contained" size="medium">כניסה למערכת </Button>

        </div>

    </div>
}

export default LogIn;

