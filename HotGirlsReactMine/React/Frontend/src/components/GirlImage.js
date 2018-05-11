import React, { Component } from 'react'
import NavBar from './NavBar';


class GirlImage extends Component {
    render() {

        console.log(this.props.images);
        const cc = ((this.props.images && this.props.images.comment)
            ? this.props.images.comment.map((value, index) => (
                <p key={index}>
                    <span style={{ fontWeight: "bold" }} >{value.createdBy.username}</span>:{" "}
                    {value.content}
                </p>
            ))
            : "")
        return (
            <div>
                <NavBar onSearchField={this._onSearchField} username={this.props.username} />
                {this.props.images ? (
                    <div className="container" >
                        <div className="thumbnail" style={{ width: "50%", marginLeft: "auto", marginRight: "auto" }}>
                            <div className="imagePosted">
                                <img src={'http://' + this.props.images.imageUrl} alt={this.props.images.title} className="img-responsive" style={{ width: "100%" }} />
                            </div>
                            <div className="caption">
                                <div className="circle">
                                    <img src={'http://' + this.props.images.imageUrl} alt={this.props.images.title} className="img-responsive" />
                                    <h3>{this.props.images.description}</h3>
                                </div>
                                <p>{this.props.images.title}</p>
                            </div>
                            <div className="comment">
                                {cc}
                            </div>
                        </div></div>) : ''}
            </div>
        )
    }
}

export default GirlImage