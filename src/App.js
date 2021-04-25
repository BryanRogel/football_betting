import React from 'react';
import { Switch, Route } from 'react-router-dom';
import axios from 'axios';

import './App.css';
import Login from './pages/login/Login';
import Error404 from './pages/error404/Error404';
import Dashboard from './pages/dashboard/Dashboard';
import Singup from './pages/singup/Singup';
import Rewards from './pages/rewards/Rewards';
import Results from './pages/results/Results';
import Forecast from './pages/forecast/Forecast';

function App() {
  axios.defaults.baseURL = process.env.REACT_APP_BASE_URL;
  return (
    <div className="app">
      <Switch>
        {/* <Route type="all" exact path='/' component={Login} /> */}
        <Route type="all" exact path='/login' component={Login} />
        <Route type="all" exact path='/' component={Dashboard} />
        <Route type="all" exact path='/singup' component={Singup} />
        <Route type="all" exact path='/rewards' component={Rewards} />
        <Route type="all" exact path='/results' component={Results} />
        <Route type="all" exact path='/forecast' component={Forecast} />
        <Route component={Error404} />
      </Switch>
    </div>
  );
}


export default App;

