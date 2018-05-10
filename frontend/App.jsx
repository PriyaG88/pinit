import React from 'react';
import { Route, Switch } from 'react-router-dom';
import AuthRoute from './util/route_util';
import SessionPage from './components/session/sessionPage';
import LoginPageContainer from './components/session/loginPageContainer';
import HomeContainer from './components/ui/homeContainer';
import ProfileContainer from './components/ui/profileContainer';

const App = () => (
  <Switch>
    <AuthRoute path='/session' component={SessionPage} />
    <AuthRoute path='/login' component={LoginPageContainer} />
    <Route exact path='/' component={HomeContainer} />
    <Route path='/:userName' component={ProfileContainer} />
  </Switch>
);

export default App;
