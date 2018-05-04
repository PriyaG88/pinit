import React from 'react';
import { Route, Switch } from 'react-router-dom';
import SessionPage from './components/session/sessionPage';
import LoginPageContainer from './components/session/loginPageContainer';
import HomeContainer from './components/ui/homeContainer';

const App = () => (
  <Switch>
    <Route path='/session' component={SessionPage} />
    <Route path='/login' component={LoginPageContainer} />
    <Route path='/home' component={HomeContainer} />
  </Switch>
);

export default App;
