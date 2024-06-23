import { useEffect, useState } from "react";
import "../assets/css/style_home.css";
import { useNavigate } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCarSide } from '@fortawesome/free-solid-svg-icons';
import { faHotel } from '@fortawesome/free-solid-svg-icons';
import { faPlaneUp,faTicket } from '@fortawesome/free-solid-svg-icons';
import { faMagnifyingGlass, faMapMarkerAlt, faCalendarAlt, faStar } from '@fortawesome/free-solid-svg-icons';
import { loadTourUuDai ,loadTourdanhmuc} from "../services/travel.services";
import { formatDate,formatNumber } from "../constant/help.js";

const Home = function () {
  
  
    const [toursale, setToursale] = useState([])
    const navigate = useNavigate();
    const handleTourDetail = (matour) => {
        navigate(`/travel/${matour}`);
    };
    useEffect(() => {
        const fetchToursSale = async () => {
            try {
                const data = await loadTourUuDai();
                setToursale(data);
            } catch (error) {
                console.error('Error fetching tours:', error);
            }
        };
        fetchToursSale();
    }, []);

    return (
        <>
            <main role="main">
                <div class="home-page">
                    <section class="animate__fadeIn  animate__animated ">
                        <div class="slick-slider slick-initialized" dir="ltr"><button type="button" data-role="none"
                            class="slick-arrow slick-prev" style={{ display: 'block' }}> Previous</button>
                            <div class="slick-list">
                                <div class="slick-track" style={{ width: '10402px', opacity: 1, transform: 'translate3d(-4458px, 0px, 0px)' }}>
                                    <div data-index="-1" tabindex="-1" class="slick-slide slick-cloned" aria-hidden="true"
                                        style={{ width: '1486px' }}>
                                        <div>
                                            <div class="slick-slide" tabindex="-1" style={{ width: '100%', display: 'inline-block' }}>
                                                <div class="image"><a tabindex="-1" title="TTX 02"
                                                    href="https://travel.com.vn/du-lich-nuoc-ngoai/tour-chau-au.aspx?utm_source=pr&amp;utm_medium=topbanner&amp;utm_campaign=ttx24"><img
                                                        src="https://media.travel.com.vn/SlideShow/sl_240507_sl_240308_KV TTX-02.jpg" alt="TTX 02"
                                                        width="1920" height="570" class="d-block w-100" /></a></div>
                                            </div>
                                        </div>
                                    </div>
                                    <div data-index="0" class="slick-slide" tabindex="-1" aria-hidden="true"
                                        style={{ outline: 'none', width: '1486px' }}>
                                        <div>
                                            <div class="slick-slide" tabindex="-1" style={{ width: '100%', display: 'inline-block' }}>
                                                <div class="image"><a tabindex="-1" title="ctrinh thieu nhi"
                                                    href="https://travel.com.vn/tim-tour/1/2/2024-05-27/0/0/ket-qua.aspx?concho=1&amp;block=0&amp;utm_source=pr&amp;utm_medium=topbanner&amp;utm_campaign=ctkmhe24thieunhi"><img
                                                        src="https://media.travel.com.vn/SlideShow/sl_240528_UuDaiChoBe_1920x570px.jpg"
                                                        alt="ctrinh thieu nhi" width="1920" height="570" class="d-block w-100" /></a></div>
                                            </div>
                                        </div>
                                    </div>
                                    <div data-index="1" class="slick-slide" tabindex="-1" aria-hidden="true"
                                        style={{ outline: 'none', width: '1486px' }}>
                                        <div>
                                            <div class="slick-slide" tabindex="-1" style={{ width: '100%', display: 'inline-block' }}>
                                                <div class="image"><a tabindex="-1" title="ctkm he 2024"
                                                    href="https://travel.com.vn/tin-tuc-du-lich/thoa-suc-vui-choi-cung-vietravel-voi-hang-tram-tour-chat-luong-chi-co-tai-chuong-trinh-khuyen-mai-he-2024--v15341.aspx"><img
                                                        src="https://media.travel.com.vn/SlideShow/sl_240428_KV CTKM-He2024_TopBanner 1920-570px (1).jpg"
                                                        alt="ctkm he 2024" width="1920" height="570" class="d-block w-100" /></a></div>
                                            </div>
                                        </div>
                                    </div>
                                    <div data-index="2" class="slick-slide slick-active slick-current" tabindex="-1" aria-hidden="false"
                                        style={{ outline: 'none', width: '1486px' }}>
                                        <div>
                                            <div class="slick-slide" tabindex="-1" style={{ width: '100%', display: 'inline-block' }}>
                                                <div class="image"><a tabindex="-1" title="TTX 02"
                                                    href="https://travel.com.vn/du-lich-nuoc-ngoai/tour-chau-au.aspx?utm_source=pr&amp;utm_medium=topbanner&amp;utm_campaign=ttx24"><img
                                                        src="https://media.travel.com.vn/SlideShow/sl_240507_sl_240308_KV TTX-02.jpg" alt="TTX 02"
                                                        width="1920" height="570" class="d-block w-100" /></a></div>
                                            </div>
                                        </div>
                                    </div>
                                    <div data-index="3" tabindex="-1" class="slick-slide slick-cloned" aria-hidden="true"
                                        style={{ width: '1486px' }}>
                                        <div>
                                            <div class="slick-slide" tabindex="-1" style={{ width: '100%', display: 'inline-block' }}>
                                                <div class="image"><a tabindex="-1" title="ctrinh thieu nhi"
                                                    href="https://travel.com.vn/tim-tour/1/2/2024-05-27/0/0/ket-qua.aspx?concho=1&amp;block=0&amp;utm_source=pr&amp;utm_medium=topbanner&amp;utm_campaign=ctkmhe24thieunhi"><img
                                                        src="https://media.travel.com.vn/SlideShow/sl_240528_UuDaiChoBe_1920x570px.jpg"
                                                        alt="ctrinh thieu nhi" width="1920" height="570" class="d-block w-100" /></a></div>
                                            </div>
                                        </div>
                                    </div>
                                    <div data-index="4" tabindex="-1" class="slick-slide slick-cloned" aria-hidden="true"
                                        style={{ width: '1486px' }}>
                                        <div>
                                            <div class="slick-slide" tabindex="-1" style={{ width: '100%', display: 'inline-block' }}>
                                                <div class="image"><a tabindex="-1" title="ctkm he 2024"
                                                    href="https://travel.com.vn/tin-tuc-du-lich/thoa-suc-vui-choi-cung-vietravel-voi-hang-tram-tour-chat-luong-chi-co-tai-chuong-trinh-khuyen-mai-he-2024--v15341.aspx"><img
                                                        src="https://media.travel.com.vn/SlideShow/sl_240428_KV CTKM-He2024_TopBanner 1920-570px (1).jpg"
                                                        alt="ctkm he 2024" width="1920" height="570" class="d-block w-100" /></a></div>
                                            </div>
                                        </div>
                                    </div>
                                    <div data-index="5" tabindex="-1" class="slick-slide slick-cloned" aria-hidden="true"
                                        style={{ width: '1486px' }}>
                                        <div>
                                            <div class="slick-slide" tabindex="-1" style={{ width: '100%', display: 'inline-block' }}>
                                                <div class="image"><a tabindex="-1" title="TTX 02"
                                                    href="https://travel.com.vn/du-lich-nuoc-ngoai/tour-chau-au.aspx?utm_source=pr&amp;utm_medium=topbanner&amp;utm_campaign=ttx24"><img
                                                        src="https://media.travel.com.vn/SlideShow/sl_240507_sl_240308_KV TTX-02.jpg" alt="TTX 02"
                                                        width="1920" height="570" class="d-block w-100" /></a></div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div><button type="button" data-role="none" class="slick-arrow slick-next" style={{ display: 'block' }}>
                                Next</button>
                        </div>
                    </section>
                    <section class="searchbox position-relative mb-5  d-md-block d-lg-block">
                        <div class="container container-seach-box">
                            <nav>
                                <div class="nav nav-tabs searchbox__nav-tabs d-inline-flex" id="nav-tab" role="tablist"><button
                                    class="nav-link d-flex flex-column align-items-center px-4 py-3 fw-bold active" id="nav-tour-tab"
                                    data-bs-toggle="tab" data-bs-target="#nav-tour" type="button" role="tab" aria-controls="nav-tour"
                                    aria-selected="true"> <FontAwesomeIcon icon={faCarSide} />Tour du lịch<br />trọn gói</button><button
                                        class="nav-link d-flex flex-column align-items-center px-4 py-3 fw-bold dltn-tet "
                                        id="nav-tour-tab-tet" data-bs-toggle="tab" type="button" role="tab" aria-selected="true"><FontAwesomeIcon icon={faHotel} />Tour du lịch<br />Cao cấp <small
                                            class="badge btn-warning"></small></button><button
                                                class="nav-link d-flex flex-column align-items-center px-4 py-3 fw-bold " data-bs-toggle="tab"
                                                type="button" role="tab" aria-selected="false"><FontAwesomeIcon icon={faHotel} />Khách sạn <small
                                                    class="badge btn-danger">Ưu đãi hot</small></button><button
                                                        class="nav-link d-flex flex-column align-items-center px-4 py-3 fw-bold " data-bs-toggle="tab"
                                                        type="button" role="tab" aria-selected="false"> <FontAwesomeIcon icon={faPlaneUp} />Vé máy
                                        bay</button><button class="nav-link d-flex flex-column align-items-center px-4 py-3 fw-bold "
                                            data-bs-toggle="tab" type="button" role="tab" aria-selected="false"><FontAwesomeIcon icon={faPlaneUp} />+<FontAwesomeIcon icon={faHotel} />Combo<br />Vé máy bay + Khách sạn</button><button
                                                class="nav-link d-flex flex-column align-items-center px-4 py-3 fw-bold " data-bs-toggle="tab"
                                                type="button" role="tab" aria-selected="false"><FontAwesomeIcon icon={faCarSide} />+<FontAwesomeIcon icon={faHotel} />Combo<br />Xe + Khách sạn</button><button
                                                    class="nav-link d-flex flex-column align-items-center px-4 py-3 fw-bold dltn " data-bs-toggle="tab"
                                                    type="button" role="tab" aria-selected="false"><FontAwesomeIcon icon={faMagnifyingGlass} /> Tra cứu
                                        Booking</button></div>
                            </nav>
                            <div class="tab-content searchbox__panel searchbox-tour" id="nav-tabContent">
                                <div class="tab-pane fade show active" id="nav-tour" role="tabpanel" aria-labelledby="nav-tour-tab">
                                    <div class="p-4">
                                        <div class="searchbox-tour">
                                            <div class="searchbox-tour__selector">
                                                <ul class="nav nav-pills mb-3" id="pills-tab" role="tablist">
                                                    <li class="nav-item me-3" role="presentation"><button class="nav-link dltn active"
                                                        id="pills-home-tab" data-bs-toggle="pill" data-bs-target="#pills-home" type="button"
                                                        role="tab" aria-controls="pills-home" aria-selected="true">Du lịch trong nước</button></li>
                                                    <li class="nav-item" role="presentation"><button class="nav-link dltn " id="pills-profile-tab"
                                                        data-bs-toggle="pill" data-bs-target="#pills-profile" type="button" role="tab"
                                                        aria-controls="pills-profile" aria-selected="false">Du lịch nước ngoài</button></li>
                                                </ul>
                                            </div>
                                            <div class="tab-content" id="pills-tabContent">
                                                <div class="tab-pane fade show active" id="pills-home" role="tabpanel"
                                                    aria-labelledby="pills-home-tab">
                                                    <div class="searchbox-tour__inbound">
                                                        <nav class="searchbox-tour__inbound__nav">
                                                            <div class="nav nav-tabs" id="nav-tab" role="tablist"><button class="nav-link active "
                                                                id="nav-package-tab" name="nav-package-tab" data-bs-toggle="tab" type="button"
                                                                role="tab" aria-selected="true">Tour trọn gói</button><button class="nav-link  "
                                                                    id="nav-destination-tab" name="nav-destination-tab" data-bs-toggle="tab" type="button"
                                                                    role="tab" aria-selected="false">Dịch vụ điểm đến</button></div>
                                                        </nav>
                                                        <div class="tab-content" id="nav-tabContent">
                                                            <div class="tab-pane fade show active" id="nav-package" role="tabpanel"
                                                                aria-labelledby="nav-package-tab">
                                                                <div class="container py-4">
                                                                    <div class="row">
                                                                        <div class="col-lg-8 col-md-12 col-sm-12 col-12 mb-3 mt-md-1 mb-lg-0">
                                                                            <div class="row destination-selector gx-0">
                                                                                <div class="col-md-5 col-sm-12 col-12 mb-3 mt-md-1 mb-lg-0">
                                                                                    <div class="input-search-location w-100 mb-1 px-2 py-1">
                                                                                        <div class="d-flex align-items-center">
                                                                                            <div class="flex-shrink-0 p-3"><FontAwesomeIcon icon={faMapMarkerAlt} />
                                                                                            </div>
                                                                                            <div class="flex-grow-1 position-relative"><label for="react-select-2-input"
                                                                                                class="mb-1">Điểm đi</label>
                                                                                                <div class=" css-b62m3t-container"><span id="react-select-2-live-region"
                                                                                                    class="css-7pg0cj-a11yText"></span><span aria-live="polite"
                                                                                                        aria-atomic="false" aria-relevant="additions text"
                                                                                                        class="css-7pg0cj-a11yText"></span>
                                                                                                    <div class=" css-13cymwt-control">
                                                                                                        <div class=" css-hlgwow">                                                                                                       
                                                                                                            <div class=" css-19bb58m" data-value="" ><input class="" placeholder="Nơi khởi hành"
                                                                                                                type="text"
                                                                                                                style={{
                                                                                                                    color: 'inherit',
                                                                                                                    background: '0px center',
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
                                                                                                        <div class=" css-1wy0on6"><span
                                                                                                            class=" css-1u9des2-indicatorSeparator"></span>
                                                                                                            <div class=" css-1xc3v61-indicatorContainer" aria-hidden="true"><svg
                                                                                                                height="20" width="20" viewBox="0 0 20 20" aria-hidden="true"
                                                                                                                focusable="false" class="css-8mmkcg">
                                                                                                                <path
                                                                                                                    d="M4.516 7.548c0.436-0.446 1.043-0.481 1.576 0l3.908 3.747 3.908-3.747c0.533-0.481 1.141-0.446 1.574 0 0.436 0.445 0.408 1.197 0 1.615-0.406 0.418-4.695 4.502-4.695 4.502-0.217 0.223-0.502 0.335-0.787 0.335s-0.57-0.112-0.789-0.335c0 0-4.287-4.084-4.695-4.502s-0.436-1.17 0-1.615z">
                                                                                                                </path>
                                                                                                            </svg></div>
                                                                                                        </div>
                                                                                                    </div>
                                                                                                </div>
                                                                                            </div>
                                                                                        </div>
                                                                                    </div>
                                                                                </div>
                                                                                <div
                                                                                    class="col-2  d-none d-md-inline-flex  d-lg-inline-flex  d-md-inline-flex justify-content-center align-items-center">
                                                                                    <i class="icon icon--equivalent"></i>
                                                                                </div>
                                                                                <div class="col-md-5 col-sm-12 col-12 mb-3 mt-md-1 mb-lg-0">
                                                                                    <div class="input-search-location w-100 mb-1 px-2 py-1">
                                                                                        <div class="d-flex align-items-center">
                                                                                            <div class="flex-shrink-0 p-3"><FontAwesomeIcon icon={faMapMarkerAlt} />
                                                                                            </div>
                                                                                            <div class="flex-grow-1 position-relative"><label for="react-select-3-input"
                                                                                                class="mb-1">Điểm đến</label>
                                                                                                <div class=" css-b62m3t-container"><span id="react-select-3-live-region"
                                                                                                    class="css-7pg0cj-a11yText"></span><span aria-live="polite"
                                                                                                        aria-atomic="false" aria-relevant="additions text"
                                                                                                        class="css-7pg0cj-a11yText"></span>
                                                                                                    <div class=" css-13cymwt-control">
                                                                                                        <div class=" css-hlgwow">                                                                                                        
                                                                                                            <div class=" css-19bb58m" data-value=""><input class=""
                                                                                                               type="text" placeholder="Điểm đến"
                                                                                                                style={{
                                                                                                                    color: 'inherit',
                                                                                                                    background: '0px center',
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
                                                                                                        <div class=" css-1wy0on6"><span
                                                                                                            class=" css-1u9des2-indicatorSeparator"></span>
                                                                                                            <div class=" css-1xc3v61-indicatorContainer" aria-hidden="true"><svg
                                                                                                                height="20" width="20" viewBox="0 0 20 20" aria-hidden="true"
                                                                                                                focusable="false" class="css-8mmkcg">
                                                                                                                <path
                                                                                                                    d="M4.516 7.548c0.436-0.446 1.043-0.481 1.576 0l3.908 3.747 3.908-3.747c0.533-0.481 1.141-0.446 1.574 0 0.436 0.445 0.408 1.197 0 1.615-0.406 0.418-4.695 4.502-4.695 4.502-0.217 0.223-0.502 0.335-0.787 0.335s-0.57-0.112-0.789-0.335c0 0-4.287-4.084-4.695-4.502s-0.436-1.17 0-1.615z">
                                                                                                                </path>
                                                                                                            </svg></div>
                                                                                                        </div>
                                                                                                    </div>
                                                                                                </div>
                                                                                            </div>
                                                                                        </div>
                                                                                    </div>
                                                                                </div>
                                                                            </div>
                                                                        </div>
                                                                        <div class="col-lg-2 col-md-4 col-sm-12 col-12 mb-3 mt-md-1 mb-lg-0">
                                                                            <div class="input-search-location w-100 mb-1 px-2 py-1">
                                                                                <div class="d-inline-flex align-items-center">
                                                                                    <div class="flex-shrink-0 p-3"><FontAwesomeIcon icon={faCalendarAlt} /></div>
                                                                                    <div class="flex-grow-1"><label for="dateOrDept" class="mb-1">Ngày đi</label>
                                                                                        <div class="calendarWrap bg-transparent" role="button" aria-expanded="false">
                                                                                            <input type="date"
                                                                                                class="form-control input-date input-noborder bg-transparent"
                                                                                                id="date-range-hotel" />
                                                                                        </div>
                                                                                    </div>

                                                                                </div>
                                                                            </div>
                                                                        </div>
                                                                        <div class="col-lg-2 mb-3 mt-md-1 mb-lg-0 col-md-4 col-sm-12"><button type="submit"
                                                                            class="btn submit-btn "><i class="fa fa-search me-1" aria-hidden="true"></i>Tìm
                                                                            kiếm</button></div>
                                                                    </div>
                                                                </div>
                                                            </div>
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </section>
                </div>
                <div class="container">
                    <section class="home-page__promotion mb-5">
                        <h2 class="home-page__title">Ưu đãi</h2>
                        <div class="promotion-slide">
                            <div class="slick-slider slick-initialized" dir="ltr"><button type="button" data-role="none"
                                class="slick-arrow slick-prev" style={{ display: 'block' }}> Previous</button>
                                <div class="slick-list">
                                    <div class="slick-track" style={{
                                        width: '6480px',
                                        opacity: 1,
                                        transform: 'translate3d(-3456px, 0px, 0px)'
                                    }}>
                                        <div data-index="-3" tabindex="-1" class="slick-slide slick-cloned" aria-hidden="true"
                                            style={{ width: '432px' }}>
                                            <div>
                                                <div class="slide" tabindex="-1" style={{ width: '100%', display: 'inline-block' }}><a tabindex="-1"
                                                    title="thai lan 9.5"
                                                    href="https://travel.com.vn/tim-tour/NNSGN149/0/0/2024-05-09/0/0/ket-qua.aspx?utm_source=pr&amp;utm_medium=bannerkm&amp;utm_campaign=tat24">
                                                    <div class="promotion-image"><img
                                                        src="https://media.travel.com.vn/Advertisings/bn_240509_Banner TCThaiLan-412-309px.jpg"
                                                        alt="thai lan 9.5" width="412" height="309" loading="lazy" /></div>
                                                </a></div>
                                            </div>
                                        </div>
                                        <div data-index="-2" tabindex="-1" class="slick-slide slick-cloned" aria-hidden="true"
                                            style={{ width: '432px' }}>
                                            <div>
                                                <div class="slide" tabindex="-1" style={{ width: '100%', display: 'inline-block' }}><a tabindex="-1"
                                                    title="KTO"
                                                    href="https://travel.com.vn/tim-tour/Seoul%20-%20Jeju/1/0/2024-05-28/0/0/ket-qua.aspx?utm_source=pr&amp;utm_medium=tcdl&amp;utm_campaign=jto24">
                                                    <div class="promotion-image"><img
                                                        src="https://media.travel.com.vn/Advertisings/bn_240529_CHECK IN JEJU 412X309px-01.jpg"
                                                        alt="KTO" width="412" height="309" loading="lazy" /></div>
                                                </a></div>
                                            </div>
                                        </div>
                                        <div data-index="-1" tabindex="-1" class="slick-slide slick-cloned" aria-hidden="true"
                                            style={{ width: '432px' }}>
                                            <div>
                                                <div class="slide" tabindex="-1" style={{ width: '100%', display: 'inline-block' }}><a tabindex="-1"
                                                    title="momo"
                                                    href="https://travel.com.vn/tin-tuc-du-lich/lan-dau-tien-tai-vietravel-rinh-den-400000-dong-khi-thanh-toan-tour-bang-vi-momo-v15365.aspx">
                                                    <div class="promotion-image"><img
                                                        src="https://media.travel.com.vn/Advertisings/bn_240510_Momo 412x308.png" alt="momo"
                                                        width="412" height="309" loading="lazy" /></div>
                                                </a></div>
                                            </div>
                                        </div>
                                        <div data-index="0" class="slick-slide" tabindex="-1" aria-hidden="true"
                                            style={{ outline: 'none', width: '432px' }}>
                                            <div>
                                                <div class="slide" tabindex="-1" style={{ width: '100%', display: 'inline-block' }}><a tabindex="-1"
                                                    title="Ưu đãi theo tuyến"
                                                    href="https://travel.com.vn/tim-tour/1/2/2024-05-15/0/0/ket-qua.aspx?concho=1&amp;block=0&amp;utm_source=pr&amp;utm_medium=bannerkm&amp;utm_campaign=ctkmhe24">
                                                    <div class="promotion-image"><img
                                                        src="https://media.travel.com.vn/Advertisings/bn_240515_KVheWEB_412x309px-03.jpg"
                                                        alt="Ưu đãi theo tuyến" width="412" height="309" loading="lazy" /></div>
                                                </a></div>
                                            </div>
                                        </div>
                                        <div data-index="1" class="slick-slide" tabindex="-1" aria-hidden="true"
                                            style={{ outline: 'none', width: '432px' }}>
                                            <div>
                                                <div class="slide" tabindex="-1" style={{ width: '100%', display: 'inline-block' }}><a tabindex="-1"
                                                    title="chau au t6"
                                                    href="https://travel.com.vn/tim-tour/lavender/0/0/2024-05-08/0/0/ket-qua.aspx?utm_source=pr&amp;utm_medium=bannerkm&amp;utm_campaign=he24">
                                                    <div class="promotion-image"><img
                                                        src="https://media.travel.com.vn/Advertisings/bn_240508_KV_ThiTruongXa-ChauAu.jpg"
                                                        alt="chau au t6" width="412" height="309" loading="lazy" /></div>
                                                </a></div>
                                            </div>
                                        </div>
                                        <div data-index="2" class="slick-slide" tabindex="-1" aria-hidden="true"
                                            style={{ outline: 'none', width: '432px' }}>
                                            <div>
                                                <div class="slide" tabindex="-1" style={{ width: '100%', display: 'inline-block' }}><a tabindex="-1"
                                                    title="hoa ky"
                                                    href="https://travel.com.vn/du-lich-hoa-ky.aspx?utm_source=pr&amp;utm_medium=bannerkm&amp;utm_campaign=he24">
                                                    <div class="promotion-image"><img
                                                        src="https://media.travel.com.vn/Advertisings/bn_240508_KV_ThiTruongXa-My.jpg"
                                                        alt="hoa ky" width="412" height="309" loading="lazy" /></div>
                                                </a></div>
                                            </div>
                                        </div>
                                        <div data-index="3" class="slick-slide" tabindex="-1" aria-hidden="true"
                                            style={{ outline: 'none', width: '432px' }}>
                                            <div>
                                                <div class="slide" tabindex="-1" style={{ width: '100%', display: 'inline-block' }}><a tabindex="-1"
                                                    title="thai lan 9.5"
                                                    href="https://travel.com.vn/tim-tour/NNSGN149/0/0/2024-05-09/0/0/ket-qua.aspx?utm_source=pr&amp;utm_medium=bannerkm&amp;utm_campaign=tat24">
                                                    <div class="promotion-image"><img
                                                        src="https://media.travel.com.vn/Advertisings/bn_240509_Banner TCThaiLan-412-309px.jpg"
                                                        alt="thai lan 9.5" width="412" height="309" loading="lazy" /></div>
                                                </a></div>
                                            </div>
                                        </div>
                                        <div data-index="4" class="slick-slide" tabindex="-1" aria-hidden="true"
                                            style={{ outline: 'none', width: '432px' }}>
                                            <div>
                                                <div class="slide" tabindex="-1" style={{ width: '100%', display: 'inline-block' }}><a tabindex="-1"
                                                    title="KTO"
                                                    href="https://travel.com.vn/tim-tour/Seoul%20-%20Jeju/1/0/2024-05-28/0/0/ket-qua.aspx?utm_source=pr&amp;utm_medium=tcdl&amp;utm_campaign=jto24">
                                                    <div class="promotion-image"><img
                                                        src="https://media.travel.com.vn/Advertisings/bn_240529_CHECK IN JEJU 412X309px-01.jpg"
                                                        alt="KTO" width="412" height="309" loading="lazy" /></div>
                                                </a></div>
                                            </div>
                                        </div>
                                        <div data-index="5" class="slick-slide slick-active slick-current" tabindex="-1" aria-hidden="false"
                                            style={{ outline: 'none', width: '432px' }}>
                                            <div>
                                                <div class="slide" tabindex="-1" style={{ width: '100%', display: 'inline-block' }}><a tabindex="-1"
                                                    title="momo"
                                                    href="https://travel.com.vn/tin-tuc-du-lich/lan-dau-tien-tai-vietravel-rinh-den-400000-dong-khi-thanh-toan-tour-bang-vi-momo-v15365.aspx">
                                                    <div class="promotion-image"><img
                                                        src="https://media.travel.com.vn/Advertisings/bn_240510_Momo 412x308.png" alt="momo"
                                                        width="412" height="309" loading="lazy" /></div>
                                                </a></div>
                                            </div>
                                        </div>
                                        <div data-index="6" tabindex="-1" class="slick-slide slick-active slick-cloned" aria-hidden="false"
                                            style={{ width: '432px' }}>
                                            <div>
                                                <div class="slide" tabindex="-1" style={{ width: '100%', display: 'inline-block' }}><a tabindex="-1"
                                                    title="Ưu đãi theo tuyến"
                                                    href="https://travel.com.vn/tim-tour/1/2/2024-05-15/0/0/ket-qua.aspx?concho=1&amp;block=0&amp;utm_source=pr&amp;utm_medium=bannerkm&amp;utm_campaign=ctkmhe24">
                                                    <div class="promotion-image"><img
                                                        src="https://media.travel.com.vn/Advertisings/bn_240515_KVheWEB_412x309px-03.jpg"
                                                        alt="Ưu đãi theo tuyến" width="412" height="309" loading="lazy" /></div>
                                                </a></div>
                                            </div>
                                        </div>
                                        <div data-index="7" tabindex="-1" class="slick-slide slick-active slick-cloned" aria-hidden="false"
                                            style={{ width: '432px' }}>
                                            <div>
                                                <div class="slide" tabindex="-1" style={{ width: '100%', display: 'inline-block' }}><a tabindex="-1"
                                                    title="chau au t6"
                                                    href="https://travel.com.vn/tim-tour/lavender/0/0/2024-05-08/0/0/ket-qua.aspx?utm_source=pr&amp;utm_medium=bannerkm&amp;utm_campaign=he24">
                                                    <div class="promotion-image"><img
                                                        src="https://media.travel.com.vn/Advertisings/bn_240508_KV_ThiTruongXa-ChauAu.jpg"
                                                        alt="chau au t6" width="412" height="309" loading="lazy" /></div>
                                                </a></div>
                                            </div>
                                        </div>
                                        <div data-index="8" tabindex="-1" class="slick-slide slick-cloned" aria-hidden="true"
                                            style={{ width: '432px' }}>
                                            <div>
                                                <div class="slide" tabindex="-1" style={{ width: '100%', display: 'inline-block' }}><a tabindex="-1"
                                                    title="hoa ky"
                                                    href="https://travel.com.vn/du-lich-hoa-ky.aspx?utm_source=pr&amp;utm_medium=bannerkm&amp;utm_campaign=he24">
                                                    <div class="promotion-image"><img
                                                        src="https://media.travel.com.vn/Advertisings/bn_240508_KV_ThiTruongXa-My.jpg"
                                                        alt="hoa ky" width="412" height="309" loading="lazy" /></div>
                                                </a></div>
                                            </div>
                                        </div>
                                        <div data-index="9" tabindex="-1" class="slick-slide slick-cloned" aria-hidden="true"
                                            style={{ width: '432px' }}>
                                            <div>
                                                <div class="slide" tabindex="-1" style={{ width: '100%', display: 'inline-block' }}><a tabindex="-1"
                                                    title="thai lan 9.5"
                                                    href="https://travel.com.vn/tim-tour/NNSGN149/0/0/2024-05-09/0/0/ket-qua.aspx?utm_source=pr&amp;utm_medium=bannerkm&amp;utm_campaign=tat24">
                                                    <div class="promotion-image"><img
                                                        src="https://media.travel.com.vn/Advertisings/bn_240509_Banner TCThaiLan-412-309px.jpg"
                                                        alt="thai lan 9.5" width="412" height="309" loading="lazy" /></div>
                                                </a></div>
                                            </div>
                                        </div>
                                        <div data-index="10" tabindex="-1" class="slick-slide slick-cloned" aria-hidden="true"
                                            style={{ width: '432px' }}>
                                            <div>
                                                <div class="slide" tabindex="-1" style={{ width: '100%', display: 'inline-block' }}><a tabindex="-1"
                                                    title="KTO"
                                                    href="https://travel.com.vn/tim-tour/Seoul%20-%20Jeju/1/0/2024-05-28/0/0/ket-qua.aspx?utm_source=pr&amp;utm_medium=tcdl&amp;utm_campaign=jto24">
                                                    <div class="promotion-image"><img
                                                        src="https://media.travel.com.vn/Advertisings/bn_240529_CHECK IN JEJU 412X309px-01.jpg"
                                                        alt="KTO" width="412" height="309" loading="lazy" /></div>
                                                </a></div>
                                            </div>
                                        </div>
                                        <div data-index="11" tabindex="-1" class="slick-slide slick-cloned" aria-hidden="true"
                                            style={{ width: '432px' }}>
                                            <div>
                                                <div class="slide" tabindex="-1" style={{ width: '100%', display: 'inline-block' }}><a tabindex="-1"
                                                    title="momo"
                                                    href="https://travel.com.vn/tin-tuc-du-lich/lan-dau-tien-tai-vietravel-rinh-den-400000-dong-khi-thanh-toan-tour-bang-vi-momo-v15365.aspx">
                                                    <div class="promotion-image"><img
                                                        src="https://media.travel.com.vn/Advertisings/bn_240510_Momo 412x308.png" alt="momo"
                                                        width="412" height="309" loading="lazy" /></div>
                                                </a></div>
                                            </div>
                                        </div>
                                    </div>
                                </div><button type="button" data-role="none" class="slick-arrow slick-next" style={{ display: 'block' }}>
                                    Next</button>
                            </div>
                        </div>
                    </section>
                    <section class="home-page__explore-tour mb-5">
                        <h2 class="home-page__title mb-4">Khám phá sản phẩm Vietravel</h2>
                        <div class="explore-tour__list">
                            <div class="tab-content" id="nav-tabContent">
                                <div class="tab-pane fade show active" id="nav-home-discovery" role="tabpanel"
                                    aria-labelledby="nav-home-tab-discovery">
                                    <div class="explore-tour-slide">
                                        <div class="slick-slider slick-initialized">
                                            <div class="slick-list">
                                                <div class="slick-track"
                                                    style={{
                                                        width: '1300px',
                                                        opacity: 1,
                                                        transform: 'translate3d(0px, 0px, 0px)'
                                                    }}>
                                                    <div data-index="0" class="slick-slide" tabindex="-1" aria-hidden="true"
                                                        style={{
                                                            outline: 'none',
                                                            width: '260px'
                                                        }}>
                                                        <div>
                                                            <div class="card text-white position-relative explore-tour__item me-4" tabindex="-1"
                                                                style={{ width: '100%', display: 'inline-block' }}>
                                                                <div class="explore-tour__item__image"><a tabindex="-1" title="Du lịch kết hợp hành hương"
                                                                    href="https://travel.com.vn/tim-tour/h%C3%A0nh%20h%C6%B0%C6%A1ng/0/0/2023-12-22/0/0/ket-qua.aspx"><img
                                                                        src="https://media.travel.com.vn/Advertisings/bn_220908_charter-an-do(4).jpg"
                                                                        class="card-img w-100" alt="Du lịch kết hợp hành hương" width="216" height="324"
                                                                        loading="lazy" /></a>
                                                                    <div class="card-img-overlay position-absolute px-3 bottom-0">
                                                                        <h3 class="card-title lh-sm"><a tabindex="-1" title="Du lịch kết hợp hành hương"
                                                                            href="https://travel.com.vn/tim-tour/h%C3%A0nh%20h%C6%B0%C6%A1ng/0/0/2023-12-22/0/0/ket-qua.aspx">Du
                                                                            lịch kết hợp hành hương</a></h3>
                                                                    </div>
                                                                </div>
                                                            </div>
                                                        </div>
                                                    </div>
                                                    <div data-index="1" class="slick-slide" tabindex="-1" aria-hidden="true"
                                                        style={{ outline: 'none', width: '260px' }}>
                                                        <div>
                                                            <div class="card text-white position-relative explore-tour__item me-4" tabindex="-1"
                                                                style={{ width: '100%', display: 'inline-block' }}>
                                                                <div class="explore-tour__item__image"><a tabindex="-1" title="Tour trải nghiệm Cao Cấp"
                                                                    href="https://travel.com.vn/dong-tour/tour-cao-cap.aspx"><img
                                                                        src="https://media.travel.com.vn/Advertisings/bn_231116_Twleve-Apostles-Helicopter-Flight-3-1.jpg"
                                                                        class="card-img w-100" alt="Tour trải nghiệm Cao Cấp" width="216" height="324"
                                                                        loading="lazy" /></a>
                                                                    <div class="card-img-overlay position-absolute px-3 bottom-0">
                                                                        <h3 class="card-title lh-sm"><a tabindex="-1" title="Tour trải nghiệm Cao Cấp"
                                                                            href="https://travel.com.vn/dong-tour/tour-cao-cap.aspx">Tour trải nghiệm Cao
                                                                            Cấp</a></h3>
                                                                    </div>
                                                                </div>
                                                            </div>
                                                        </div>
                                                    </div>
                                                    <div data-index="2" class="slick-slide" tabindex="-1" aria-hidden="true"
                                                        style={{ outline: 'none', width: '260px' }}>
                                                        <div>
                                                            <div class="card text-white position-relative explore-tour__item me-4" tabindex="-1"
                                                                style={{ width: '100%', display: 'inline-block' }}>
                                                                <div class="explore-tour__item__image"><a tabindex="-1"
                                                                    title="Du lịch thăm thân tại Mỹ - Canada" href="https://bit.ly/web-thamthanMy"><img
                                                                        src="https://media.travel.com.vn/Advertisings/bn_230809_rs newyork.jpg"
                                                                        class="card-img w-100" alt="Du lịch thăm thân tại Mỹ - Canada" width="216"
                                                                        height="324" loading="lazy" /></a>
                                                                    <div class="card-img-overlay position-absolute px-3 bottom-0">
                                                                        <h3 class="card-title lh-sm"><a tabindex="-1"
                                                                            title="Du lịch thăm thân tại Mỹ - Canada" href="https://bit.ly/web-thamthanMy">Du
                                                                            lịch thăm thân tại Mỹ - Canada</a></h3>
                                                                    </div>
                                                                </div>
                                                            </div>
                                                        </div>
                                                    </div>
                                                    <div data-index="3" class="slick-slide" tabindex="-1" aria-hidden="true"
                                                        style={{ outline: 'none', width: '260px' }}>
                                                        <div>
                                                            <div class="card text-white position-relative explore-tour__item me-4" tabindex="-1"
                                                                style={{ width: '100%', display: 'inline-block' }}>
                                                                <div class="explore-tour__item__image"><a tabindex="-1"
                                                                    title="Tour trải nghiệm giới trẻ, sự kiện, thể thao"
                                                                    href="https://travel.com.vn/tim-tour/nnsgn99/0/0/2023-12-12/0/0/ket-qua.aspx"><img
                                                                        src="https://media.travel.com.vn/Advertisings/bn_240219_tour the thao.png"
                                                                        class="card-img w-100" alt="Tour trải nghiệm giới trẻ, sự kiện, thể thao"
                                                                        width="216" height="324" loading="lazy" /></a>
                                                                    <div class="card-img-overlay position-absolute px-3 bottom-0">
                                                                        <h3 class="card-title lh-sm"><a tabindex="-1"
                                                                            title="Tour trải nghiệm giới trẻ, sự kiện, thể thao"
                                                                            href="https://travel.com.vn/tim-tour/nnsgn99/0/0/2023-12-12/0/0/ket-qua.aspx">Tour
                                                                            trải nghiệm giới trẻ, sự kiện, thể thao</a></h3>
                                                                    </div>
                                                                </div>
                                                            </div>
                                                        </div>
                                                    </div>
                                                    <div data-index="4" class="slick-slide slick-active slick-current" tabindex="-1"
                                                        aria-hidden="false" style={{ outline: 'none', width: '260px' }}>
                                                        <div>
                                                            <div class="card text-white position-relative explore-tour__item me-4" tabindex="-1"
                                                                style={{ width: '100%', display: 'inline-block' }}>
                                                                <div class="explore-tour__item__image"><a tabindex="-1"
                                                                    title="✨ Tour mới - Hành trình độc đáo"
                                                                    href="https://travel.com.vn/tim-tour/ch%C6%B0%C6%A1ng%20tr%C3%ACnh%20m%E1%BB%9Bi/0/0/2023-12-12/0/0/ket-qua.aspx"><img
                                                                        src="https://media.travel.com.vn/Advertisings/bn_231116_viber_image_2023-11-14_11-47-57-795.jpg"
                                                                        class="card-img w-100" alt="✨ Tour mới - Hành trình độc đáo" width="216"
                                                                        height="324" loading="lazy" /></a>
                                                                    <div class="card-img-overlay position-absolute px-3 bottom-0">
                                                                        <h3 class="card-title lh-sm"><a tabindex="-1" title="✨ Tour mới - Hành trình độc đáo"
                                                                            href="https://travel.com.vn/tim-tour/ch%C6%B0%C6%A1ng%20tr%C3%ACnh%20m%E1%BB%9Bi/0/0/2023-12-12/0/0/ket-qua.aspx">✨
                                                                            Tour mới - Hành trình độc đáo</a></h3>
                                                                    </div>
                                                                </div>
                                                            </div>
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </section>
                    <section class="home-page__last-deal home-page__explore-tour mb-5">
                        <h2 class="home-page__title mb-4 d-flex justify-content-between align-items-center">Ưu đãi tour giờ chót <a
                            href="/du-lich-gio-chot.aspx" class="d-md-none">Xem tất cả</a></h2>
                        <div class="row row-cols-1 row-cols-md-3 g-4  d-sm-row d-md-flex d-lg-flex">
                            {toursale.slice(0, 3).map(tour => (
                                <div class="col">
                                    <div class="card tour-item">
                                        <div class="position-relative">
                                            <div class="tour-item__image"><a><img
                                                    src={tour.anhdaidien}
                                                    class="card-img-top img-fluid" width="414" height="295" loading="lazy"
                                                    alt="" /></a><span class="tour-item__image-inner__icon-favorite addlastminute"></span>
                                                <div class="tour-item__image-inner__bottom"><span
                                                    class="tour-item__image-inner__bottom__category"><i class="icon icon--good-price-tour"></i> Giờ
                                                    chót</span></div>
                                                <div class="tour-item__image-inner__summary position-absolute">
                                                    <div class="tour-item__image-inner__summary__rating d-flex justify-content-end mb-2"><span>
                                                        9.4</span></div>
                                                    <div class="tour-item__image-inner__summary__review">
                                                        <h3 class="tour-item__image-inner__summary__feedback mb-0 text-end lh-sm">Tuyệt vời</h3>
                                                        <p class="tour-item__image-inner__summary__review mb-1 text-end">358 quan tâm</p>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                        <div class="card-body p-3">
                                            <p class="tour-item__date mb-1">{formatDate(tour.ngaythangnam)} / {tour.songaydi}</p>
                                            <p class="card-text tour-item__title mb-1"><a href="" onClick={() => handleTourDetail(tour.matour)}>{tour.tieudetour}</a></p>
                                            <div class="tour-item__code">
                                                <div>Mã tour:</div>
                                                <div><FontAwesomeIcon icon={faTicket}/>{tour.matour}-095-310524VU-V-F</div>
                                            </div>
                                            <p class="tour-item__departure mb-3">Nơi khởi hành: {tour.noikhoihanh}</p>
                                            <div class="tour-item__price mb-2 w-100">
                                                <div class="tour-item__price__wrapper">
                                                    <div class="tour-item__price--old">Giá <span
                                                        class="tour-item__price--old__number">{formatNumber(tour.gia)}&nbsp;₫</span></div>
                                                    <div class="tour-item__price--current"><span
                                                        class="tour-item__price--current__number pe-2 mb-0">{formatNumber(tour.giasaukhigiam)}&nbsp;₫</span><span
                                                            class="tour-item__price--current__discount small p-1">{tour.phantram}% GIẢM</span></div>
                                                    <div class="tour-item__price__timer py-2"><span>còn 00 ngày 07:24:43</span></div>
                                                </div>
                                            </div>
                                        </div>
                                        <div
                                            class="card-footer tour-item__footer px-3 mb-2 w-100 d-inline-flex justify-content-between align-items-center">
                                            <div class="tour-item__footer__add-to-compare d-inline-flex align-items-center"><i
                                                class="icon icon--plus pe-1"></i><a title="Thêm vào so sánh" href="">Thêm vào so sánh</a></div>
                                            <div class="tour-item__footer__available-seat d-inline-flex align-items-center"><span
                                                class="tour-item__footer__available-seat--text me-1">Số chỗ còn</span><span
                                                    class="tour-item__footer__available-seat--number">{tour.sochoconnhan}</span></div>
                                        </div>
                                    </div>
                                </div>
                            ))}
                        </div>
                        <div class="home-page__see-all text-end mt-4 d-none d-md-block"><a title="Du lịch giờ chót"
                            href="/du-lich-gio-chot.aspx"><button type="button"
                                class="btn px-4 py-2 fw-bold d-inline-flex align-items-center">Xem tất cả <i
                                    class="icon icon--arrow-narrow-left ms-2"></i></button></a></div>
                    </section>
                    <section class="home-page__explore-tour mb-5">
                        <h2 class="home-page__title mb-4 d-flex justify-content-between align-items-center">Gói ưu đãi đặc biệt <a
                            href="#" class="d-md-none">Xem tất cả</a></h2>
                        <div>
                            <div class="d-md-block d-lg-block combo-slide">
                                <div class="card mb-3 product-item mb-4">
                                    <div class="row g-0">
                                        <div class="col-lg-3 col-12 product-item__image position-relative"><a
                                            href="/combo-du-lich-NDTUPV588-001-040624VU/combo-3n2d-muong-thanh-quy-nhon-4-sao-vCB0224014.aspx"
                                            id="NDTUPV588-001-040624VU"><img
                                                src="https://media.travel.com.vn/Combo/img_16022024_72d33d6b-f49a-44a6-b904-e0f4e5ea9479_ho-boi_1678353088_1691486208.jpg"
                                                class="img-fluid"
                                                alt="Combo Quy Nhơn 3N2Đ: Vé máy bay khứ hồi + Khách sạn Mường Thanh Quy Nhơn 4 sao (Bao gồm Ăn sáng)"
                                                width="324" height="290" loading="lazy"
                                                title="Quy Nhơn: Combo 3N2Đ Vé máy bay khứ hồi + 2 đêm khách sạn Mường Thanh Quy Nhơn 4 sao ( Đã bao gồm ăn sáng)"
                                                name="/combo-du-lich-NDTUPV588-001-040624VU/combo-3n2d-muong-thanh-quy-nhon-4-sao-vCB0224014.aspx" /></a>
                                        </div>
                                        <div class="col-lg-6 col-12 product-item__detail">
                                            <div class="card-body">
                                                <div class="product-item__detail__category mb-2 p-2 d-none d-md-inline-block"><span
                                                    class="text-light">Vé máy bay + Khách sạn</span></div>
                                                <div class="product-item__image__category-inner mb-2 p-2 d-inline-block d-md-none"><span
                                                    class="text-md-light ">Vé máy bay + Khách sạn</span></div>
                                                <h3 class="card-title product-item__detail__title lh-sm"><a
                                                    href="/combo-du-lich-NDTUPV588-001-040624VU/combo-3n2d-muong-thanh-quy-nhon-4-sao-vCB0224014.aspx"
                                                    title="Quy Nhơn: Combo 3N2Đ Vé máy bay khứ hồi + 2 đêm khách sạn Mường Thanh Quy Nhơn 4 sao ( Đã bao gồm ăn sáng)">Combo
                                                    Quy Nhơn 3N2Đ: Vé máy bay khứ hồi + Khách sạn Mường Thanh Quy Nhơn 4 sao (Bao gồm Ăn sáng)</a>
                                                </h3>
                                                <div class="product-item__detail__rating-star mb-2">
                                                    <div class="d-inline-block star-rating"><FontAwesomeIcon icon={faStar} /><FontAwesomeIcon icon={faStar} /><FontAwesomeIcon icon={faStar} /><FontAwesomeIcon icon={faStar} /></div>
                                                </div>
                                                <div class="product-item__detail__price d-md-none mt-3">
                                                    <div class="card-text">Giá chỉ từ</div>
                                                    <div class="product-item__summary__price--old"></div>
                                                    <div><span
                                                        class="product-item__summary__price--current product-item__summary__price--current__number">
                                                        3.390.000&nbsp;₫</span><span
                                                            class="product-item__summary__price--current&amp;__text">/khách</span></div>
                                                    <div class="row mb-2">
                                                        <div class="col-6"><a title="Đặt ngay" class="btn btn-primary btn-sm" href="#"><i
                                                            class="fal fa-shopping-cart mr-1"></i>Đặt ngay</a></div>
                                                        <div class="col-6"><button
                                                            class="btn product-item__summary__btn-login open-calendar-link">Ngày khác</button></div>
                                                    </div>
                                                    <p class="card-text">Ngày đi 04/06/2024</p><small class="btn-promotion">đã bao gồm trong
                                                        giá</small>
                                                </div>
                                                <p class="card-text hidden-xs hidden-xxs hidden-sm"><small class="text-muted">Quy Nhơn: Combo 3N2Đ
                                                    Vé máy bay khứ hồi + 2 đêm khách sạn Mường Thanh Quy Nhơn 4 sao ( Đã bao gồm ăn sáng)</small>
                                                </p>
                                                <div class="product-item__detail__review mb-3 d-md-flex d-lg-flex">
                                                    <div class="product-item__detail__review--point"><span class="mb-2">9.4</span></div>
                                                    <div class="product-item__detail__review--feedback">
                                                        <h3 class="mb-1 fw-bold lh-sm">Tuyệt vời</h3>
                                                    </div>
                                                </div>
                                                <div class="product-item__detail__location d-md-block d-lg-block"><FontAwesomeIcon icon={faMapMarkerAlt} />02 Nguyễn Huệ, Phường Lê Lợi, Quy Nhon, Binh Dinh, Viet
                                                    Nam</div>
                                            </div>
                                        </div>
                                        <div class="col-lg-3 col-12 product-item__summary">
                                            <div class="product-item__summary__price d-none d-lg-block">
                                                <div class="card-text price-min">Giá chỉ từ</div>
                                                <div class="product-item__summary__price--old"></div>
                                                <div><span
                                                    class="product-item__summary__price--current product-item__summary__price--current__number">3.390.000&nbsp;₫</span><span
                                                        class="product-item__summary__price--current&amp;__text">/khách</span></div>
                                                <p class="card-text">Ngày đi 04/06/2024</p>
                                                <div class="row mb-3">
                                                    <div class="col-3 col-md-6 col-sm-3"><button
                                                        class="btn btn-sm product-item__summary__btn-login open-calendar-link">Ngày khác</button>
                                                    </div>
                                                    <div class="col-9 col-md-6 col-sm-9 "><button class="btn w-100 btn-primary btn-sm">Đặt
                                                        ngay</button></div>
                                                </div><small class="btn-promotion mb-2">đã bao gồm trong giá</small>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                <div class="card mb-3 product-item mb-4">
                                    <div class="row g-0">
                                        <div class="col-lg-3 col-12 product-item__image position-relative"><a
                                            href="/combo-du-lich-NDTUPV5916-001-040624VU/combo-3n2d-l'amor-quy-nhon-4-sao-vCB0823040.aspx"
                                            id="NDTUPV5916-001-040624VU"><img
                                                src="https://media.travel.com.vn/Combo/img_16082023_e1c5d1d6-cdb9-4c20-827d-a3adbca8a47a_BÊN NGOÀI KS.jpg"
                                                class="img-fluid"
                                                alt="Quy Nhơn : Vé máy bay khứ hồi + Phòng tại khách sạn L'Amor Boutique Quy Nhơn 4 sao ( Đã gồm ăn sáng)"
                                                width="324" height="290" loading="lazy"
                                                title="Quy Nhơn: Combo 3N2Đ Vé máy bay khứ hồi + 2 đêm khách sạn L'Amor Boutique Quy Nhơn 4 sao (Đã bao gồm ăn sáng)"
                                                name="/combo-du-lich-NDTUPV5916-001-040624VU/combo-3n2d-l'amor-quy-nhon-4-sao-vCB0823040.aspx" /></a>
                                        </div>
                                        <div class="col-lg-6 col-12 product-item__detail">
                                            <div class="card-body">
                                                <div class="product-item__detail__category mb-2 p-2 d-none d-md-inline-block"><span
                                                    class="text-light">Vé máy bay + Khách sạn</span></div>
                                                <div class="product-item__image__category-inner mb-2 p-2 d-inline-block d-md-none"><span
                                                    class="text-md-light ">Vé máy bay + Khách sạn</span></div>
                                                <h3 class="card-title product-item__detail__title lh-sm"><a
                                                    href="/combo-du-lich-NDTUPV5916-001-040624VU/combo-3n2d-l'amor-quy-nhon-4-sao-vCB0823040.aspx"
                                                    title="Quy Nhơn: Combo 3N2Đ Vé máy bay khứ hồi + 2 đêm khách sạn L'Amor Boutique Quy Nhơn 4 sao (Đã bao gồm ăn sáng)">Quy
                                                    Nhơn : Vé máy bay khứ hồi + Phòng tại khách sạn L'Amor Boutique Quy Nhơn 4 sao ( Đã gồm ăn
                                                    sáng)</a></h3>
                                                <div class="product-item__detail__rating-star mb-2">
                                                    <div class="d-inline-block star-rating"><FontAwesomeIcon icon={faStar} /><FontAwesomeIcon icon={faStar} /><FontAwesomeIcon icon={faStar} /><FontAwesomeIcon icon={faStar} /></div>
                                                </div>
                                                <div class="product-item__detail__price d-md-none mt-3">
                                                    <div class="card-text">Giá chỉ từ</div>
                                                    <div class="product-item__summary__price--old"></div>
                                                    <div><span
                                                        class="product-item__summary__price--current product-item__summary__price--current__number">
                                                        3.790.000&nbsp;₫</span><span
                                                            class="product-item__summary__price--current&amp;__text">/khách</span></div>
                                                    <div class="row mb-2">
                                                        <div class="col-6"><a title="Đặt ngay" class="btn btn-primary btn-sm" href="#"><i
                                                            class="fal fa-shopping-cart mr-1"></i>Đặt ngay</a></div>
                                                        <div class="col-6"><button
                                                            class="btn product-item__summary__btn-login open-calendar-link">Ngày khác</button></div>
                                                    </div>
                                                    <p class="card-text">Ngày đi 04/06/2024</p><small class="btn-promotion">đã bao gồm trong
                                                        giá</small>
                                                </div>
                                                <p class="card-text hidden-xs hidden-xxs hidden-sm"><small class="text-muted">Quy Nhơn: Combo 3N2Đ
                                                    Vé máy bay khứ hồi + 2 đêm khách sạn L'Amor Boutique Quy Nhơn 4 sao (Đã bao gồm ăn
                                                    sáng)</small></p>
                                                <div class="product-item__detail__review mb-3 d-md-flex d-lg-flex">
                                                    <div class="product-item__detail__review--point"><span class="mb-2">9.4</span></div>
                                                    <div class="product-item__detail__review--feedback">
                                                        <h3 class="mb-1 fw-bold lh-sm">Tuyệt vời</h3>
                                                    </div>
                                                </div>
                                                <div class="product-item__detail__location d-md-block d-lg-block"><FontAwesomeIcon icon={faMapMarkerAlt} />1H1 Nguyễn Thị Định, Nguyễn Văn Cừ, Thành phố Quy Nhơn,
                                                    Quy Nhon, Binh Dinh, Viet Nam</div>
                                            </div>
                                        </div>
                                        <div class="col-lg-3 col-12 product-item__summary">
                                            <div class="product-item__summary__price d-none d-lg-block">
                                                <div class="card-text price-min">Giá chỉ từ</div>
                                                <div class="product-item__summary__price--old"></div>
                                                <div><span
                                                    class="product-item__summary__price--current product-item__summary__price--current__number">3.790.000&nbsp;₫</span><span
                                                        class="product-item__summary__price--current&amp;__text">/khách</span></div>
                                                <p class="card-text">Ngày đi 04/06/2024</p>
                                                <div class="row mb-3">
                                                    <div class="col-3 col-md-6 col-sm-3"><button
                                                        class="btn btn-sm product-item__summary__btn-login open-calendar-link">Ngày khác</button>
                                                    </div>
                                                    <div class="col-9 col-md-6 col-sm-9 "><button class="btn w-100 btn-primary btn-sm">Đặt
                                                        ngay</button></div>
                                                </div><small class="btn-promotion mb-2">đã bao gồm trong giá</small>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                <div class="card mb-3 product-item mb-4">
                                    <div class="row g-0">
                                        <div class="col-lg-3 col-12 product-item__image position-relative"><a
                                            href="/combo-du-lich-NDTUPV583-001-040624VU/combo-3n2d-avani-quy-nhon-4-sao-vCB0823041.aspx"
                                            id="NDTUPV583-001-040624VU"><img
                                                src="https://media.travel.com.vn/Combo/img_16082023_d633c407-340d-4f40-ba41-8d4bccc286a9_TOÀN CẢNH KS.jpg"
                                                class="img-fluid"
                                                alt="Quy Nhơn : Vé máy bay khứ hồi + Phòng tại khách sạn Avani Quy Nhơn Resort 4 sao ( Đã gồm ăn sáng)"
                                                width="324" height="290" loading="lazy"
                                                title="Quy Nhơn: Combo 3N2Đ Vé máy bay khứ hồi + 2 đêm khách sạn Avani Quy Nhơn Resort 4 sao (Đã bao gồm ăn sáng)"
                                                name="/combo-du-lich-NDTUPV583-001-040624VU/combo-3n2d-avani-quy-nhon-4-sao-vCB0823041.aspx" /></a>
                                        </div>
                                        <div class="col-lg-6 col-12 product-item__detail">
                                            <div class="card-body">
                                                <div class="product-item__detail__category mb-2 p-2 d-none d-md-inline-block"><span
                                                    class="text-light">Vé máy bay + Khách sạn</span></div>
                                                <div class="product-item__image__category-inner mb-2 p-2 d-inline-block d-md-none"><span
                                                    class="text-md-light ">Vé máy bay + Khách sạn</span></div>
                                                <h3 class="card-title product-item__detail__title lh-sm"><a
                                                    href="/combo-du-lich-NDTUPV583-001-040624VU/combo-3n2d-avani-quy-nhon-4-sao-vCB0823041.aspx"
                                                    title="Quy Nhơn: Combo 3N2Đ Vé máy bay khứ hồi + 2 đêm khách sạn Avani Quy Nhơn Resort 4 sao (Đã bao gồm ăn sáng)">Quy
                                                    Nhơn : Vé máy bay khứ hồi + Phòng tại khách sạn Avani Quy Nhơn Resort 4 sao ( Đã gồm ăn
                                                    sáng)</a></h3>
                                                <div class="product-item__detail__rating-star mb-2">
                                                    <div class="d-inline-block star-rating"><FontAwesomeIcon icon={faStar} /><FontAwesomeIcon icon={faStar} /><FontAwesomeIcon icon={faStar} /><FontAwesomeIcon icon={faStar} /></div>
                                                </div>
                                                <div class="product-item__detail__price d-md-none mt-3">
                                                    <div class="card-text">Giá chỉ từ</div>
                                                    <div class="product-item__summary__price--old"></div>
                                                    <div><span
                                                        class="product-item__summary__price--current product-item__summary__price--current__number">
                                                        7.290.000&nbsp;₫</span><span
                                                            class="product-item__summary__price--current&amp;__text">/khách</span></div>
                                                    <div class="row mb-2">
                                                        <div class="col-6"><a title="Đặt ngay" class="btn btn-primary btn-sm" href="#"><i
                                                            class="fal fa-shopping-cart mr-1"></i>Đặt ngay</a></div>
                                                        <div class="col-6"><button
                                                            class="btn product-item__summary__btn-login open-calendar-link">Ngày khác</button></div>
                                                    </div>
                                                    <p class="card-text">Ngày đi 04/06/2024</p><small class="btn-promotion">đã bao gồm trong
                                                        giá</small>
                                                </div>
                                                <p class="card-text hidden-xs hidden-xxs hidden-sm"><small class="text-muted">Quy Nhơn: Combo 3N2Đ
                                                    Vé máy bay khứ hồi + 2 đêm khách sạn Avani Quy Nhơn Resort 4 sao (Đã bao gồm ăn sáng)</small>
                                                </p>
                                                <div class="product-item__detail__review mb-3 d-md-flex d-lg-flex">
                                                    <div class="product-item__detail__review--point"><span class="mb-2">9.4</span></div>
                                                    <div class="product-item__detail__review--feedback">
                                                        <h3 class="mb-1 fw-bold lh-sm">Tuyệt vời</h3>
                                                    </div>
                                                </div>
                                                <div class="product-item__detail__location d-md-block d-lg-block"><FontAwesomeIcon icon={faMapMarkerAlt} />Ghềnh Ráng, Bãi Dài, Quy Nhon, Binh Dinh, Viet Nam
                                                </div>
                                            </div>
                                        </div>
                                        <div class="col-lg-3 col-12 product-item__summary">
                                            <div class="product-item__summary__price d-none d-lg-block">
                                                <div class="card-text price-min">Giá chỉ từ</div>
                                                <div class="product-item__summary__price--old"></div>
                                                <div><span
                                                    class="product-item__summary__price--current product-item__summary__price--current__number">7.290.000&nbsp;₫</span><span
                                                        class="product-item__summary__price--current&amp;__text">/khách</span></div>
                                                <p class="card-text">Ngày đi 04/06/2024</p>
                                                <div class="row mb-3">
                                                    <div class="col-3 col-md-6 col-sm-3"><button
                                                        class="btn btn-sm product-item__summary__btn-login open-calendar-link">Ngày khác</button>
                                                    </div>
                                                    <div class="col-9 col-md-6 col-sm-9 "><button class="btn w-100 btn-primary btn-sm">Đặt
                                                        ngay</button></div>
                                                </div><small class="btn-promotion mb-2">đã bao gồm trong giá</small>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div class="home-page__see-all text-end mt-4 d-none d-md-block"><button type="button"
                            class="btn px-4 py-2 fw-bold d-inline-flex align-items-center">Xem tất cả <i
                                class="icon icon--arrow-narrow-left ms-2"></i></button></div>
                    </section>
                    <section class="home-page__destination mb-4">
                        <h3 class="home-page__title mb-4">Điểm đến yêu thích</h3>
                        <div id="DiemDenYeuThich">
                            <div class="row g-5 g-lg-3 d-none d-lg-flex">
                                <div class="col-lg-3 col-md-6 col-sm-12">
                                    <div class="card destination-item">
                                        <div class="position-relative destination-item__image"><a title="Hà Nội"
                                            href="/du-lich-ha-noi.aspx"><img
                                                src="https://media.travel.com.vn//destination/dg_230628_Ha-noi.jpg"
                                                class="card-img-top img-fluid" alt="Hà Nội" width="312" height="208" loading="lazy" /></a><a
                                                    title="Hà Nội" href="/du-lich-ha-noi.aspx"><i class="icon icon--ha-noi position-absolute"></i>
                                                <div class="destination-item__image__overlay"></div>
                                            </a></div>
                                        <div class="card-body">
                                            <h3 class="card-title destination-item__title"><a href="/du-lich-ha-noi.aspx">Hà Nội</a></h3>
                                            <p class="card-text destination-item__description">Đã có 176.072 lượt khách</p>
                                        </div>
                                    </div>
                                </div>
                                <div class="col-lg-3 col-md-6 col-sm-12">
                                    <div class="card destination-item">
                                        <div class="position-relative destination-item__image"><a title="Hải Phòng"
                                            href="/du-lich-hai-phong.aspx"><img
                                                src="https://media.travel.com.vn//destination/dg_200827_HA LONG BAY.jpg"
                                                class="card-img-top img-fluid" alt="Hải Phòng" width="312" height="208" loading="lazy" /></a><a
                                                    title="Hải Phòng" href="/du-lich-hai-phong.aspx"><i
                                                        class="icon icon--hai-phong position-absolute"></i>
                                                <div class="destination-item__image__overlay"></div>
                                            </a></div>
                                        <div class="card-body">
                                            <h3 class="card-title destination-item__title"><a href="/du-lich-hai-phong.aspx">Hải Phòng</a></h3>
                                            <p class="card-text destination-item__description">Đã có 10.000 lượt khách</p>
                                        </div>
                                    </div>
                                </div>
                                <div class="col-lg-3 col-md-6 col-sm-12">
                                    <div class="card destination-item">
                                        <div class="position-relative destination-item__image"><a title="Đà Nẵng"
                                            href="/du-lich-da-nang.aspx"><img
                                                src="https://media.travel.com.vn//destination/dg_230628_cau-rong-ve-dem.jpg"
                                                class="card-img-top img-fluid" alt="Đà Nẵng" width="312" height="208" loading="lazy" /></a><a
                                                    title="Đà Nẵng" href="/du-lich-da-nang.aspx"><i class="icon icon--da-nang position-absolute"></i>
                                                <div class="destination-item__image__overlay"></div>
                                            </a></div>
                                        <div class="card-body">
                                            <h3 class="card-title destination-item__title"><a href="/du-lich-da-nang.aspx">Đà Nẵng</a></h3>
                                            <p class="card-text destination-item__description">Đã có 80.779 lượt khách</p>
                                        </div>
                                    </div>
                                </div>
                                <div class="col-lg-3 col-md-6 col-sm-12">
                                    <div class="card destination-item">
                                        <div class="position-relative destination-item__image"><a title="Đà Lạt"
                                            href="/du-lich-da-lat.aspx"><img
                                                src="https://media.travel.com.vn//destination/dg_230628_da-lat.jpg"
                                                class="card-img-top img-fluid" alt="Đà Lạt" width="312" height="208" loading="lazy" /></a><a
                                                    title="Đà Lạt" href="/du-lich-da-lat.aspx"><i class="icon icon--da-lat position-absolute"></i>
                                                <div class="destination-item__image__overlay"></div>
                                            </a></div>
                                        <div class="card-body">
                                            <h3 class="card-title destination-item__title"><a href="/du-lich-da-lat.aspx">Đà Lạt</a></h3>
                                            <p class="card-text destination-item__description">Đã có 50.735 lượt khách</p>
                                        </div>
                                    </div>
                                </div>
                                <div class="col-lg-3 col-md-6 col-sm-12">
                                    <div class="card destination-item">
                                        <div class="position-relative destination-item__image"><a title="Mỹ - Hoa Kỳ"
                                            href="/du-lich-nuoc-ngoai/tour-hoa-ky.aspx"><img
                                                src="https://media.travel.com.vn//destination/dg_220117_White House.jpg"
                                                class="card-img-top img-fluid" alt="Mỹ - Hoa Kỳ" width="312" height="208" loading="lazy" /></a><a
                                                    title="Mỹ - Hoa Kỳ" href="/du-lich-nuoc-ngoai/tour-hoa-ky.aspx"><i
                                                        class="icon icon--hoa-ky position-absolute"></i>
                                                <div class="destination-item__image__overlay"></div>
                                            </a></div>
                                        <div class="card-body">
                                            <h3 class="card-title destination-item__title"><a href="/du-lich-nuoc-ngoai/tour-hoa-ky.aspx">Mỹ -
                                                Hoa Kỳ</a></h3>
                                            <p class="card-text destination-item__description">Đã có 0 lượt khách</p>
                                        </div>
                                    </div>
                                </div>
                                <div class="col-lg-3 col-md-6 col-sm-12">
                                    <div class="card destination-item">
                                        <div class="position-relative destination-item__image"><a title="Nga"
                                            href="/du-lich-nuoc-ngoai/tour-nga.aspx"><img
                                                src="https://media.travel.com.vn//destination/dg_240110_2.jpg" class="card-img-top img-fluid"
                                                alt="Nga" width="312" height="208" loading="lazy" /></a><a title="Nga"
                                                    href="/du-lich-nuoc-ngoai/tour-nga.aspx"><i class="icon icon--nga position-absolute"></i>
                                                <div class="destination-item__image__overlay"></div>
                                            </a></div>
                                        <div class="card-body">
                                            <h3 class="card-title destination-item__title"><a href="/du-lich-nuoc-ngoai/tour-nga.aspx">Nga</a>
                                            </h3>
                                            <p class="card-text destination-item__description">Đã có 100 lượt khách</p>
                                        </div>
                                    </div>
                                </div>
                                <div class="col-lg-3 col-md-6 col-sm-12">
                                    <div class="card destination-item">
                                        <div class="position-relative destination-item__image"><a title="Châu Á"
                                            href="/du-lich-nuoc-ngoai/tour-chau-a.aspx"><img
                                                src="https://media.travel.com.vn//destination/dg_230628_chau-a.jpg"
                                                class="card-img-top img-fluid" alt="Châu Á" width="312" height="208" loading="lazy" /></a><a
                                                    title="Châu Á" href="/du-lich-nuoc-ngoai/tour-chau-a.aspx"><i
                                                        class="icon icon--chau-a position-absolute"></i>
                                                <div class="destination-item__image__overlay"></div>
                                            </a></div>
                                        <div class="card-body">
                                            <h3 class="card-title destination-item__title"><a href="/du-lich-nuoc-ngoai/tour-chau-a.aspx">Châu
                                                Á</a></h3>
                                            <p class="card-text destination-item__description">Đã có 329.457 lượt khách</p>
                                        </div>
                                    </div>
                                </div>
                                <div class="col-lg-3 col-md-6 col-sm-12">
                                    <div class="card destination-item">
                                        <div class="position-relative destination-item__image"><a title="Châu Mỹ"
                                            href="/du-lich-nuoc-ngoai/tour-chau-my.aspx"><img
                                                src="https://media.travel.com.vn//destination/dg_230628_chau-my.jpg"
                                                class="card-img-top img-fluid" alt="Châu Mỹ" width="312" height="208" loading="lazy" /></a><a
                                                    title="Châu Mỹ" href="/du-lich-nuoc-ngoai/tour-chau-my.aspx"><i
                                                        class="icon icon--chau-my position-absolute"></i>
                                                <div class="destination-item__image__overlay"></div>
                                            </a></div>
                                        <div class="card-body">
                                            <h3 class="card-title destination-item__title"><a href="/du-lich-nuoc-ngoai/tour-chau-my.aspx">Châu
                                                Mỹ</a></h3>
                                            <p class="card-text destination-item__description">Đã có 4.841 lượt khách</p>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </section>
                    <div class="home-page__why-vietravel mb-4">
                        <div class="home-page__why-vietravel mb-4">
                            <h2 class="home-page__title mb-4">Vì sao chọn Vietravel</h2>
                            <div class="">
                                <div class="slick-slider slick-initialized">
                                    <div class="slick-list">
                                        <div class="slick-track" style={{ opacity: 1, transform: 'translate3d(0px, 0px, 0px)', width: '1296px' }}>
                                            <div data-index="0" class="slick-slide slick-active slick-current" tabindex="-1" aria-hidden="false"
                                                style={{ outline: 'none', width: '432px' }}>
                                                <div>
                                                    <div class="slide " tabindex="-1" style={{ width: '100%', display: 'inline-block' }}>
                                                        <div class="why-item ">
                                                            <div class="why-item__icon"><i class="icon--why-1 icon mb-3"></i>
                                                                <h3 class="card-text p-0  mb-3 why-item__title">Mạng bán tour</h3>
                                                            </div>
                                                            <p class="card-text mb-1">Đầu tiên tại Việt Nam</p>
                                                            <p class="card-text">Ứng dụng công nghệ mới nhất</p>
                                                        </div>
                                                    </div>
                                                </div>
                                                <div>
                                                    <div class="slide " tabindex="-1" style={{ width: '100%', display: 'inline-block' }}>
                                                        <div class="why-item ">
                                                            <div class="why-item__icon"><i class="icon--why-2 icon mb-3"></i>
                                                                <h3 class="card-text p-0  mb-3 why-item__title">Giá cả</h3>
                                                            </div>
                                                            <p class="card-text mb-1">Luôn có mức giá tốt nhất</p>
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                            <div data-index="1" class="slick-slide slick-active" tabindex="-1" aria-hidden="false"
                                                style={{ outline: 'none', width: '432px' }}>
                                                <div>
                                                    <div class="slide " tabindex="-1" style={{ width: '100%', display: 'inline-block' }}>
                                                        <div class="why-item ">
                                                            <div class="why-item__icon"><i class="icon--why-3 icon mb-3"></i>
                                                                <h3 class="card-text p-0  mb-3 why-item__title">Thanh toán</h3>
                                                            </div>
                                                            <p class="card-text mb-1">An toàn &amp; linh hoạt</p>
                                                        </div>
                                                    </div>
                                                </div>
                                                <div>
                                                    <div class="slide " tabindex="-1" style={{ width: '100%', display: 'inline-block' }}>
                                                        <div class="why-item ">
                                                            <div class="why-item__icon"><i class="icon--why-4 icon mb-3"></i>
                                                                <h3 class="card-text p-0  mb-3 why-item__title">Sản phẩm &amp; Dịch vụ</h3>
                                                            </div>
                                                            <p class="card-text mb-1">Đa dạng – Chất lượng – An toàn</p>
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                            <div data-index="2" class="slick-slide slick-active" tabindex="-1" aria-hidden="false"
                                                style={{ outline: 'none', width: '432px' }}>
                                                <div>
                                                    <div class="slide " tabindex="-1" style={{ width: '100%', display: 'inline-block' }}>
                                                        <div class="why-item ">
                                                            <div class="why-item__icon"><i class="icon--why-5 icon mb-3"></i>
                                                                <h3 class="card-text p-0  mb-3 why-item__title">Đặt tour</h3>
                                                            </div>
                                                            <p class="card-text mb-1">Dễ dàng &amp; nhanh chóng chỉ với 3 bước</p>
                                                        </div>
                                                    </div>
                                                </div>
                                                <div>
                                                    <div class="slide " tabindex="-1" style={{ width: '100%', display: 'inline-block' }}>
                                                        <div class="why-item ">
                                                            <div class="why-item__icon"><i class="icon--why-6 icon mb-3"></i>
                                                                <h3 class="card-text p-0  mb-3 why-item__title">Hỗ trợ</h3>
                                                            </div>
                                                            <p class="card-text mb-1">Hotline &amp; trực tuyến (08h00 - 22h00)</p>
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </main>

        </>
    );
};
export default Home;