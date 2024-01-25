import React from 'react';
import Image1 from 'assets/images/136958118051a2267c8942b.jpg'
import Image2 from 'assets/images/99158842102074008420157416933532148800421888o-15912480094981679273639-0718.jpg'
import Image3 from 'assets/images/Khu-bao-ton-thien-nhien-Tay-Tien-Tu.webp'
import Image4 from 'assets/images/cao-nguyen-dong-cao-2.webp'
import Image5 from 'assets/images/chua-phat-tich-ngoi-co-tu-hon-1000-nam-tuoi-o-bac-ninh-01-1689124541.jpg'
import 'assets/scss/Trevor.scss'

const Index = () => {
    return (
        <div className='trevor'>
            <div className='row container' style={{ margin: '0 auto', padding: 0 }}>
                <div className='title-feedbacks'>
                    <div className='title-feedbacks-above'>Danh lam thắng cảnh</div>
                    <div className='title-feedbacks-under'>Tham quan, du lịch những nơi chứa đựng nhiều khung cảnh lý tưởng!</div>
                </div>
                <div className='col-12 col-md-4' style={{ padding: 15 }}>
                    <img src={Image2} alt='1' className='responsive-image' />
                    <p className='caption'>Vải thiều - bắc giang</p>
                </div>
                <div className='col-12 col-md-8' style={{ display: 'flex', justifyContent: 'center', flexWrap: 'wrap', padding: 0 }}>
                    <div className='col-12 col-md-6' style={{ padding: 15 }}>
                        <img src={Image1} alt='1' className='responsive-image with-margin' />
                        <p className='caption'>KHU DU LỊCH KHUÔN THẦN – BẮC GIANG</p>
                    </div>
                    <div className='col-12 col-md-6' style={{ padding: 15 }}>
                        <img src={Image3} alt='1' className='responsive-image with-margin' />
                        <p className='caption'>khu bảo tồn tây yên tử - bắc giang</p>
                    </div>
                    <div className='col-12 col-md-6' style={{ padding: 15 }}>
                        <img src={Image4} alt='1' className='responsive-image with-margin' />
                        <p className='caption'>Đồng Cao - bắc giang</p>
                    </div>
                    <div className='col-12 col-md-6' style={{ padding: 15 }}>
                        <img src={Image5} alt='1' className='responsive-image with-margin' />
                        <p className='caption'>CHÙA PHẬT TÍCH - BẮC NINH</p>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Index;
