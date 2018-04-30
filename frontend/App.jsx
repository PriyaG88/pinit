import React from 'react';
import { Route, Switch } from 'react-router-dom';
import SessionPage from './components/session/sessionPage';
import LoginPageContainer from './components/session/loginPageContainer';
import Home from './components/home';

const App = () => (
  <Switch>
    <Route path='/session' component={SessionPage} />
    <Route path='/login' component={LoginPageContainer} />
    <Route path='/home' component={Home} />
  </Switch>
);

export default App;
