import React from 'react';
import './Mail.css';
import { Container , Row , Col } from 'react-bootstrap';
const Mail = ()=> {
    return (
        <div>
            <Container>
                <Row>
                    <Col className='text-center'>
                        <div className="title mt-5">
                            <h2>النشرة البريدية</h2>
                        </div>
                        <div className='my-input mb-5'>
                            <input type='email' className='form-control' placeholder='اكتب بريدك الالكترونى ليصلك كل جديد' />
                            <button className='btn btn-success'>ارسال</button>
                            
                        </div>
                    </Col>
                </Row>
                
            </Container>
        </div>
    )
}
export default Mail;