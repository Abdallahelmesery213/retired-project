import React from 'react';
import './Footer.css';
import FooterLogo from '../../images/footer-logo.png';
import BackToTop from 'react-back-to-top-button';
const Footer = () => {
    
    return (
        <div className='all-footer'>
            <div className='my-footer'>
                <div className='overlay'></div>
                    <BackToTop
                        showOnScrollUp
                        speed={1500}
                        easing="easeInOutQuint"
                        >
                        <div className='btn-top' >
                            <i className="fas fa-chevron-circle-up"></i>
                        </div>
                    </BackToTop>
                
                <div className='my-content'>
                    <div className='container'>
                        <div className='my-nav'>
                            <ul className='list-inline' dir='rtl'>
                                <li className='list-inline-item'>الرئيسية </li>
                                <li className='list-inline-item'>من نحن </li>
                                <li className='list-inline-item'>الخدمات </li>
                                <li className='list-inline-item'>المعرض </li>
                                <li className='list-inline-item'>الأسئلة الشائعة </li>
                                <li className='list-inline-item'>الشروط والاحكام </li>
                                <li className='list-inline-item'>تواصل معنا </li>
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