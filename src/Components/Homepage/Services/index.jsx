import React from 'react';
import ImageServices from 'assets/images/booking-car-private-transfer.jpg'
import Car from 'assets/svg/car-svgrepo-com.svg'
import Price from 'assets/svg/price-tag-offer-badge-svgrepo-com.svg'
import Phone from 'assets/svg/phone-svgrepo-com (1).svg'
import Day from 'assets/svg/day-calendar-svgrepo-com.svg'
import Time from 'assets/svg/time1-svgrepo-com.svg'
import Connect from 'assets/svg/arrow-left-right-svgrepo-com.svg'
import 'assets/scss/Services.scss'
const Index = () => {
    return (
        <div className='services' id='services'>
            <div className='row container services-content'>
                <img src={ImageServices} className='col-12 col-md-6 services-image' alt="Logo" />
                <div className='col-12 col-md-6 list-services'>
                    <div className='title-services'>Các dịch vụ của chúng tôi</div>
                    <div className='content-services'>
                        <img src={Car} className='services-icon' alt="Logo" />
                        <div className='services-icon-content'>Tài xế tìm khách nhanh và dễ dàng.</div>
                    </div>
                    <div className='content-services'>
                        <img src={Price} className='services-icon' alt="Logo" />
                        <div className='services-icon-content'>Giá ghép chỉ có 200.000 VNĐ.</div>
                    </div>
                    <div className='content-services'>
                        <img src={Price} className='services-icon' alt="Logo" />
                        <div className='services-icon-content'>Giá bao xe 500.000 VNĐ trở lên tuỳ điểm.</div>
                    </div>
                    <div className='content-services'>
                        <img src={Price} className='services-icon' alt="Logo" />
                        <div className='services-icon-content'>Giá vận chuyển đồ 50.000 VNĐ.</div>
                    </div>
                    <div className='content-services'>
                        <div className='services-icon-content'>Bắc Giang</div>
                        <img src={Connect} className='services-icon' alt="Logo" />
                        <div className='services-icon-content'>Bắc Ninh</div>
                        <img src={Connect} className='services-icon' alt="Logo" />
                        <div className='services-icon-content'>Hà Nội</div>
                    </div>
                    <div className='content-services'>
                        <img src={Phone} className='services-icon' alt="Logo" />
                        <div className='services-icon-content'>0912977981</div>
                    </div>
                    <div className='content-services'>
                        <img src={Day} className='services-icon' alt="Logo" />
                        <div className='services-icon-content'>Các ngày trong tuần.</div>
                    </div>
                    <div className='content-services'>
                        <img src={Time} className='services-icon' alt="Logo" />
                        <div className='services-icon-content'>Bắt đầu từ 5h đến 21h hằng ngày.</div>
                    </div>
                    <div className='content-services'>
                        <img src={Car} className='services-icon' alt="Logo" />
                        <div className='services-icon-content'>Đón và trả tận nơi.</div>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Index;
