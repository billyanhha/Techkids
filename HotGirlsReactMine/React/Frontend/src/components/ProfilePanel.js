import React, { Component } from 'react';
import {Link} from 'react-router-dom'
class ProfilePanel extends Component {
    render() {
        const displayProfile = this.props.username ? (<ul className="pagination">
            <li className="page-item "><button className="btn btn-primary camera" href="#"><i className="glyphicon glyphicon-camera "></i></button></li>

            <li className="page-item"><button className="btn btn-success" href="#">Xin chao ,  {this.props.username}</button></li>
            <li className="page-item"><button className="btn btn-default" href="#">&#9776;</button></li>
        </ul>)
            : (<Link to='/login'>  <button className="btn btn-success btn-block buttonLogin" >Login</button> </Link>)
        return (
            <div>
            { displayProfile }
            </div>
        );
    }
}

export default ProfilePanel;