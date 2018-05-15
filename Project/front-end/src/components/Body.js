import React, { Component } from 'react'

import BodyTop from './BodyTop';
class Body extends Component {
    render() {
        const bodyTop = Array.apply(null ,new Array(10)).map((value , index) =>{
            return (<BodyTop key ={index} id = {index} />)
        })
        return (
            <div className="body-top">
                {/* Top */}
                <div className="topList">
                    <span style = {{color: 'rgb(66, 133, 244) ' , fontSize : '30px'}}>T</span>
                    <span style = {{color: 'rgb(234, 67, 53) ' , fontSize : '30px'}}>o</span>
                    <span style = {{color: 'rgb(243, 156, 18) ' , fontSize : '30px'}}>p </span>
                    <span style = {{color: 'rgb(52, 168, 83)' , fontSize : '30px'}}>l</span>
                    <span style = {{color: 'rgb(66, 133, 244)' , fontSize : '30px'}}>i</span>
                    <span style = {{color: 'rgb(243, 156, 18) ' , fontSize : '30px'}}>s</span>
                    <span style = {{color: 'rgb(52, 168, 83)' , fontSize : '30px'}}>t</span>
                </div>
                {bodyTop}
                
            </div>
        )
    }
}

export default Body;