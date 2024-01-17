import React from 'react';
import Logo from 'assets/svg/car-white-svgrepo-com.svg'
import 'assets/scss/Footer.scss'

const Index = () => {
    return (
        <div className='footer'>
            <div className='container container-header'>
                <div className='logo'>
                    <img src={Logo} className='svg-logo' alt="Logo" width="50" height="50" />
                    <div className='text-logo'>xe ghép <span className='text-logo-color'>bắc giang - bắc ninh - hà nội</span></div>
                </div>
                <div className='content'>
                    <div className='content-hotline'>
                        <div className='content-desc'>Hotline: 0912977981</div>
                        <div className='content-desc'>Gmail: xxx@gmail.com</div>
                        <div className='content-desc'>Hoạt động: t2- cn ( 5h - 21h )</div>
                    </div>
                    <div className='content-commitment'>
                        <div className='content-desc'>Chúng tôi sẽ kết nối khách hàng với xe chạy rỗng chiều về, để kết hợp thành chuyến đi giá rẻ với dòng xe sang trọng, với giá giảm tới 50%.</div>
                        <div className='content-desc'>Với bất kỳ lý do nào khiến bạn không hài lòng về chất lượng dịch vụ, chúng tôi sẽ có chính sách hoàn tiền 100% cho khách hàng.</div>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Index;
