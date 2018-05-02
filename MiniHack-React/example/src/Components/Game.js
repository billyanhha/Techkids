import React, { Component } from 'react'
import { axios } from "axios";
import RowGame from './RowGame';

class Game extends Component {
    render() {
        // Functional Programming >< OOP
        const player = this.props.playersName.map(function (value, index) {
            return (<th key={index}>  {value.length === 0 ? "Player" + " " + (index+1) : value} </th>)
        })
        return (
            <div className="container game">
                <h1 className="header">ScoreKeeper</h1>
                <hr />
                <form>
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
                                <td className="td"> 0</td>
                                <td className="td"> 0</td>
                                <td className="td"> 0</td>
                                <td className="td"> 0</td>
                            </tr>
                            <RowGame/>
                        </tbody>
                    </table>
                    <hr />
                    <button className=" btn button"  >Add round</button>
                </form>
            </div>
        )
    }
}

export default Game;