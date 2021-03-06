import React from 'react';
import './NavOneTwo.css';
import {Dropdown} from'react-bootstrap';
import { NavLink} from "react-router-dom";

const NavOneTwo = () => {
    return (
        <React.Fragment>
            <div className="nav1">
                    <div className="container pt-2">
                        <div className="row">
                            <div className="col-md-6 left text-md-start text-center">
                                <ul className="list-inline">
                                        <li className="list-inline-item">
                                            <span className="bckgrond">
                                                <i className="fab fa-instagram"></i>
                                            </span>
                                        </li>
                                        <li className="list-inline-item">
                                            <span className="bckgrond">
                                                <i className="fab fa-twitter"></i>
                                            </span>
                                        </li>
                                        <li className="list-inline-item">
                                            <span className="bckgrond">
                                                <i className="fab fa-whatsapp"></i>
                                            </span>
                                        </li>
                                        <li className="list-inline-item">
                                        <span className="bckgrond">
                                            <i className="fas fa-phone-alt"></i>
                                        </span>
                                        </li>
                                        <li className="list-inline-item">
                                            <p className="phone">+996-123 456 789</p>
                                        </li> 
                                    </ul>
                            </div>
                            <div className="col-md-6 text-md-end text-center right">
                                <ul className="list-inline">
                                    <li className="list-inline-item">
                                        <span className="list">
                                            <span className="bordr">
                                                <p className="d-inline">?????????? ????????</p>
                                                <i className="fas fa-user-plus ms-3"></i>
                                            </span>
                                        </span>
                                    </li>
                                    <li className="list-inline-item">
                                        <span >
                                            <p className="d-inline">?????????? ????????????</p>
                                            <i className="far fa-user ms-3"></i>
                                        </span>
                                    </li>
                                    
                                </ul>
                            </div>
                        </div>
                    </div>
                </div>

                <div className="nav2" dir="rtl">
                    <div className="container">
                        <div className="row">
                            <div className="col-md-6  text-md-end text-center right" >
                                <ul className="list-inline ">
                                    <li className="list-inline-item">
                                        <NavLink to='/' >????????????????</NavLink>
                                    </li>
                                    <li className="list-inline-item">
                                        <NavLink to='/about'> ???? ??????</NavLink>
                                    </li>
                                    <li className="list-inline-item">
                                        <NavLink to='/services'>??????????????</NavLink>
                                    </li>
                                    <li className="list-inline-item">
                                        <Dropdown>
                                            <Dropdown.Toggle  id="dropdown-basic">
                                                ????????????????    
                                            </Dropdown.Toggle>
                                            <Dropdown.Menu>
                                                <Dropdown.Item >
                                                    <NavLink to="/images">????????????????/ ???????? ??????????</NavLink>
                                                </Dropdown.Item>
                                                <Dropdown.Item >
                                                    <NavLink to="/videos">????????????????/ ???????? ??????????????</NavLink>
                                                </Dropdown.Item>
                                            </Dropdown.Menu>
                                        </Dropdown>
                                    </li>
                                </ul>
                            </div>
                            <div className="col-md-6 text-md-start text-center left">
                                <ul className="list-inline">
                                    <li className="list-inline-item">
                                        <NavLink to='/conditionsQuestions'>?????????????? ??????????????</NavLink>
                                    </li>
                                    <li className="list-inline-item">
                                        <NavLink to='/conditions'>???????????? ????????????????</NavLink>
                                    </li>
                                    <li className="list-inline-item">
                                        <NavLink to='/contactUs'>?????????? ????????</NavLink>
                                    </li>
                                    <li className="list-inline-item"><i className="fas fa-search"></i></li>
                                </ul>
                            </div>
                        </div>
                    </div>
                </div>
        </React.Fragment>
    )
}
export default NavOneTwo;