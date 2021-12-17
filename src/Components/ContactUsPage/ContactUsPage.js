import React from 'react';
import './ContactUsPage.css';
import LocationLogo from '../../images/location.png'

const ContactUsPage = () => {
    return (
        <div className='ContactUsPage' dir='rtl'>
            <div className='container'>
                <div className='row'>
                    <div className='col-md-7'>
                        <div >
                            <input type='text' placeholder='الاسم' className='form-control' />
                        </div>
                        <div className='mt-3 mb-3'>
                            <input type='email' placeholder='البريد الالكترونى ' className='form-control' />
                        </div>
                        <textarea className='form-control' rows='5' placeholder='اترك رسالة'></textarea>
                        <button className='btn btn-success mt-3 mb-5'>ارسال</button>
                    </div>
                    <div className='col-md-4'>
                        <div className='address'>
                            <span>
                                <i className="fas fa-map-marker-alt ms-3"></i>
                                <span className='me-3'>العنوان</span>
                            </span>
                            <p className='me-5'>المملكة العربية السعوديه - نجران - شارع العروبة</p>
                        </div>
                        <div className='address mt-5 mb-5'>
                            <span>
                                <i className="fas fa-phone-alt ms-3"></i>
                                <span className='me-3'>الهاتف</span>
                            </span>
                            <p className='me-5'>0125469875421 - 2546987452136</p>
                        </div>
                        <div className='address'>
                            <span>
                                <i className="fas fa-envelope ms-3"></i>
                                <span className='me-3'>البريد الالكترونى </span>
                            </span>
                            <p className='me-5'>Company Mail @ gmail.com</p>
                        </div>
                    </div>
                </div>
                <div className='location'>
                    <img src={LocationLogo} className='img-fluid' alt='location' />
                </div>
            </div>
            
        </div>
    )
}
export default ContactUsPage;
