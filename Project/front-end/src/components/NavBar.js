import React, { Component } from 'react'
import logo from '../image/logo3.png'
import { Navbar, NavItem, Nav, Carousel  } from 'react-bootstrap'
import img_11 from '../image/2.jpg'
import img_12 from '../image/1.jpg'
import img_13 from '../image/3.jpg'
import img_21 from '../image/4.jpg'
import img_22 from '../image/5.jpg'
import img_23 from '../image/6.jpg'
import img_31 from '../image/7.jpg'
import img_32 from '../image/8.jpg'
import img_33 from '../image/9.jpg'
// import img_13 from '../image/3.jpg'
class Header extends Component {
    state = {
        slideIndex: 0
    };
    render() {

        return (
            <div className="container-fuild header ">
                <div className="center-img">
                    <div className="row">
                        <div className="center">
                            <div className="col-md-12 col-xs-12 logo">
                                <img src={logo} alt="Techkids" className="imgHeader img-responsive" />
                            </div>
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
                            {/* <Navbar.Brand>
                                {/* <img src={logo} alt="Techkids" className="imgHeader img-responsive" /> */}
                            {/* </Navbar.Brand> */}
                            <Navbar.Toggle />
                        </Navbar.Header>
                        <Navbar.Collapse>
                        <input type="text" className="form-control inputNav"   placeholder="Search" />
                            <Nav>
                                
                                <NavItem eventKey={1} >

                                    <i className="fas fa-home" style={{ fontSize: '20px' }}></i>
                                </NavItem>
                                <NavItem eventKey={2} >
                                    Phim vừa Up <i className="far fa-clock"></i>
                                </NavItem>
                                <NavItem eventKey={3} >
                                    Tải list <i className="fas fa-upload"></i>
                                </NavItem>
                                <NavItem eventKey={4} >
                                    Về chúng tôi <i className="fas fa-pencil-alt"></i>
                                </NavItem>
                            </Nav>

                        </Navbar.Collapse>

                    </Navbar>;
                        <div className="imgSlide">
                        <Carousel>
                            <Carousel.Item>
                                <div className="row">
                                    <div className="col col-md-4 col-sm-4 col-xs-4 nopadding">
                                        <img src={img_11} />
                                    </div>
                                    <div className="col col-md-4 col-sm-4 col-xs-4 nopadding">
                                        <img src={img_12} />
                                    </div>
                                    <div className="col col-md-4 col-sm-4 col-xs-4 nopadding">
                                        <img src={img_13} />
                                    </div>
                                </div>
                            </Carousel.Item>
                            <Carousel.Item>
                                <div className="row">
                                    <div className="col col-md-4 col-sm-4 col-xs-4 nopadding">
                                        <img src={img_21} />
                                    </div>
                                    <div className="col col-md-4 col-sm-4 col-xs-4 nopadding">
                                        <img src={img_22} />
                                    </div>
                                    <div className="col col-md-4 col-sm-4 col-xs-4 nopadding">
                                        <img src={img_23} />
                                    </div>
                                </div>
                            </Carousel.Item>
                            <Carousel.Item>
                                <div className="row">
                                    <div className="col col-md-4 col-sm-4 col-xs-4 nopadding">
                                        <img src={img_31} />
                                    </div>
                                    <div className="col col-md-4 col-sm-4 col-xs-4 nopadding">
                                        <img src={img_32} />
                                    </div>
                                    <div className="col col-md-4 col-sm-4 col-xs-4 nopadding">
                                        <img src={img_33} />
                                    </div>
                                </div>
                            </Carousel.Item>
                        </Carousel>
                    </div>
                </div>

            </div>

        )
    }
}

export default Header;