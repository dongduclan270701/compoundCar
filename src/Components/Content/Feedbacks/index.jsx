import React from 'react';
import 'assets/scss/Feedbacks.scss'
import Tick from 'assets/svg/tick-checkbox-svgrepo-com.svg'
import Image1 from 'assets/images/face2.jpg'
import Image2 from 'assets/images/face4.jpg'
import Image3 from 'assets/images/face19.jpg'
import Image4 from 'assets/images/face23.jpg'
const Index = () => {
    return (
        <div className='feedbacks' id='feedbacks'>
            <div className='container feedbacks-content'>
                <div className='title-feedbacks'>
                    <div className='title-feedbacks-above'>Đánh Giá</div>
                    <div className='title-feedbacks-under'>Phản hồi của khách hàng!</div>
                </div>
                <div className='row board-feedbacks'>
                    <div className='col-md-4 board-left-feedback-information'>
                        <div className='board-left-feedback-title-information'>xe ghép bắc giang - bắc giang - hà nội</div>
                        <div className='board-left-feedback-content-information'>
                            <img src={Tick} alt='icon' className='board-left-feedback-icon' />
                            <div className='board-left-feedback-desc-information'>Giá trộn gói, không phụ phí</div>
                        </div>
                        <div className='board-left-feedback-content-information'>
                            <img src={Tick} alt='icon' className='board-left-feedback-icon' />
                            <div className='board-left-feedback-desc-information'>An toàn và đúng giờ</div>
                        </div>
                        <div className='board-left-feedback-content-information'>
                            <img src={Tick} alt='icon' className='board-left-feedback-icon' />
                            <div className='board-left-feedback-desc-information'>Đưa đón tận nơi</div>
                        </div>
                        <div className='board-left-feedback-content-information'>
                            <img src={Tick} alt='icon' className='board-left-feedback-icon' />
                            <div className='board-left-feedback-desc-information'>Xe thoáng mát, rộng rãi, sạch sẽ</div>
                        </div>
                    </div>
                    <div className='col-md-8 board-right-feedback-information'>
                        <div className='board-right-feedback-title-information'>xe ghép bắc giang - bắc giang - hà nội</div>
                        <div className='board-right-feedback-title-under-information'>Chúng tôi luôn nỗ lực mang tới những dịch vụ chất lượng cho khách hàng</div>
                        <div className='board-right-feedback-content'>
                            <div className='board-right-list-feedbacks'>
                                <img src={Image1} className='board-right-image' alt="Image_1" />
                                <div className='board-right-text'>
                                    <div className='board-right-text-above'>Mình thường xuyên đi xe từ Hà Nội đi Bắc Ninh, dịch vụ của nhà xe rất tốt. Xe mới, rộng rãi, đặc biệt là bác tài rất vui tính và nhiệt tình. Tôi vẫn sẽ ủng hộ nhà xe lâu dài.</div>
                                    <div className='board-right-text-under'>Anh X - Khách hàng</div>
                                </div>
                            </div>
                            <div className='board-right-list-feedbacks'>
                                <img src={Image2} className='board-right-image' alt="Image_1" />
                                <div className='board-right-text'>
                                    <div className='board-right-text-above'>Mình thường xuyên đi xe từ Hà Nội đi Bắc Ninh, dịch vụ của nhà xe rất tốt. Xe mới, rộng rãi, đặc biệt là bác tài rất vui tính và nhiệt tình. Tôi vẫn sẽ ủng hộ nhà xe lâu dài.</div>
                                    <div className='board-right-text-under'>Anh X - Khách hàng</div>
                                </div>
                            </div>
                            <div className='board-right-list-feedbacks'>
                                <img src={Image3} className='board-right-image' alt="Image_1" />
                                <div className='board-right-text'>
                                    <div className='board-right-text-above'>Mình thường xuyên đi xe từ Hà Nội đi Bắc Ninh, dịch vụ của nhà xe rất tốt. Xe mới, rộng rãi, đặc biệt là bác tài rất vui tính và nhiệt tình. Tôi vẫn sẽ ủng hộ nhà xe lâu dài.</div>
                                    <div className='board-right-text-under'>Anh X - Khách hàng</div>
                                </div>
                            </div>
                            <div className='board-right-list-feedbacks'>
                                <img src={Image4} className='board-right-image' alt="Image_1" />
                                <div className='board-right-text'>
                                    <div className='board-right-text-above'>Mình thường xuyên đi xe từ Hà Nội đi Bắc Ninh, dịch vụ của nhà xe rất tốt. Xe mới, rộng rãi, đặc biệt là bác tài rất vui tính và nhiệt tình. Tôi vẫn sẽ ủng hộ nhà xe lâu dài.</div>
                                    <div className='board-right-text-under'>Anh X - Khách hàng</div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Index;
