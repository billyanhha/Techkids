import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import { BrowserRouter , Route} from 'react-router-dom'
import "bootstrap/dist/css/bootstrap.min.css";
import Home from './containers/Home';
class App extends Component {
  render() {
    return (
        <BrowserRouter>
          <div className="App">
            <div className='in'>
              <Route exact path = '/' component = {Home}/> 
            </div>
          </div>
        </BrowserRouter>
    );
  }
}

export default App;
