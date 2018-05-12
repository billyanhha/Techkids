import React, { Component } from 'react'
import axios from '../axios'
import GirlImage from '../components/GirlImage';

class DetailScreen extends Component {

    render() {

        return (
            <GirlImage  username={this.props.username} id={this.props.match.params.id}/>
        )
    }
}

export default DetailScreen