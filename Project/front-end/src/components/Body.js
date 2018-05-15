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
                    <span style = {{ fontSize : '30px'}}>Top Legendary</span>
                </div>
                {bodyTop}
                
            </div>
        )
    }
}

export default Body;