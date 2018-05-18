import React, { Component } from 'react';
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

  render() {
    return (
<<<<<<< HEAD
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h1 className="App-title">RENCONTRES INTERGALACTIQUES</h1>
        </header>
=======
      <div className="charact">
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
      : <h3>Choubaka sois patient</h3>

     }      
      
>>>>>>> master
      </div>
    )
  }
}

export default App;