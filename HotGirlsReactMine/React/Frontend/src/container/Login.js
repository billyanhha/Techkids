import React, { Component } from 'react';
import axios from '../axios';
import Form from 'react-validation/build/form';
import Input from 'react-validation/build/input';
import { Redirect , Link} from 'react-router-dom';
class Login extends Component {
    state = {
    }
    // _onLogin = (e) => {
    //     e.preventDefault();
    //     axios
    //         .post("/api/auth", {
    //             username: this.state.username,
    //             password: this.state.password,
    //         })
    //         .then(response =>
    //             this.setState({
    //                 err: response.data
    //             }
    //             )
    //         )
    //         .catch(err => console.log(err)
    //         );
    // };
    handleChange_1 = async (value) => {
        await this.setState({ usernameLogin: value });
    }
    handleChange_2 = async (value) => {
        await this.setState({ password: value });
    }

    _onLogin = async (e) => {
        e.preventDefault();
        console.log(this.state.usernameLogin + " " + this.state.password);

        await axios
            .post("/api/auth", {
                username: this.state.usernameLogin,
                password: this.state.password,
            })
            .then(response => {
                console.log(response.data.username + " " + this.state.err);
                this.setState({
                    username: (response.data.username ? response.data.username : ''),
                }
                );
                if (response.data.username) {this.props.onLoggedIn(response.data.username)};
            }
            )
            .catch(err => { this.setState({ err: err.response.data }) }
            );
    };
    render() {
        if (this.state.username) {
            return <Redirect to= '/' />;
        }
        return (
            <div className="login">
                <div className="form">
                    <form>
                        <img src="https://www.kavir.info/fa/wp-content/uploads/2018/02/User-group-icon.png" alt="login" />
                        <h1>Account   Login</h1>
                        <h4>UserName</h4>
                        <input type="text" required placeholder="Name" onChange={e => this.handleChange_1(e.target.value)} />
                        <h4>PassWord</h4>
                        <input type="password" required placeholder="PassWord" onChange={e => this.handleChange_2(e.target.value)} />
                        <br/>
                        <br/>
                        <button className="btn btn-success btn-block btnLogin" onClick={this._onLogin}>
                            <span className="spanLogin">
                                SignIn
                            </span>
                        </button>
                        <span>No Account ? <Link to = '/signUp'> <span>Sign-Up </span> </Link> </span>
                    </form>
                </div>
                {this.state.err ? (<div className="err"><i className="fas fa-exclamation-triangle"></i>Error!!<h4>{this.state.err}</h4></div>) : <div></div>}
            </div>
        )
    }
}

export default (Login);