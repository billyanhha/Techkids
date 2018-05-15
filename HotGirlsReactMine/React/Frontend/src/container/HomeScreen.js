import React, { Component } from 'react'
import axios from "../axios";
import NavBar from "../components/NavBar";
import BodyImage from "../components/BodyImage";
import BodyImage1 from "../components/BodyImage1";
import BodyImage2 from "../components/BodyImage2";
import BodyImage3 from "../components/BodyImage3"

class HomeScreen extends Component {
    state = {
        images: [],
    }

    componentDidMount() {
        axios
            .get("/api/images")
            .then(data => {
                console.log(data.data);
                this.setState({ images: data.data });
            })
            .catch(err => console.error(err));
    }



    _onSearchField = (e) => {
        this.setState({ searchContent: e });
    }

    render() {
        const displayImage = this.state.images.filter(img => {
            let name = (img.createdBy && img.createdBy.username) ? img.createdBy.username : '';
            let title = img.title;
            let search = this.state.searchContent ? this.state.searchContent :'';
            return (name.toLowerCase().includes(search.toLowerCase()) || title.toLowerCase().includes(search.toLowerCase()))
        });

        const length = Math.max(this.state.searchContent ? Math.floor(displayImage.length / 4) : Math.floor(this.state.images.length / 4));
        let  left = (this.state.searchContent ? (displayImage.length % 4) : (this.state.images.length % 4));
        let arr = [];
        if(left === 1) arr = [1 , 0 , 0 ,0];
        else if(left === 2) arr = [1 , 1 , 0 ,0];
        else if(left === 3) arr = [1 , 1 , 1 ,0];
        else if(left === 0) arr = [0 ,0 , 0 ,0];
        return (
            <div className="App">
                <NavBar onSearchField={this._onSearchField} username={this.props.username} />
                <div className="container">
                    {this.state.searchContent ? (<div><BodyImage allImages={displayImage.slice(0, length + ((arr[0] > 0 ) ? 1: 0)  )} />
                        <BodyImage1 allImages={displayImage.slice(length + ((arr[0] > 0 ) ? 1: 0)  , 2 * length + ((arr[0] > 0 ) ? 1: 0) + ((arr[1] > 0 ) ? 1: 0))} />
                        <BodyImage2 allImages={displayImage.slice( 2 * length + ((arr[0] > 0 ) ? 1: 0) + ((arr[1] > 0 ) ? 1: 0), 3 * length + ((arr[0] > 0 ) ? 1: 0) + ((arr[1] > 0 ) ? 1: 0)+ ((arr[2] > 0 ) ? 1: 0))} />
                        <BodyImage3 allImages={displayImage.slice(3 * length + ((arr[0] > 0 ) ? 1: 0) + ((arr[1] > 0 ) ? 1: 0)+ ((arr[2] > 0 ) ? 1: 0), 4 * length + ((arr[0] > 0 ) ? 1: 0) + ((arr[1] > 0 ) ? 1: 0)+ ((arr[2] > 0 ) ? 1: 0))} /></div>)
                        : (<div><BodyImage id = {this.state.images._id} allImages={this.state.images.slice(0, length + ((arr[0] > 0 ) ? 1: 0)  )} />
                            <BodyImage1 id = {this.state.images._id} allImages={this.state.images.slice(length + ((arr[0] > 0 ) ? 1: 0)  , 2 * length + ((arr[0] > 0 ) ? 1: 0) + ((arr[1] > 0 ) ? 1: 0))} />
                            <BodyImage2 id = {this.state.images._id} allImages={this.state.images.slice( 2 * length + ((arr[0] > 0 ) ? 1: 0) + ((arr[1] > 0 ) ? 1: 0), 3 * length + ((arr[0] > 0 ) ? 1: 0) + ((arr[1] > 0 ) ? 1: 0)+ ((arr[2] > 0 ) ? 1: 0))} />
                            <BodyImage3 id = {this.state.images._id} allImages={this.state.images.slice(3 * length + ((arr[0] > 0 ) ? 1: 0) + ((arr[1] > 0 ) ? 1: 0)+ ((arr[2] > 0 ) ? 1: 0), 4 * length + ((arr[0] > 0 ) ? 1: 0) + ((arr[1] > 0 ) ? 1: 0)+ ((arr[2] > 0 ) ? 1: 0))} /></div>)
                    }
                </div>
            </div>
        );
    }
}

export default HomeScreen