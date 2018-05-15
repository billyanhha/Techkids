import React, { Component } from 'react'
import NavBar from './NavBar';
import Moment from 'react-moment'
import axios from '../axios'
import { Modal } from 'react-bootstrap'
import { Button, DropdownButton, MenuItem } from 'react-bootstrap'
import { Redirect } from 'react-router-dom'
class GirlImage extends Component {
    state = {
        show: false,
        redirect: false,
    }

    // http://localhost:6969/api/images/5ae862c61d3c7e368c927105
    // /:imageId/comments

    componentDidMount = async () => {
        if (!this.state.redirect) {
            await axios.get(`/api/images/${this.props.id}`)
                .then(data => {
                    this.setState({ images: data.data, like: data.data.like.length, comment: data.data.comment })
                })
                .catch(err => console.log(err))
            await axios.get(`/api/images/${this.props.id}/like`)
                .then(data => {
                    {

                        if (data.data) {
                            document.getElementById('like').style.color = '#ff0000';
                            this.setState({ onLike: true })
                        }
                        else {
                            document.getElementById('like').style.color = 'black';
                            this.setState({ onLike: false });
                        }
                    }
                })
                .catch(err => console.log(err))
            axios.get(`/api/images/${this.props.id}/user`)
                .then(data => {
                    if (!data.data) {
                        document.getElementById('disabled').style.display = 'none';

                    }

                })
                .catch(err => console.log(err))
        }
    }

    handleText = async (e) => {
        this.setState({ newComment: e });
        console.log();

    }

    postLike = async (e) => {
        e.preventDefault();

        axios.post(`/api/images/${this.state.images._id}/like`)
            .then(data => {
                console.log();
                let likeNumber = this.state.like;
                document.getElementById('like').style.color = '#ff0000';
                this.setState({ onLike: true, like: likeNumber + 1 });
            })
            .catch(err => console.log(err))

    }
    unLike = async (e) => {
        e.preventDefault();

        axios.delete(`/api/images/${this.state.images._id}/like`)
            .then(data => {
                document.getElementById('like').style.color = 'black';
                let likeNumber = this.state.like;
                this.setState({ onLike: false, like: likeNumber - 1 });
            }
            )
            .catch(err => console.log(err))
    }
    postComment = async (e) => {

        e.preventDefault();
        await axios.post(`/api/images/${this.state.images._id}/comments`, { content: this.state.newComment })
            .then(data => console.log()
            )
            .catch(err => console.log(err))
        axios.get(`/api/images/${this.state.images._id}/allComment`)
            .then(data => this.setState({ comment: data.data.comment }))
            .catch(err => console.log(err))
        document.getElementById('myInput').value = '';
    }
    focusInput = () => {
        document.getElementById('myInput').focus()
    }

    deleteComment = async (e, _id) => {
        e.preventDefault(),
            await axios.delete(`/api/images/${this.props.id}/comments/${_id}`)
                .then(data => console.log())
                .catch(err => console.log('cc'))
        axios.get(`/api/images/${this.state.images._id}/allComment`)
            .then(data => this.setState({ comment: data.data.comment }))
            .catch(err => console.log(err))
        document.getElementById('myInput').value = '';
    }
    deletePicture = () => {
        axios.delete(`/api/images/${this.props.id}`)
            .then(data => { this.setState({ redirect: true }) })
            .catch(err => console.log(err))
    }
    handleClose = () => {
        this.setState({ show: false });

    }

    handleShow = () => {
        this.setState({ show: true });
    }

    render() {

        if (this.state.redirect) return (<Redirect to='/' />)
        return (
            <div>
                <NavBar username={this.props.username} />
                {this.state.images ? (
                    <div className="container" style={{ marginTop: '1%' }}>
                        <div className="thumbnail detail" style={{ width: "80%", marginLeft: "auto", marginRight: "auto" }}>
                            <div className="ss" >
                                <img src={'http://' + this.state.images.imageUrl} alt={this.state.images.title} className="img-responsive" style={{ width: "100%" }} />
                            </div>
                            <div className="captionImage">
                                <div className="circle">
                                    <img src={this.state.images.createdBy.avatarUrl} alt={this.state.images.title} className="img-responsive" />
                                    <div className="infor">
                                        <h3>{this.state.images.createdBy.username}  </h3>
                                        <Moment format="YYYY/MM/DD HH:mm">
                                            {this.state.images.createdAt}
                                        </Moment>
                                    </div>
                                    <div className="iconTop-right">
                                        <i id="disabled" className="fas fa-times " onClick={this.handleShow}  ></i>
                                        <Modal show={this.state.show} onHide={this.handleClose}>
                                            <Modal.Header closeButton>
                                                <Modal.Title>Are you sure to delete this picture ? </Modal.Title>
                                            </Modal.Header>
                                            <Modal.Footer>
                                                <button type="button" className="btn btn-primary " style={{ float: "left", borderRadius: '4px' }} onClick={this.deletePicture}>Totally</button>
                                            </Modal.Footer>
                                        </Modal>
                                    </div>
                                    {/* Modal */}

                                </div>

                                <br />
                                {/* <span> <span style={{ fontWeight: "bold", fontSize: "18px" }}>  </span>: {this.state.images.title}</span> */}
                                <div style={{ textAlign: "left" }}>{this.state.images.createdBy.username}</div>
                                <span style={{ wordWrap: 'break-word' }}>{this.state.images.title}</span>
                                <hr />
                                <form>
                                    {((this.state.comment)
                                        ? this.state.comment.map((value, index) => (
                                            <p key={index} className="ok">
                                                <span style={{ fontWeight: "bold" }} >{value.createdBy.username} </span>:{" "}
                                                <span style={{ wordWrap: "break-word" }}>{value.content}</span>

                                                <button style={{ backgroundColor: '#ffffff', border: 'none' }} onClick={e => this.deleteComment(e, value._id)} >
                                                    <i className="fas fa-times" style={{ color: '#bababa', fontSize: '10px', marginLeft: '15px' }} ></i>
                                                </button>
                                            </p>
                                        ))
                                        : "")}
                                </form>
                                <form className="formComment">
                                    <h4 style={{ marginTop: '0' }}>
                                        <button style={{ backgroundColor: '#ffffff', border: 'none' }} onClick={(this.state.onLike ? this.state.onLike : '') ? this.unLike : this.postLike}><i id="like" className="far fa-heart " style={{ fontSize: "20px" }}></i></button>
                                        <i onClick={this.focusInput} className="far fa-comment-alt" style={{ marginLeft: '10px', fontSize: "20px" }}></i>
                                    </h4>
                                    <h5 style={{ marginTop: '0' }}>{this.state.like} people love this </h5>
                                </form>
                                <form >
                                    <input type="text" className="form-control" id="myInput" onChange={e => this.handleText(e.target.value)} style={{ width: '100%', float: 'left', marginTop: '10px' }} />
                                    <button className="btn btn-success" style={{ marginTop: '10px', opacity: '0' }} onClick={this.postComment} >Post</button>
                                </form>
                            </div>


                        </div>
                    </div>) : ''}
            </div>
        )
    }
}

export default GirlImage