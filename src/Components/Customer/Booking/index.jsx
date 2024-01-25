import React, { useState } from 'react';
import 'assets/scss/Booking.scss'
import Logo from 'assets/svg/car-white-svgrepo-com.svg'
import Close from 'assets/svg/close-square-svgrepo-com.svg'
import { bookingCar, fetchCreateNotice } from 'Apis'
import Swal from 'sweetalert2'
const Index = () => {
    const [isBooking, setIsBooking] = useState(true)
    const [booking, setBooking] = useState({
        pick_up_location: "",
        destination: "",
        note: '',
        username: "",
        phoneNumber: ""
    })
    const date = new Date();
    const minutes = date.getMinutes().toString().padStart(2, '0')
    const hours = date.getHours().toString().padStart(2, '0')
    const time = `${hours}:${minutes}`
    const day = date.getDate().toString().padStart(2, '0')
    const month = (date.getMonth() + 1).toString().padStart(2, '0')
    const year = date.getFullYear()
    const today = `${year}-${month}-${day}`

    const handleChangeBooking = (e) => {
        const { name, value } = e.target
        setBooking({ ...booking, [name]: value.trimLeft() })
    }
    const showAlert = (title, text) => {
        Swal.fire({
            title,
            text,
            icon: 'warning',
            confirmButtonText: 'OK!'
        });
    };
    const handleSubmitBooking = () => {
        if (booking.username.trim() === "" || booking.username === 0) { showAlert('Chờ đã!', 'Yêu cầu nhập đầy đủ Họ và Tên !') }
        else if (booking.pick_up_location.trim() === "" || booking.pick_up_location === 0) { showAlert('Chờ đã!', 'Yêu cầu nhập rõ vị trí mà tài xế có thể đón bạn!') }
        else if (booking.note.trim() === "" || booking.note === 0) { showAlert('Chờ đã!', 'Yêu cầu nhập rõ ngày giờ cụ thể để tài xế nắm rõ lịch trình của bạn!') }
        else if (booking.destination.trim() === "" || booking.destination === 0) { showAlert('Chờ đã!', 'Yêu cầu nhập rõ vị trí mà bạn muốn đến!') }
        else if (booking.phoneNumber.trim() === "" || booking.phoneNumber === 0) { showAlert('Chờ đã!', 'Yêu cầu nhập số điện thoại!') }
        else {
            bookingCar(booking)
                .then(result => {
                    const newData = {
                        username: booking.username,
                        phoneNumber: booking.phoneNumber,
                        content: `${booking.username} - ${booking.phoneNumber} `,
                        status: 'Chờ xác nhận',
                        createDate: {
                            time: time,
                            date: today
                        }
                    }
                    fetchCreateNotice(newData)
                        .then(resultNotice => {
                            return 0
                        })
                        .catch(error => {
                            console.log(error)
                        })
                    setBooking({
                        pick_up_location: "",
                        destination: "",
                        note: '',
                        username: "",
                        phoneNumber: ""
                    })
                    Swal.fire({
                        title: "Đặt xe thành công",
                        text: "Bạn đã đặt xe thành công, hãy chờ tài xế liên hệ lại cho bạn để xác nhận!",
                        icon: 'success',
                        confirmButtonText: 'OK!'
                    });
                    setIsBooking(false)
                })
                .catch(error => {
                    console.log(error)
                })
        }
    }
    return (
        <>
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
                        <div className='col-md-4'>
                            <input type='text' onChange={(e) => { handleChangeBooking(e) }} value={booking.username} name='username' style={{ marginBottom: 15 }} className='form-text' placeholder='Họ và Tên' required />
                        </div>
                        <div className='col-md-4'>
                            <input type='text' onChange={(e) => { handleChangeBooking(e) }} value={booking.pick_up_location} name='pick_up_location' style={{ marginBottom: 15 }} className='form-text' placeholder='Hãy nếu rõ vị trí mà tài xế có thể đón bạn' required />
                        </div>
                        <div className='col-md-4'>
                            <input type='text' onChange={(e) => { handleChangeBooking(e) }} value={booking.destination} name='destination' style={{ marginBottom: 15 }} className='form-text' placeholder='Hãy nếu rõ vị trí mà bạn muốn đến' required />
                        </div>
                        <div className='col-md-4'>
                            <input type='text' onChange={(e) => { handleChangeBooking(e) }} value={booking.phoneNumber} name='phoneNumber' style={{ marginBottom: 15 }} className='form-text' placeholder='Số điện thoại' required />
                        </div>
                        <div className='col-md-8'>
                            <input type='text' onChange={(e) => { handleChangeBooking(e) }} value={booking.note} name='note' style={{ marginBottom: 15 }} className='form-text' placeholder='Hãy nếu rõ ngày giờ cụ thể để tài xế nắm rõ lịch trình của bạn' required />
                        </div>
                    </div>

                    <button type='submit' onClick={handleSubmitBooking} className='button-form-booking'>Đặt xe ngay</button>
                </div>
            </div>
            {isBooking ? <div className='toggle-login'>
                <div className='form-login'>
                    <div className='head-form-login'>
                        <div className='title-head-form-login'>XE ghép bắc giang - bắc ninh - hà nội</div>
                        <img onClick={() => setIsBooking(!isBooking)} src={Close} className='icon-head-form-login' alt='icon-close' />
                    </div>
                    <div className='content-form-login'>
                        <div className='text-form-login'>
                            <label style={{ paddingLeft: '10px' }}>Họ và Tên:</label>
                            <input type='text' onChange={(e) => { handleChangeBooking(e) }} value={booking.username} name='username' className='input-form' placeholder='Họ và Tên' required />
                        </div>
                        <div className='text-form-login'>
                            <label style={{ paddingLeft: '10px' }}>Số điện thoại:</label>
                            <input type='text' onChange={(e) => { handleChangeBooking(e) }} value={booking.phoneNumber} name='phoneNumber' className='input-form' placeholder='Số điện thoại' required />
                        </div>
                        <div className='text-form-login'>
                            <label style={{ paddingLeft: '10px' }}>Địa điểm đón:</label>
                            <input type='text' onChange={(e) => { handleChangeBooking(e) }} value={booking.pick_up_location} name='pick_up_location' className='input-form' placeholder='Hãy nếu rõ vị trí mà tài xế có thể đón bạn' required />
                        </div>
                        <div className='text-form-login'>
                            <label style={{ paddingLeft: '10px' }}>Địa điểm đến:</label>
                            <input type='text' onChange={(e) => { handleChangeBooking(e) }} value={booking.destination} name='destination' className='input-form' placeholder='Hãy nếu rõ vị trí mà bạn muốn đến' required />
                        </div>
                        <div className='text-form-login'>
                            <label style={{ paddingLeft: '10px' }}>Ghi chú:</label>
                            <input type='text' onChange={(e) => { handleChangeBooking(e) }} value={booking.note} name='note' className='input-form' placeholder='Hãy nếu rõ ngày giờ cụ thể để tài xế nắm rõ lịch trình của bạn' required />
                        </div>
                    </div>
                    <div className='under-form-login'>
                        <button type='submit' onClick={handleSubmitBooking} className='button-login'>Đặt xe ngay</button>
                    </div>
                </div>

            </div>
                : null}
        </>
    );
}

export default Index;
