import React, { Component } from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import "./App.css";
import axios from "./axios";
import HomeScreen from "./container/HomeScreen";
import DetailScreen from "./container/DetailScreen";
import { BrowserRouter, Route, Redirect  } from "react-router-dom";
import Login from "./container/Login";
import SignUp from "./container/SignUp";
class App extends Component {

  state = {

  }
  _onLoggedIn = (e) =>{
    this.setState({username : e});
  }
  

  render() {

    return (
      // <SignUp/>

      <BrowserRouter>
        <div className="App">
          <Route exact path="/" render={(props) =>
            <HomeScreen {...props} username={this.state.username} id={this.state.id} />
          } />
          <Route path="/images/:id" render={(props) =>
            <DetailScreen {...props} username={this.state.username} />
          } />
          <Route path="/login" render={(props) => <Login {...props} onLoggedIn = {this._onLoggedIn}  />}
          />
        </div>
      </BrowserRouter>
    );
  }
}

export default (App);

