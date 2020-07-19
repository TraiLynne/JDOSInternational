import React from 'react';
import logo from './logo.svg';
import { Route } from 'react-router-dom';
import './App.css';
import {
  // Fixed 
  Header,
  Footer, 

  // Pages
  Home,
  About
} from './components';

function App() {
  return (
    <div className="App">
      <Header/>
      <Route 
        exact 
        path='/'
        component={Home}
      />
      <Route
        path='/about-us'
        component={About}
      />
      <Footer/>
    </div>
  );
}

export default App;
