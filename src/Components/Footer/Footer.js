import React from 'react';
import './Footer.css';
import FooterLogo from '../../images/footer-logo.png';
import { Link } from 'react-router-dom';
// import BackToTop from 'react-back-to-top-button';
const Footer = () => {
    let myScrollTop = () => {
        window.scrollTo({
            top: 0,
            behavior: "smooth"
        });
    }
    return (
        <div className='all-footer'>
            <div className='my-footer'>
                <div className='overlay'></div>
                    <div className='btn-top' onClick={myScrollTop} >
                        <i className="fas fa-chevron-circle-up"></i>
                    </div>
                <div className='my-content'>
                    <div className='container'>
                        <div className='my-nav'>
                            <ul className='list-inline' dir='rtl'>
                                <li className='list-inline-item'>
                                    <Link to='/' >الرئيسية</Link>
                                </li>
                                <li className='list-inline-item'>
                                    <Link to='/about'> من نحن</Link>
                                </li>
                                <li className="list-inline-item">
                                    <Link to='/services'>الخدمات</Link>
                                </li>
                                <li className='list-inline-item'>
                                    <Link to='/images'>المعرض</Link>
                                </li>
                                <li className="list-inline-item">
                                    <Link to='/conditionsQuestions'>الأسئلة الشائعة</Link>
                                </li>
                                <li className="list-inline-item">
                                    <Link to='/conditions'>الشروط والاحكام</Link>
                                </li>
                                <li className="list-inline-item">
                                    <Link to='/contactUs'>تواصل معنا</Link>
                                </li>
                            </ul>
                        </div> 
                        <div className='my-logo'>
                            <img src={FooterLogo} className='img-fluid' alt='my-footer-logo' />
                        </div>
                        <div className='my-contact'>
                            <div className='row text-center'>
                                <div className='col-md-4'>
                                    <div>
                                        <i className="fas fa-phone-alt"></i>
                                        <span className='ms-3'>+966 12-345-67-89</span>
                                    </div>
                                </div>
                                <div className='col-md-4'>
                                    <div>
                                        <i className="fas fa-inbox"></i>
                                        <span className='ms-3'>+966 12-345-67-89</span>
                                    </div>
                                </div>
                                <div className='col-md-4'>
                                    <div>
                                        <i className="fas fa-envelope"></i>
                                        <span className='ms-3'>info@mail.com </span>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className='my-social mt-5 mb-2'>
                            <ul className='list-inline'>
                                <li className='list-inline-item'>
                                    <i className="fab fa-twitter"></i>
                                </li>
                                <li className='list-inline-item'>
                                    <i className="fab fa-linkedin"></i>
                                </li>
                                <li className='list-inline-item'>
                                    <i className="fab fa-instagram"></i>
                                </li>
                                <li className='list-inline-item'>
                                    <i className="fab fa-google-plus-g"></i>
                                </li>
                                <li className='list-inline-item'>
                                    <i className="fab fa-facebook-square"></i>
                                </li>
                            </ul>
                        </div>
                    </div>
                </div>
            </div>
            <footer className='footer'>
                <div className='container'>
                    <div className='row'>
                        <div className='col-md-6'>
                            <p>تصميم وتطوير سمارت فيجن</p>
                        </div>
                        <div className='col-md-6'>
                            <p>جميع الحقوق محفوظة لموقع جمعية المتقاعدين بمنطقة نجران</p>
                        </div>
                    </div>
                </div>
            </footer>
        </div>
        
    )
}
export default Footer;