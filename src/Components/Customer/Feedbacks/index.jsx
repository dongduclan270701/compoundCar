import React from 'react';
import 'assets/scss/Feedbacks.scss'
import Tick from 'assets/svg/tick-checkbox-svgrepo-com.svg'
import Star from 'assets/svg/star.svg'
import YellowStar from 'assets/svg/yellowStar.svg'
const Index = (props) => {
    const { feedbacks } = props
    const generateStars = (starCount) => {
        return Array.from({ length: starCount }, (_, index) => (
            <img key={index} src={YellowStar} alt='' width={20} style={{}} />
        ));
    };

    return (
        <div className='feedbacks' id='feedbacks'>
            <div className='container feedbacks-content'>
                <div className='title-feedbacks'>
                    <div className='title-feedbacks-above'>Đánh Giá</div>
                    <div className='title-feedbacks-under'>Phản hồi của khách hàng!</div>
                </div>
                <div className='row board-feedbacks'>
                    <div className='col-12 col-md-4 board-left-feedback-information'>
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
                    <div className='col-12 col-md-8 board-right-feedback-information'>
                        <div className='board-right-feedback-title-information'>xe ghép bắc giang - bắc giang - hà nội</div>
                        <div className='board-right-feedback-title-under-information'>Chúng tôi luôn nỗ lực mang tới những dịch vụ chất lượng cho khách hàng</div>
                        <div className='board-right-feedback-content'>
                            {feedbacks.map((item, index) => {
                                return <><div className='board-right-list-feedbacks' key={index}>
                                    <img src={item.image} className='board-right-image' alt={item.image} />
                                    <div className='board-right-text'>
                                        <div className='board-right-text-under'>{item.username}</div>
                                        <div className='board-right-text-above'>Loại hình: {item.type}</div>
                                        <div className='board-right-text-above'>{generateStars(item.star)}</div>
                                        <div className='board-right-text-above fb-pc'>{item.text}</div>
                                    </div>
                                </div>
                                    <div className='board-right-text-above fb-mb'>{item.text}</div>
                                </>
                            })}
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Index;
