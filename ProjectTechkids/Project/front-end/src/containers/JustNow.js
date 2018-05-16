import React, { Component } from 'react'
// import { Navbar, Nav, NavItem, NavDropdown, MenuItem } from 'react-bootstrap
import NavBar from '../components/NavBar';
import Body from '../components/Body';
import Footer from '../components/Footer';
import NavBarJustNows from '../components/NavBarJustNow';
import BodyJustNow from '../components/BodyJustNow';
class JustNow extends Component {
    render() {

        return (
            <div className="home">
                <NavBarJustNows/>
                <div className ="center">
                    {/* <Suggestion/> */}
                    <BodyJustNow/>
                </div>
                <Footer/>
            </div>
        )
    }
}

export default JustNow;