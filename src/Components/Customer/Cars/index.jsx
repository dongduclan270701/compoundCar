import React from 'react';
import 'assets/scss/Cars.scss'
import Toyota from 'assets/images/xe-toyota-vios-e-phien-ban-1-5-cvt-1792103j24390.webp'
import Mis from 'assets/images/z4854715952864_91888fbc4fd88493a301059ad45ca768.jpg'
import Car6 from 'assets/images/accent.webp'
import Car7 from 'assets/images/inovar.jpeg'
import Car8 from 'assets/images/fortune.webp'
import Car3 from 'assets/images/Mazda32020VnE993047211573621051jpg-1631963909.jpg'
import Car4 from 'assets/images/nien-han-xe-ban-tai-2.jpg'
import Car5 from 'assets/images/thumb-nissan-navara-1.webp'
import Slider from 'react-slick';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
const Index = () => {
    const settings = {
        dots: true,
        infinite: true,
        speed: 500,
        slidesToShow: 3,
        slidesToScroll: 1,
        autoplay: true,
        autoplaySpeed:2000,
        responsive: [
            {
                breakpoint: 768,
                settings: {
                    slidesToShow: 1,
                    slidesToScroll: 1,
                },
            },
        ],
    };
    return (
        <div className='cars'>
            <div className='container cars-content'>
                <div className='title-cars'>
                    <div className='title-cars-above'>CÁC LOẠI XE ĐƯỢC CUNG CẤP</div>
                    <div className='title-cars-under'>Chúng tôi cung cấp các loại xe cao cấp, uy tín, chất lượng nhất nhằm phục vụ quý khách hàng!</div>
                </div>
                <div className='row list-cars'>
                    {/* <div className='col-12 col-md-4 item-cars'>
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
                    </div> */}
                    <Slider {...settings}>
                        <div className='col-12 item-cars'>
                            <div className='item-name-cars'>TOYOTA VIOS 4 chỗ</div>
                            <div className='cars-image-container'>
                                <img src={Toyota} className='cars-image' alt="1" />
                            </div>
                            {/* <img src={Toyota} className='cars-image'style={{ width: '100%', height: 'auto' }} alt="1" /> */}
                        </div>
                        <div className='col-12 item-cars'>
                            <div className='item-name-cars'>Mitsubishi 7 chỗ</div>
                            <div className='cars-image-container'>
                                <img src={Mis} className='cars-image' alt="1" />
                            </div>
                            
                        </div>
                        <div className='col-12 item-cars'>
                            <div className='item-name-cars'>MAZDA 4 chỗ</div>
                            <img src={Car3} className='cars-image' style={{ width: '100%', height: 'auto' }} alt="3" />
                        </div>
                        <div className='col-12 item-cars'>
                            <div className='item-name-cars'>ACCENT 4 chỗ</div>
                            <img src={Car6} className='cars-image' style={{ width: '100%', height: 'auto' }} alt="3" />
                        </div>
                        <div className='col-12 item-cars'>
                            <div className='item-name-cars'>INOVA 7 chỗ</div>
                            <img src={Car7} className='cars-image' style={{ width: '100%', height: 'auto' }} alt="3" />
                        </div>
                        <div className='col-12 item-cars'>
                            <div className='item-name-cars'>FORTUNE 7 chỗ</div>
                            <img src={Car8} className='cars-image' style={{ width: '100%', height: 'auto' }} alt="3" />
                        </div>
                        <div className='col-12 item-cars'>
                            <div className='item-name-cars'>Xe bán tải</div>
                            <img src={Car4} className='cars-image' style={{ width: '100%', height: 'auto' }} alt="4" />
                        </div>
                        <div className='col-12 item-cars'>
                            <div className='item-name-cars'>Xe bán tải</div>
                            <img src={Car5} className='cars-image' style={{ width: '100%', height: 'auto' }} alt="4" />
                        </div>
                    </Slider>
                </div>
            </div>
        </div>
    );
}

export default Index;
