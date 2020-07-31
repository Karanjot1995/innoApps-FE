import React from 'react';
import logo from './logo.svg';
import './App.css';
import Home from './components/Home';
import LeftNav from './components/LeftNav';

function App() {
  return (
    <div className="App d-flex">
      <LeftNav/>
      <Home/>
    </div>
  );
}

export default App;
