import React , {Component} from 'react';
import SearchField from './SearchField';
import logo from '../img/logo.jpg'
import ProfilePanel from './ProfilePanel';
import {Link} from 'react-router-dom'
class NavBar extends Component {
    searchFunction = (e) => {
        this.props.onSearchField(e);
    }
    render(){
        return (
            <div className = "container-fluid navbar">
                <div className = "container ">
                    <div className = "row">
                        <div className="col-md-3 col-xs-12  searchField">
                            <SearchField searchFunction = {this.searchFunction} />
                        </div>
                        <div className="col-md-6 col-xs-12 logo ">
                            <Link to = '/' ><img src={logo} alt ="Techkids" className = "imgHeader"/> </Link>
                        </div>
                        <div className="col-md-3  col-xs-12 profile">
                            <ProfilePanel  username ={this.props.username}/>
                        </div>
                    </div>
                </div> 
            </div>
        );
    }
}


export default NavBar