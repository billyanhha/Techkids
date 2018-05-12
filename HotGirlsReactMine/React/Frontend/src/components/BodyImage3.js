import React, { Component } from 'react'
import { Link } from 'react-router-dom'
class BodyImage extends Component {
    render() {
        const setImage = this.props.allImages.map(function (value, index) {
            return (
                <div className="thumbnail" key={index}>
                    <div className="imagePosted">
                        <img src={'http://' + value.imageUrl} alt={value.title} className="img-responsive" />
                        <div className="iconTop">
                            <Link to={`/images/` + value._id}>
                            <i className="fa fa-plus" style={{ color: "white" }} ></i>
                            </Link>
                        </div>
                        <div className="iconBottom">
                            <i className="far fa-eye"></i>
                            <i className="far fa-heart" style={{ marginLeft: "95px" }} ></i>
                            <i className="far fa-comment" style={{ marginLeft: "95px" }} ></i>
                            <br/>
                            <span>{value.view} </span>
                            <span style={{ marginLeft: "95px" }} >{value.like.length} </span>
                            <span style={{ marginLeft: "95px" }} >{value.comment.length} </span>
                        </div>
                    </div>
                    <div className="caption">
                        <div className="circle">
                            <img src={value.createdBy.avatarUrl} alt={value.title} className="img-responsive" />
                            <h3>{value.createdBy.username}</h3>
                        </div>
                        <p><i className="fas fa-smile"></i> {value.title}</p>
                    </div>
                </div>
            )
        })
        return (
            <div className="col-md-3 col-ms-4 col-xs-6 col">
                {setImage}
            </div>
        )
    }
}

export default BodyImage;