import React, { Component } from "react";

class RowGame extends Component {
    state = {
        score1: [],
        score2: [],
        score3: [],
        score4: [],
    }

    handleChangeText1 = async (value) => {
        if (!Number(value)) {
            value = "0";
        }
        let s = this.state.score1;
        s = Number(value);
        await this.setState({ score1: s });
        console.log("key " + this.props.index);
        await this.setState({ score4: s });
        this.props.onCalScore_1(this.props.index, s);
    }
    handleChangeText2 = async (value) => {
        if (!Number(value)) {
            value = "0";
        }
        let s = this.state.score2;
        s = Number(value);
        await this.setState({ score2: s });
        this.props.onCalScore_2(this.props.index, s);
    }
    handleChangeText3 = async (value) => {
        if (!Number(value)) {
            value = "0";
        }
        let s = this.state.score3;
        s = Number(value);
        await this.setState({ score3: s });
        this.props.onCalScore_3(this.props.index, s);
    }
    handleChangeText4 = async (value) => {
        if (!Number(value)) {
            value = "0";
        }
        let s = this.state.score4;
        s = Number(value);

        this.props.onCalScore_4(this.props.index, s);
    }

    render() {
        return (
            <tr>
                <td>{this.props.roundNumber}</td>
                <td >
                    <input name="round1" className="input" type="number" placeholder="0" value={this.props.score1} onChange={e => this.handleChangeText1(e.target.value)} />
                </td>
                <td >
                    <input name="round2" className="input" type="number" placeholder="0" value={this.props.score2} onChange={e => this.handleChangeText2(e.target.value)} />
                </td>
                <td>
                    <input name="round3" className="input" type="number" placeholder="0" value={this.props.score3} onChange={e => this.handleChangeText3(e.target.value)} />
                </td>
                <td>
                    <input name="round4" className="input" type="number" placeholder="0" value={this.props.score4} onChange={e => this.handleChangeText4(e.target.value)} />
                </td>
            </tr>
        )
    }
}


export default RowGame;