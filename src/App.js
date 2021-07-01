import './App.css';
import HomePage from './component/Home/homePage'
import Home from './component/Home/backGround'
import SalesForm from './component/Sales/salesForm'
import BabySitterForm from './component/BabySitter/babySitterForm'
import LogIn from './component/Home/logIn'
import Events from './component/Events/events';
import Sales from './component/Sales/sales';
import SearchBabySitter from './component/BabySitter/searchBabySitter';
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
// import Header from './component/header';

function App() 
{
  
  return (
    <div className="App">
      {/* <Header/> */}
      <Router>
        <Switch>
          <Route path='/' exact >
            <HomePage />
          </Route>
          <Route path='/logIn'>
            <LogIn />
          </Route>
          <Route path='/events'>
            <Events />
          </Route>
          <Route path='/sales'>
            <Sales />
          </Route>
          <Route path='/babySitter'>
            <SearchBabySitter />
          </Route>
          <Route path='/home'>
            <Home />
          </Route>
          <Route path='/salesForm'>
            <SalesForm />
          </Route>
          <Route path='/babySitterForm'>
            <BabySitterForm />
          </Route>
        </Switch>
      </Router>

      {/* <button onClick={goToServer}>Go To server</button> */}

    </div>
  );
}

export default App;
