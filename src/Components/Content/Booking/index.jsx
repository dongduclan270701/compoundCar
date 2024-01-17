import React from 'react';
import 'assets/scss/Booking.scss'
import Logo from 'assets/svg/car-white-svgrepo-com.svg'
const Index = () => {
    return (
        <div className='booking' id='booking'>
            <div className='container booking-content'>
                <div className='title-booking'>
                    <img src={Logo} className='booking-icon' alt="Logo" />
                    <div className='title-booking-content'>
                        <div className='title-booking-one'>Đặt xe ghép : bắc giang - bắc ninh - hà nội</div>
                        <div className='title-booking-two'>ĐẶT VÉ NGAY! ĐỂ GIỮ CHỖ VÀ TIẾT KIỆM CHI PHÍ</div>
                        <div className='title-booking-three'>Sẵn sàng phục vụ chuyến đi của bạn trong tuyến Bắc Giang, Bắc Ninh, Hà Nội, nhanh gọn và an toàn mùa dịch</div>
                    </div>
                </div>
                <div className='row form-booking'>
                    <input type='text' name='username' className='col-sm-3 form-text' placeholder='Họ và Tên' />
                    <input type='text' name='phoneNumber' className='col-sm-3 form-text' placeholder='Số điện thoại' />
                    <select name="location-one" className='col-sm-3 form-text'>
                        <option value="">Chọn nơi đón</option>
                        <option value="volvo">Bắc Giang</option>
                        <option value="saab">Bắc Ninh</option>
                        <option value="mercedes">Hà Nội</option>
                    </select>
                    <select name="location-two" className='col-sm-3 form-text'>
                        <option value="">Chọn nơi đến</option>
                        <option value="volvo">Bắc Giang</option>
                        <option value="saab">Bắc Ninh</option>
                        <option value="mercedes">Hà Nội</option>
                    </select>
                </div>
                <button type='submit' className='button-form-booking'>Đặt xe ngay</button>
            </div>
        </div>
    );
}

export default Index;
