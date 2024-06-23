import { useEffect, useState, useRef } from "react";
import { useParams } from 'react-router-dom';
import "../assets/css/style_home.css"
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faMinus, faCalendarMinus, faUser, faPhone, faEnvelope } from '@fortawesome/free-solid-svg-icons';
import { faPlus } from '@fortawesome/free-solid-svg-icons';
import { loadTourchitietID, loadTourID } from '../services/detail.services.js'
import { addOrder } from '../services/order.service.js'

const Pay = function () {
    const { matour } = useParams();
    const [tourDetail, setTourDetail] = useState({
        machitiettour: Number,
        madiadiem: String,
        matour: String,
        ngayketthuc: Date,
        ngaykhoihanh: Date,
        thongtindichuyen: String,
        thongtinhuongdanvien: String,
        thongtintaptrung: String,
    });
    const [finalSume, setFinalSume] = useState(0);

    const [tour, setTour] = useState({
        danhmucID: String,
        tieudetour: String,
        matour: String,
        gia: Float64Array,
        noikhoihanh: String,
        sochoconnhan: Number,
        songaydi: String,
        madanhmuctour: String,
        ngaythangnam: Date,
        anhdaidien: String,
        giaembe: Float64Array,
        giatrenho: Float64Array,
        giatreem: Float64Array,
        total: Float64Array
    });
   
    const [formData, setFormData] = useState({
        ngaydangki: '',
        tinhtrang: '',
        mataikhoan: '',
        matour: '',
        hanhkhach: 0,
        thanhtien: 0,
        hovaten: '',
        email: '',
        sdt: 0,
        diachi: ''
    });
    const hovatenRef = useRef(null);
    const diachiRef = useRef(null);
    const emailRef = useRef(null);
    const sdtRef = useRef(null);


    const handleInputChange = (e) => {
        setFormData({
            ...formData,
            [e.target.name]: e.target.value
        });
    };
    const handleOrder = async () => {
        try {
            const model = {
                ngaydangki: new Date().toISOString(),
                tinhtrang: "Đã thanh toán",
                matour: tour.matour,
                hanhkhach: parseInt(totalSl),
                thanhtien: parseFloat(finalSume),
                mataikhoan: parseInt(localStorage.getItem('mataikhoan')),
            };

            const thongtin = {
                hovaten: hovatenRef.current.value,
                email: emailRef.current.value,
                sdt: parseInt(sdtRef.current.value),
                diachi: diachiRef.current.value
            };
            await addOrder(model, thongtin);
            console.log('Đặt hàng thành công!');
        } catch (error) {
            console.error('Lỗi khi đặt hàng:', error);
        }
    };
    const [sl, setQuantity] = useState({
        adult: { quantity: 1, price: 0 },
        children: { quantity: 0, price: 0 },
        smallchildren: { quantity: 0, price: 0 },
        baby: { quantity: 0, price: 0 },
    });

    const [price, setPrice] = useState({
        adult: { quantity: 1, price: 0 },
        children: { quantity: 0, price: 0 },
        smallchildren: { quantity: 0, price: 0 },
        baby: { quantity: 0, price: 0 },
    });

    const updateQuantity = (category, delta) => {
        const updatedQuantity = sl[category].quantity + delta;
        if (updatedQuantity >= 0) {
            const updatedSl = {
                ...sl,
                [category]: {
                    ...sl[category],
                    quantity: updatedQuantity
                }
            };
            const totalSl = Object.values(updatedSl).reduce((acc, item) => acc + item.quantity, 0);
            if (totalSl >= 0) {
                setQuantity(updatedSl);
                updateTotalPrice(updatedSl, category);
            }
            else {
                alert("Số Lượng Hành Khách Phải Lớn Hơn 0")
            }
            if (totalSl > tour.sochoconnhan) {
                alert("Số Lượng Hành Khách Vượt Quá Số Lượng Còn Nhận")
            }
            else {
                setQuantity(updatedSl);
                updateTotalPrice(updatedSl, category);
            }
        }

    };

    const updateTotalPrice = async (sl, category) => {
        const totalPrice = sl[category].quantity * price[category].price;
        if (typeof price === 'object' && price !== null) {
            const updatedPrice = {
                ...price,
                [category]: {
                    ...price[category],
                    totalPrice: totalPrice
                }
            };
            await setPrice(updatedPrice);
        } else {
        }
    };

    const calculateTotalPrice = () => {
        let totalPrice = 0;
        Object.keys(price).forEach((category) => {
            totalPrice += sl[category].quantity * price[category].price;
        });
        setFinalSume(totalPrice);
        return totalPrice;
    };

    const totalSl = Object.values(sl).reduce((acc, cur) => acc + cur.quantity, 0);

    useEffect(() => {
        calculateTotalPrice();
    }, [price]);
    useEffect(() => {
        const fetchTourchitietID = async () => {
            try {
                const detail = await loadTourchitietID(matour);
                setTourDetail(detail);
            } catch (error) {
            }
        };
        const fetchTourID = async () => {
            try {
                const data = await loadTourID(matour);
                setTour(data);
                setPrice({
                    adult: { quantity: 1, price: data.gia },
                    children: { quantity: 0, price: data.giatreem },
                    smallchildren: { quantity: 0, price: data.giatrenho },
                    baby: { quantity: 0, price: data.giaembe },
                });
            } catch (error) {
                console.error('Error fetching tour data:', error);
            }
        };

        fetchTourchitietID();
        fetchTourID();
    }, [matour]);

    return (
        <>
            <div class="booking-tour">
                <section class="checkout-head d-block d-lg-block">
                    <div class="container">
                        <div class="row">
                            <ul class="head col-12">
                                <li class="checked">1. Nhập thông tin</li>
                                <li class="checked"><i class="fal fa-angle-right"></i></li>
                                <li>2. Thanh toán</li>
                            </ul>
                        </div>
                    </div>
                </section>
                <section class="checkout-main order-tour animate__fadeIn animate__animated">
                    <div class="container">
                        <div class="row">
                            <div class="col-12 top">
                                <div class="product">
                                    <div class="product-image">
                                        <div class="image"><img
                                            src={tour.anhdaidien}
                                            class="img-fluid" alt="" /></div>
                                    </div>
                                    <div class="product-content">
                                        <div class="s-rate"><span>9</span>
                                            <div class="s-comment">
                                                <h4>Tuyệt vời</h4><span>1 quan tâm</span>
                                            </div>
                                        </div>
                                        <div class="ticket-no-wrap d-md-none">
                                            <div class="ticket-no"><i
                                                class="icon icon--ticket"></i>{tour.matour}-144-040624VU-V-F</div>
                                        </div>
                                        <p class="title" id="title">{tour.tieudetour}</p>
                                        <div class="entry">
                                            <div class="entry-inner"><span>Mã Tour <b>{tour.matour}-144-040624VU-V-F
                                            </b></span><span>Khởi hành<b>{tourDetail.ngaykhoihanh}</b></span><span>Thời gian <b>5
                                                ngày</b></span><span>Nơi khởi hành <b>{tour.noikhoihanh}</b></span><span>Số chỗ còn nhận <b>{tour.sochoconnhan}</b></span><span>Dịch vụ
                                                    tùy chọn <b>Bay Vietravel Airlines, khách sạn 4 sao</b></span></div>
                                        </div>
                                    </div>
                                    <div class="entry-mb d-md-none">
                                        <div class="entry-inner"><span>Khởi hành <b>04/06/2024TP. Hồ Chí
                                            Minh</b></span><span>Số chỗ còn nhận <b>1</b></span><span>Số ngày <b>5
                                                ngày</b></span></div>
                                    </div>
                                </div>
                            </div>
                            <div class="col-md-8 col-12 left">
                                <h2 class="d-none d-lg-block">Tổng quan về chuyến đi</h2>
                                <h3>Thông tin liên lạc</h3>
                                <div class="customer-contact mb-3">
                                    <form className="customer-contact-inner" id="form">
                                        <div className="name">
                                            <label>Họ và Tên <b>*</b></label>
                                            <input
                                                autoComplete="off"
                                                type="text"
                                                className="form-control"
                                                name="hovaten"
                                                ref={hovatenRef}
                                                onChange={handleInputChange}
                                            />
                                            <div className="errorform error-notes">Vui lòng nhập thông tin</div>
                                        </div>
                                        <div className="mail">
                                            <label>Email <b>*</b></label>
                                            <input
                                                type="email"
                                                className="form-control"
                                                name="email"
                                                ref={emailRef}
                                                onChange={handleInputChange}
                                            />
                                            <div className="errorform error-notes">Vui lòng nhập thông tin</div>
                                        </div>
                                        <div className="phone">
                                            <label>Số điện thoại <b>*</b></label>
                                            <input
                                                type="number"
                                                className="form-control"
                                                name="sdt"
                                                ref={sdtRef}
                                                onChange={handleInputChange}
                                            />
                                            <div className="errorform error-notes">Vui lòng nhập thông tin</div>
                                        </div>
                                        <div className="addess">
                                            <label>Địa chỉ</label>
                                            <input
                                                type="text"
                                                className="form-control"
                                                name="diachi"
                                                ref={diachiRef}
                                                onChange={handleInputChange}
                                            />
                                        </div>
                                    </form>
                                </div>
                                <div class="customer">
                                    <h3>Hành khách</h3>
                                    <div class="change">
                                        <div class="change-title">
                                            <h4>Người lớn</h4>
                                            <p>Từ 12 tuổi trở lên</p>
                                        </div>
                                        <div class="change-number">
                                            <span class="minus btn-click" onClick={() => updateQuantity('adult', -1)}>
                                                <FontAwesomeIcon icon={faMinus} />
                                            </span>
                                            <span class="number" id="adult">{sl.adult.quantity}</span>
                                            <span class="plus btn-click" onClick={() => updateQuantity('adult', 1)}>
                                                <FontAwesomeIcon icon={faPlus} />
                                            </span>
                                        </div>
                                    </div>

                                    <div class="change">
                                        <div class="change-title">
                                            <h4>Trẻ em</h4>
                                            <p>Từ 2 tuổi đến dưới 12 tuổi</p>
                                        </div>
                                        <div class="change-number">
                                            <span class="minus btn-click" onClick={() => updateQuantity('children', -1)}>
                                                <FontAwesomeIcon icon={faMinus} />
                                            </span>
                                            <span class="number" id="children">{sl.children.quantity}</span>
                                            <span class="plus btn-click" onClick={() => updateQuantity('children', 1)}>
                                                <FontAwesomeIcon icon={faPlus} />
                                            </span>
                                        </div>
                                    </div>

                                    <div class="change ">
                                        <div class="change-title">
                                            <h4>Em bé</h4>
                                            <p>Dưới 2 tuổi</p>
                                        </div>
                                        <div class="change-number">
                                            <span class="minus btn-click" onClick={() => updateQuantity('baby', -1)}>
                                                <FontAwesomeIcon icon={faMinus} />
                                            </span>
                                            <span class="number" id="baby">{sl.baby.quantity}</span>
                                            <span class="plus btn-click" onClick={() => updateQuantity('baby', 1)}>
                                                <FontAwesomeIcon icon={faPlus} />
                                            </span>
                                        </div>
                                    </div>

                                    <div class="change">
                                        <div class="change-title">
                                            <h4>Trẻ nhỏ</h4>
                                            <p>Từ 2 - 4 tuổi</p>
                                        </div>
                                        <div class="change-number">
                                            <span class="minus btn-click" onClick={() => updateQuantity('smallchildren', -1)}>
                                                <FontAwesomeIcon icon={faMinus} />
                                            </span>
                                            <span class="number" id="smallchildren">{sl.smallchildren.quantity}</span>
                                            <span class="plus btn-click" onClick={() => updateQuantity('smallchildren', 1)}>
                                                <FontAwesomeIcon icon={faPlus} />
                                            </span>
                                        </div>
                                    </div>
                                </div>
                                <div class="customer-notice">
                                    <div class="customer-notice-left">. Người lớn sinh trước ngày<b
                                        class="mx-1">06/06/2012</b><br />. Trẻ em sinh từ<b
                                            class="mx-1">07/06/2012</b>đến<b class="mx-1">06/06/2022</b></div>
                                    <div class="customer-notice-right">. Em bé sinh từ<b class="mx-1">07/06/2022</b>đến<b
                                        class="mx-1">08/06/2024</b></div>
                                </div>
                                <div class="mb-4">
                                    <div class="form-check checkbox-input-search d-inline-flex  align-items-center"><input
                                        class="form-check-input me-3" type="radio" name="input-list-customer"
                                        value="yes" checked="" /><label class="form-check-label mt-1 small">Nhập danh sách
                                            khách hàng</label></div>
                                    <div class="form-check checkbox-input-search d-inline-flex  align-items-center"><input
                                        class="form-check-input me-3" type="radio" id="radSupport"
                                        name="input-list-customer" value="no" />
                                        <div class="col-11"><label class="form-check-label mt-1 small">Tôi cần được nhân
                                            viên tư vấn Vietravel trợ giúp nhập thông tin đăng ký dịch vụ</label></div>
                                    </div>
                                </div>
                                <section class="wrap-info-customer-number-person-details mt-4 wrapper-new-input">
                                    <div class="title-section mb-3 title-hotel-flight-infor">Thông tin hành khách</div>
                                    <div class="group-fields-input-contact-adult group-fields-input-contact-wrapper mb-3">
                                        <div class="title-persona"><img src="/images/icons/persons/adult.svg" />Người lớn
                                        </div>
                                        <div class="row">
                                            <div class="col-lg-3 col-12">
                                                <div class="form-group"><label class="pb-1 font-700">Họ và tên <span
                                                    class="text-danger">*</span></label><input type="text"
                                                        class="form-control fullName hotel-flight-input"
                                                        placeholder="Nhập họ tên" name="fullName" />
                                                    <div class="errorform error-notes">Vui lòng nhập thông tin</div>
                                                </div>
                                            </div>
                                            <div class="col-lg-2 col-12">
                                                <div class="form-group select-custom-icon"><label
                                                    class="pb-1 white-space-nowrap">Giới tính <span
                                                        class="text-danger">*</span></label><select
                                                            class="form-control title title-gender hotel-flight-input"
                                                            name="gender">
                                                        <option value="1">Nam</option>
                                                        <option value="0">Nữ</option>
                                                    </select></div>
                                            </div>
                                            <div class="col-lg-5 col-12">
                                                <div class="row">
                                                    <div class="col-sm-4 col-4 mt-sm-0 mt-4">
                                                        <div class="form-group select-custom-icon"><label
                                                            class="pb-1 white-space-nowrap font-700">Ngày sinh <span
                                                                class="text-danger">*</span></label><select
                                                                    class="form-control birth-date hotel-flight-input"
                                                                    name="dayOfMonth">
                                                                <option value="-1">Ngày</option>
                                                                <option value="01">01</option>
                                                                <option value="02">02</option>
                                                                <option value="03">03</option>
                                                                <option value="04">04</option>
                                                                <option value="05">05</option>
                                                                <option value="06">06</option>
                                                                <option value="07">07</option>
                                                                <option value="08">08</option>
                                                                <option value="09">09</option>
                                                                <option value="10">10</option>
                                                                <option value="11">11</option>
                                                                <option value="12">12</option>
                                                                <option value="13">13</option>
                                                                <option value="14">14</option>
                                                                <option value="15">15</option>
                                                                <option value="16">16</option>
                                                                <option value="17">17</option>
                                                                <option value="18">18</option>
                                                                <option value="19">19</option>
                                                                <option value="20">20</option>
                                                                <option value="21">21</option>
                                                                <option value="22">22</option>
                                                                <option value="23">23</option>
                                                                <option value="24">24</option>
                                                                <option value="25">25</option>
                                                                <option value="26">26</option>
                                                                <option value="27">27</option>
                                                                <option value="28">28</option>
                                                                <option value="29">29</option>
                                                                <option value="30">30</option>
                                                                <option value="31">31</option>
                                                            </select></div>
                                                    </div>
                                                    <div class="col-sm-4 col-4 mt-sm-0 mt-4">
                                                        <div class="form-group select-custom-icon"><label
                                                            class="pb-1">&nbsp;</label><select
                                                                class="form-control birth-month hotel-flight-input"
                                                                name="monthOfYear">
                                                                <option value="-1">Tháng</option>
                                                                <option value="01">01</option>
                                                                <option value="02">02</option>
                                                                <option value="03">03</option>
                                                                <option value="04">04</option>
                                                                <option value="05">05</option>
                                                                <option value="06">06</option>
                                                                <option value="07">07</option>
                                                                <option value="08">08</option>
                                                                <option value="09">09</option>
                                                                <option value="10">10</option>
                                                                <option value="11">11</option>
                                                                <option value="12">12</option>
                                                            </select></div>
                                                    </div>
                                                    <div class="col-sm-4 col-4 mt-sm-0 mt-4">
                                                        <div class="form-group select-custom-icon"><label
                                                            class="pb-1">&nbsp;</label><select
                                                                class="form-control birth-year birth-year-adult hotel-flight-input"
                                                                name="yearOfYear">
                                                                <option value="-1">Năm</option>
                                                                <option value="1955">1955</option>
                                                                <option value="1956">1956</option>
                                                                <option value="1957">1957</option>
                                                                <option value="1958">1958</option>
                                                                <option value="1959">1959</option>
                                                                <option value="1960">1960</option>
                                                                <option value="1961">1961</option>
                                                                <option value="1962">1962</option>
                                                                <option value="1963">1963</option>
                                                                <option value="1964">1964</option>
                                                                <option value="1965">1965</option>
                                                                <option value="1966">1966</option>
                                                                <option value="1967">1967</option>
                                                                <option value="1968">1968</option>
                                                                <option value="1969">1969</option>
                                                                <option value="1970">1970</option>
                                                                <option value="1971">1971</option>
                                                                <option value="1972">1972</option>
                                                                <option value="1973">1973</option>
                                                                <option value="1974">1974</option>
                                                                <option value="1975">1975</option>
                                                                <option value="1976">1976</option>
                                                                <option value="1977">1977</option>
                                                                <option value="1978">1978</option>
                                                                <option value="1979">1979</option>
                                                                <option value="1980">1980</option>
                                                                <option value="1981">1981</option>
                                                                <option value="1982">1982</option>
                                                                <option value="1983">1983</option>
                                                                <option value="1984">1984</option>
                                                                <option value="1985">1985</option>
                                                                <option value="1986">1986</option>
                                                                <option value="1987">1987</option>
                                                                <option value="1988">1988</option>
                                                                <option value="1989">1989</option>
                                                                <option value="1990">1990</option>
                                                                <option value="1991">1991</option>
                                                                <option value="1992">1992</option>
                                                                <option value="1993">1993</option>
                                                                <option value="1994">1994</option>
                                                                <option value="1995">1995</option>
                                                                <option value="1996">1996</option>
                                                                <option value="1997">1997</option>
                                                                <option value="1998">1998</option>
                                                                <option value="1999">1999</option>
                                                                <option value="2000">2000</option>
                                                                <option value="2001">2001</option>
                                                                <option value="2002">2002</option>
                                                                <option value="2003">2003</option>
                                                                <option value="2004">2004</option>
                                                                <option value="2005">2005</option>
                                                                <option value="2006">2006</option>
                                                                <option value="2007">2007</option>
                                                                <option value="2008">2008</option>
                                                                <option value="2009">2009</option>
                                                                <option value="2010">2010</option>
                                                                <option value="2011">2011</option>
                                                                <option value="2012">2012</option>
                                                            </select></div>
                                                    </div>
                                                    <div class="errorform error-notes">Vui lòng nhập thông tin</div>
                                                </div>
                                            </div>
                                            <div class="col-sm-2 col-2 mt-sm-0 mt-4">
                                                <div class="form-group select-custom-icon"><label class="pb-1">Phòng
                                                    đơn</label>
                                                    <div class="form-check form-switch"><input class="form-check-input"
                                                        type="checkbox" name="isRoomSurcharge" /><label
                                                            class="form-check-label">2.900.000&nbsp;₫</label></div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </section>
                                <div class="customer-save">
                                    <h3>Quý khách có ghi chú lưu ý gì, hãy nói với chúng tôi !</h3>
                                    <div class="customer-save-inner">
                                        <p>Ghi chú thêm</p><textarea class="form-control" cols="20" name="note"
                                            placeholder="Vui lòng nhập nội dung lời nhắn bằng tiếng Anh hoặc tiếng Việt"
                                            rows="5"></textarea>
                                    </div>
                                </div>
                            </div>
                            <div class="col-md-4 col-12 right">
                                <div class="box-support"><label>Quý khách cần hỗ trợ?</label>
                                    <div class="group-contact"><a
                                        href="https://webcall.talking.vn/frame-click-to-call/new?code=tCEZl1-MKPuA6JU-czVAScCb0pPkHmPt"
                                        target="_blank" class="phone"><FontAwesomeIcon icon={faPhone} />
                                        <p>Gọi miễn phí <br />qua internet</p>
                                    </a><a href="mailto:info@vietravel.com" class="mail"><FontAwesomeIcon icon={faEnvelope} />
                                            <p>Gửi yêu cầu <br />hỗ trợ ngay</p>
                                        </a></div>
                                </div>
                                <div class="group-checkout">
                                    <h3>Tóm tắt chuyến đi</h3><span>Dịch vụ tùy chọn <b>Bay Vietravel Airlines, khách sạn 4
                                        sao</b></span>
                                    <p class="package-title">Tour trọn gói <span> (1 khách)</span></p>
                                    <div class="product">
                                        <div class="product-image"><img
                                            src={tour.anhdaidien}
                                            class="img-fluid" /></div>
                                        <div class="product-content">
                                            <p class="title">{tour.tieudetour}</p>
                                        </div>
                                    </div>
                                    <div class="go-tour">
                                        <div class="start"><FontAwesomeIcon icon={faCalendarMinus} />
                                            <div class="start-content">
                                                <h4> Bắt đầu chuyến đi</h4>
                                                <p class="time">{tourDetail.ngaykhoihanh}</p>
                                                <p class="from"></p>
                                            </div>
                                        </div>
                                        <div class="end"><FontAwesomeIcon icon={faCalendarMinus} />
                                            <div class="start-content">
                                                <h4> Kết thúc chuyến đi</h4>
                                                <p class="time">{tourDetail.ngayketthuc}</p>
                                                <p class="from"></p>
                                            </div>
                                        </div>
                                    </div>
                                    <div class="detail">
                                        <table>
                                            <thead>
                                                <tr>
                                                    <th class="l1">  <FontAwesomeIcon icon={faUser} />Hành
                                                        khách</th>
                                                    <th class="l2  text-right"><span
                                                        class="total-booking">{finalSume}&nbsp;₫</span></th>
                                                </tr>
                                            </thead>
                                            <tbody>
                                                <tr class="detail">
                                                    <td>Người lớn</td>
                                                    <td class="t-price text-right">{sl.adult.quantity} x {tour.gia}&nbsp;₫</td>
                                                </tr>
                                                <tr class="detail">
                                                    <td>Trẻ em</td>
                                                    <td class="t-price text-right">{sl.children.quantity} x {tour.giatreem}&nbsp;₫</td>
                                                </tr>
                                                <tr class="detail">
                                                    <td>Trẻ nhỏ</td>
                                                    <td class="t-price text-right">{sl.smallchildren.quantity} x {tour.giatrenho}&nbsp;₫</td>
                                                </tr>
                                                <tr class="detail">
                                                    <td>Em bé</td>
                                                    <td class="t-price text-right">{sl.baby.quantity} x {tour.giaembe}&nbsp;₫</td>
                                                </tr>


                                                <tr class="cuppon promotion-broder">
                                                    <td colspan="2">
                                                        <div class="row">
                                                            <div class="col-4">Mã giảm giá</div>
                                                            <div class="col-8 p-0">
                                                                <div class="row">
                                                                    <div class="col-7 p-0"><input
                                                                        class="form-control mr-2 w-10"
                                                                        placeholder="Thêm mã" required="" type="text"
                                                                        data-gtm-form-interact-field-id="0" value="" />
                                                                    </div>
                                                                    <div class="col-5"><input type="button"
                                                                        class="btn btn-success" id="btnDiscountCode"
                                                                        value="Áp dụng" /></div>
                                                                </div>
                                                            </div>
                                                        </div>
                                                    </td>
                                                </tr>
                                                <tr class="total">
                                                    <td>Tổng tiền </td>
                                                    <td class="t-price text-right">{finalSume}&nbsp;₫</td>
                                                </tr>
                                            </tbody>
                                        </table><button onClick={handleOrder} class="btn btn-primary btn-order">Đặt ngay</button>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </section>
            </div>
        </>
    )
}
export default Pay;