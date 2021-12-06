import React from 'react';
import './OneService.css'
const OneService = (props) => {
    return (
                <React.Fragment>
                    <img src={props.img} className="img-fluid" alt={props.id} />
                    <h6>{props.title}</h6>
                    <p>{props.text}</p>
                    <button className="btn">اقرء المزيد</button>
                </React.Fragment>
    )
}
export default OneService;