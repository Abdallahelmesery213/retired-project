import React from 'react';
import "./Questions.css";
import QuestLogo from '../../images/questions-logo.png';
import {Accordion} from 'react-bootstrap';
import myQuestions from '../../Data/Questions';

const Questions = ()=>{
    const myQuestData = myQuestions.map(item => {
        return (
            <Accordion key={item.id}>
                <Accordion.Item eventKey={item.id} >
                    <Accordion.Header> <span>{item.title}</span> </Accordion.Header>
                    <Accordion.Body><p>{item.text}</p></Accordion.Body>
                </Accordion.Item>
            </Accordion>
        )
    })
    return (
        <div className="questions ">
            <div className="container">
                <div className="title mt-5">
                    <h2>من نحن</h2>
                </div>
                <div className="row">
                    <div className="col-md-5">
                        <div >
                            <img src={QuestLogo} className="img-fluid" alt="quest-logo" />
                        </div>
                    </div>
                    <div className="col-md-7">
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
                        
                        {myQuestData}
                       
                    </div>
                </div>
            </div>
        </div>
    )
}
export default Questions;