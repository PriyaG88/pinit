import React from 'react';
import { Route, Switch } from 'react-router-dom';
import SessionPage from './components/session/sessionPage';
import LoginPageContainer from './components/session/loginPageContainer';
import HomeContainer from './components/ui/homeContainer';
import ProfileContainer from './components/ui/profileContainer';

const App = () => (
  <Switch>
    <Route path='/session' component={SessionPage} />
    <Route path='/login' component={LoginPageContainer} />
    <Route exact path='/' component={HomeContainer} />
    <Route path='/:userName' component={ProfileContainer} />
  </Switch>
);

export default App;
