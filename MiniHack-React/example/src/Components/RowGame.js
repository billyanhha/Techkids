import React , { Component } from "react";

class RowGame extends Component{
    render(){
        return(
            <tr>
                <td>Round1</td>
                <td >
                    <input name="round1" className = "input"  type="text" />
                </td>
                <td >
                    <input name="round2" className = "input" type="text" />
                </td>
                <td>
                    <input name="round3" className = "input" type="text" />
                </td>
                <td>
                    <input name="round4" className = "input"  type="text" />
                </td>
            </tr>
        )
    }
}


export default RowGame;