import React, { Component } from 'react'
import RowGame from './RowGame';
import axios from 'axios'
class Game extends Component {
    state = {
        rowGame: Number,  //state for Row Game
        playerName: [],
        score : [ [] , [] , [] , []],
        sum : [0 , 0 , 0 , 0],
    }

    componentDidMount() {
        axios.get(`http://localhost:6969/api/games/${this.props.match.params.id}`)
            .then(data => {
                console.log(data.data);

                if (data.data) {
                    this.setState({
                        rowGame: Math.max(data.data.score_1.length, data.data.score_2.length, data.data.score_3.length, data.data.score_4.length , 5),
                        playerName: [data.data.playerName1, data.data.playerName2, data.data.playerName3, data.data.playerName4],
                        score : [data.data.score_1 , data.data.score_2  , data.data.score_3  , data.data.score_4],
                        sum : [data.data.sum_1  , data.data.sum_2 , data.data.sum_3 , data.data.sum_4 ]
                    })
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
    _onCalScore = async (index , key , score) => {
        let arr_1 = this.state.score[key];
        let arr_score = this.state.score;
        console.log(arr_score);
        
        for (let i = 1; i < index; i++) {
            if (!arr_1[i]) arr_1[i] = 0;
        }
        arr_1[index] = score;
        arr_score[key] = arr_1
        await this.setState({ score : arr_score });
        let total = 0;
        let arr = this.state.score[key];
        for (let i = 1; i < arr.length; i++) {
            total += arr[i];
        }
        let arr_sum = this.state.sum;
        arr_sum[key] = total;
        this.setState({ sum: arr_sum });
        console.log(total + " " + this.state.sum[key]);
        axios.put(`http://localhost:6969/api/games/${this.props.match.params.id}`, {
            score_1: this.state.score[0],
            score_2: this.state.score[1],
            score_3: this.state.score[2],
            score_4: this.state.score[3],
            sum_1: this.state.sum[0],
            sum_2: this.state.sum[1],
            sum_3: this.state.sum[2],
            sum_4: this.state.sum[3],
        })
            .then(data => this.setState({ id: data.data._id }))

            .catch(err => console.log(err))

    }

    render(){
        // Functional Programming >< OOP

        const player =  this.state.playerName.map((value, index) => {
            return (<th key={index}>  {value.length === 0 ? "Player" + " " + (index + 1) : value} </th>);
        })
        const Arr =  Array.apply(null, Array(this.state.rowGame));
        const rowGame = Arr.map( (value, index) => {
            if(index !== 0)
            return (<RowGame key={index}  score = {this.state.score} onCalScore={this._onCalScore} index ={index} roundNumber={"Round " + (index)} />);
        })

        return (
            <div className="container game">
                <h1 className="header">ScoreKeeper</h1>
                <hr style={{ marginTop: "0" }} />
                <form className="has-feedback">
                    <table className="playerTable table table-striped" style ={{tableLayout: "fixed"}}>
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
                                <td className="td"> {this.state.sum[0]} </td>
                                <td className="td"> {this.state.sum[1]}</td>
                                <td className="td"> {this.state.sum[2]} </td>
                                <td className="td"> {this.state.sum[3]} </td>
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