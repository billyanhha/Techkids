import React, { Component } from 'react'
import { withRouter } from 'react-router-dom';
import { Route, Redirect } from 'react-router-dom'
class Home extends Component {
    //khai bao truoc de auto ko dien => player 1
    state = {
        players: ["", "", "", ""]
    }

    onClick = e => {
        e.preventDefault()
        this.props.onCreateGame(this.state.players)
    }

    handleChangeText = (index, value) => {
        let players = this.state.players
        players[index] = value
        this.setState({ players: players })
    }

    componentWillReceiveProps(nextProps) {
        if (nextProps.gameId) this.props.history.push(`/games/${nextProps.gameId}`)
    }

    render() {

        return (
            <div className="main">
                <h1 className="header">ScoreKeeper</h1>
                <hr style ={{marginTop : "0"}}/>
                <form className="form-group has-error has-feedback">
                    <div className="col">
                        <input type="text" name="player1" className="player_input form-control" id="inputError" placeholder="Player1..." onChange={e => this.handleChangeText(0, e.target.value)} />
                    </div>
                    <div className="col">
                        <input type="text" name="player2" className="player_input form-control" id="inputError" placeholder="Player2..." onChange={e => this.handleChangeText(1, e.target.value)} />
                    </div>
                    <div className="col">
                        <input type="text" name="player3" className="player_input form-control" id="inputError" placeholder="Player3..." onChange={e => this.handleChangeText(2, e.target.value)} />
                    </div>
                    <div className="col">
                        <input type="text" name="player4" style={{ animationDelay: "0.25s" }} className="player_input form-control" id="inputError" placeholder="Player4..." onChange={e => this.handleChangeText(3, e.target.value)} />
                    </div>
                    <button className="btn button" onClick={this.onClick} >
                        <span>
                            Create New Game
                        </span>
                    </button>
                </form>
            </div>
        )
    }


}

export default withRouter(Home)