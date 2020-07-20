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
  Career
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
      
      <Footer/>
    </div>
  );
}

export default App;
