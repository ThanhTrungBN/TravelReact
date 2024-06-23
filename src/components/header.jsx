import React, { useState, useEffect, useContext } from 'react';
import { Link, useNavigate } from "react-router-dom";
import "../assets/css/style_home.css";
import { Link as RouterLink } from 'react-router-dom'
import { TravelMenu } from '../constant/context';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faBell, faHeart, faMagnifyingGlass, faUser } from '@fortawesome/free-solid-svg-icons';
import { loadTourdanhmuc} from '../services/travel.services';

const Header = function () {
    const { MT, MB, MDNB, MTNB ,User} = useContext(TravelMenu);
    const [showMegamenu, setShowMegamenu] = useState(false);
    const handleToggleMegamenu = () => {
        setShowMegamenu(!showMegamenu);
    };
    const [tours, setTours] = useState([]);
    const [selectedOption, setSelectedOption] = useState('');
    const handleChange = () => {    
        if(selectedOption ==="MB"){
            DanhmucTour();
        }
        if(selectedOption ==="MT"){
            DanhmucTour();
        }
        if(selectedOption ==="MTNB"){
            DanhmucTour();
        }
        if(selectedOption ==="MDNB"){
            DanhmucTour();
        }
    };
    const DanhmucTour = async() =>{
        try {
            const data = await loadTourdanhmuc(selectedOption);
            setTours(data);
        } catch (error) {
            console.error('Error fetching :', error);
        }
    }
    useEffect(() => {
        handleChange();
    }, [selectedOption]);
   
    const { mataikhoan } = useContext(TravelMenu);
    return (
        <>
            <header className="header">
                <nav className="navbar navbar-expand-lg fixed-top">
                    <div className="container-fluid">
                        <Link to="/">
                            <img className="navbar-brand logo" id="logoheader" src="../img/logo.webp" alt="" width="150" height="50" loading="lazy" />
                        </Link>
                        <div className="navbar-collapse offcanvas-collapse left" id="main_nav">
                            <ul className="navbar-nav">
                                <li className="nav-item dropdown has-megamenu"><a className="nav-link dropdown-toggle travel-menu"  data-bs-toggle="dropdown" onClick={handleToggleMegamenu} aria-expanded={showMegamenu ? "true" : "false"}>Du lịch</a>
                                    <div className={`dropdown-menu megamenu ${showMegamenu ? 'show' : ''}`} role="menu" data-bs-popper="none">
                                        <div className="row py-lg-5">
                                            <div className="col-2">
                                                <ul className="list-unstyled menu-tab-items">
                                                    <li className="active" value="1">Du lịch trong nước</li>
                                                    <li className="" value="2">Du lịch nước ngoài</li>
                                                </ul>
                                            </div>
                                            <div className="col-lg-10 col-md-12 mx-auto">
                                                <div className="col-lg-9 col-md-9 menu-tab-panels">
                                                    <div className="row g-3 active" value={selectedOption} onChange={(e) => setSelectedOption(e.target.value)}>
                                                        <div className="col-lg-3 col-6">
                                                            <div className="col-megamenu">
                                                                <h6 className="title fw-bold text-uppercase"><a href="/du-lich-viet-nam/tour-mien-bac"
                                                                    title="/du-lich-viet-nam/tour-mien-bac">Tour Miền Bắc</a></h6>
                                                                <ul className="list-unstyled">
                                                                    {MB.map(diadiem => (
                                                                        <li key={diadiem.madiadiem}><a href="">{diadiem.tendiadiem}</a></li>

                                                                    ))}
                                                                    <li><a value="MB" className="fw-bold text-decoration-underline"
                                                                        href="/travel"
                                                                        title="/du-lich-viet-nam/tour-mien-trung" >Xem tất cả</a>
                                                                    </li>
                                                                </ul>
                                                            </div>
                                                        </div>
                                                        <div className="col-lg-3 col-6">
                                                            <div className="col-megamenu">
                                                                <h6 className="title fw-bold text-uppercase"><a href="/du-lich-viet-nam/tour-mien-trung"
                                                                    title="/du-lich-viet-nam/tour-mien-trung">Tour Miền Trung</a></h6>
                                                                <ul className="list-unstyled">
                                                                    {MT.map(diadiem => (
                                                                        <li key={diadiem.madiadiem}><a href="">{diadiem.tendiadiem}</a></li>

                                                                    ))}
                                                                    <li><a value="MT" className="fw-bold text-decoration-underline"
                                                                        href="/travel"
                                                                        title="/du-lich-viet-nam/tour-mien-trung">Xem tất cả</a></li>
                                                                </ul>
                                                            </div>
                                                        </div>
                                                        <div className="col-lg-3 col-6">
                                                            <div className="col-megamenu">
                                                                <h6 className="title fw-bold text-uppercase"><a href="/du-lich-viet-nam/tour-mien-tay"
                                                                    title="/du-lich-viet-nam/tour-mien-tay">Tour Miền Tây Nam Bộ</a></h6>
                                                                <ul className="list-unstyled">
                                                                    {MTNB.map(diadiem => (
                                                                        <li key={diadiem.madiadiem}><a href="">{diadiem.tendiadiem}</a></li>

                                                                    ))}
                                                                    <li><a value="MTNB" className="fw-bold text-decoration-underline"
                                                                        href="/travel"
                                                                        title="/du-lich-viet-nam/tour-mien-tay">Xem tất cả</a></li>
                                                                </ul>
                                                            </div>
                                                        </div>
                                                        <div className="col-lg-3 col-6">
                                                            <div className="col-megamenu">
                                                                <h6 className="title fw-bold text-uppercase"><a href="/du-lich-viet-nam/tour-mien-dong"
                                                                    title="/du-lich-viet-nam/tour-mien-dong">Tour Miền Đông Nam Bộ</a></h6>
                                                                <ul className="list-unstyled">
                                                                    {MDNB.map(diadiem => (
                                                                        <li key={diadiem.madiadiem}><a href="">{diadiem.tendiadiem}</a></li>

                                                                    ))}
                                                                    <li><a value="MDNB" className="fw-bold text-decoration-underline"
                                                                        href="/travel"
                                                                        title="/du-lich-viet-nam/tour-mien-dong">Xem tất cả</a></li>
                                                                </ul>
                                                            </div>
                                                        </div>
                                                    </div>

                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </li>
                                <li className="nav-item dropdown me-4"><a className="nav-link" href="https://vietravelmice.com" target="_blank"
                                    rel="nofollow" role="button">Vietravel MICE</a></li>
                                <li className="nav-item dropdown me-4"><a className="nav-link dropdown-toggle transport-menu" href="#"
                                    role="button" data-bs-toggle="dropdown" aria-expanded="false">Vận chuyển</a>
                                    <ul className="dropdown-menu" aria-labelledby="navbarDropdown">
                                        <li><a className="dropdown-item" href="http://car4rent.com/" target="_blank"
                                            rel="nofollow noreferrer">Thuê xe</a></li>
                                        <li><a className="dropdown-item" href="https://www.vietravelairlines.com" target="_blank"
                                            rel="nofollow noreferrer">Vé máy bay</a></li>
                                    </ul>
                                </li>
                                <li className="nav-item dropdown me-4"><a className="nav-link dropdown-toggle news-menu" href="#"
                                    id="navbarDropdown" role="button" data-bs-toggle="dropdown" aria-expanded="false">Tin tức</a>
                                    <ul className="dropdown-menu" aria-labelledby="navbarDropdown">
                                        <li><a className="dropdown-item" href="/tin-moi.aspx">Tin mới</a></li>
                                        <li><a className="dropdown-item" href="/tin-tuc-du-lich.aspx">Tin tức du lịch</a></li>
                                        <li><a className="dropdown-item" href="/cam-nang-du-lich.aspx">Cẩm nang du lịch</a></li>
                                        <li><a className="dropdown-item" href="/kinh-nghiem-du-lich.aspx">Kinh nghiệm du lịch</a></li>
                                    </ul>
                                </li>
                                <li className="nav-item"><a className="nav-link dropdown-toggle promotion-menu" href="#promotion"
                                    data-bs-toggle="dropdown" aria-expanded="false">Khuyến mãi</a>
                                    <div className="dropdown-menu promotion megamenu" role="menu" data-bs-popper="none">
                                        <div className="row p-lg-5">
                                            <div className="col-md-12 col-sm-12">
                                                <ul className="list-unstyled">
                                                    <li><a
                                                        href="https://www.vietravel.com/vn/tin-khuyen-mai/du-lich-tha-ga-voi-uu-dai-den-3-trieu-dong-tu-vietravel-jcb-v15193.aspx">Du
                                                        lịch thả ga với ưu đãi đến 3 triệu đồng từ Vietravel &amp; JCB</a></li>
                                                    <li><a
                                                        href="https://travel.com.vn/tin-tuc-du-lich/uu-dai-trong-tam-tay-du-lich-ngay-cung-vietravel-va-vnpay-v15319.aspx">Ưu
                                                        đãi trong tầm tay - Du lịch ngay cùng Vietravel và VNPAY</a></li>
                                                    <li><a
                                                        href="https://travel.com.vn/tin-tuc-du-lich/thoa-suc-vui-choi-cung-vietravel-voi-hang-tram-tour-chat-luong-chi-co-tai-chuong-trinh-khuyen-mai-he-2024--v15341.aspx">Chỉ
                                                        có tại Vietravel: Giảm 800.000 đồng khi thanh toán tour bằng thẻ tín dụng Sacombank</a></li>
                                                    <li><a
                                                        href="https://www.vietravel.com/vn/tin-khuyen-mai/sieu-hoi-uu-dai-nhan-ngay-15-trieu-dong-khi-thanh-toan-hoa-don-tour-tai-vietravel-bang-the-tin-dung-vib-v15382.aspx">Siêu
                                                        hội ưu đãi: Nhận ngay 1,5 triệu đồng khi thanh toán hóa đơn tour tại Vietravel bằng thẻ tín
                                                        dụng VIB</a></li>
                                                </ul>
                                            </div>
                                            <div className="col-md-9 col-sm-12">
                                                <div className="row g-3"></div>
                                            </div>
                                        </div>
                                    </div>
                                </li>
                                <li className="nav-item"><a className="nav-link" href="https://vietravelplus.com/" rel="nofollow noreferrer"
                                    target="_blank"> VietravelPlus </a></li>
                                <li className="nav-item"><a className="nav-link" href="/lien-he.aspx"> Liên hệ </a></li>
                            </ul>
                            <div className="navbar-nav ms-auto right">
                                <div className="form-search">
                                    <form action="" method="">
                                        <label for="submit" className="d-none">Từ khoá</label>
                                        <input type="text" name="search" className="ipt" placeholder="Bắt đầu tìm kiếm..." value=""></input>
                                        <input type="submit" name="submit" title="Tìm kiếm" className="sm" value=""></input>
                                        <FontAwesomeIcon icon={faMagnifyingGlass} />
                                        <div className="form-search-wrapper"></div>
                                    </form>
                                </div>

                                <div className="group-features">
                                    {mataikhoan !== undefined && mataikhoan !== null ? (
                                        <>
                                            <div className="dropdown">
                                                <div className="notice item">
                                                    <a title="Thông báo" id="dropdownMenuLink" className="position-relative"
                                                        aria-expanded="false" href="#notify" role="button">
                                                        <FontAwesomeIcon icon={faBell} />
                                                    </a>
                                                    <ul className="dropdown-menu notify-drop" aria-labelledby="dropdownMenuLink">
                                                        <div className="notify-drop-title">
                                                            <div className="row">
                                                                <div className="col-md-6 col-sm-6 col-xs-6">Thông báo (<b>0</b>)</div>
                                                                <div className="col-md-6 col-sm-6 col-xs-6 text-right"></div>
                                                            </div>
                                                        </div>
                                                        <div className="notify-drop-content">
                                                            <p className="no-notify">Hey, chưa có tin mới. Gặp lại bạn sau nhé.</p>
                                                        </div>
                                                    </ul>
                                                </div>
                                            </div>
                                            <div className="wishlist item">
                                                <a className="" href="/Profile"><FontAwesomeIcon icon={faHeart} /></a>
                                            </div>
                                            <div className="account item">
                                                <div className="image me-3">
                                                    <RouterLink to="/profile">
                                                        <img className="rounded-circle" alt="" src={User.anhdaidien} loadersrc="" />
                                                    </RouterLink>
                                                </div>
                                            </div>
                                        </>
                                    ) : (
                                        <div className="account item">
                                            <Link title="Tài khoản" className="" to="/login">
                                                <FontAwesomeIcon icon={faUser} />
                                            </Link>
                                        </div>
                                    )}
                                </div>

                            </div>
                        </div>
                    </div>
                </nav>
            </header>
        </>
    );
};
export default Header;