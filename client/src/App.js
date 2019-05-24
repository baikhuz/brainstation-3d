import React from 'react';
<<<<<<< HEAD
import Navbar from './components/Navbar/Navbar';
// import MainPage from '../src/components/MainPage';
=======
import Navbar from '../src/components/Navbar/Navbar';
import MainPage from '../src/components/MainPage/MainPage';

import '../src/global-styles.scss';
>>>>>>> e66ec21cdfa6eac0dfb925140b14e3f14d96281a

import { 
  BrowserRouter, 
  Switch, 
  Route, } from 'react-router-dom';

function App() {
  return (
    <BrowserRouter>
      <Navbar />
      <Switch>
        <Route exact path = '/' component = { MainPage } />
      </Switch>
    </BrowserRouter>
  );
}

export default App;

