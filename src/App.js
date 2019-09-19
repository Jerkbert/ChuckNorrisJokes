import React, { Component } from 'react';
import './App.css';
import JokeCard from './components/JokeCard'
import JokeContainer from './components/JokeContainer'

class App extends Component{
  constructor(){
    super()
    this.state = {
      joke: "",
      savedJokes: []
    }
  }

  loadJoke = () => {
      fetch('https://api.chucknorris.io/jokes/random')
      .then(response => response.json())
      .then(result => this.setState({
        joke: result.value
      }))
  }


  addJoke = (joke) => {
    const newJoke = {id: Date.now(), ...joke}
    this.setState({
      savedJokes: [newJoke, ...this.state.savedJokes]
    })
  }

  deleteJoke = (id) => {
    const { savedJokes } = this.state
    const newJokes = savedJokes.filter(joke => joke.id !== id)
    this.setState({
      savedJokes: newJokes
    })
  }

  render(){

    return (
      <div className="App">
       <h1>Chuck Norris Jokes!</h1>
       <button onClick={this.loadJoke}>see a new joke</button>
       <JokeCard joke={this.state.joke}/>
       <JokeContainer savedJokes={this.state.savedJokes} deleteJoke={this.deleteJoke}/>
      </div>
    )
  }
}

export default App;
