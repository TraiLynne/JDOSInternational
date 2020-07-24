import React from 'react';
import { Route } from 'react-router-dom';

// Styles
import {
  AppContainer
} from './app-styles';

// Components
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
    <AppContainer>
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
    </AppContainer>
  );
}

export default App;
