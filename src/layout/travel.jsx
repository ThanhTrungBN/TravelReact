import React, { useEffect, useState } from 'react';
import { loadTourMoi, loadTourUuDai, loadTourDesc, loadTourAsc, searchTours, loadTourdanhmuc, searchPrice } from '../services/travel.services.js';
import "../assets/css/style_home.css"
import { Link } from 'react-router-dom';
import { useNavigate } from 'react-router-dom';
import { faTicketAlt, faPlus, faShoppingCart } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { loadTourchitietID } from '../services/detail.services.js'
import Pagination from '../components/page.jsx';
import { formatDate, formatNumber } from "../constant/help.js";
import { Slider, Switch } from 'antd';
const Travel = function () {
    const [tours, setTours] = useState([]);
    const navigate = useNavigate();
    const handleTourDetail = (matour) => {
        navigate(`/travel/${matour}`);
    };
    const [disabled, setDisabled] = useState(false);
    const onChange = (checked) => {
        setDisabled(checked);
    };
    const [minPrice, setMinPrice] = useState(1000000);
    const [maxPrice, setMaxPrice] = useState(50000000);
    const [currentPage, setCurrentPage] = useState(1);
    const [itemsPerPage] = useState(9);
    const indexOfLastItem = currentPage * itemsPerPage;
    const indexOfFirstItem = indexOfLastItem - itemsPerPage;
    const currentItems = tours.slice(indexOfFirstItem, indexOfLastItem);
    const [tieudetour, setTieudetour] = useState('');
    const [noikhoihanh, setNoikhoihanh] = useState('');
    const paginate = pageNumber => setCurrentPage(pageNumber);
    const handleTourPay = (matour) => {
        navigate(`/pay/${matour}`);
    };
    const handleSearch = async () => {
        try {
            const tours = await searchTours(currentPage, itemsPerPage, tieudetour, noikhoihanh);
            setTours(tours);
        } catch (error) {
            console.error('Error:', error);
        }
    };
    const handleSearchPrice = async (values) => {
        console.log(minPrice);
        setMinPrice(values[0]);
        setMaxPrice(values[1]);

        try {
            const results = await searchPrice(values[0], values[1]);
            setTours(results);
        } catch (error) {
            console.error('Error searching tours:', error);
        }
    };
    const [selectedOption, setSelectedOption] = useState('');
    const Desc = async () => {
        try {
            const data = await loadTourDesc();
            setTours(data);
        } catch (error) {
            console.error('Error fetching :', error);
        }
    };
    const DanhmucTour = async () => {
        try {
            const data = await loadTourdanhmuc(selectedOption);
            setTours(data);
        } catch (error) {
            console.error('Error fetching :', error);
        }
    }
    const Asc = async () => {
        try {
            const data = await loadTourAsc();
            setTours(data);
        } catch (error) {
            console.error('Error fetching :', error);
        }
    };
    const handleChange = () => {
        if (selectedOption === "1") {
            Desc();
        }
        if (selectedOption === "0") {
            Asc();
        }
        if (selectedOption === "MB") {
            DanhmucTour();
        }
        if (selectedOption === "MT") {
            DanhmucTour();
        }
        if (selectedOption === "MTNB") {
            DanhmucTour();
        }
        if (selectedOption === "MDNB") {
            DanhmucTour();
        }
    };
    const handleKeyDown = (event) => {
        if (event.key === 'Enter') {
            handleSearch();
        }
    };
    useEffect(() => {
        handleChange();
    }, [selectedOption]);
    useEffect(() => {
        const fetchTours = async () => {
            try {
                const data = await loadTourMoi();
                setTours(data);
            } catch (error) {
                console.error('Error fetching :', error);
            }
        };
        fetchTours();
    }, []);
    return (
        <>
            <div class="tour-search">
                <div class="container">
                    <div class="row">
                        <ul class="breadcrumbs__wrapper d-flex align-items-center" itemtype="http://schema.org/BreadcrumbList">
                            <li>
                                <li itemprop="itemListElement" itemscope="" itemtype="http://schema.org/ListItem"><a
                                    href="https://travel.com.vn" itemprop="item"><span itemprop="name">Du lịch</span></a>
                                    <meta itemprop="position" content="1" />
                                </li> » <li><i class="icon icon--chevron - right px - 2"></i></li>
                                <li itemprop="itemListElement" itemscope="" itemtype="http://schema.org/ListItem"><a
                                    href="https://travel.com.vn/du-lich/viet-nam.aspx" itemprop="item"><span itemprop="name">Du lịch trong
                                        nước</span></a>
                                    <meta itemprop="position" content="2" />
                                </li> » <li><i class="icon icon--chevron - right px - 2"></i></li>
                                <li itemprop="itemListElement" itemscope="" itemtype="http://schema.org/ListItem"><a
                                    href="https://travel.com.vn/du-lich-viet-nam/tour-mien-bac.aspx" itemprop="item"><span
                                        itemprop="name">Tour Miền Bắc</span></a>
                                    <meta itemprop="position" content="3" />
                                </li> » <li><i class="icon icon--chevron - right px - 2"></i></li>
                                <li itemprop="itemListElement" itemscope="" itemtype="http://schema.org/ListItem"><a
                                    href="https://travel.com.vn/du-lich-ha-noi.aspx" itemprop="item"><span itemprop="name">Du lịch Hà
                                        Nội</span></a>
                                    <meta itemprop="position" content="4" />
                                </li>
                            </li>
                        </ul>
                    </div>
                </div>
                <div class="container">
                    <div class="row">
                        <div class="col-md-3  col-12 sidebar sidebar-filter">
                            <div class="sidebar-inner">
                                <div>
                                    <div
                                        class="tour-search-result__filter__brand bg-light p-3 d-flex justify-content-between align-items-center">
                                        <h2 class="font-weight-bold">Bộ lọc tìm kiếm</h2><a
                                            class="btn product-item__summary__btn-login closeSlidebar d-sm-block d-md-none">×</a>
                                    </div>
                                    <div class="location-container">
                                        <div class="">
                                            <div
                                                class="tour-search-result__filter__heading  px-3 py-2 d-flex justify-content-between align-items-center">
                                                <span class="fw-bold">Hà Nội</span>
                                            </div>
                                            <div class="pt-2">
                                                <div class="start-to-stop mb-3">
                                                    <h5 class="point-start-title s-title">Loại hình tour</h5><select value={selectedOption} onChange={(e) => setSelectedOption(e.target.value)}
                                                        class="form-control dropdown Filter" name="TourKindId">
                                                        <option selected="" >--- Tất cả ---</option>
                                                        <option value="MB">Tour Miền Bắc</option>
                                                        <option value="MT">Tour Miền Trung</option>
                                                        <option value="MTNB">Tour Miền Tây Nam Bộ</option>
                                                        <option value="MTDNB">Tour Miền Đông Nam Bộ</option>
                                                    </select>
                                                </div>
                                                <div class="start-to-stop mb-3">
                                                    <h5 class="point-start-title s-title">Tiêu Đề</h5>
                                                    <div class=" css-b62m3t-container"><span id="react-select-6-live-region"
                                                        class="css-7pg0cj-a11yText"></span><span aria-live="polite" aria-atomic="false"
                                                            aria-relevant="additions text" class="css-7pg0cj-a11yText"></span>
                                                        <div class=" css-13cymwt-control">
                                                            <div class=" css-hlgwow">
                                                                <div class=" css-1dimb5e-singleValue">--- Tất cả ---</div>
                                                                <div class=" css-19bb58m"><input class="" type="text" value={tieudetour}
                                                                    onChange={(e) => setTieudetour(e.target.value)} onKeyDown={handleKeyDown}
                                                                    style={{
                                                                        color: 'inherit',
                                                                        background: 'url("") center',
                                                                        opacity: 1,
                                                                        width: '100%',
                                                                        gridArea: '1 / 2',
                                                                        font: 'inherit',
                                                                        minWidth: '2px',
                                                                        border: '0px',
                                                                        margin: '0px',
                                                                        outline: '0px',
                                                                        padding: '0px'
                                                                    }} />
                                                                </div>
                                                            </div>

                                                        </div>
                                                    </div>
                                                    <h5 class="point-stop-title s-title mt-4">Nơi Khởi Hành</h5>
                                                    <div class=" css-b62m3t-container"><span id="react-select-7-live-region"
                                                        class="css-7pg0cj-a11yText"></span><span aria-live="polite" aria-atomic="false"
                                                            aria-relevant="additions text" class="css-7pg0cj-a11yText"></span>
                                                        <div class=" css-13cymwt-control">
                                                            <div class=" css-hlgwow">
                                                                <div class=" css-1dimb5e-singleValue">---Nơi Khởi Hành---</div>
                                                                <div class=" css-19bb58m" ><input class="" type='text' value={noikhoihanh}
                                                                    onChange={(e) => setNoikhoihanh(e.target.value)} onKeyDown={handleKeyDown}
                                                                    style={{
                                                                        color: 'inherit',
                                                                        background: 'url("") center', // Thêm url("") để giữ nguyên giá trị background
                                                                        opacity: 1,
                                                                        width: '100%',
                                                                        gridArea: '1 / 2',
                                                                        font: 'inherit',
                                                                        minWidth: '2px',
                                                                        border: '0px',
                                                                        margin: '0px',
                                                                        outline: '0px',
                                                                        padding: '0px'
                                                                    }} />
                                                                </div>
                                                            </div>
                                                            <div class=" css-1wy0on6"><span class=" css-1u9des2-indicatorSeparator"></span>
                                                                <div class=" css-1xc3v61-indicatorContainer" aria-hidden="true"><svg height="20"
                                                                    width="20" viewBox="0 0 20 20" aria-hidden="true" focusable="false"
                                                                    class="css-8mmkcg">
                                                                    <path
                                                                        d="M4.516 7.548c0.436-0.446 1.043-0.481 1.576 0l3.908 3.747 3.908-3.747c0.533-0.481 1.141-0.446 1.574 0 0.436 0.445 0.408 1.197 0 1.615-0.406 0.418-4.695 4.502-4.695 4.502-0.217 0.223-0.502 0.335-0.787 0.335s-0.57-0.112-0.789-0.335c0 0-4.287-4.084-4.695-4.502s-0.436-1.17 0-1.615z">
                                                                    </path>
                                                                </svg></div>
                                                            </div>
                                                        </div>
                                                    </div>
                                                </div>
                                                <div class="tour-search-result__filter__block mb-4">
                                                    <h5 class="s-title">Số ngày</h5>
                                                    <div class="btn-group tour-search-result__filter__room" role="group" aria-label="Basic example">
                                                        <div class="row g-2">
                                                            <div class="col-6"><button type="button" class="btn w-100" data-url="SoNgay" value="1-3"
                                                                name="AmountDate"
                                                                style={{
                                                                    backgroundColor: 'rgb(255, 255, 255)',
                                                                    color: 'rgb(33, 37, 41)'
                                                                }}>1-3 ngày</button>
                                                            </div>
                                                            <div class="col-6"><button type="button" class="btn w-100" data-url="SoNgay" value="4-7"
                                                                name="AmountDate"
                                                                style={{
                                                                    backgroundColor: 'rgb(255, 255, 255)',
                                                                    color: 'rgb(33, 37, 41)'
                                                                }}>4-7 ngày</button>
                                                            </div>
                                                            <div class="col-6"><button type="button" class="btn w-100" data-url="SoNgay" value="8-14"
                                                                name="AmountDate"
                                                                style={{
                                                                    backgroundColor: 'rgb(255, 255, 255)',
                                                                    color: 'rgb(33, 37, 41)'
                                                                }}>8-14 ngày</button>
                                                            </div>
                                                            <div class="col-6"><button type="button" class="btn w-100" data-url="SoNgay" value="15-30"
                                                                name="AmountDate"
                                                                style={{
                                                                    backgroundColor: 'rgb(255, 255, 255)',
                                                                    color: 'rgb(33, 37, 41)'
                                                                }}>trên 14
                                                                ngày</button></div>
                                                        </div>
                                                    </div>
                                                </div>
                                                <div class="tour-search-result__filter__block mb-4">
                                                    <h5 class="date-go-to-back-title s-title">Ngày đi</h5>
                                                    <div class="datepciker-wrap"><i class="fal fa-calendar-minus"></i>
                                                        <div class="calendarWrap bg-transparent" role="button" aria-expanded="false"><input
                                                            readonly="" class="form-control input-date input-noborder bg-transparent"
                                                            id="date-range-hotel" value="02/06/2024" /></div>
                                                    </div>
                                                </div>
                                                <div class="tour-search-result__filter__block mb-4">
                                                    <h5 class="s-title">Số người</h5>
                                                    <div class="btn-group tour-search-result__filter__room" role="group" aria-label="Basic example">
                                                        <div class="row g-2">
                                                            <div class="col-6"><button type="button" class="btn w-100" data-url="so_nguoi" value="1"
                                                                name="AmountPerson"
                                                                style={{
                                                                    backgroundColor: 'rgb(255, 255, 255)',
                                                                    color: 'rgb(33, 37, 41)'
                                                                }}>1 người</button>
                                                            </div>
                                                            <div class="col-6"><button type="button" class="btn w-100" data-url="so_nguoi" value="2"
                                                                name="AmountPerson"
                                                                style={{
                                                                    backgroundColor: 'rgb(255, 255, 255)',
                                                                    color: 'rgb(33, 37, 41)'
                                                                }}>2 người</button>
                                                            </div>
                                                            <div class="col-6"><button type="button" class="btn w-100" data-url="so_nguoi" value="3-5"
                                                                name="AmountPerson"
                                                                style={{
                                                                    backgroundColor: 'rgb(255, 255, 255)',
                                                                    color: 'rgb(33, 37, 41)'
                                                                }}>3-5 người</button>
                                                            </div>
                                                            <div class="col-6"><button type="button" class="btn w-100" data-url="so_nguoi" value="6"
                                                                name="AmountPerson"
                                                                style={{
                                                                    backgroundColor: 'rgb(255, 255, 255)',
                                                                    color: 'rgb(33, 37, 41)'
                                                                }}>5+ người</button>
                                                            </div>
                                                        </div>
                                                    </div>
                                                </div>
                                                <p class="s-mark-title">Bộ lọc tìm kiếm</p>
                                                <h5 class="s-title">Ngân sách của Quý khách</h5>
                                                <div class="ranger-price giatien">
                                                    <div>
                                                        <>
                                                            <Slider range value={[minPrice, maxPrice]} min={1000000} max={50000000} disabled={disabled} onChange={handleSearchPrice} />
                                                            Disabled: <Switch size="small" checked={disabled} />
                                                        </>
                                                        <p>0&nbsp;₫ - 200.000.000&nbsp;₫</p>
                                                    </div>
                                                </div>
                                                <h5 class="s-title">Hiển thị những chuyến đi có</h5>
                                                <div class="filter-sale">
                                                    <div class="filter-sale-item sale"><label class="switch"><input type="checkbox"
                                                        class="promotion" name="Promotion" value="0" /><span
                                                            class="slider round"></span></label>Khuyến mãi</div>
                                                    <div class="filter-sale-item sale "><label class="switch"><input type="checkbox"
                                                        class="concho active" name="RemainPax" value="0" /><span
                                                            class="slider round"></span></label>Còn chỗ</div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div class="col-md-9 col-12 main-content">
                            <section class="mb-3" itemtype="http://schema.org/Place">
                                <h1 class="py-4 h2 fw-bold heading text-center">Du lịch Hà Nội </h1>
                                <div class="py-2">
                                    <p class="card-text mb-1 text-justify">Hà Nội là thủ đô ngàn năm văn hiến, còn lưu dấu nhiều di tích như
                                        Hồ Gươm, Cầu Thê Húc, Chùa Quán Sứ, Hồ Tây, 36 phố phường. Hà Nội có bốn mùa, luôn mang đến nhiều hoài
                                        niệm khó phai, mỗi mùa một vẻ, xuân lễ hội, hạ tươi thắm, thu quyến rũ và đông ấn tượng. Món ngon có
                                        Phở, Chả cá Lã Vọng, bánh tôm Hồ Tây.</p>
                                    <div>Đăng ký tour<strong class="mx-1"><a href="/du-lich-ha-noi.aspx">Hà Nội</a></strong>cùng Vietravel,
                                        Quý khách có thể đến khám phá các điểm đến nổi bật sau: <strong><a
                                            href="/mien-bac/tour-ho-hoan-kiem.aspx" title="Tour Hồ Hoàn Kiếm">Hồ Hoàn Kiếm</a></strong>,
                                        <strong><a href="/mien-bac/tour-den-ngoc-son.aspx" title="Tour Đền Ngọc Sơn">Đền Ngọc
                                            Sơn</a></strong>, <strong><a href="/mien-bac/tour-van-mieu.aspx" title="Tour Văn Miếu">Văn
                                                Miếu</a></strong>, <strong><a href="/mien-bac/tour-chua-tran-quoc.aspx"
                                                    title="Tour Chùa Trấn Quốc">Chùa Trấn Quốc</a></strong>, <strong><a
                                                        href="/mien-bac/tour-lang-ho-chu-tich.aspx" title="Tour Lăng Hồ Chủ Tịch">Lăng Hồ Chủ
                                                        Tịch</a></strong><strong>, ...</strong>
                                    </div>
                                    <div>Để hiểu hơn về<a href="/du-lich-ha-noi.aspx"> Hà Nội</a> Mời Quý khách tham khảo <strong><a
                                        href="/kinh-nghiem/du-lich-ha-noi.aspx">Kinh nghiệm du lịch Hà Nội</a></strong></div>
                                    <p></p>
                                </div>
                            </section>
                            <div>
                                <div class="openSlidebar">
                                    <div class="order-by-filter mb-3 d-flex justify-content-between align-items-center">
                                        <div></div>
                                    </div>
                                </div>
                                <div class="d-block d-lg-block">
                                    <div class="order-by">
                                        <div class="order-by-title ">Chúng tôi tìm thấy <strong>182</strong> tours cho Quý khách.</div>
                                        <div class="order-by-left">
                                            <div class="order-wrap"><span>Sắp xếp theo</span><select value={selectedOption} onChange={(e) => setSelectedOption(e.target.value)} class="form-control dropdown Filter"
                                                id="sllOrder" name="sllOrder">
                                                <option>--- Chọn ---</option>
                                                <option value="1">Theo giá cao -&gt; thấp</option>
                                                <option value="0">Theo giá thấp -&gt; cao</option>
                                            </select>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div className="row row-cols-1 row-cols-md-3 g-4">
                                {currentItems.map(tour => (
                                    <div className="col promotion-search-result__result__item animate__bounceIn animate__animated" key={tour.matour}>
                                        <div className="card tour-item">
                                            <div className="position-relative">
                                                <div className="tour-item__image">
                                                    <a>
                                                        <img
                                                            src={tour.anhdaidien}
                                                            className="card-img-top img-fluid"
                                                            alt={tour.title}
                                                            title=""
                                                        />
                                                    </a>
                                                    <span className="tour-item__image-inner__icon-favorite">
                                                        <input type="hidden" value="" />
                                                        <label><i className="icon icon--heart"></i></label>
                                                    </span>
                                                    <div className="tour-item__image-inner__bottom">
                                                        <span className="tour-item__image-inner__bottom__category">
                                                            <i className="icon icon--good-price-tour mb-2"></i>Tiết kiệm
                                                        </span>
                                                    </div>
                                                    <div className="tour-item__image-inner__summary position-absolute">
                                                        <div className="tour-item__image-inner__summary__rating d-flex justify-content-end mb-2">
                                                            <span>9</span>
                                                        </div>
                                                        <div className="tour-item__image-inner__summary__review">
                                                            <p className="mb-1 text-end">358 quan tâm</p>
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                            <div className="card-body p-3">
                                                <p className="tour-item__date mb-1">{formatDate(tour.ngaythangnam)} - {tour.songaydi}</p>
                                                <h3 className="card-text tour-item__title mb-1">
                                                    <a href="">
                                                        {tour.tieudetour}
                                                    </a>
                                                </h3>
                                                <div className="tour-item__code">
                                                    <div>Mã tour:</div>
                                                    <div className="font-weight-bold">
                                                        <FontAwesomeIcon icon={faTicketAlt} /> {tour.matour}
                                                    </div>
                                                </div>
                                                <p className="tour-item__departure mb-3">
                                                    Nơi khởi hành: <span className="font-weight-bold">{tour.noikhoihanh}</span>
                                                </p>
                                                <div className="tour-item__price mb-2 w-100">
                                                    <div className="tour-item__price__wrapper">
                                                        <div className="tour-item__price--current fix-leftalign">
                                                            <span className="tour-item__price--current__number pe-2 mb-0">{formatNumber(tour.gia)}&nbsp;₫</span>
                                                        </div>
                                                        <div className="tour-item__price--current">
                                                            <div className="btn-book">
                                                                <a onClick={() => handleTourPay(tour.matour)} title="Đặt ngay" className="btn btn-primary btn-sm btnOptionTour">
                                                                    <FontAwesomeIcon icon={faShoppingCart} size="1x" />Đặt ngay
                                                                </a>
                                                            </div>
                                                            <div className="btn-block">
                                                                <a className="btn product-item__summary__btn-login product-item__summary__btn-logins" onClick={() => handleTourDetail(tour.matour)}>
                                                                    Xem chi tiết
                                                                </a>
                                                            </div>
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                            <div className="card-footer tour-item__footer px-3 mb-2 w-100 d-inline-flex justify-content-between align-items-center">
                                                <div className="tour-item__footer__add-to-compare d-inline-flex align-items-center addcomparegrid">
                                                    <FontAwesomeIcon icon={faPlus} />
                                                    <input type="hidden" />
                                                    <a>Thêm vào so sánh</a>
                                                </div>
                                                <div className="tour-item__footer__available-seat d-inline-flex align-items-center">
                                                    <span className="tour-item__footer__available-seat--text me-1">Số chỗ còn nhận</span>
                                                    <span className="tour-item__footer__available-seat--number">{tour.sochoconnhan}</span>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                ))}
                            </div>

                            <Pagination
                                totalItems={tours.length}
                                itemsPerPage={itemsPerPage}
                                currentPage={currentPage}
                                onPageChange={paginate}
                            />
                            <section class="mt-3 mb-3">
                                <h3 class="promotion-search-result__main__title fw-bold mb-3">Các tour đang tìm phổ biến</h3>
                                <div class="btn-group tour-search-result__filter__room mb-3" role="group" aria-label="Basic example">
                                    <div class="row g-2">
                                        <div class="col-auto"><button type="button" class="btn"><i class="icon icon--search me-2"></i><a
                                            href="https://travel.com.vn/du-lich-da-lat.aspx" rel="dofollow">Đà lạt</a></button></div>
                                        <div class="col-auto"><button type="button" class="btn"><i class="icon icon--search me-2"></i><a
                                            href="https://travel.com.vn/du-lich-ha-long.aspx" rel="dofollow">hạ long</a></button></div>
                                        <div class="col-auto"><button type="button" class="btn"><i class="icon icon--search me-2"></i><a
                                            href="https://travel.com.vn/du-lich-phan-thiet.aspx" rel="dofollow">phan thiết</a></button>
                                        </div>
                                        <div class="col-auto"><button type="button" class="btn"><i class="icon icon--search me-2"></i><a
                                            href="https://travel.com.vn/du-lich-da-nang.aspx" rel="dofollow">du lịch đà nẵng </a></button>
                                        </div>
                                    </div>
                                </div>
                            </section>
                            <section class="hot-destination">
                                <h3 class="promotion-search-result__main__title fw-bold mb-3">Các điểm đến ưa chuộng</h3>
                                <div class="row row-cols-1 row-cols-md-4 g-4"></div>
                            </section>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}
export default Travel;