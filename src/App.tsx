import React from 'react';
import './App.css';
import { Route, Switch } from 'react-router';
import MainPage from './pages/main/MainPage';

const App: React.FC = () => {
  return (
    <Switch>
      <Route path="/" component={MainPage} exact />
    </Switch>
  );
};

export default App;
