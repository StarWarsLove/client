import React, { Component } from 'react';
import MyNav from './components/MyNav.js';
import SearchBar from './components/SearchBar.js';
import MyFooter from './components/MyFooter.js';
import logo from './logo.svg';
import './App.css';

class App extends Component {
    constructor(){
        super()
        this.state={
          data:null,
        }
      this.getData()
    }

    getData(){
      let data=fetch('https://cdn.rawgit.com/akabab/starwars-api/0.2.1/api/all.json')
      .then((resp)=>{
          resp.json().then((res)=>{
            console.log(res)
            this.setState({data:res})
          })
      })
    }
    
  cliked(){
    console.log('the button was cliked')
  }

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
      <div>
      <button onClick={this.cliked}> Masculin </button>
      <button> Feminin </button>
     {
      this.state.data ?
      this.state.data.map((item)=>
        <div>
          <img src= {item.image}/>
          <h3>{item.name}</h3>
          <h3>{item.species}</h3>
          <h3>{item.gender}</h3>
        </div>

        )
      : <h3>Choubaka sois patient...</h3>

     }      
      
      </div>
    )
  }
}

export default App;