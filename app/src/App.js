import React from 'react';
import { Route } from 'react-router-dom';
import './App.css';
import {
  // Fixed 
  Header,
  Footer, 

  // Pages
  Home,
  About,
  Service,
  Career,
  Contact
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

      <Route
        path='/services'
        component={Service}
      />

      <Route
        path='/careers'
        component={Career}
      />

      <Route
        path='/contact'
        component={Contact}
      />
      
      <Footer/>
    </div>
  );
}

export default App;
