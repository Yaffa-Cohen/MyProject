import React, { useState } from 'react';
import UserName from './userName'
import { Button } from '@material-ui/core';
import { useHistory } from 'react-router-dom';
import EmailService from '../Email/emailService';
const Home = () => {
    let history = useHistory();


    function callEmailService() {
        // return <EmailService/>
        // לטפל בשירות שליחת המיילים, לבקש מהמשתמש לאשר את המייל שנכנס איתו בתור המייל שישלחו אליו
        alert('בקשתך התקבלה!')
    }
    console.log("hi' i am home");
    // alert("aaaa")
    return <div>
        <br />
        <br />
        <br />
        <br />
        <br />
        <br />
        <br />
        <br />
        <br />
        <br />
        <div>
            {/* לבדוק אם המשתמש קיים במערכת לא לזמן את הקומפוננטה הזו, אלא רק לכתוב שלום.... */}
            <UserName/>
            <br />
            <Button onClick={callEmailService}>להרשמה לקבלת עדכונים במייל</Button><br />
            <Button onClick={()=>history.push('salesForm')}>להוספת מוצר למכירה</Button><br/>
            <Button onClick={()=>history.push('babySitterForm')}>להרשמה לשירותי BabyStar</Button><br />


        </div>

    </div>
}

export default Home;