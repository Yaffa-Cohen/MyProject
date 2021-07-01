import { Button } from '@material-ui/core';
import React, { useState, useEffect } from 'react';
import { useHistory } from 'react-router-dom';
import Events from '../Events/events'
import LogIn from './logIn';
import Sales from '../Sales/sales';
import SearchBabySitter from '../BabySitter/searchBabySitter';
import './homePage.css';

const HomePage = () => {
  const [currentPage, setCurrentPage] = useState('');
  const [user,setUser] = useState(localStorage.getItem("user"));
  let history = useHistory();

  // function handleClick() {
  //   console.log(currentPage);
  //   // console.log({currentPage});

  //   history.push('/' + this.currentPage);
  //   console.log('/' + this.currentPage);
  //   // console.log('/' + { url });

  // }


  useEffect(() => {
    history.push('/' + currentPage);
    console.log('/' + currentPage);
  })

  // useEffect(() => {
  //   if (currentPage === 'callLogIn') {
  //     console.log("callLogIn!!!!")
  //     return <LogIn />;
  //   }
  // });

  // useEffect(() => {
  //   //   switch (currentPage) {
  //   //   case 'callEvent': return < Events />; break;
  //   //   case 'callSales': return < Sales />; break;
  //   //   case 'callSearchBabySitter': return < SearchBabySitter />; break;
  //   //   case 'callLogIn': return < LogIn />; break;
  //   //   case 'homePage': return < HomePage />; break;
  //   // }
  //   switch (currentPage) {
  //     case 'callEvent': console.log('callEvent'); break;
  //     case 'callSales': console.log('callsales'); break;
  //     case 'callSearchBabySitter': console.log('callbabysitter'); break;
  //     case 'callLogIn': console.log('calllogIN'); break;
  //     case 'homePage': console.log('callhomePage'); break;
  //   }
  // }, [currentPage]);


  // const renderPage = () => {
  //   switch (currentPage) {
  //     case 'callEvent': return < Events />; break;
  //     case 'callSales': return < Sales />; break;
  //     case 'callSearchBabySitter': return < SearchBabySitter />; break;
  //     case 'callLogIn': return < LogIn />; break;
  //     case 'homePage': return < HomePage />; break;
  //   }
  // }

  return <div>

    <br /> <br /> <br />

    <Button onClick={() => history.push("events")} variant="contained" size="medium">ארועים בשכונה</Button>
    <Button onClick={() => history.push("sales")} variant="contained" size="medium">מכירות יד 2</Button>
    <Button onClick={() => history.push("babySitter")} variant="contained" size="medium">search BabySitter</Button>
    <Button onClick={() => history.push("logIn")} variant="contained" size="medium">Log In</Button>


  </div>

}

export default HomePage;





























{/* <div className={classes.root}> */ }
{/* <div className="ccc">

      <AppBar position="fixed">
        <Toolbar>
        
          <Button color="inherit" onClick={() => setCurrentPage('callEvent')}>ארועים בשכונה</Button>
        </Toolbar>
      </AppBar>
    </div> */}
{/* <IconButton edge="start" className={classes.menuButton} color="inherit" aria-label="menu"> */ }
{/* <IconButton edge="start" className="aaa" color="inherit" aria-label="menu"> */ }

{/* <MenuIcon /> */ }
{/* </IconButton> */ }
{/* <Typography variant="h6" className="bbb"> */ }

{/* <Typography variant="h6" className={classes.title}> */ }

{/* </Typography> */ }



    // import { makeStyles } from '@material-ui/core/styles';
// import AppBar from '@material-ui/core/AppBar';
// import Toolbar from '@material-ui/core/Toolbar';
// import Typography from '@material-ui/core/Typography';
// import Button from '@material-ui/core/Button';
// import IconButton from '@material-ui/core/IconButton';
// import MenuIcon from '@material-ui/icons/Menu';

// const useStyles = makeStyles((theme) => ({
//   root: {
//     flexGrow: 1,
//   },
//   menuButton: {
//     marginRight: theme.spacing(2),
//   },
//   title: {
//     flexGrow: 1,
//   },
// }));
