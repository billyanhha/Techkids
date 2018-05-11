import React, { Component } from 'react'
import axios from '../axios'
import GirlImage from '../components/GirlImage';

class DetailScreen extends Component {
    state = {
       
    }
    componentDidMount() {
        axios
            .get(`/api/images/${this.props.match.params.id}`)
            .then(data => {
                this.setState({ images: data.data })
            })
            .catch(err => console.error(err));
    }

    render() {
        
        return (
            <GirlImage images = {this.state.images}/>
        )
    }
}

export default DetailScreen