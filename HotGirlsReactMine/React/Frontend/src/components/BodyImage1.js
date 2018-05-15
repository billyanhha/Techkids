import React, { Component } from 'react'
import { Link } from 'react-router-dom'
class BodyImage1 extends Component {
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
                            <div className="col-md-4 col"><i className="far fa-eye"></i><p>{value.view} </p></div>
                            <div className="col-md-4 col"><i className="far fa-heart"  ></i><p >{value.like.length} </p></div>
                            <div className="col-md-4 col"><i className="far fa-comment" ></i><p >{value.comment.length} </p></div>
                            <br />
                            {/* <span>{value.view} </span>
                            <span style={{ marginLeft: "93px" }} >{value.like.length} </span>
                            <span style={{ marginLeft: "93px" }} >{value.comment.length} </span> */}
                        </div>
                    </div>
                    <div className="caption">
                        <div className="circle">
                            <img src={(value.createdBy && value.createdBy.avatarUrl) ? value.createdBy.avatarUrl : ''} alt={value.title} className="img-responsive" />
                            <h3>{(value.createdBy && value.createdBy.username) ? value.createdBy.username : ''}</h3>
                        </div>
                        <div style={{ textAlign: "left" }}><span style={{ wordWrap: 'break-word' }}>{value.title}</span></div>

                    </div>
                </div >
            )
        })
        return (
            <div className="col-md-3 col-ms-4 col-xs-6 col" >
                {setImage}
            </div>
        )
    }
}

export default BodyImage1;