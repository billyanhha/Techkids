import React, { Component } from 'react'
import logo from '../image/logo.jpg'
import { Navbar, NavItem, NavDropdown, MenuItem, Nav } from 'react-bootstrap'
import img_1 from '../image/2.jpg'
class Header extends Component {
    state = {
        slideIndex: 0
    };
    render() {

        return (
            <div className="center">
                <div className="container-fuild ">
                    <div className="center">
                        <div className="row">
                            <div className="col-md-12 col-xs-12 logo">
                                <img src={logo} alt="Techkids" className="imgHeader img-responsive" />
                            </div>
                            {/* <div className="col-md-6 col-xs-12 search">
                                <div className="input-group">
                                    <input style={{ borderRadius: '4px', width: '100%' }} className="form-control" placeholder="Search" name="srch-term" id="srch-term" type="text" />

                                </div>
                        </div> */}
                        </div>

                </div>
                <div className=" myNav">
                    <Navbar collapseOnSelect >
                            <Navbar.Header>
                                <Navbar.Brand>
                                    <a href="#brand" style = {{color: 'rgb(66, 133, 244)' }}><i className="fas fa-home"></i></a>
                                </Navbar.Brand>
                                <Navbar.Toggle />
                            </Navbar.Header>
                            <Navbar.Collapse>

                                <Nav>
                                    <NavItem eventKey={1} href="#">
                                        Top Legend <i className="fas fa-chess-king"></i>
                                    </NavItem>
                                    <NavItem eventKey={2} href="#" >
                                        Phim vừa Up <i className="far fa-clock"></i>
                                    </NavItem>
                                    <NavItem eventKey={3} href="#">
                                        Tải list <i className="fas fa-upload"></i>
                                    </NavItem>
                                    <NavItem eventKey={4} href="#">
                                        Về chúng tôi <i className="fas fa-pencil-alt"></i>
                                    </NavItem>
                                </Nav>

                            </Navbar.Collapse>

                    </Navbar>;
                        <div className="imgSlide">
                            <img  src ={img_1}/>
                        </div>
                </div>
                </div>
            </div >
        )
    }
}

export default Header;