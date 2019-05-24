import React from 'react';
import Navbar from './components/Navbar/Navbar';
// import MainPage from '../src/components/MainPage';

import { 
  BrowserRouter, 
  Switch, 
  Route, } from 'react-router-dom';

function App() {
  return (
    <BrowserRouter>
      <Navbar />
      <Switch>
        {/* <Route exact path = '/' component = { MainPage } /> */}
      </Switch>
    </BrowserRouter>
  );
}

export default App;
