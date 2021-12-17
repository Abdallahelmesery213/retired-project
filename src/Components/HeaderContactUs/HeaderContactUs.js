import React from 'react';
import '../HeaderAbout/HeaderAbout.css';
import NavOneTwo from '../NavOneTwo/NavOneTwo';
import Logo from '../../images/logo.png';

const HeaderContactUs = () => {
    return (
        <div className='headerAbout'>
            <NavOneTwo />
            <div className='nav3'>
                <div className="overlay"></div>
                <div className="logo">
                    <img src={Logo} alt="my-logo" className="img-fluid" />
                </div>
                <div className='titleAbout'>
                    <h3>تواصل معنا</h3>
                </div>
            </div>
        </div>
    )
}
export default HeaderContactUs;
