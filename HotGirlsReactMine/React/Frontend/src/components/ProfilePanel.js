import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import axios from '../axios'
import {  Modal, Button,  DropdownButton, MenuItem } from 'react-bootstrap'
class ProfilePanel extends Component {
    state = {
        show: false,
    };
    loggedOut = () => {
        axios.delete('/api/auth');
        (window).location.reload(true)
    }
    handleClose = () => {
        this.setState({ show: false });

    }

    handleShow = () => {
        this.setState({ show: true });
    }
    handleChangeValue = async (index, value) => {
        if (index === 0) await this.setState({ image: value });
        else if (index === 1) await this.setState({ title: value ?value : '' });
        else if (index === 2) await  this.setState({ description: value ?value : ''  });

    }
    onSubmit = (e) => {
        if(this.state.title){
        let formData = new FormData();
        formData.append('image', this.state.image);
        formData.append('title', this.state.title);
        formData.append('description', this.state.description);
        console.log(formData);
        
        axios.post('/api/images', 
            formData
        , {
                headers: {
                    'Content-Type': 'multipart/form-data'
                }
            }
        )
            .then(data => (window).location.reload(true))
            .catch(err => console.log(err)
            )
        }
    }
    render() {
        const displayProfile = this.props.username ? (<ul className="pagination">
            <div>
                    <Modal show={this.state.show} onHide={this.handleClose}>
                        <Modal.Header closeButton>
                            <Modal.Title>Upload Image</Modal.Title>
                        </Modal.Header>
                        <Modal.Body >
                            <label>
                                <h4>Image</h4>
                                <input type="file" onChange={e => this.handleChangeValue(0, e.target.files[0])} />
                            </label>
                            <label >
                                <h4>Title</h4>
                                <input type="text" required placeholder ="Must fill in"  className="form-control" style={{ width: "45%" }} onChange={e => this.handleChangeValue(1, e.target.value)} />
                            </label>
                            <label >
                                <h4>Description</h4>
                                <input type="text" placeholder ="I guess u can ignore this" className="form-control" style={{ width: "45%" }} onChange={e => this.handleChangeValue(2, e.target.value)} />
                            </label>

                        </Modal.Body>
                        <Modal.Footer>
                            <button type="button" className="btn btn-primary " style={{ float: "left", borderRadius: '4px' }} onClick={this.onSubmit} >Submit</button>
                        </Modal.Footer>
                    </Modal>
            </div>
            <li><button type="button" className="btn btn-primary camera" onClick={this.handleShow}><i className="glyphicon glyphicon-camera "></i></button></li>

            <li className="page-item"><button className="btn btn-success" href="#">Xin chao ,  {this.props.username}</button></li>
            <li className="page-item"><DropdownButton className="btn btn-default" title=""
                key="1"
                id="1"
            ><MenuItem eventKey="1" onClick={this.loggedOut}>Logout</MenuItem></DropdownButton></li>
        </ul>)

            : (<Link to='/login'>  <button className="btn btn-success btn-block buttonLogin" >Login</button> </Link>)
        return (
            <div>
                {displayProfile}
            </div>
        );
    }
}

export default ProfilePanel;