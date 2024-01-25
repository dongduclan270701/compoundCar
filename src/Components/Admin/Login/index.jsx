import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import Swal from 'sweetalert2'
import { fetchLoginAdmin } from 'Apis'
import Logo from 'assets/svg/car-white-svgrepo-com.svg'
const Index = () => {
    const navigate = useNavigate()
    const [inputLogin, setInputLogin] = useState({ email: "", password: "" })

    const handleInputChange = (event) => {
        const { name, value } = event.target;
        setInputLogin({ ...inputLogin, [name]: value });
    };

    const handleLogin = () => {
        Swal.fire({
            title: 'Đang đăng nhập!',
            html: 'Vui lòng chờ...',
            allowEscapeKey: false,
            allowOutsideClick: false,
            didOpen: () => {
                Swal.showLoading()
            }
        });
        
        const re = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
        if (re.test(inputLogin.email) === true && inputLogin.password.length >= 8 && /[A-Z]/.test(inputLogin.password)) {
            let countDown = 5;
            fetchLoginAdmin(inputLogin.email, inputLogin.password)
                .then(result => {
                    if (result === 'Email does not exist') {
                        Swal.fire({
                            title: 'Email không tồn tại!',
                            text: 'Email này không tồn tại vui lòng thử email khác!',
                            icon: 'error',
                            confirmButtonText: 'OK!'
                        })
                    } else if (result === 'Incorrect password') {
                        Swal.fire({
                            title: 'Mật khẩu không đúng!',
                            text: 'Mật khẩu hiện tại không đúng vui lòng thử mật khẩu khác',
                            icon: 'error',
                            confirmButtonText: 'OK!'
                        })
                    } else {
                        localStorage.setItem("auth-token-admin", JSON.stringify(result.token));
                        localStorage.setItem("role", JSON.stringify(result.role));
                        Swal.fire({
                            title: 'Đăng nhập thành công!',
                            html: `Bạn sẽ được chuyển vào trang quản lý trong <span></span> giây còn lại`,
                            icon: 'success',
                            showConfirmButton: false,
                            timer: 5000,
                            didOpen: () => {
                                const timerId = setInterval(() => {
                                    countDown--;
                                    Swal.getHtmlContainer().querySelector('span')
                                        .textContent = (Swal.getTimerLeft() / 1000)
                                            .toFixed(0)
                                }, 100);
                                setTimeout(() => {
                                    clearInterval(timerId);
                                    if (window.location.pathname !== '/login') {
                                        window.location.reload();
                                    } else {
                                        navigate(-1);
                                    }
                                }, 5000);
                            },
                        });
                    }
                })
                .catch(error => {
                    console.log(error)
                    Swal.fire({
                        title: `Error ${error.response.status}`,
                        text: 'There seems to be a problem with the connection to the server, please try again later',
                        icon: 'error',
                        confirmButtonText: 'OK!'
                    })
                })
        }
        if (re.test(inputLogin.email) === false) {
            Swal.fire({
                title: 'Email không đúng dạng!',
                text: 'Yêu cầu nhập đúng dạng email',
                icon: 'warning',
                confirmButtonText: 'OK!'
            })
        }
        if (inputLogin.password.length < 8 || /[A-Z]/.test(inputLogin.password) === false) {
            Swal.fire({
                title: 'Mật khẩu không đúng dạng!',
                text: 'Yêu cầu nhập mật khẩu tối thiểu 8 ký tự, có chứa ký tự in hoa và ký tự đặc biệt ( @ , !, ...)',
                icon: 'warning',
                confirmButtonText: 'OK!'
            })
        }
    }
    const handleOnKeyDown = (event) => {
        if (event.key === 'Enter') {
            event.preventDefault();
            handleLogin()
        }
    }
    return (
        <div className="container-scroller">
            <div className="container-fluid page-body-wrapper full-page-wrapper">
                <div className="content-wrapper d-flex align-items-center auth px-0">
                    <div className="row w-100 mx-0">
                        <div className="col-lg-4 mx-auto">
                            <div className="auth-form-light text-left px-4 px-sm-5 pb-5">
                                <div style={{ display: "flex", justifyContent: "center", gap:10, padding:10 }}>
                                    <img src={Logo} style={{ width: 100 }} alt="logo" />
                                    <div style={{display:'flex',flexDirection:'column', justifyContent:'center', textAlign:'center'}}>
                                        <div style={{frontSize:20, fontWeight:700, textTransform: 'uppercase'}}>Xe ghép <span style={{color:'red'}}>bắc giang - bắc ninh - hà nội</span></div>
                                        <div style={{frontSize:13, fontWeight:700,}}>Chào mừng đến với website quản lý xe ghép</div>
                                    </div>
                                    
                                </div>

                                <form className="pt-3">
                                    <div className="form-group">
                                        <input
                                            onChange={handleInputChange}
                                            type="email"
                                            name='email'
                                            className="form-control form-control-lg"
                                            id="exampleInputEmail1"
                                            placeholder="Email"
                                            defaultValue={inputLogin.email}
                                            required
                                            onKeyDown={handleOnKeyDown}
                                            style={{borderRadius:15}}
                                        />
                                    </div>
                                    <div className="form-group">
                                        <input
                                            onChange={handleInputChange}
                                            type="password"
                                            name='password'
                                            className="form-control form-control-lg"
                                            id="exampleInputPassword1"
                                            placeholder="Password"
                                            defaultValue={inputLogin.password}
                                            required
                                            onKeyDown={handleOnKeyDown}
                                            style={{borderRadius:15}}
                                        />
                                    </div>
                                    <div className="mt-3">
                                        <button type='button' onClick={handleLogin} className="btn btn-block btn-primary btn-lg font-weight-medium auth-form-btn">Login</button>
                                    </div>
                                </form>
                            </div>
                        </div>
                    </div>
                </div>

            </div>
        </div>
    );
}

export default Index;
