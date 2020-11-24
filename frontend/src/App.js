import React from 'react';
import 'normalize.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css';

import { Route, BrowserRouter as Router, Switch } from 'react-router-dom';

import NavbarComponent from './component/navbar/navbar';
import LoginComponent from './component/login_signup/login';
import SignupComponent from './component/login_signup/signup';

class App extends React.Component{
  render(){
    return (
      <React.Fragment>
        <Router>
          <NavbarComponent/>
          <div className="mainDashboard">
            <Switch>
              <Route exact path='/login' component={LoginComponent} /> 
              <Route exact path='/signup' component={SignupComponent} /> 
            </Switch>
          </div>
        </Router>
      </React.Fragment>
    );
  }
}

export default App;
