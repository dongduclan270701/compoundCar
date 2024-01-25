import React from 'react';
import ImageServices1 from 'assets/images/du lich lang giang.jpeg'
import ImageServices2 from 'assets/images/du lich luc nam.jpeg'
import ImageServices3 from 'assets/images/du lich luc ngan.jpeg'
import ImageServices4 from 'assets/images/du lich son dong.jpeg'
import ImageServices5 from 'assets/images/du lich tân yên.jpeg'
import ImageServices6 from 'assets/images/du lich yen dung.jpeg'
import ImageServices7 from 'assets/images/du lich yen the.jpeg'
import ImageServices8 from 'assets/images/Khu-bao-ton-thien-nhien-Tay-Tien-Tu.webp'
import ImageServices9 from 'assets/images/cao-nguyen-dong-cao-2.webp'
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
                {/* <img src={ImageServices} className='col-12 col-md-6 services-image' alt="Logo" /> */}
                <div id="carouselExampleIndicators" className="col-12 col-md-7 services-image carousel slide" data-ride="carousel">
                    <ol className="carousel-indicators">
                        <li data-target="#carouselExampleIndicators" data-slide-to="0" className="active"></li>
                        <li data-target="#carouselExampleIndicators" data-slide-to="1"></li>
                        <li data-target="#carouselExampleIndicators" data-slide-to="2"></li>
                        <li data-target="#carouselExampleIndicators" data-slide-to="3"></li>
                        <li data-target="#carouselExampleIndicators" data-slide-to="4"></li>
                        <li data-target="#carouselExampleIndicators" data-slide-to="5"></li>
                        <li data-target="#carouselExampleIndicators" data-slide-to="6"></li>
                        <li data-target="#carouselExampleIndicators" data-slide-to="7"></li>
                        <li data-target="#carouselExampleIndicators" data-slide-to="8"></li>
                    </ol>
                    <div className="carousel-inner">
                        <div className="carousel-item active">
                            <img className="d-block w-100" style={{borderRadius:15}} src={ImageServices1} alt="First slide" />
                            <div className="carousel-caption d-none d-md-block">
                                <h3 style={{ fontWeight: 700, fontSize: 26, width: 'max-content', display: 'flex', margin: '0 auto', borderRadius: 15, padding: 5 }}>Du lịch Lạng Giang</h3>
                            </div>
                        </div>
                        <div className="carousel-item">
                            <img className="d-block w-100" style={{borderRadius:15}} src={ImageServices2} alt="Second slide" />
                            <div className="carousel-caption d-none d-md-block">
                                <h3 style={{ fontWeight: 700, fontSize: 26, width: 'max-content', display: 'flex', margin: '0 auto', borderRadius: 15, padding: 5 }}>Du lịch Lục Nam</h3>

                            </div>
                        </div>
                        <div className="carousel-item">
                            <img className="d-block w-100" style={{borderRadius:15}} src={ImageServices3} alt="Third slide" />
                            <div className="carousel-caption d-none d-md-block">
                                <h3 style={{ fontWeight: 700, fontSize: 26, width: 'max-content', display: 'flex', margin: '0 auto', borderRadius: 15, padding: 5 }}>Du lịch Lục Ngạn</h3>

                            </div>
                        </div>
                        <div className="carousel-item">
                            <img className="d-block w-100" style={{borderRadius:15}} src={ImageServices4} alt="Third slide" />
                            <div className="carousel-caption d-none d-md-block">
                                <h3 style={{ fontWeight: 700, fontSize: 26, width: 'max-content', display: 'flex', margin: '0 auto', borderRadius: 15, padding: 5 }}>Du lịch Sơn Động</h3>

                            </div>
                        </div>
                        <div className="carousel-item">
                            <img className="d-block w-100" style={{borderRadius:15}} src={ImageServices5} alt="Third slide" />
                            <div className="carousel-caption d-none d-md-block">
                                <h3 style={{ fontWeight: 700, fontSize: 26, width: 'max-content', display: 'flex', margin: '0 auto', borderRadius: 15, padding: 5 }}>Du lịch Tân Yên</h3>

                            </div>
                        </div>
                        <div className="carousel-item">
                            <img className="d-block w-100" style={{borderRadius:15}} src={ImageServices6} alt="Third slide" />
                            <div className="carousel-caption d-none d-md-block">
                                <h3 style={{ fontWeight: 700, fontSize: 26, width: 'max-content', display: 'flex', margin: '0 auto', borderRadius: 15, padding: 5 }}>Du lịch Yên Dũng</h3>

                            </div>
                        </div>
                        <div className="carousel-item">
                            <img className="d-block w-100" style={{borderRadius:15}} src={ImageServices7} alt="Third slide" />
                            <div className="carousel-caption d-none d-md-block">
                                <h3 style={{ fontWeight: 700, fontSize: 26, width: 'max-content', display: 'flex', margin: '0 auto', borderRadius: 15, padding: 5 }}>Du lịch Yên Thê</h3>

                            </div>
                        </div>
                        <div className="carousel-item">
                            <img className="d-block w-100" style={{borderRadius:15}} src={ImageServices8} alt="Third slide" />
                            <div className="carousel-caption d-none d-md-block">
                                <h3 style={{ fontWeight: 700, fontSize: 26, width: 'max-content', display: 'flex', margin: '0 auto', borderRadius: 15, padding: 5 }}>KHU BẢO TỒN TÂY YÊN TỬ - BẮC GIANG</h3>

                            </div>
                        </div>
                        <div className="carousel-item">
                            <img className="d-block w-100" style={{borderRadius:15}} src={ImageServices9} alt="Third slide" />
                            <div className="carousel-caption d-none d-md-block">
                                <h3 style={{ fontWeight: 700, fontSize: 26, width: 'max-content', display: 'flex', margin: '0 auto', borderRadius: 15, padding: 5 }}>ĐỒNG CAO - BẮC GIANG</h3>

                            </div>
                        </div>
                    </div>
                    <a className="carousel-control-prev" href="#carouselExampleIndicators" role="button" data-slide="prev">
                        <span className="carousel-control-prev-icon" aria-hidden="true"></span>
                        <span className="sr-only">Previous</span>
                    </a>
                    <a className="carousel-control-next" href="#carouselExampleIndicators" role="button" data-slide="next">
                        <span className="carousel-control-next-icon" aria-hidden="true"></span>
                        <span className="sr-only">Next</span>
                    </a>
                </div>
                <div className='col-12 col-md-5 list-services'>
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
