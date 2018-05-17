import React, { Component } from 'react';
import MyNav from './components/MyNav.js';
import SearchBar from './components/SearchBar.js';
import MyFooter from './components/MyFooter.js';
import logo from './logo.svg';
import './App.css';

class App extends Component {
  render() {
    return (
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h1 className="App-title">Intergalactic Love</h1>
        </header>
        <MyNav/>
        <SearchBar/>
        <MyFooter/>
      </div>
    );
  }
}

export default App;
