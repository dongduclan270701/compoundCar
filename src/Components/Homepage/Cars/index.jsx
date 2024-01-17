import React from 'react';
import 'assets/scss/Cars.scss'
import Toyota from 'assets/images/xe-toyota-vios-e-phien-ban-1-5-cvt-1792103j24390.webp'
import Mis from 'assets/images/z4854715952864_91888fbc4fd88493a301059ad45ca768.jpg'
const Index = () => {
    return (
        <div className='cars'>
            <div className='container cars-content'>
                <div className='title-cars'>
                    <div className='title-cars-above'>CÁC LOẠI XE ĐƯỢC CUNG CẤP</div>
                    <div className='title-cars-under'>Chúng tôi cung cấp các loại xe cao cấp, uy tín, chất lượng nhất nhằm phục vụ quý khách hàng!</div>
                </div>
                <div className='row list-cars'>
                    <div className='col-12 col-md-4 item-cars'>
                        <div className='item-name-cars'>TOYOTA VIOS 4 chỗ</div>
                        <img src={Toyota} className='cars-image' alt="Logo" />
                    </div>
                    <div className='col-12 col-md-4 item-cars'>
                    <div className='item-name-cars'>Mitsubishi 7 chỗ</div>
                        <img src={Mis} className='cars-image' alt="Logo" />
                    </div>
                    <div className='col-12 col-md-4 item-cars'>
                    <div className='item-name-cars'>TOYOTA VIOS 4 chỗ</div>
                        <img src={Toyota} className='cars-image' alt="Logo" />
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Index;
