import React, { Component } from 'react';
import './App.css';
import Home from './Components/Home';
import Game from './Components/Game';
import axios from 'axios'
import { BrowserRouter, Route } from 'react-router-dom'

class App extends Component {
  state = {
    initializing: true,
    id: "",
  }
  _onCreateGame = async (players) => {
    await this.setState({
      initializing: false,
    });

    axios.post('http://localhost:6969/api/games', {
      playerName_1: players[0],
      playerName_2: players[1],
      playerName_3: players[2],
      playerName_4: players[3],
    })
      .then(data => { this.setState({ id: data.data._id }) })

      .catch(err => console.log(err))
  }
  render() {
    return (
      // this.state.initializing ? <Home onCreateGame={this._onCreateGame} /> : <Game playersName={this.state.players} id = {this.state.id} />
      <BrowserRouter>
        <div>
          <Route exact path="/" render={(props) => {
            return <Home {...props} onCreateGame={this._onCreateGame} gameId={this.state.id} />
          }} />
          <Route path="/games/:id" render={(props) => {
            return <Game {...props}  id={this.state.id} />
          }} />
        </div>
      </BrowserRouter>
    );
  }
}

export default App;