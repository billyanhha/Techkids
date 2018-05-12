import React, { Component } from 'react'
import NavBar from './NavBar';
import Moment from 'react-moment'
import axios from '../axios'
import { Redirect } from 'react-router-dom'
class GirlImage extends Component {
    state = {

    }
    // /:imageId/comments
    componentDidMount = async () => {
        await axios.get(`/api/images/${this.props.id}`)
            .then(data => this.setState({ images: data.data, like: data.data.like.length, comment: data.data.comment }))
            .catch(err => console.log(err))
        await axios.get(`/api/images/${this.props.id}/like`)
            .then(data => {
                {
                    console.log(data.data);

                    if (data.data) {
                        document.getElementById('like').style.color = '#ff0000';
                        this.setState({ onLike: true })

                    }
                }
            })
            .catch(err => console.log(err))
    }

    handleText = async (e) => {
        await this.setState({ newComment: e });
        console.log(this.state.newComment);

    }

    postLike = async (e) => {
        await e.preventDefault();
        await axios.post(`/api/images/${this.state.images._id}/like`)
            .then(data => {
                console.log(data)
            })
            .catch(err => console.log(err))
        await axios.get(`/api/images/${this.props.id}/like`)
            .then(data => {
                {
                    console.log(data.data);
                    document.getElementById('like').style.color = '#ff0000';
                    let likeNumber = this.state.like;
                    this.setState({ onLike: true, like: likeNumber + 1 });

                }
            })
            .catch(err => console.log(err))
    }
    unLike = async (e) => {
        await e.preventDefault();
        await axios.delete(`/api/images/${this.state.images._id}/like`)
            .then(data => {
                document.getElementById('like').style.color = 'black';
            }
            )
            .catch(err => console.log(err))
        await axios.get(`/api/images/${this.props.id}/like`)
            .then(data => {
                {
                    console.log(data.data);
                    document.getElementById('like').style.color = 'black';
                    let likeNumber = this.state.like;
                    this.setState({ onLike: false, like: likeNumber - 1 })
                }
            })
            .catch(err => console.log(err))

    }
    postComment = async (e) => {

        await e.preventDefault();
        await axios.post(`/api/images/${this.state.images._id}/comments`, { content: this.state.newComment })
            .then(data => console.log(data)
            )
            .catch(err => console.log(err))
        await axios.get(`/api/images/${this.state.images._id}/allComment`)
            .then(data => this.setState({ comment: data.data.comment }))
            .catch(err => console.log(err))
        document.getElementById('myInput').value = '';
    }
    focusInput = () => {
        document.getElementById('myInput').focus()
    }

    deleteComment = async (e, _id) => {
        console.log(_id);
        await e.preventDefault(),
            await axios.delete(`api/images/${this.props.id}/comments/${_id}`)
                .then(data => console.log(data))
                .catch(err => console.log(err))
        axios.get(`/api/images/${this.state.images._id}/allComment`)
            .then(data => this.setState({ comment: data.data.comment }))
            .catch(err => console.log(err))
        document.getElementById('myInput').value = '';
    }

    render() {
        const date = (this.state.images && this.state.images.createdAt) ? this.state.images.createdAt : '';
        return (
            <div>
                <NavBar onSearchField={this._onSearchField} username={this.props.username} />
                {this.state.images ? (
                    <div className="container" style={{ marginTop: '5%' }}>
                        <div className="thumbnail detail" style={{ width: "80%", marginLeft: "auto", marginRight: "auto" }}>
                            <div className="ss" >
                                <img src={'http://' + this.state.images.imageUrl} alt={this.state.images.title} className="img-responsive" style={{ width: "100%" }} />
                            </div>
                            <div className="caption">
                                <div className="circle">
                                    <img src={this.state.images.createdBy.avatarUrl} alt={this.state.images.title} className="img-responsive" />
                                    <div className="infor">
                                        <h3>{this.state.images.createdBy.username}  </h3>
                                        <Moment format="YYYY/MM/DD HH:mm">
                                            {this.state.images.createdAt}
                                        </Moment>
                                    </div>
                                </div>
                                <br />
                                <span> <span style={{ fontWeight: "bold", fontSize: "18px" }}> {this.state.images.createdBy.username} </span>: {this.state.images.title}</span>
                                <hr />
                                <form>
                                    {((this.state.comment)
                                        ? this.state.comment.map((value, index) => (
                                            <p key={index} className="ok">
                                                <span style={{ fontWeight: "bold" }} >{value.createdBy.username}</span>:{" "}
                                                {value.content}

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
                                <form>
                                    <input type="text" className="form-control" id="myInput" onChange={e => this.handleText(e.target.value)} style={{ width: '80%', float: 'left', marginTop: '10px' }} />
                                    <button className="btn btn-success" style={{ marginTop: '10px' }} onClick={this.postComment}>Post</button>
                                </form>
                            </div>


                        </div>
                    </div>) : ''}
            </div>
        )
    }
}

export default GirlImage