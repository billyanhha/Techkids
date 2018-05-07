import React, { Component } from "react";

class RowGame extends Component {

    handleChangeText = async (key , value) => {
        if (!Number(value)) {
            value = "0";
        }
        let s = Number(value);
        this.props.onCalScore(this.props.index , key , s);
    }
    

    render() {
        // console.log(this.props.score[0]);
        
        return (
            <tr>
                <td style= {{fontWeight : "bold"}}>{this.props.roundNumber}</td>
                <td >
                    <input name="round1" className="input" type="number" placeholder="0" defaultValue={this.props.score[0][this.props.index]} onChange={e => this.handleChangeText(0 , e.target.value)} />
                </td>
                <td >
                    <input name="round2" className="input" type="number" placeholder="0" defaultValue={this.props.score[1][this.props.index]} onChange={e => this.handleChangeText(1 , e.target.value)} />
                </td>
                <td>
                    <input name="round3" className="input" type="number" placeholder="0" defaultValue={this.props.score[2][this.props.index]} onChange={e => this.handleChangeText(2 , e.target.value)} />
                </td>
                <td>
                    <input name="round4" className="input" type="number" placeholder="0" defaultValue={this.props.score[3][this.props.index]} onChange={e => this.handleChangeText(3 , e.target.value)} />
                </td>
            </tr>
        )
    }
}


export default RowGame;
