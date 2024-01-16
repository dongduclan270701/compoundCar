import React, { useState, useEffect, memo } from 'react';
import Logo from 'assets/svg/car-white-svgrepo-com.svg'
import 'assets/scss/Header.scss'
const Index = () => {
    const [scrolled, setScrolled] = useState(false);

    useEffect(() => {
        const handleScroll = () => {
            const isScrolled = window.scrollY > 0;
            setScrolled(isScrolled);
        };
        window.addEventListener('scroll', handleScroll);
        return () => {
            window.removeEventListener('scroll', handleScroll);
        };
    }, []);
    return (
        <div className='header'>
            <div className={`container container-header ${scrolled ? 'scrolled' : 'container container-header'}`}>
                <div className='logo'>
                    <img src={Logo} className='svg-logo' alt="Logo" />
                    <div className='text-logo'>xe ghép <span className='text-logo-color'>bắc giang - bắc ninh - hà nội</span></div>
                </div>
                <div className='nav'>
                    <div className='nav-item'>Trang chủ</div>
                    <div className='nav-item'>Book xe</div>
                    <div className='nav-item'>Đánh giá</div>
                    <div className='nav-item'>Về chúng tôi</div>
                    <div className='nav-item login' onClick={() => { return 0 }}>Đăng nhập</div>
                </div>
            </div>
        </div>
    );
}

export default memo(Index);
