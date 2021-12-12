import React from 'react';
import './NgranArea.css';
import WhoareLogo from '../../images/who-are-logo.png';


const NgranArea = () => {
    return (
        
            <div className="ngranArea">
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
                                    هذا النص هو مثال لنص يمكن أن يستبدل في نفس المساحة، لقد تم توليد هذا النص من مولد النص العربى، حيث يمكنك أن تولد مثل هذا النص أو العديد من النصوص الأخرى إضافة إلى زيادة عدد الحروف التى يولدها التطبيق.
                                    إذا كنت تحتاج إلى عدد أكبر من الفقرات يتيح لك مولد النص العربى زيادة عدد الفقرات كما تريد، النص لن يبدو مقسما ولا يحوي أخطاء لغوية، مولد النص العربى مفيد لمصممي المواقع على وجه الخصوص، حيث يحتاج العميل فى كثير من الأحيان أن يطلع على صورة حقيقية لتصميم الموقع
                                </p>
                                
                            </div>
                        </div>
                        <div className='row'>
                            <p className='text-end p2'>
                                ومن هنا وجب على المصمم أن يضع نصوصا مؤقتة على التصميم ليظهر للعميل الشكل كاملاً،دور مولد النص العربى أن يوفر على المصمم عناء البحث عن نص بديل لا علاقة له بالموضوع الذى يتحدث عنه التصميم فيظهر بشكل لا يليق. <br />
                                هذا النص يمكن أن يتم تركيبه على أي تصميم دون مشكلة فلن يبدو وكأنه نص منسوخ، غير منظم، غير منسق، أو حتى غير مفهوم. لأنه مازال نصاً بديلاً ومؤقتاً.

                            </p>
                        </div>
                    </div>
                </div>
            </div>
        
    )
}
export default NgranArea;
