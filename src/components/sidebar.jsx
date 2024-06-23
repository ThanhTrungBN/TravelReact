import { useEffect } from "react";
import "../assets/css/style_home.css"
import { Link, useNavigate } from "react-router-dom";

import { useContext } from 'react';
import { TravelMenu } from '../constant/context';


const Sidebar = function () {
    const navigate = useNavigate();
    const { logout } = useContext(TravelMenu);
    const { MT, MB, MDNB, MTNB, User } = useContext(TravelMenu);
    const handleLogout = () => {
        logout();
        navigate('/login');
    };
    return (
        <>
            <div class="col-md-3 col-12 left">
                <div class="wrapper p-4">
                    <div class="info d-flex align-items-center mb-md-3">
                        <div class="image me-3"><a aria-current="page" class="active"
                            href="/profile/info"><img class="rounded-circle"
                                src={User.anhdaidien}
                                alt="" /></a></div>
                        <div class="info-wrapper">
                            <div>
                                <h5 class="fw-bold">{User.hoten}</h5>
                                <small>{User.email}</small>
                            </div><span id="toggle-profile-menu" class="d-lg-none"><i
                                class="icon icon--chevron-down"></i></span>
                        </div>
                    </div>
                    <nav class="profile-links py-3 d-block">
                        <ul class="list-unstyled mb-0 py-3 pt-md-1">
                            <li class="mb-1"><a aria-expanded="false" aria-current="page"
                                class="d-inline-flex align-items-center rounded collapsed active"
                                href="/profile/info">
                                <h6 class="fw-bold">Tài khoản</h6>
                            </a>
                                <div id="getting-started-collapse" class="collapse show">
                                    <ul class="list-unstyled fw-normal pb-1 small">
                                        <li><Link to="/profile" aria-current="page" className="d-inline-flex align-items-center rounded active">
                                            Thông tin cá nhân
                                        </Link></li>
                                        <li><a class="d-inline-flex align-items-center rounded"
                                            href="/profile/change-password">Đổi mật khẩu</a></li>
                                        <li><a class="d-inline-flex align-items-center rounded"
                                            href="/profile/payment-info">Thông tin thanh toán</a></li>
                                        <li><a onClick={handleLogout} class="d-inline-flex align-items-center rounded">Đăng xuất</a></li>
                                        <li><a class="d-inline-flex align-items-center rounded"
                                            href="/profile/remove-account">Yêu cầu xóa tài khoản</a>
                                        </li>
                                    </ul>
                                </div>
                            </li>
                            <li class="mb-1">
                                <Link to="/profile/order" className="d-inline-flex align-items-center rounded">
                                    <h6 className="fw-bold">Đơn đặt chỗ</h6>
                                </Link>
                            </li>
                            <li class="mb-1"><a class="d-inline-flex align-items-center rounded"
                                href="/profile/my-feedback">
                                <h6 class="fw-bold">Đánh giá của Quý khách</h6>
                            </a></li>
                            <li class="mb-1"><a class="d-inline-flex align-items-center rounded"
                                href="/profile/saved">
                                <h6 class="fw-bold">Yêu thích đã lưu</h6>
                            </a></li>
                            <li class="mb-1 d-none"><a class="d-inline-flex align-items-center rounded"
                                href="https://travel.com.vn/Profile/Compared">
                                <h6 class="fw-bold">Sản phẩm đã so sánh</h6>
                            </a></li>
                            <li class="mb-1 d-none"><a class="d-inline-flex align-items-center rounded"
                                href="https://travel.com.vn/Profile/Voucher">
                                <h6 class="fw-bold">Voucher khuyến mãi của Quý khách</h6>
                            </a></li>
                            <li class="mb-1 d-none"><a class="d-inline-flex align-items-center rounded"
                                href="https://travel.com.vn/Profile/Promotion">
                                <h6 class="fw-bold">Chương trình ưu đãi cho user</h6>
                            </a></li>
                        </ul>
                    </nav>
                </div>
            </div>
        </>
    )
}
export default Sidebar