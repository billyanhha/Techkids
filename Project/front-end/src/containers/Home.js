import React, { Component } from 'react'
// import { Navbar, Nav, NavItem, NavDropdown, MenuItem } from 'react-bootstrap'
import logo from '../image/logo.jpg'
import img_2 from '../image/2.jpg'
import img_3 from '../image/3.jpg'
import Carousel from 'nuka-carousel';
import Header from '../components/NavBar';
import Body from '../components/Body';
class Home extends Component {
    render() {

        return (
            <div className="home">
                <Header/>
                <div className ="center">
                    <Body/>
                </div>
            </div>
        )
    }
}

export default Home;