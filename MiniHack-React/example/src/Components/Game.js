import React, { Component } from 'react'
import RowGame from './RowGame';
import axios from 'axios'
class Game extends Component {
    state = {
        rowGame: Number,  //state for Row Game
        playerName: [],
        score1: [],
        score2: [],
        score3: [],
        score4: [],
        sum_4: 0,
        sum_1: 0,
        sum_2: 0,
        sum_3: 0,
    }

    componentDidMount() {
        axios.get(`http://localhost:6969/api/games/${this.props.match.params.id}`)
            .then(data => {
                console.log(data.data);

                if (data.data) {
                    this.setState({
                        rowGame: Math.max(data.data.score_1.length, data.data.score_2.length, data.data.score_3.length, data.data.score_4.length),
                        playerName: [data.data.playerName1, data.data.playerName2, data.data.playerName3, data.data.playerName4],
                        score1: data.data.score_1,
                        score2: data.data.score_2,
                        score3: data.data.score_3,
                        score4: data.data.score_4,
                        sum_4: data.data.sum_4,
                        sum_1: data.data.sum_1,
                        sum_2: data.data.sum_2,
                        sum_3: data.data.sum_3,
                    }, () => { console.log(this.state.playerName); })
                }


            })
    }

    add = e => {
        e.preventDefault()
        let arr = this.state.rowGame;       //Add More Round Oppa gangnamstyle , opp opp opp
        arr++;
        this.setState({
            rowGame: arr
        });
    }
    _onCalScore_1 = async (index, score) => {
        let arr_1 = this.state.score1;
        for (let i = 0; i < index; i++) {
            if (!arr_1[i]) arr_1[i] = 0;
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
        axios.put(`http://localhost:6969/api/games/${this.props.match.params.id}`, {
            score_1: this.state.score1,
            score_2: this.state.score2,
            score_3: this.state.score3,
            score_4: this.state.score4,
            sum_1: this.state.sum_1,
            sum_2: this.state.sum_2,
            sum_3: this.state.sum_3,
            sum_4: this.state.sum_4,
        })
            .then(data => this.setState({ id: data.data._id }))

            .catch(err => console.log(err))

    }
    _onCalScore_2 = async (index, score) => {
        let arr_1 = this.state.score2;
        for (let i = 0; i < index; i++) {
            if (!arr_1[i]) arr_1[i] = 0;
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
        axios.put(`http://localhost:6969/api/games/${this.props.match.params.id}`, {
            score_1: this.state.score1,
            score_2: this.state.score2,
            score_3: this.state.score3,
            score_4: this.state.score4,
            sum_1: this.state.sum_1,
            sum_2: this.state.sum_2,
            sum_3: this.state.sum_3,
            sum_4: this.state.sum_4,
        })
            .then(data => this.setState({ id: data.data._id }))

            .catch(err => console.log(err))

    }
    _onCalScore_3 = async (index, score) => {
        let arr_1 = this.state.score3;
        for (let i = 0; i < index; i++) {
            if (!arr_1[i]) arr_1[i] = 0;
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
        axios.put(`http://localhost:6969/api/games/${this.props.match.params.id}`, {
            score_1: this.state.score1,
            score_2: this.state.score2,
            score_3: this.state.score3,
            score_4: this.state.score4,
            sum_1: this.state.sum_1,
            sum_2: this.state.sum_2,
            sum_3: this.state.sum_3,
            sum_4: this.state.sum_4,
        })
            .then(data => this.setState({ id: data.data._id }))

            .catch(err => console.log(err))
    }
    _onCalScore_4 = async (index, score) => {
        let arr_1 = this.state.score4;
        for (let i = 0; i < index; i++) {
            if (!arr_1[i]) arr_1[i] = 0;
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
        axios.put(`http://localhost:6969/api/games/${this.props.match.params.id}`, {
            score_1: this.state.score1,
            score_2: this.state.score2,
            score_3: this.state.score3,
            score_4: this.state.score4,
            sum_1: this.state.sum_1,
            sum_2: this.state.sum_2,
            sum_3: this.state.sum_3,
            sum_4: this.state.sum_4,
        })
            .then(data => this.setState({ id: data.data._id }))

            .catch(err => console.log(err))
    }

    render() {
        // Functional Programming >< OOP

        const player =  this.state.playerName.map(function (value, index) {
            return (<th key={index}>  {value.length === 0 ? "Player" + " " + (index + 1) : value} </th>);
        })

        var _self = this;
        const rowGame = Array.apply(null, Array(this.state.rowGame)).map(function (value, index) {
            return (<RowGame key={index} index={index} score1={_self.state.score1[index]} score2={_self.state.score2[index]} score3={_self.state.score3[index]} score4={_self.state.score4[index]} onCalScore_1={_self._onCalScore_1} onCalScore_2={_self._onCalScore_2} onCalScore_3={_self._onCalScore_3} onCalScore_4={_self._onCalScore_4} roundNumber={"Round " + (index + 1)} />);
        })


        return (
            <div className="container game">
                <h1 className="header">ScoreKeeper</h1>
                <hr style={{ marginTop: "0" }} />
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
                    <button className="btn button" onClick={this.add}>
                        Add round
                    </button>
                </form>
            </div>
        )
    }
}

export default Game;