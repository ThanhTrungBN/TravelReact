import React, { useState,useContext } from 'react';
import "../assets/css/style_home.css"
import { useSubmitLogin } from '../services/login.services';
import { useNavigate } from 'react-router-dom';
import { TravelMenu } from '../constant/context';

const Login = function () {
    const {user} = useContext(TravelMenu);
    const [username, setUsername] = useState('');
    const [password, setPassword] = useState('');
    const navigate = useNavigate();
    const submitLogin = useSubmitLogin();

    const handleSubmit = async (event) => {
        event.preventDefault();
        try {
            await submitLogin(username, password);
            alert("Đăng Nhập Thành Công");
            // navigate('/');
        } catch (error) {
            alert("Thông Tin Tài Khoản Không Chính Xác")
            console.error('Login failed:', error);
        }
    }; 



    return (
        <>
            <main role="main" class="login">
                <div class="wrapper">
                    <div class="row form-wrap">
                        <div class="col-12 right">
                            <div class="form-signin">
                                <div class="text-center heading mb-4">
                                    <h5>Chào mừng Quý khách đến với</h5>
                                    <h1 class="fw-bold m-0">Vietravel</h1>
                                </div>
                                <div class="card bg-white">
                                    <div class="d-flex tab"><button class="w-50 p-3 signin-btn h5 mb-0 text-center fw-bold">Đăng
                                        nhập</button><a class="w-50 p-3 signup-btn h5 mb-0 text-center fw-bold"
                                            href="http://vietravelplus.com/dang-ky-hoi-vien" target="_blank" rel="noreferrer">Đăng ký</a></div>

                                    <form onSubmit={handleSubmit}>
                                        <div class="mb-3"><label htmlFor="username" class="form-label fw-bold">Số điện thoại hoặc email</label> <span
                                            class="text-danger">*</span><input
                                                className='form-control'
                                                type="text"
                                                id="username"
                                                value={username}
                                                onChange={(e) => setUsername(e.target.value)}
                                                required
                                            /></div>
                                        <div class="mb-3"><label htmlFor="password" class="form-label fw-bold">Mật khẩu</label> <span
                                            class="text-danger">*</span><input
                                                className='form-control'
                                                type="password"
                                                id="password"
                                                value={password}
                                                onChange={(e) => setPassword(e.target.value)}
                                                required
                                            />
                                            <div class="row"></div>
                                            <div class="text-end py-2"><a href="https://vietravelplus.com/" rel="nofollow noreferrer"
                                                target="_blank">Lấy lại mật khẩu</a></div>
                                        </div>
                                        <div class="mb-3 text-center"></div>
                                        <div class="w-100">
                                            <div class="mb-3 form-group">
                                                <div>
                                                    <div>
                                                        <div style={{ width: "304px", height: "78px" }}>
                                                            <div><iframe title="reCAPTCHA" width="304" height="78" role="presentation"
                                                                name="a-pwehgnpvqj76" frameborder="0" scrolling="no"
                                                                sandbox="allow-forms allow-popups allow-same-origin allow-scripts allow-top-navigation allow-modals allow-popups-to-escape-sandbox allow-storage-access-by-user-activation"
                                                                src="https://www.google.com/recaptcha/api2/anchor?ar=1&amp;k=6LcezicTAAAAAIbBsNL6IS14WAowVVhd_iL0hVNf&amp;co=aHR0cHM6Ly90cmF2ZWwuY29tLnZuOjQ0Mw..&amp;hl=vi&amp;type=image&amp;v=9pvHvq7kSOTqqZusUzJ6ewaF&amp;theme=light&amp;size=normal&amp;badge=bottomright&amp;cb=j8geckgfrv7g"></iframe>
                                                            </div><textarea id="g-recaptcha-response" name="g-recaptcha-response"
                                                                class="g-recaptcha-response"
                                                                style={{
                                                                    width: '250px',
                                                                    height: '40px',
                                                                    border: '1px solid rgb(193, 193, 193)',
                                                                    margin: '10px 25px',
                                                                    padding: '0px',
                                                                    resize: 'none',
                                                                    display: 'none'
                                                                }}></textarea>
                                                        </div><iframe style={{ display: "none" }}></iframe>
                                                    </div>
                                                </div>
                                            </div>
                                        </div><button id="btndangnhap" type='submit' class="btn btn-primary w-100 py-3 fw-bold">Đăng nhập <i
                                            class="fas fa-sign-in-alt" aria-hidden="true"></i></button>
                                    </form>
                                    <div class="form-divider">Hoặc</div>
                                    <div class="add-on">
                                        <div id="btnfacebook" class="add-on-btn facebook"><span style={{ transition: "opacity 0.5s ease 0s" }}>
                                            <link rel="stylesheet"
                                                href="https://maxcdn.bootstrapcdn.com/font-awesome/4.5.0/css/font-awesome.min.css" /><button
                                                    type="button" class="btn btn-link text-white text-decoration-none metro"><i
                                                        class="fa fa-facebook"></i> Tiếp tục với Facebook</button>
                                        </span></div>
                                        <div id="btngoogle" class="add-on-btn google"><button id="customBtn"
                                            class="btn btn-link text-white text-decoration-none"><i class="fab fa-google-plus-g"></i> Tiếp tục
                                            với Google</button></div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </main>
        </>
    )

}
export default Login