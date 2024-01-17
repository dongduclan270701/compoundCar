import React, { useState, useEffect, memo } from 'react';
import { NavLink } from "react-router-dom";
import Logo from 'assets/svg/car-white-svgrepo-com.svg'
import Close from 'assets/svg/close-square-svgrepo-com.svg'
import Close2 from 'assets/svg/close-svgrepo-com.svg'
import Menu from 'assets/svg/menu-svgrepo-com.svg'
import 'assets/scss/Header.scss'
const Index = () => {
    const [scrolled, setScrolled] = useState(false);
    const [isFormLogin, setIsFormLogin] = useState(false)
    const [isLogin, setIsLogin] = useState(true);
    const [flipForm, setFlipForm] = useState(false);
    const [isMenu, setIsMenu] = useState(false)
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
    const handleToggleForm = () => {
        setIsLogin(!isLogin);
        setFlipForm(true);
        setTimeout(() => {
            setFlipForm(false);
        }, 0);
    };
    const handleLogin = () => {

    }
    return (
        <>
            <div className='header'>
                <div className={`container container-header ${scrolled ? 'scrolled' : 'container container-header'}`}>
                    <div className='logo'>
                        <img src={Logo} className='svg-logo' alt="Logo" />
                        <div className='text-logo'>xe ghép <span className='text-logo-color'>bắc giang - bắc ninh - hà nội</span></div>
                    </div>
                    <div className='nav'>
                        <div className='nav-item'><NavLink className='nav-item' to='/'>Trang chủ</NavLink></div>
                        <div className='nav-item'><a className='nav-item' href='#booking'>Book xe</a></div>
                        <div className='nav-item'><a className='nav-item' href='#feedbacks'>Đánh giá</a></div>
                        <div className='nav-item'><a className='nav-item' href='#services'>Về chúng tôi</a></div>
                        <div className='nav-item login' onClick={() => setIsFormLogin(!isFormLogin)}>Đăng nhập</div>
                    </div>
                </div>
                <div className='container-header-mobile'>
                    <div className='logo'>
                        <img src={Logo} className='svg-logo' alt="Logo" />
                        <div className='text-logo'>xe ghép <span className='text-logo-color'>bắc giang - bắc ninh - hà nội</span></div>
                    </div>
                    <img src={Menu} onClick={() => { setIsMenu(!isMenu) }} className='svg-logo' alt="Logo" width={25} style={{ cursor: 'pointer' }} />
                </div>
            </div>
            {isFormLogin ?
                <div className='toggle-login'>
                    {isLogin ?
                        <div className={`form-login${flipForm ? ' flip' : ''}`}>
                            <div className='head-form-login'>
                                <div className='title-head-form-login'>Đăng nhập</div>
                                <img onClick={() => setIsFormLogin(!isFormLogin)} src={Close} className='icon-head-form-login' alt='icon-close' />
                            </div>
                            <div className='content-form-login'>
                                <div className='text-form-login'>
                                    <label style={{ paddingLeft: '10px' }}>Tên đăng nhập:</label>
                                    <input type='text' name='username' className='input-form' placeholder='Tên đăng nhập' />
                                </div>
                                <div className='text-form-login'>
                                    <label style={{ paddingLeft: '10px' }}>Mật khẩu:</label>
                                    <input type='text' name='username' className='input-form' placeholder='Mật khẩu' />
                                </div>
                            </div>
                            <div className='under-form-login'>
                                <button type='submit' className='button-login'>Đăng nhập</button>
                                <div onClick={() => { handleToggleForm() }} className='button-change-form'>Chưa có tài khoản</div>
                            </div>
                        </div>
                        :
                        <div className={`form-login${flipForm ? ' flip' : ''}`}>
                            <div className='head-form-login'>
                                <div className='title-head-form-login'>Đăng ký</div>
                                <img onClick={() => setIsFormLogin(!isFormLogin)} src={Close} className='icon-head-form-login' alt='icon-close' />
                            </div>
                            <div className='content-form-login'>
                                <div className='text-form-login'>
                                    <label style={{ paddingLeft: '10px' }}>Tên đăng nhập:</label>
                                    <input type='text' name='username' className='input-form' placeholder='Tên đăng nhập' />
                                </div>
                                <div className='text-form-login'>
                                    <label style={{ paddingLeft: '10px' }}>Số điện thoại:</label>
                                    <input type='text' name='username' className='input-form' placeholder='Số điện thoại' />
                                </div>
                                <div className='text-form-login'>
                                    <label style={{ paddingLeft: '10px' }}>Mật khẩu:</label>
                                    <input type='text' name='username' className='input-form' placeholder='Mật khẩu' />
                                </div>
                                <div className='text-form-login'>
                                    <label style={{ paddingLeft: '10px' }}>Nhập lại mật khẩu:</label>
                                    <input type='text' name='username' className='input-form' placeholder='Nhập lại mật khẩu:' />
                                </div>
                            </div>
                            <div className='under-form-login'>
                                <button type='submit' className='button-login'>Đăng ký</button>
                                <div onClick={() => { handleToggleForm() }} className='button-change-form'>Bạn đã có tài khoản</div>
                            </div>
                        </div>
                    }
                </div>
                : null}
            {isMenu ? <div className='menu-mobile'>
                <div className='list-menu-mobile'>
                    
                    <div onClick={() => { setIsMenu(!isMenu) }} className='item-menu-mobile'><NavLink style={{color:'black', textDecoration:'none'}} to='/'>Trang chủ</NavLink></div>
                    <div onClick={() => { setIsMenu(!isMenu) }} className='item-menu-mobile'><a style={{color:'black', textDecoration:'none'}} href='#booking'>Book xe</a></div>
                    <div onClick={() => { setIsMenu(!isMenu) }} className='item-menu-mobile'><a style={{color:'black', textDecoration:'none'}} href='#feedbacks'>Đánh giá</a></div>
                    <div onClick={() => { setIsMenu(!isMenu) }} className='item-menu-mobile'><a style={{color:'black', textDecoration:'none'}} href='#services'>Về chúng tôi</a></div>
                    <div onClick={() => { setIsMenu(!isMenu); setIsFormLogin(!isFormLogin) }} className='item-menu-mobile login'>Đăng nhập</div>
                    <div onClick={() => { setIsMenu(!isMenu) }} className='item-menu-mobile'><img src={Close2} alt='icon-close' width={25} className='item-menu-mobile' /></div>

                </div>
            </div> : null}
        </>
    );
}

export default memo(Index);
