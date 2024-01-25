import React, { useState, useEffect, memo } from 'react';
import { NavLink } from "react-router-dom";
import Logo from 'assets/svg/car-white-svgrepo-com.svg'
import Close from 'assets/svg/close-square-svgrepo-com.svg'
import Close2 from 'assets/svg/close-svgrepo-com.svg'
import Menu from 'assets/svg/menu-svgrepo-com.svg'
import Zalo from 'assets/svg/zalo-svgrepo-com.svg'
import Phone from 'assets/svg/phone-call-svgrepo-com.svg'
import Swal from 'sweetalert2'
import 'assets/scss/Header.scss'
import { loginUser, registerUser } from 'Apis'
const Index = () => {
    const [scrolled, setScrolled] = useState(false);
    const [isFormLogin, setIsFormLogin] = useState(false)
    const [isLogin, setIsLogin] = useState(true);
    const [flipForm, setFlipForm] = useState(false);
    const [isMenu, setIsMenu] = useState(false)
    const [formRegisterUser, setFormRegisterUser] = useState({
        username: '',
        password: '',
        rePassword: '',
        phoneNumber: '',
    })
    const [formLoginUser, setFormLoginUser] = useState({
        password: '',
        phoneNumber: '',
    })
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
    const showAlert = (title, text, icon) => {
        Swal.fire({
            title,
            text,
            icon,
            confirmButtonText: 'OK!'
        });
    };
    const handleChangeFormRegister = (e) => {
        const { name, value } = e.target
        setFormRegisterUser({ ...formRegisterUser, [name]: value });
    }

    const handleChangeFormLogin = (e) => {
        const { name, value } = e.target
        setFormLoginUser({ ...formLoginUser, [name]: value });
    }

    const handleRegister = (event) => {
        event.preventDefault();
        if (formRegisterUser.username.trim() === "" || formRegisterUser.username === 0) { showAlert('Chờ đã!', 'Yêu cầu nhập đầy đủ Họ và Tên !', 'warning') }
        else if (formRegisterUser.password.trim() === "" || formRegisterUser.password === 0) { showAlert('Chờ đã!', 'Yêu cầu nhập mật khẩu!', 'warning') }
        else if (formRegisterUser.phoneNumber.trim() === "" || formRegisterUser.phoneNumber === 0) { showAlert('Chờ đã!', 'Yêu cầu nhập số điện thoại!', 'warning') }
        else if (formRegisterUser.password !== formRegisterUser.rePassword) { showAlert('Chờ đã!', 'Nhập lại mật khẩu chưa khớp!', 'warning') }
        else {
            const {rePassword, ...data} = formRegisterUser
            registerUser(data)
            .then(result => {
                if (result === 'Phone number already exists') {
                    showAlert('Ops!', 'Số điện thoại đã tồn tại!', 'warning')
                } else {
                    showAlert('Xin chào!', 'Chào mừng bạn đến với website chúng tôi!', 'success')
                    window.location.reload();
                }
            })
            .catch(error => {
                console.log(error)
            })
        }
    }

    const handleLogin = (event) => {
        event.preventDefault();
        if (formLoginUser.password.trim() === "" || formLoginUser.password === 0) { showAlert('Chờ đã!', 'Yêu cầu nhập mật khẩu!', 'warning') }
        else if (formLoginUser.phoneNumber.trim() === "" || formLoginUser.phoneNumber === 0) { showAlert('Chờ đã!', 'Yêu cầu nhập số điện thoại!', 'warning') }
        else {
            loginUser(formLoginUser.phoneNumber, formLoginUser.password)
                .then(result => {
                    console.log(result)
                    if (result === 'Incorrect password') {
                        showAlert('Ops!', 'Mật khẩu không chính xác !', 'warning')
                    } else if (result === 'Phone number does not exist') {
                        showAlert('Ops!', 'Số điện thoại không tồn tại!', 'warning')
                    } else {
                        showAlert('Xin chào!', 'Chào mừng bạn quay lại với website chúng tôi!', 'success')
                        window.location.reload();
                    }
                })
                .catch(error => {
                    console.log(error)
                })
        }
    }

    const isIOS = /iPhone|iPad|iPod/.test(navigator.userAgent);
    const isAndroid = /Android/.test(navigator.userAgent);
    const zaloLink = isIOS ? 'zalo://qr/p/8smsrkibge4y' : isAndroid ? 'https://zaloapp.com/qr/p/8smsrkibge4y' : 'zalo://conversation?phone=0374216188';
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
            <div className={isIOS ? 'hotline-icon-one-ios' : isAndroid ? 'hotline-icon-one-android' : 'hotline-icon-one-pc'}>
                <a href={zaloLink} target='blank'>
                    <img src={Zalo} onClick={() => { }} className='hotline-icon-svg' alt="Logo" />
                </a>
            </div>
            <div className='hotline-icon-two'>
                <a href="tel:1234567"><img src={Phone} onClick={() => { }} className='hotline-icon-svg' alt="Logo" /></a>
            </div>
            {/* <div className='hotline-icon-three'>
                <img src={Messager} onClick={() => { } } className='hotline-icon-svg' alt="Logo"/>
            </div> */}
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
                                    <label style={{ paddingLeft: '10px' }}>Số điện thoại:</label>
                                    <input type='text' name='phoneNumber' value={formLoginUser.phoneNumber} onChange={e => handleChangeFormLogin(e)} className='input-form' placeholder='Số điện thoại' />
                                </div>
                                <div className='text-form-login'>
                                    <label style={{ paddingLeft: '10px' }}>Mật khẩu:</label>
                                    <input type='password' name='password' value={formLoginUser.password} onChange={e => handleChangeFormLogin(e)} className='input-form' placeholder='Mật khẩu' />
                                </div>
                            </div>
                            <div className='under-form-login'>
                                <button type='submit' onClick={event => handleLogin(event)} className='button-login'>Đăng nhập</button>
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
                                    <input type='text' name='username' value={formRegisterUser.username} onChange={e => handleChangeFormRegister(e)} className='input-form' placeholder='Tên đăng nhập' />
                                </div>
                                <div className='text-form-login'>
                                    <label style={{ paddingLeft: '10px' }}>Số điện thoại:</label>
                                    <input type='text' name='phoneNumber' value={formRegisterUser.phoneNumber} onChange={e => handleChangeFormRegister(e)} className='input-form' placeholder='Số điện thoại' />
                                </div>
                                <div className='text-form-login'>
                                    <label style={{ paddingLeft: '10px' }}>Mật khẩu:</label>
                                    <input type='text' name='password' value={formRegisterUser.password} onChange={e => handleChangeFormRegister(e)} className='input-form' placeholder='Mật khẩu' />
                                </div>
                                <div className='text-form-login'>
                                    <label style={{ paddingLeft: '10px' }}>Nhập lại mật khẩu:</label>
                                    <input type='text' name='rePassword' value={formRegisterUser.rePassword} onChange={e => handleChangeFormRegister(e)} className='input-form' placeholder='Nhập lại mật khẩu:' />
                                </div>
                            </div>
                            <div className='under-form-login'>
                                <button type='submit' onClick={handleRegister} className='button-login'>Đăng ký</button>
                                <div onClick={() => { handleToggleForm() }} className='button-change-form'>Bạn đã có tài khoản</div>
                            </div>
                        </div>
                    }
                </div>
                : null}
            {isMenu ? <div className='menu-mobile'>
                <div className='list-menu-mobile'>

                    <div onClick={() => { setIsMenu(!isMenu) }} className='item-menu-mobile'><NavLink style={{ color: 'black', textDecoration: 'none' }} to='/'>Trang chủ</NavLink></div>
                    <div onClick={() => { setIsMenu(!isMenu) }} className='item-menu-mobile'><a style={{ color: 'black', textDecoration: 'none' }} href='#booking'>Book xe</a></div>
                    <div onClick={() => { setIsMenu(!isMenu) }} className='item-menu-mobile'><a style={{ color: 'black', textDecoration: 'none' }} href='#feedbacks'>Đánh giá</a></div>
                    <div onClick={() => { setIsMenu(!isMenu) }} className='item-menu-mobile'><a style={{ color: 'black', textDecoration: 'none' }} href='#services'>Về chúng tôi</a></div>
                    <div onClick={() => { setIsMenu(!isMenu); setIsFormLogin(!isFormLogin) }} className='item-menu-mobile login'>Đăng nhập</div>
                    <div onClick={() => { setIsMenu(!isMenu) }} className='item-menu-mobile'><img src={Close2} alt='icon-close' width={25} className='item-menu-mobile' /></div>

                </div>
            </div> : null}

        </>
    );
}

export default memo(Index);
