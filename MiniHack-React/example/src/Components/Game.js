import React, { Component } from 'react'
import RowGame from './RowGame';

class Game extends Component {
    state = {
        rowGame: [RowGame, RowGame, RowGame, RowGame],  //state for Row Game
        score1: [],
        score2: [],
        score3: [],
        score4: [],
        sum_4: 0,
        sum_1: 0,
        sum_2: 0,
        sum_3: 0.
    }


    add = e => {
        e.preventDefault()
        let arr = this.state.rowGame;       //Add More Round Oppa gangnamstyle , opp opp opp
        arr.push(RowGame);
        this.setState({
            rowGame: arr
        });
    }
    _onCalScore_1 = async (index, score) => {
        let arr_1 = this.state.score1;
        for(let i = 0 ; i < index ; i++){
            if(!arr_1[i] ) arr_1[i] = 0;
        }
        arr_1[index] = score;
        console.log(arr_1);
        await this.setState({ score1: arr_1 });
        let total = 0;
        let arr = this.state.score1;
        for (let i = 0; i < arr.length; i++) {
            total += arr[i];
        }
        this.setState({ sum_1: total });
        console.log(total + " " + this.state.sum_1);
    }
    _onCalScore_2 = async (index, score) => {
        let arr_1 = this.state.score2;
        for(let i = 0 ; i < index ; i++){
            if(!arr_1[i] ) arr_1[i] = 0;
        }
        arr_1[index] = score;
        console.log(arr_1);
        await this.setState({ score2: arr_1 });
        let total = 0;
        let arr = this.state.score2;
        for (let i = 0; i < arr.length; i++) {
            total += arr[i];
        }
        this.setState({ sum_2: total });
        console.log(total + " " + this.state.sum_2);
    }
    _onCalScore_3 = async (index, score) => {
        let arr_1 = this.state.score3;
        for(let i = 0 ; i < index ; i++){
            if(!arr_1[i] ) arr_1[i] = 0;
        }
        arr_1[index] = score;
        console.log(arr_1);
        await this.setState({ score3: arr_1 });
        let total = 0;
        let arr = this.state.score3;
        for (let i = 0; i < arr.length; i++) {
            total += arr[i];
        }
        this.setState({ sum_3: total });
        console.log(total + " " + this.state.sum_3);
    }
    _onCalScore_4 = async (index, score) => {
        let arr_1 = this.state.score4;
        for(let i = 0 ; i < index ; i++){
            if(!arr_1[i] ) arr_1[i] = 0;
        }
        arr_1[index] = score;
        
        console.log(arr_1);
        await this.setState({ score4: arr_1 });
        let total = 0;
        let arr = this.state.score4;
        for (let i = 0; i < arr.length; i++) {
            total += arr[i];
        }
        this.setState({ sum_4: total });
        console.log(total + " " + this.state.sum_4);
    }

    render() {

        // Functional Programming >< OOP
        const player = this.props.playersName.map(function (value, index) {
            return (<th key={index}>  {value.length === 0 ? "Player" + " " + (index + 1) : value} </th>);
        })
        var _self = this;
        const rowGame = this.state.rowGame.map(function (value, index) {
            return (<RowGame key={index} index={index} onCalScore_1={_self._onCalScore_1} onCalScore_2={_self._onCalScore_2} onCalScore_3={_self._onCalScore_3} onCalScore_4={_self._onCalScore_4} roundNumber={"Round " + (index + 1)} />);
        })
        return (
            <div className="container game">
                <h1 className="header">ScoreKeeper</h1>
                <hr />
                <form className="has-feedback">
                    <table className="playerTable table table-striped">
                        <thead>
                            <tr>
                                <th></th>
                                {player}
                            </tr>
                        </thead>
                        <tbody>
                            <tr style={{
                                fontWeight: "bold",
                                color: "#ffffff"
                            }}>
                                <td className="td"> Sum of Score</td>
                                <td className="td"> {this.state.sum_1} </td>
                                <td className="td"> {this.state.sum_2}</td>
                                <td className="td"> {this.state.sum_3} </td>
                                <td className="td"> {this.state.sum_4} </td>
                            </tr>
                            {/* <RowGame  onCalScore = {this._onCalScore} roundNumber = {"Round "} /> */}
                            {rowGame}
                        </tbody>
                    </table>
                    <hr />
                    <button className="btn button" onClick={this.add}>Add round</button>
                </form>
            </div>
        )
    }
}

export default Game;