import React from 'react';
import './OneService.css';
import { Link } from 'react-router-dom';
const OneService = (props) => {
    return (
                <div className='one-serve'>
                    <img src={props.img} className="img-fluid" alt={props.id} />
                    <h6>{props.title}</h6>
                    <p>{props.text}</p>
                    <button className="btn">
                        <Link to='/serviceName'>اقرء المزيد</Link>
                    </button>
                </div>
    )
}
export default OneService;