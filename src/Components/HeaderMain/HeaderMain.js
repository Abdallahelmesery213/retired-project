import React from 'react';
import './style.css';
import Logo from '../../images/logo.png';
import WhoareLogo from '../../images/who-are-logo.png';
import {Dropdown} from'react-bootstrap';
// import {BrowserRouter as Router,Switch,Route,Link} from "react-router-dom";

function HeaderMain() {
    return (
        <div className="HeaderMain">
            <div className="main-comp1">
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
                                                <p className="d-inline">تسجيل جديد</p>
                                                <i className="fas fa-user-plus ms-3"></i>
                                            </span>
                                        </span>
                                    </li>
                                    <li className="list-inline-item">
                                        <span >
                                            <p className="d-inline">تسجيل الدخول</p>
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
                                        الرئيسية 
                                    </li>
                                    <li className="list-inline-item">من نحن</li>
                                    <li className="list-inline-item">الخدمات</li>
                                    <li className="list-inline-item">
                                        <Dropdown>
                                            <Dropdown.Toggle  id="dropdown-basic">
                                                الجاليرى    
                                            </Dropdown.Toggle>
                                            <Dropdown.Menu>
                                                <Dropdown.Item href="#/action-1">الجاليرى/ معرض الصور</Dropdown.Item>
                                                <Dropdown.Item href="#/action-2">الجاليرى/ معرض الصور</Dropdown.Item>
                                            </Dropdown.Menu>
                                        </Dropdown>
                                    </li>
                                </ul>
                            </div>
                            <div className="col-md-6 text-md-start text-center left">
                                <ul className="list-inline">
                                    <li className="list-inline-item">الأسئلة الشائعة</li>
                                    <li className="list-inline-item">الشروط والاحكام</li>
                                    <li className="list-inline-item">تواصل معنا</li>
                                    <li className="list-inline-item"><i className="fas fa-search"></i></li>
                                </ul>
                            </div>
                        </div>
                    </div>
                </div>
                
                
                <div className="nav3">
                    <div className="overlay"></div>
                    <div className="logo">
                        <img src={Logo} alt="my-logo" className="img-fluid" />
                    </div>
                    <div className="ngran">
                        <h2>جمعية المتقاعدين بمنطقة نجران</h2>
                        <h4>كتابة نص هنا</h4>
                    </div>
                    <div className="dots">
                        <span className="span1"></span>
                        <span className="span2"></span>
                    </div>
                </div>
                <footer>
                    <p>
                        اخر الاخبار / هذا النص يمكن أن يتم تركيبه على أي تصميم دون مشكلة فلن يبدو وكأنه نص منسوخ، غير منظم، غير منسق، أو حتى غير مفهوم. لأنه مازال نصاً بديلاً ومؤقتاً</p>
                </footer>
            </div>
            <div className="main-comp2">
                <div className="container">
                    <div className="title">
                        <h2>من نحن</h2>
                    </div>
                    <div className="about">
                        <div className="row">
                            <div className="col-md-6 col-sm-12 mb-4">
                                <img src={WhoareLogo} className="img-fluid" alt="who-are-logo" />
                            </div>
                            <div className="col-md-6 col-sm-12 text-end">
                                <div className="title2">
                                    <h6> بجمعية المتقاعدين</h6>
                                    <p className="h6">بمنطقة نجران</p>
                                </div>
                                <p>
                                هذا النص هو مثال لنص يمكن أن يستبدل في نفس المساحة، لقد تم توليد هذا النص من مولد النص العربى، حيث يمكنك أن تولد مثل هذا
                                النص أو العديد من النصوص الأخرى إضافة إلى زيادة عدد الحروف التى يولدها التطبيق .
                                </p>
                                <button className="btn">اقرء المزيد</button>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            
           
        </div>
    )
}

export default HeaderMain
