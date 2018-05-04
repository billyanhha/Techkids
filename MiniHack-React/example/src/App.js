import React, {
  Component
} from 'react';
import './App.css';
import Home from './Components/Home';
import Game from './Components/Game';

class App extends Component {
  state = {
    initializing: true,
    players: []
  }
  _onCreateGame = (players) => {
    this.setState({
      initializing: false,
      players: players
    });
  }
  render() {
    return (
      this.state.initializing ? <Home onCreateGame={this._onCreateGame}/> : <Game playersName = {this.state.players}/>
    );
  }
}

export default App;