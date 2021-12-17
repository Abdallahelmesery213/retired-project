import React from 'react';
import './QuestionsPage.css';
import myQuestions2 from '../../Data/Questions2';
import {Accordion} from 'react-bootstrap';
import myQuestions3 from '../../Data/Questions3';

const QuestionsPage = () => {
    const myQuestData2 = myQuestions2.map(item => {
        return (
            <Accordion key={item.id}>
                <Accordion.Item eventKey={item.id} >
                    <Accordion.Header> <span>{item.title}</span> </Accordion.Header>
                    <Accordion.Body><p className="text-end">{item.text}</p></Accordion.Body>
                </Accordion.Item>
            </Accordion>
        )
    });
    const myQuestData3 = myQuestions3.map(item => {
        return (
            <Accordion key={item.id}>
                <Accordion.Item eventKey={item.id} >
                    <Accordion.Header> <span>{item.title}</span> </Accordion.Header>
                    <Accordion.Body><p className="text-end">{item.text}</p></Accordion.Body>
                </Accordion.Item>
            </Accordion>
        )
    });

    return (
        <div className='questions-page'>
            <div className='container'>
                <div className='row'>
                    <div className='col-md-6'>
                        {myQuestData3}
                    </div>
                    <div className='col-md-6'>
                        <Accordion defaultActiveKey="0">
                                <Accordion.Item eventKey="0">
                                    <Accordion.Header> <span>اكتب السؤال في هذة المنطقة؟</span> </Accordion.Header>
                                    <Accordion.Body>
                                        <p className="text-end">هذا النص هو مثال لنص يمكن أن يستبدل في نفس المساحة، لقد تم توليد هذا النص من مولد النص العربى، حيث يمكنك أن تولد مثل هذا النص أو العديد من النصوص الأخرى إضافة إلى زيادة عدد الحروف التى يولدها التطبيق.
                                        إذا كنت تحتاج إلى عدد أكبر من الفقرات يتيح لك مولد النص العربى زيادة عدد الفقرات كما تريد، النص لن يبدو مقسما ولا يحوي أخطاء لغوية، مولد النص العربى مفيد لمصممي المواقع على وجه الخصوص، حيث يحتاج العميل فى كثير من الأحيان أن يطلع على صورة حقيقية لتصميم الموقع.
                                        </p>
                                    </Accordion.Body>
                                </Accordion.Item>
                            </Accordion>

                            {myQuestData2}

                    </div>
                </div>
            </div>

            <div className='haveQuestions' dir='rtl'>
                <div className='container'>
                    <h4>عندك سؤال ؟</h4>
                    <div className='row mt-5'>
                        <div className='col-md-4 mb-1'>
                            <input type='text' className='form-control' placeholder='الاسم' />
                        </div>
                        <div className='col-md-4 mb-1'>
                            <input type='text' className='form-control' placeholder='رقم الهاتف' />
                        </div>
                        <div className='col-md-4 mb-1'>
                            <input type='email' className='form-control' placeholder='البريد الالكترونى' />
                        </div>
                    </div>
                    <div className=' mt-3 mb-4'>
                        <textarea className='form-control' placeholder='اترك سؤالك هنا' rows='4'></textarea>
                    </div>
                    <div className='row'>
                        <div className='col-md-4'></div>
                        <div className='col-md-4'>
                            <button className='btn'>ارسال</button>
                        </div>
                        <div className='col-md-4'></div>
                    </div>
                    
                </div>
            </div>

        </div>
    )
}
export default QuestionsPage;
