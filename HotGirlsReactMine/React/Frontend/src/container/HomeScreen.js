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
                this.setState({ images: data.data })
            })
            .catch(err => console.error(err));
    }
    
      
    
      _onSearchField = (e) => {
        this.setState({ searchContent: e });
      }
    
    render() {
        const displayImage = this.state.images.filter(img => img.description.includes(this.state.searchContent) || img.title.includes(this.state.searchContent))
        const length = Math.max(this.state.searchContent ? displayImage.length / 4 : this.state.images.length / 4, 1);
        return (
            <div className="App">
                <NavBar onSearchField={this._onSearchField}  username={this.props.username} />
                <div className="container">
                    {this.state.searchContent ? (<div><BodyImage allImages={displayImage.slice(0, length)} />
                        <BodyImage1 allImages={displayImage.slice(length, 2 * length)} />
                        <BodyImage2 allImages={displayImage.slice(2 * length, 3 * length)} />
                        <BodyImage3 allImages={displayImage.slice(3 * length, 4 * length)} /></div>)
                        : (<div><BodyImage allImages={this.state.images.slice(0, length)} id = {this.props.id} />
                            <BodyImage1 allImages={this.state.images.slice(length, 2 * length)} />
                            <BodyImage2 allImages={this.state.images.slice(2 * length, 3 * length)} />
                            <BodyImage3 allImages={this.state.images.slice(3 * length, 4 * length)} /></div>)
                    }
                </div>
            </div>
        );
    }
}

export default HomeScreen