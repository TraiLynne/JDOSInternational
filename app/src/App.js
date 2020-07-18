import React from 'react';
import logo from './logo.svg';
import { Route } from 'react-router-dom';
import './App.css';
import { 
  Header,
  Footer 
} from './components';

function App() {
  return (
    <div className="App">
      <Header/>
      JDOS International SPA
      <Footer/>
    </div>
  );
}

export default App;
