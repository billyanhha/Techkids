import React, { Component } from 'react'
import BodyTop from './BodyTop';
class BodyJustNow extends Component {
    render() {
        const bodyTop = Array.apply(null, new Array(10)).map((value, index) => {
            return (<BodyTop key={index} id={index} />)
        })
        return (
            <div className="body-top">
                {/* Top */}
                <div className="topList">
                    <center><span style={{ fontSize: '30px' }}>Top Phim Mới Up</span></center>
                </div>
                {bodyTop}
                <ul className="pagination">
                    <li><a href="#" style={{ border: '1px solid #bababa' }}>1</a></li>
                    <li><a href="#" style={{ border: '1px solid #bababa' }}>2</a></li>
                    <li><a href="#" style={{ border: '1px solid #bababa' }}>3</a></li>
                    <li><a href="#" style={{ border: '1px solid #bababa' }}>4</a></li>
                    <li><a href="#" style={{ border: '1px solid #bababa' }}>5</a></li>
                </ul>
            </div>
        )
    }
}

export default BodyJustNow;