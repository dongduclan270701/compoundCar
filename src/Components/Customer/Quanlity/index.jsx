import React from 'react';
import Save from 'assets/svg/save-money-cash-savings-money-reserve-svgrepo-com.svg'
import Business from 'assets/svg/business-development-frame-svgrepo-com.svg'
import Like from 'assets/svg/like-1385-svgrepo-com.svg'
import Safe from 'assets/svg/safe-shield-2-svgrepo-com.svg'
import 'assets/scss/Quanlity.scss'
const Index = () => {
    return (
        <div className='quanlity'>
            <div className='container quanlity-content'>
                <div className='title-quanlity'>
                    XE GHÉP BẮC NINH - BẮC GIANG - HÀ NỘI MANG LẠI CHO KHÁCH HÀNG
                </div>
                <div className='row quanlity-under'>
                    <div className='col-6 col-md-3 quanlity-under-content'>
                        <img src={Save} alt='icon' className='quanlity-under-icon'/>
                        <div className='quanlity-under-name'>Tiết kiệm</div>
                        <div className='quanlity-under-desc'>Cam kết giá rẻ nhất và hỗ trợ<br/> khi khách hàng liện hệ lại</div>
                    </div>
                    <div className='col-6 col-md-3 quanlity-under-content'>
                        <img src={Business} alt='icon' className='quanlity-under-icon'/>
                        <div className='quanlity-under-name'>Trọn gói</div>
                        <div className='quanlity-under-desc'>Khách biết giá trước khi đi và<br/>có dịch vụ chờ</div>
                    </div>
                    <div className='col-6 col-md-3 quanlity-under-content'>
                        <img src={Like} alt='icon' className='quanlity-under-icon'/>
                        <div className='quanlity-under-name'>Chất lượng xe</div>
                        <div className='quanlity-under-desc'>Xe đời mới - Sang trọng hơn</div>
                    </div>
                    <div className='col-6 col-md-3 quanlity-under-content'>
                        <img src={Safe} alt='icon' className='quanlity-under-icon'/>
                        <div className='quanlity-under-name'>di chuyển an toàn</div>
                        <div className='quanlity-under-desc'>Tài xế giàu kinh nghiệm,<br/>chạy Tour được</div>
                    </div>
                </div>
                <hr style={{border:'1px solid red'}}/>
                <div className='content-quanlity'>“Chúng tôi luôn xem trọng dịch vụ mà chúng tôi mang lại là đặt xe nhanh chóng – giá thành cạnh tranh luôn hấp dẫn so với thị trường xe tour, xe đường dài và luôn đặt sự an toàn của quý khách là ưu tiên hàng đầu.”</div>
                <hr style={{border:'1px solid red', marginBottom:'40px'}}/>
            </div>
        </div>
    );
}

export default Index;
