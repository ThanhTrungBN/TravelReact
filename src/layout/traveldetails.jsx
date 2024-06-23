import { useEffect, useState } from "react";
import { useParams } from 'react-router-dom';
import "../assets/css/style_home.css"
import { loadTourchitietID, loadTourID, loadLichtrinh } from '../services/detail.services.js'
import { SaleID } from '../services/order.service.js'
import { formatDate, formatNumber } from "../constant/help.js";
import { useNavigate } from 'react-router-dom';
const TravelDetail = function () {
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
    const [tour, setTour] = useState({

        danhmucID: String,
        tieudetour: String,
        matour: String,
        gia: Number,
        noikhoihanh: String,
        sochoconnhan: Number,
        songaydi: String,
        madanhmuctour: String,
        ngaythangnam: Date,
        anhdaidien: String,
        giaembe: Number,
        giatrenho: Number
    });
    const [sale, setSale] = useState({
        giasaikhigiam: Number
    });
    const navigate = useNavigate();
    const handleTourPay = (matour) => {
        navigate(`/pay/${matour}`);
    };
    const [lichtrinh, setLichtrinh] = useState([]);
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
                const tourData = await loadTourID(matour);
                setTour(tourData);
            } catch (error) {

            }
        };
        const fetchSale = async () => {
            try {
                const data = await SaleID(matour);
                setSale(data);
                console.log(data);
            } catch (error) {

            }
        };
        const fetchLichtrinh = async () => {
            try {
                const LichtrinhData = await loadLichtrinh();
                setLichtrinh(LichtrinhData);
            } catch (error) {

            }
        };
        fetchSale();
        fetchLichtrinh();
        fetchTourchitietID();
        fetchTourID();
    }, [matour]);

    return (
        <div class="flight-hotel-detail detail tour-detail " >
            <div class="container">
                <div class="row">
                    <ul class="breadcrumbs__wrapper d-flex align-items-center" itemtype="http://schema.org/BreadcrumbList">
                        <li>
                            <li itemprop="itemListElement" itemscope="" itemtype="http://schema.org/ListItem"><a
                                href="https://travel.com.vn" itemprop="item"><span itemprop="name">Du lịch</span></a>
                                <meta itemprop="position" content="1" />
                            </li> » <li><i class="icon icon--chevron - right px - 2"></i></li>
                            <li itemprop="itemListElement" itemscope="" itemtype="http://schema.org/ListItem"><a
                                href="https://travel.com.vn/du-lich/nuoc-ngoai.aspx" itemprop="item"><span itemprop="name">Du lịch trong nước</span></a>
                                <meta itemprop="position" content="2" />
                            </li> » <li><i class="icon icon--chevron - right px - 2"></i></li>
                            <li itemprop="itemListElement" itemscope="" itemtype="http://schema.org/ListItem"><a
                                href="https://travel.com.vn/du-lich-nuoc-ngoai/tour-chau-a.aspx" itemprop="item"><span
                                    itemprop="name">Tour Việt Nam</span></a>
                                <meta itemprop="position" content="3" />
                            </li> » <li><i class="icon icon--chevron - right px - 2"></i></li>
                            <li itemprop="itemListElement" itemscope="" itemtype="http://schema.org/ListItem"><a
                                href="https://travel.com.vn/du-lich-nhat-ban.aspx" itemprop="item"><span itemprop="name">Du lịch Việt Nam</span></a>
                                <meta itemprop="position" content="4" />
                            </li> » <li><i class="icon icon--chevron - right px - 2"></i></li>
                            <li itemprop="itemListElement" itemscope="" itemtype="http://schema.org/ListItem"><a
                                href="https://travel.com.vn/tour/sieu-sale-🔥-nhat-ban-tokyo-nui-phu-si-oshino-hakkai-yokohama-vinh-odaiba-3-dem-khach-san-|-ngam-hoa-cam-tu-cau.aspx"
                                itemprop="item"><span itemprop="name">{tour.tieudetour}</span></a>
                                <meta itemprop="position" content="5" />
                            </li>
                        </li>
                    </ul>
                </div>
            </div>
            <div class="entry-head">
                <section class="section-01-title section-01">
                    <div class="container-xl">
                        <div class="row">
                            <div class="col-md-6 col-12 left">
                                <div class="warp-mark"><i class="fal fa-ticket"></i><label>{tour.matour}-010-160624VJ-H</label></div>
                                <h1 class="title">{tour.tieudetour}</h1>
                                <div class="short-rating">
                                    <div class="s-rate"><span>9</span>
                                        <div class="s-comment">Tuyệt vời<p>1 quan tâm</p>
                                        </div>
                                    </div>
                                    <div class="s-wishlist"><i class="fas fa-heart"></i><label> 126</label></div>
                                </div>
                            </div>
                            <div class="col-md-6 col-12 right">
                                {sale ? (
                                    <div class="group-price">
                                        <div class="or-price">
                                            <p>Giá<span class="tour-item__price--old__number">{tour.gia} &nbsp;₫</span><i> /khách</i></p>
                                        </div>
                                        <div class="sale-price"><span class="sale">GIẢM 4%</span>
                                            <p><span class="price">{sale.giasaukhigiam}&nbsp;₫</span>/ khách</p>
                                        </div>
                                    </div>
                                ) : (
                                    <div class="sale-price">
                                        <p>Giá<span class="price" style={{color: '#e01600',fontSize: '22px',fontWeight: '700',lineHeight: '28px',margin: '0'}}> {tour.gia}&nbsp;₫</span><i> /khách</i></p>
                                    </div>
                                )

                                }
                                <div class="group-add-cart" ><a onClick={() => handleTourPay(tour.matour)} title="Đặt ngay" href="#" class="add-to-cart"><i
                                    class="fal fa-shopping-cart"></i>Đặt ngay</a><a href="#" class="add-to-group">Liên hệ tư vấn</a>
                                </div>
                            </div>
                        </div>
                    </div>
                </section>
                <section class="section-02 ">
                    <div class="container ">
                        <div class="row animate__fadeIn animate__animated">
                            <div class="col-lg-7 col-md-12 col-sm-12 left ">
                                <div class="image">
                                    <img src={tour.anhdaidien}
                                        class="img-fluid" alt="" />
                                </div>
                            </div>
                            <div class="col-lg-5 col-md-12 col-sm-12 right">
                                <div class="row gy-4">
                                    <div class="col-md-12 col-12 small">
                                        <div class="row mb-2">
                                            <div class="col-6">
                                                <div class="image"><img
                                                    src="https://media.travel.com.vn/Tour/tfd_230914021607_804742_Nui Phu Si (2).jpg"
                                                    class="img-fluid" alt="image" /></div>
                                            </div>
                                            <div class="col-6">
                                                <div class="image"><img
                                                    src="https://media.travel.com.vn/Tour/tfd_240327115721_642459_sky garden.jpg"
                                                    class="img-fluid" alt="image" /></div>
                                            </div>
                                        </div>
                                    </div>
                                    <div class="col-md-12 col-12 big">
                                        <div class="image"><img src="https://media.travel.com.vn/Tour/tfd_230203110110_690985.jpg"
                                            class="img-fluid" alt="image" /></div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </section>
                <div class="overview active">
                    <section class="section-03 mb-5">
                        <div class="container">
                            <div class="row">
                                <div class="col-md-5 col-12 left">
                                    <div class="box-order">
                                        <div class="time">
                                            <p>Khởi hành <b> 16/06/2024 - Giờ đi: 23:06</b></p>
                                            <p>Tập trung <b>20:06 ngày 16/06/2024</b></p>
                                            <p>Thời gian <b>{tour.songaydi}</b></p>
                                            <p>Nơi khởi hành <b> {tour.noikhoihanh}</b></p>
                                            <p>Số chỗ còn nhận<b> {tour.sochoconnhan}</b></p>
                                        </div>
                                        <div class="calendar">
                                            <div class="calendar-box"><i class="icon icon--calendar"></i><label><a href="#"> Ngày
                                                khác</a></label></div>
                                        </div>
                                    </div>
                                    <div class="box-support"><label>Quý khách cần hỗ trợ?</label>
                                        <div class="group-contact"><a
                                            href="https://webcall.talking.vn/frame-click-to-call/new?code=tCEZl1-MKPuA6JU-czVAScCb0pPkHmPt"
                                            target="_blank" class="phone"><i class="icon icon--phone"></i>
                                            <p>Gọi miễn phí <br />qua internet</p>
                                        </a><a href="mailto:info@vietravel.com" class="mail"><i class="icon icon--mail"></i>
                                                <p>Gửi yêu cầu <br />hỗ trợ ngay</p>
                                            </a></div>
                                    </div>
                                </div>
                                <div class="col-md-7 col-12 right">
                                    <div class="group-services">
                                        <div class="item"><img src="/img/iconn1.webp" class="icon-img" /><label>Thời
                                            gian</label>
                                            <p>5 ngày 4 đêm</p>
                                        </div>
                                        <div class="item"><img src="/img/iconn2.webp"
                                            class="icon-img" /><label>Phương tiện di chuyển</label>
                                            <p>Máy bay, Xe du lịch</p>
                                        </div>
                                        <div class="item"><img src="/img/iconn3.webp" class="icon-img" /><label>Điểm
                                            tham quan</label>
                                            <p>Nhật Bản, Tokyo, Núi Phú Sĩ, Yokahama, Oshino Hakkai, Odaiba</p>
                                        </div>
                                        <div class="item"><img src="/img/iconn4.webp" class="icon-img" /><label>Ẩm
                                            thực</label>
                                            <p>Buffet sáng, Theo thực đơn, Đặc sản địa phương</p>
                                        </div>
                                        <div class="item"><img src="/img/iconn5.webp" class="icon-img" /><label>Khách
                                            sạn</label>
                                            <p>Khách sạn 3 sao</p>
                                        </div>
                                        <div class="item"><img src="/img/iconn6.webp"
                                            class="icon-img" /><label>Thời gian lý tưởng</label>
                                            <p>Quanh năm</p>
                                        </div>
                                        <div class="item"><img src="/img/iconn7.webp"
                                            class="icon-img" /><label>Đối tượng thích hợp</label>
                                            <p>Cặp đôi, Gia đình nhiều thế hệ, Thanh niên</p>
                                        </div>
                                        <div class="item"><img src="/img/iconn8.webp" class="icon-img" /><label>Ưu đãi</label>
                                            <p>Đã bao gồm ưu đãi trong giá tour </p>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </section>
                </div>
                <section class="section-05 mb-5">
                    <div class="container">
                        <div class="row">
                            <div class="col-md-12 col-12">
                                <h2>Những địa điểm tham quan</h2>
                                <div class="slide-gallery">
                                    <div class="slick-slider slick-initialized">
                                        <div class="slick-list">
                                            <div class="slick-track"
                                                style={{ width: '1260px', opacity: 1, transform: 'translate3d(0px, 0px, 0px)' }}>
                                                <div data-index="0" class="slick-slide" tabindex="-1" aria-hidden="true"
                                                    style={{ outline: 'none', width: '252px' }}>
                                                    <div>
                                                        <div class="image" tabindex="-1" style={{ width: '100%', display: 'inline-block' }}><img
                                                            src="https://media.travel.com.vn/Tour/tfd_230623022537_223908_Dipping cups Meiji.jpg"
                                                            width="252"
                                                            title="https://media.travel.com.vn/Tour/tfd_230623022537_223908_Dipping cups Meiji.jpg"
                                                            height="180" alt="image" /></div>
                                                    </div>
                                                </div>
                                                <div data-index="1" class="slick-slide" tabindex="-1" aria-hidden="true"
                                                    style={{ outline: 'none', width: '252px' }}>
                                                    <div>
                                                        <div class="image" tabindex="-1" style={{ width: '100%', display: 'inline-block' }}><img
                                                            src="https://media.travel.com.vn/Destination/dc_230103_Hoa Anh Dao Mua Thu.jpg"
                                                            width="252"
                                                            title="https://media.travel.com.vn/Destination/dc_230103_Hoa Anh Dao Mua Thu.jpg"
                                                            height="180" alt="image" /></div>
                                                    </div>
                                                </div>
                                                <div data-index="2" class="slick-slide slick-active slick-current" tabindex="-1"
                                                    aria-hidden="false" style={{ outline: 'none', width: '252px' }}>
                                                    <div>
                                                        <div class="image" tabindex="-1" style={{ width: '100%', display: 'inline-block' }}><img
                                                            src="https://media.travel.com.vn/Destination/dc_230103_Shibazakura festival, Yamanashi.jpg"
                                                            width="252"
                                                            title="https://media.travel.com.vn/Destination/dc_230103_Shibazakura festival, Yamanashi.jpg"
                                                            height="180" alt="image" /></div>
                                                    </div>
                                                </div>
                                                <div data-index="3" class="slick-slide slick-active" tabindex="-1" aria-hidden="false"
                                                    style={{ outline: 'none', width: '252px' }}>
                                                    <div>
                                                        <div class="image" tabindex="-1" style={{ width: '100%', display: 'inline-block' }}><img
                                                            src="https://media.travel.com.vn/Destination/dc_230103_Tokyo Tower - Sakura.jpg"
                                                            width="252"
                                                            title="https://media.travel.com.vn/Destination/dc_230103_Tokyo Tower - Sakura.jpg"
                                                            height="180" alt="image" /></div>
                                                    </div>
                                                </div>
                                                <div data-index="4" class="slick-slide slick-active" tabindex="-1" aria-hidden="false"
                                                    style={{ outline: 'none', width: '252px' }}>
                                                    <div>
                                                        <div class="image" tabindex="-1" style={{ width: '100%', display: 'inline-block' }}><img
                                                            src="https://media.travel.com.vn/Destination/dc_230103_Kabuki-cho in Shinjuku_.jpg"
                                                            width="252"
                                                            title="https://media.travel.com.vn/Destination/dc_230103_Kabuki-cho in Shinjuku_.jpg"
                                                            height="180" alt="image" /></div>
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
                <div class="map-route">
                    <section class="section-06 mb-5">
                        <div class="container">
                            <div class="row">
                                <div class="col-md-12 col-12">
                                    <h2 class="mb-4">Lịch trình</h2>
                                </div>
                            </div>
                        </div>
                    </section>
                    <section class="section-07-map mb-5">
                        <div class="container">
                            <div class="row">
                                <div class="col-md-4 d-none d-md-block col-12 left">
                                    <div class="go-tour">
                                        {lichtrinh.map((item, index) => (
                                            <div class="day day-001">
                                                <div class="wrapper"><span class="date-left"> Ngày </span><span class="date-center ">{item.ngay}</span><span
                                                    class="date-right"><span class="date">16/06/2024</span><span class="location">{item.tieude}</span></span></div>
                                            </div>
                                        ))}
                                    </div>
                                </div>
                                <div class="col-md-8 col-12 right timeline-section">
                                    {lichtrinh.map((item, index) => (
                                        <div>
                                            <h3 id="day-00">{item.tieude}</h3>
                                            <div class="excerpt"><span class="line"></span>
                                                <div>

                                                    <title></title>
                                                    <p style={{ textAlign: 'justify' }}>{item.mota}</p>
                                                </div>
                                            </div>
                                        </div>
                                    ))}
                                </div>
                            </div>
                        </div>
                    </section>
                    <section class="section-08 mb-5">
                        <div class="container-xl">
                            <div class="row">
                                <div class="col-md-6 col-12 left">
                                    <h2 class="mb-4">Chi tiết tour</h2>
                                    <div class="tour">
                                        <div class="detail-tour">
                                            <h3 class="tt">Thông tin chuyến bay</h3>
                                            <div class="detail-tour-inner">
                                                <div class="date"><span>Ngày đi - </span><b>{tourDetail.ngaykhoihanh}</b></div>
                                                <div class="time">
                                                    <h4>23:20</h4><span>Bay thẳng</span>
                                                    <h4>07:40</h4>
                                                </div>
                                                <div class="from d-flex justify-content-between align-items-center col-12"><span
                                                    class="col-md-4 small text-center">TP. HỒ CHÍ MINH</span>
                                                    <div class="row col-md-4"><img
                                                        src="https://media.travel.com.vn/ImageAirlines/logo_VIETJETAIR.png" class="flight-logo"
                                                        alt="prop" /></div><span class="col-md-4 small text-center">Narita</span>
                                                </div>
                                                <div class="from d-flex justify-content-between align-items-center col-12">
                                                    <div class="col-md-4 small text-center">SGN</div>
                                                    <div class="row col-md-4"></div>
                                                    <div class="col-md-4 small text-center">NRT</div>
                                                </div>
                                                <div class="p-line"><span><img src="/img/go.webp" alt="prop" /></span><span><img
                                                    src="/img/plane.webp" alt="prop" /></span><span><img src="/img/go.webp"
                                                        alt="prop" /></span></div>
                                                <div class="cb">Ký hiệu chuyến bay<p> VJ822</p>
                                                </div>
                                            </div>
                                            <div class="detail-tour-inner comeback ">
                                                <div class="date"><span>Ngày về - </span><b>{tourDetail.ngayketthuc}</b></div>
                                                <div class="time">
                                                    <h4>08:55</h4><span>Bay thẳng</span>
                                                    <h4>12:55</h4>
                                                </div>
                                                <div class="from d-flex justify-content-between align-items-center col-12"><span
                                                    class="col-md-4 small text-center">Narita Airport</span>
                                                    <div class="row col-md-4"><img
                                                        src="https://media.travel.com.vn/ImageAirlines/logo_VIETJETAIR.png" class="flight-logo"
                                                        alt="prop" /></div><span class="col-md-4 small text-center">TP. HỒ CHÍ MINH</span>
                                                </div>
                                                <div class="from d-flex justify-content-between align-items-center col-12">
                                                    <div class="col-md-4 small text-center">NRT</div>
                                                    <div class="row col-md-4"></div>
                                                    <div class="col-md-4 small text-center">SGN</div>
                                                </div>
                                                <div class="p-line"><span><img src="/img/go.webp" alt="prop" /></span><span><img
                                                    src="/img/plane.webp" alt="prop" /></span><span><img src="/img/go.webp"
                                                        alt="prop" /></span></div>
                                                <div class="cb">Ký hiệu chuyến bay<p> VJ823</p>
                                                </div>
                                            </div>
                                        </div>
                                        <div class="more-info more-info-1 mt-5">
                                            <h3 class="tt">Thông tin tập trung</h3>
                                            <div class="block"><span>Ngày giờ tập trung</span>
                                                <div class="info">20:20<p>16/06/2024</p>
                                                </div>
                                            </div>
                                            <div class="block"><span>Nơi tập trung</span>
                                                <div class="info">{tourDetail.thongtintaptrung}</div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                <div class="col-md-6 col-12 right">
                                    <h2>Giá tour &amp; phụ thu phòng đơn</h2>
                                    <div class="table-price">
                                        <table>
                                            <tbody>
                                                <tr>
                                                    <th class="l1">Loại khách</th>
                                                    <th class="l2">Giá tour</th>
                                                </tr>
                                                <tr>
                                                    <td>Người lớn (Từ 12 tuổi trở lên)</td>
                                                    <td class="t-price">{tour.gia}&nbsp;₫</td>
                                                </tr>
                                                <tr>
                                                    <td>Trẻ em (Từ 2 tuổi đến dưới 12 tuổi)</td>
                                                    <td class="t-price">{tour.giatrenho}&nbsp;₫</td>
                                                </tr>
                                                <tr>
                                                    <td>Em bé (Dưới 2 tuổi)</td>
                                                    <td class="t-price">{tour.giaembe}&nbsp;₫</td>
                                                </tr>
                                                <tr class="total">
                                                    <td>Phụ thu phòng đơn</td>
                                                    <td class="t-price">0&nbsp;₫</td>
                                                </tr>
                                            </tbody>
                                        </table>
                                    </div>
                                    <h2 class="tt mt-3">Thông tin hướng dẫn viên</h2>
                                    <div class="table-price">
                                        <div class="more-info more-info-2">
                                            <div class="block"><span>HDV dẫn đoàn</span>
                                                <div>{tourDetail.thongtinhuongdanvien}</div>
                                            </div>
                                            <div class="block"><span>HDV tiễn</span>
                                                <div>{tourDetail.thongtinhuongdanvien}</div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </section>
                </div>
                <div class="note-info">
                    <section class="section-09">
                        <div class="container">
                            <div class="row">
                                <h2>Những thông tin cần lưu ý</h2>
                                <div class="col-md-6 col-12 left">
                                    <div class="faqs">
                                        <article><i class="open far fa-chevron-down"></i>
                                            <h3>Giá tour bao gồm</h3>
                                            <div class="panel">- Visa nhập cảnh Nhật Bản.
                                                <br />- Vé máy bay khứ hồi Sài Gòn – Nhật Bản – Sài Gòn.
                                                <br />- Thuế và các khoản phụ thu của hàng không.
                                                <br />- Khách sạn tương đương 3* (2 người lớn/ phòng 2 giường đơn hoặc phòng truyền thống Tatami
                                                kiểu Nhật)
                                                <br />- Các bữa ăn được liệt kê theo chương trình.
                                                <br />- Vé tham quan theo chương trình.
                                                <br />- Hướng dẫn viên Vietravel nói tiếng Việt và đi theo suốt tuyến.
                                                <br />- Xe máy lạnh sử dụng theo chương trình.
                                                <br />
                                                <br />Đặc biệt, Vietravel tặng thêm cho tất cả du khách (đến dưới 80 tuổi) phí Bảo hiểm du lịch
                                                với mức bồi thường tối đa là 460.000.000 VNĐ cho nhân mạng và 30.000.000 VNĐ cho hành lý.
                                                <br />
                                                <br />Khách Sạn ở Tokyo Và Osaka có thể ở xa trung tâm thành phố khoảng 1h -1,5 h đi xe vào các
                                                mùa Cao Điểm của Nhật như Hoa Anh Đào, Tuần lễ Vàng ( 30/04), lễ, Tết….
                                                <br />
                                                <br />
                                            </div>
                                        </article>
                                        <article><i class="open far fa-chevron-down"></i>
                                            <h3>Giá tour không bao gồm</h3>
                                            <div class="panel">
                                                <p>- Phí phòng đơn (dành cho khách yêu cầu ở phòng đơn).
                                                    <br />- Nước uống (bia rượu trong bữa ăn), điện thoại, giặt ủi, hành lý quá cước theo quy định
                                                    của hàng không.
                                                    <br />- Chi phí cá nhân của khách ngoài chương trình.
                                                    <br />- Tiền bồi dưỡng cho hướng dẫn viên và tài xế địa phương 153.000 VNĐ/ ngày/ khách ( tương
                                                    đương 6usd/ngày/khách)
                                                    <br />- Chi phí dời ngày, đổi chặng, nâng hạng vé máy bay. Trường hợp Quý khách không sử dụng
                                                    chặng đi của vé đoàn theo tour, các chặng nội địa và quốc tế còn lại sẽ bị hủy hoặc không sử
                                                    dụng chặng về cũng không được hoàn do điều kiện của hãng Hàng Không.
                                                    <br />- Trong trường hợp Quý khách chỉ mua dịch vụ tham quan tại nước ngoài và có giờ bay đến
                                                    không trùng với giờ bay của đoàn: Quý khách vui lòng tự túc di chuyển để nhập đoàn ngày đến và
                                                    tự túc ra sân bay ngày về. Bảo hiểm du lịch không bao gồm đối với Quý khách chỉ mua dịch vụ
                                                    tham quan tại nước ngoài ( không có vé máy bay xuất phát từ Việt Nam)
                                                    <br />
                                                    <br />
                                                </p>
                                            </div>
                                        </article>
                                        <article><i class="open far fa-chevron-down"></i>
                                            <h3>Giá vé trẻ em</h3>
                                            <div class="panel">
                                                <p>Đối với các ngày khời hành bay hàng không Vietjet Air:
                                                    <br />+ Trẻ em dưới 2 tuổi: 30% giá tour người lớn.
                                                    <br />+ Trẻ em từ 2 tuổi đến dưới 12 tuổi: 90% giá tour người lớn (không có chế độ giường
                                                    riêng).
                                                    <br />+ Trẻ em từ 2 tuổi đến dưới 12 tuổi: 100% giá tour người lớn (có chế độ giường riêng).
                                                    <br />+ Trẻ em đủ 12 tuổi trở lên: 100% giá tour người lớn.
                                                    <br />Lưu Ý: Nếu Quý khách đi 01 người lớn và 01 trẻ em dưới 12 tuổi, vui lòng đóng giá trẻ em
                                                    có giường để lấy 01 phòng.
                                                    <br />
                                                    <br />Đối với các ngày khời hành bay hàng không Vietnam Airlines:
                                                    <br />+ Trẻ em dưới 2 tuổi: 30% giá tour người lớn.
                                                    <br />+ Trẻ em từ 2 tuổi đến dưới 12 tuổi: 75% giá tour người lớn (không có chế độ giường
                                                    riêng).
                                                    <br />+ Trẻ em từ 2 tuổi đến dưới 12 tuổi: 90% giá tour người lớn (có chế độ giường riêng).
                                                    <br />+ Trẻ em đủ 12 tuổi trở lên: 100% giá tour người lớn.
                                                    <br />Lưu Ý: Nếu Quý khách đi 01 người lớn và 01 trẻ em dưới 12 tuổi, vui lòng đóng giá trẻ em
                                                    có giường để lấy 01 phòng.
                                                    <br />
                                                </p>
                                            </div>
                                        </article>
                                        <article><i class="open far fa-chevron-down"></i>
                                            <h3>Điều kiện thanh toán</h3>
                                            <div class="panel">
                                                <p>- Đợt 1: Đặt cọc 50% tổng giá trị tour/khách.
                                                    <br />- Đợt 2: Thanh toán số tiền còn lại trước ngày khởi hành 7 ngày (cho tour ngày thường) và
                                                    trước 20 ngày (cho tour ngày Lễ, Tết, Hoa Anh Đào)
                                                    <br />
                                                </p>
                                            </div>
                                        </article>
                                        <article><i class="open far fa-chevron-down"></i>
                                            <h3>Các điều kiện khi đăng ký tour</h3>
                                            <div class="panel">
                                                <p>- Khi đăng ký tour du lịch, Quý khách vui lòng đọc kỹ chương trình, giá tour, các khoản bao
                                                    gồm cũng như không bao gồm trong chương trình, các điều kiện hủy tour trên biên nhận đóng
                                                    tiền. Trong trường hợp Quý khách không trực tiếp đến đăng ký tour mà do người khác đến đăng ký
                                                    thì Quý khách vui lòng tìm hiểu kỹ chương trình từ người đăng ký cho mình.
                                                    <br />- Quý khách vui lòng không tách đoàn và đi theo đúng chương trình.
                                                    <br />- Khách nữ từ 55 tuổi trở lên và khách nam từ 60 trở lên: nên có người thân dưới 55 tuổi
                                                    (đầy đủ sức khỏe) đi cùng. Riêng khách từ 70 tuổi trở lên: bắt buộc phải có người thân dưới 55
                                                    tuổi (đầy đủ sức khỏe) đi cùng. Ngoài ra, khách từ 75 tuổi trở lên khuyến khích đóng thêm phí
                                                    bảo hiểm cao cấp (phí thay đổi tùy theo tour). Hạn chế không nhận khách từ 80 tuổi trở lên.
                                                    Khách từ 80 tuổi không có chế độ bảo hiểm..
                                                    <br />- Quý khách mang thai xin vui lòng báo cho nhân viên bán tour ngay tại thời điểm đăng ký
                                                    để được tư vấn thêm thông tin. Không nhận khách mang thai từ 5 tháng trở lên vì lí do an toàn
                                                    cho khách.
                                                    <br />- Trường hợp khách quốc tịch nước ngoài có visa vào Việt Nam 1 lần, phí làm visa tái nhập
                                                    Việt Nam 1.550.000 VNĐ/ khách. Riêng visa tái nhập Việt Nam làm tại cửa khẩu là 650.000 VNĐ/
                                                    khách.
                                                    <br />- Nếu khách là Việt Kiều hoặc nước ngoài có visa rời phải mang theo lúc đi tour.
                                                    <br />- Khi đăng ký tour du lịch, Quý khách vui lòng đọc kỹ chương trình, giá tour, các khoản
                                                    bao gồm cũng như không bao gồm trong chương trình, các điều kiện hủy tour trên biên nhận đóng
                                                    tiền. Trong trường hợp Quý khách không trực tiếp đến đăng ký tour mà do người khác đến đăng ký
                                                    thì Quý khách vui lòng tìm hiểu kỹ chương trình từ người đăng ký cho mình.
                                                    <br />- Do các chuyến bay phụ thuộc vào các hãng Hàng Không nên trong một số trường hợp giờ bay
                                                    có thể thay đổi mà không được báo trước.
                                                    <br />- Tùy vào tình hình thực tế, thứ tự các điểm tham quan trong chương trình có thể thay đổi
                                                    nhưng vẫn đảm bảo đầy đủ các điểm tham quan như lúc đầu.
                                                    <br />- Vietravel sẽ không chịu trách nhiệm bảo đảm các điểm tham quan trong trường hợp:
                                                    <br />+ Xảy ra thiên tai: dịch bệnh, bão lụt, hạn hán, động đất…
                                                    <br />+ Sự cố về an ninh: khủng bố, biểu tình
                                                    <br />+ Sự cố về hàng không: trục trặc kỹ thuật, an ninh, dời, hủy, hoãn chuyến bay.
                                                    <br />Nếu những trường hợp trên xảy ra, Vietravel sẽ xem xét để hoàn trả chi phí không tham quan
                                                    cho khách trong điều kiện có thể (sau khi đã trừ lại các dịch vụ đã thực hiện như phí làm
                                                    visa….và không chịu trách nhiệm bồi thường thêm bất kỳ chi phí nào khác).
                                                </p>
                                            </div>
                                        </article>
                                        <article><i class="open far fa-chevron-down"></i>
                                            <h3>Liên hệ</h3>
                                            <div class="panel">
                                                <p>

                                                    <title></title>


                                                    <p style={{ textAlign: 'center' }}><strong>Mọi chi tiết xin vui lòng liên hệ&nbsp;<br />
                                                        Tổng đài tư vấn 1900 1839 – ext: 1145, 1349<br />
                                                        Công ty du lịch Vietravel 190 Pasteur, Phường Võ Thị Sáu, Quận 3, TP.HCM<br />
                                                        <br />
                                                        &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; KÍNH CHÚC QUÝ KHÁCH CÓ MỘT CHUYẾN DU
                                                        LỊCH VUI VẺ!</strong><br />
                                                        &nbsp;</p>


                                                </p>
                                            </div>
                                        </article>
                                    </div>
                                </div>
                                <div class="col-md-6 col-12 right">
                                    <div class="faqs">
                                        <article><i class="open far fa-chevron-down"></i>
                                            <h3>Lưu ý khi chuyển/hủy tour</h3>
                                            <div class="panel">
                                                <p>- Sau khi đóng tiền, nếu Quý khách muốn chuyển/huỷ tour xin vui lòng mang Vé Du Lịch đến văn
                                                    phòng đăng ký tour để làm thủ tục chuyển/huỷ tour và chịu chi phí theo quy định của Vietravel.
                                                    Không giải quyết các trường hợp liên hệ chuyển/huỷ tour qua điện thoại.
                                                    <br />- Đối với những tour còn thời hạn hủy nhưng đã làm visa, Quý khách vui lòng thanh toán phí
                                                    visa.
                                                    <br />- Sau khi đặt cọc tour và trước khi Vietravel nộp phí visa: chi phí không hoàn lại là
                                                    2.000.000 VNĐ (phí đặt cọc vé máy bay)
                                                    <br />- Sau khi Vietravel nộp phí visa: chi phí không hoàn lại là 3.000.000 VNĐ
                                                    <br />- Trường hợp Quý khách bị từ chối visa, chi phí không hoàn lại là 3.000.000 VNĐ.
                                                    <br />
                                                </p>
                                            </div>
                                        </article>
                                        <article><i class="open far fa-chevron-down"></i>
                                            <h3>Các điều kiện hủy tour đối với ngày thường</h3>
                                            <div class="panel">
                                                <p>- Nếu hủy hoặc chuyển sang các tuyến du lịch khác trước ngày khởi hành 30: Không mất chi phí.
                                                    <br />- Nếu hủy hoặc chuyển sang các chuyến du lịch khác từ 24-29 ngày trước ngày khởi hành: Chi
                                                    phí chuyển/ huỷ tour là 50% tiền cọc tour.
                                                    <br />- Nếu hủy hoặc chuyển sang các chuyến du lịch khác từ 20-23 ngày trước ngày khởi: Chi phí
                                                    chuyển/huỷ tour là 100% tiền cọc tour.
                                                    <br />- Nếu hủy chuyến du lịch ngay sau khi Đại Sứ Quán, Lãnh Sự Quán đã cấp visa: Chi phí huỷ
                                                    tour là 100% tiền cọc tour.
                                                    <br />- Nếu hủy chuyến du lịch trong vòng từ 14-19 ngày trước ngày khởi hành: Chi phí huỷ tour
                                                    là 50% trên giá tour du lịch.
                                                    <br />- Nếu hủy chuyến du lịch trong vòng từ 10-13 ngày trước ngày khởi hành: Chi phí huỷ tour
                                                    là 70% trên giá tour du lịch.
                                                    <br />- Nếu hủy chuyến du lịch trong vòng từ 02-09 ngày trước ngày khởi hành: Chi phí huỷ tour
                                                    là 90% trên giá vé du lịch.
                                                    <br />- Nếu hủy chuyến du lịch trong vòng 1 ngày trước ngày khởi hành: Chi phí huỷ tour là 100%
                                                    trên giá vé du lịch.
                                                    <br />-Thời gian hủy tour được tính cho ngày làm việc, không tính thứ bảy và chủ nhật
                                                    <br />* Các tour ngày lễ, tết là các tour có thời gian diễn ra rơi vào một trong các ngày lễ,
                                                    tết theo qui định.
                                                </p>
                                            </div>
                                        </article>
                                        <article><i class="open far fa-chevron-down"></i>
                                            <h3>Các điều kiện hủy tour đối với ngày lễ, Tết</h3>
                                            <div class="panel">
                                                <p>Áp dụng cho các tour có thời gian diễn ra rơi vào một trong các ngày Lễ, Tết theo qui định
                                                </p>
                                                <p>Áp dụng cho các tour có thời gian diễn ra rơi vào một trong các ngày Lễ, Tết theo qui định
                                                    <br />
                                                    <br />- Nếu hủy hoặc chuyển sang các tuyến du lịch khác trước ngày khởi hành 45 ngày: Không mất
                                                    chi phí.
                                                    <br />- Nếu hủy hoặc chuyển sang các chuyến du lịch khác từ 34-44 ngày trước ngày khởi hành: Chi
                                                    phí chuyển/huỷ tour là 50% tiền cọc tour.
                                                    <br />- Nếu hủy hoặc chuyển sang các chuyến du lịch khác từ 25-33 ngày trước ngày khởi hành: Chi
                                                    phí chuyển/huỷ tour là 100% tiền cọc tour.
                                                    <br />- Nếu hủy chuyến du lịch ngay sau khi Đại Sứ Quán, Lãnh Sự Quán đã cấp visa: Chi phí huỷ
                                                    tour là 100% tiền cọc tour.
                                                    <br />- Nếu hủy chuyến du lịch trong vòng từ 20-24 ngày trước ngày khởi hành: Chi phí huỷ tour
                                                    là 50% trên giá tour du lịch.
                                                    <br />- Nếu hủy chuyến du lịch trong vòng từ 11-19 ngày trước ngày khởi: Chi phí huỷ tour là 70%
                                                    trên giá tour du lịch.
                                                    <br />- Nếu hủy chuyến du lịch trong vòng từ 02-10 ngày trước ngày khởi: Chi phí huỷ tour là 90%
                                                    trên giá vé du lịch.
                                                    <br />- Nếu hủy chuyến du lịch trong vòng 1 ngày trước ngày khởi hành: Chi phí huỷ tour là 100%
                                                    trên giá vé du lịch.
                                                </p>
                                            </div>
                                        </article>
                                        <article><i class="open far fa-chevron-down"></i>
                                            <h3>Trường hợp bất khả kháng</h3>
                                            <div class="panel">
                                                <p>Nếu chương trình du lịch bị hủy bỏ hoặc thay đổi bởi một trong hai bên vì lý do bất khả kháng
                                                    (hỏa hoạn, thời tiết, tai nạn, thiên tai, chiến tranh, dịch bệnh, hoãn, dời, và hủy chuyến
                                                    hoặc thay đổi khác của các phương tiện vận chuyển công cộng hoặc các sự việc bất khả kháng
                                                    khác theo quy định pháp luật…), thì hai bên sẽ không chịu bất kỳ nghĩa vụ bồi hoàn các tổn
                                                    thất đã xảy ra và không chịu bất kỳ trách nhiệm pháp lý nào. Tuy nhiên mỗi bên có trách nhiệm
                                                    cố gắng tối đa để giúp đỡ bên bị thiệt hại nhằm giảm thiểu các tổn thất gây ra vì lý do bất
                                                    khả kháng.</p>
                                            </div>
                                        </article>
                                        <article><i class="open far fa-chevron-down"></i>
                                            <h3>Thông tin visa</h3>
                                            <div class="panel">
                                                <p>

                                                    <title></title>


                                                    <p style={{ textAlign: 'justify' }}><span style={{ color: '#ff0000' }}><strong>***Điều kiện để làm visa: (Quý
                                                        khách chuẩn bị những giấy tờ sau trước ít nhất 3 tuần. Toàn bộ hồ sơ photo/in trên giấy
                                                        A4, không cắt gọn)</strong></span></p>

                                                    <p style={{ textAlign: 'justify' }}><strong>1. Đối với Quý khách có sổ hộ khẩu từ tỉnh Phú Yên trở vào
                                                        các tỉnh phía Nam : Nộp tại Lãnh sự quán TP. Hồ Chí Minh:&nbsp;</strong><br />
                                                        <br />
                                                        <strong>* Nhân thân :</strong><br />
                                                        - Hộ chiếu gốc còn hạn tối thiểu 06 tháng tính từ ngày kết thúc tour. Khuyến khích quý khách
                                                        nộp hộ chiếu cũ photo các trang có nội dung (nếu có)<br />
                                                        -<strong> Files hình 3,5cm × 4,5cm </strong>nền trắng được chụp trong vòng 3 tháng trở lại. Tỉ
                                                        lệ khuôn mặt chiếm 70-80% khổ hình. (chiều dài từ đỉnh đầu đến cằm từ 3.2-3.5cm).&nbsp;<br />
                                                        - Photo căn cước công dân có địa chỉ ở miền Nam hoặc CT07/CT08 bản photo (còn hạn)<br />
                                                        - Photo Giấy chứng nhận kết hôn (nếu đã có gia đình)<br />
                                                        - Photo Giấy khai sinh của con (nếu có con đi cùng)
                                                    </p>

                                                    <p style={{ textAlign: 'justify' }}><strong>* Form khai :</strong><br />
                                                        - Ký tên vào Tờ Form xin visa (Theo mẫu tiếng Anh của Lãnh sự quán) ngay mục Signature of
                                                        Applicant<br />
                                                        - Ký tên và điền đầy đủ thông tin vào Tờ khai thông tin xin visa (Theo mẫu tiếng Việt của
                                                        Vietravel)<br />
                                                        Lưu ý: Quý khách vui lòng khai đầy đủ chi tiết yêu cầu trong Tờ khai, thiếu bất kỳ thông tin
                                                        nào sẽ không hoàn thiện được form khai&nbsp;<br />
                                                        <br />
                                                        <strong>* Chứng minh công việc :</strong><br />
                                                        - Photo Thẻ hưu trí hoặc quyết định nghỉ hưu hoặc sổ nhận lương hưu hằng tháng<strong>
                                                        </strong>(nếu Quý khách đã nghỉ hưu).<br />
                                                        - Photo Hợp đồng lao động hoặc Quyết định bổ nhiệm hoặc Quyết định nâng lương và Bản gốc Đơn
                                                        xin nghỉ phép có ghi rõ ngày nghỉ phép trùng với thời gian đi tour và có đóng mộc tròn đỏ của
                                                        công ty hoặc cơ quan tại chữ ký người duyệt đơn (nếu Quý khách là Cán bộ - Công nhân
                                                        viên).<br />
                                                        - Photo Giấy phép kinh doanh + photo biên lại nộp thuế 3 tháng gần nhất và biên lại nộp thuế
                                                        môn bài (nếu<strong> </strong>Quý khách có kinh doanh, buôn bán)<br />
                                                        - Photo Hợp đồng cho thuê nhà, đất, xe (có công chứng) và Photo chủ quyền nhà, đất, xe đang
                                                        cho thuê<strong> </strong>nếu Quý khách có tài sản thuê<br />
                                                        - Photo thẻ học sinh/ thẻ sinh viên/ giấy khen/ bảng điểm/ biên lai học phí hoặc bản gốc Xác
                                                        nhận học sinh/ sinh viên có đóng mộc tròn đỏ của nhà trường nếu Quý khách là học sinh/ sinh
                                                        viên
                                                    </p>

                                                    <p style={{ textAlign: 'justify' }}><strong>* Chứng minh tài chính :</strong><br />
                                                        - Photo Sổ Tiết kiệm có ngày đáo hạn sau ngày kết thúc tour và bản gốc Xác nhận số dư tiền gửi
                                                        tiết kiệm có mộc đỏ ngân hàng (giá trị ít nhất 120.000.000 VNĐ/khách). Ưu tiên lấy sổ có giá
                                                        trị tiền gửi cao và đã mở lâu tối thiểu từ 3 tháng trở lên.<br />
                                                        - Hoặc sao kê tài khoản trả lương (6 tháng gần nhất): Yêu cầu tối thiểu phải có các nội dung :
                                                        thông tin có tên khách hàng + những trang thể hiện nội dung thu nhập/ lương - không quy định
                                                        số dư cuối kỳ. Chỉ có thể chứng minh tài chính theo cách này cho bản thân người đi, không bảo
                                                        lãnh cho người đi cùng được (kể cả cha/mẹ/con ruột/vợ chồng)&nbsp;<br />
                                                        <br />
                                                        (sao kê cá nhân và sao kê công ty không áp dụng cho chứng minh về tài chính)<br />
                                                        <br />
                                                        <strong>* Chứng minh tài sản :</strong><br />
                                                        - Photo Chủ quyền nhà, đất, xe ô tô… (nếu có)
                                                    </p>

                                                    <p style={{ textAlign: 'justify' }}><strong>2. Đối với Quý khách có sổ hộ khẩu từ tỉnh Bình Định trở
                                                        ra các tỉnh phía Bắc : Nộp tại Đại sứ quán Hà Nội :</strong><br />
                                                        <br />
                                                        <strong>* Nhân thân :</strong><br />
                                                        - Hộ chiếu gốc còn hạn tối thiểu 06 tháng tính từ ngày kết thúc tour. Quý khách lưu ý ký và
                                                        ghi rõ họ tên (bằng bút bi) ở trang 03 của hộ chiếu. Khuyến khích quý khách nộp hộ chiếu cũ
                                                        (nếu có)<br />
                                                        - 02 tấm hình khổ 3,5x4,5cm, nền trắng, mới chụp trong vòng 3 tháng gần đây (không trùng mặt
                                                        hộ chiếu). Hình chụp thẳng, thần thái nghiêm trang, phải nhìn thấy tai, chân mày và không đeo
                                                        mắt kính. Khuôn mặt chiếm 80% khổ hình. Quý khách ghi họ tên và ngày tháng năm sinh sau tấm
                                                        hình.<br />
                                                        - Bản sao công chứng chứng minh thư nhân dân&nbsp;<br />
                                                        - Bản sao công chứng Giấy khai sinh (đối với trẻ em chưa đến tuổi làm chứng minh thư nhân
                                                        dân)<br />
                                                        - Đăng ký kết hôn bản sao công chứng nếu khách hàng đi cùng vợ (chồng)<br />
                                                        - Bản sao công chứng nguyên cuốn Sổ hộ khẩu<br />
                                                        <br />
                                                        <strong>* Form khai :</strong><br />
                                                        - Ký tên vào Tờ Form xin visa (Theo mẫu tiếng Anh của Đại sứ quán)<br />
                                                        - Ký tên và điền đầy đủ thông tin vào Tờ khai thông tin xin visa (Theo mẫu tiếng Việt của
                                                        Vietravel)
                                                    </p>

                                                    <p style={{ textAlign: 'justify' }}><strong>Lưu ý: Quý khách vui lòng khai đầy đủ chi tiết yêu cầu
                                                        trong Tờ khai, thiếu bất kỳ thông tin nào sẽ không hoàn thiện được form khai&nbsp;</strong>
                                                    </p>

                                                    <p style={{ textAlign: 'justify' }}><strong>* Chứng minh công việc &amp; Nguồn thu:<br />
                                                        - Đối với Quý khách đã nghỉ hưu:</strong>&nbsp;Bản sao công chứng Thẻ hưu trí hoặc Quyết
                                                        định nghỉ hưu<br />
                                                        <strong>- Đối với Quý khách là chủ doanh nghiệp, đứng tên trong Đăng kí kinh
                                                            doanh:&nbsp;</strong><br />
                                                        + Bản sao công chứng giấy phép đăng ký kinh doanh<br />
                                                        + Giấy nộp thuế 3 tháng gần nhất (đóng dấu Công ty).<br />
                                                        <br />
                                                        -<strong>&nbsp; Đối với Quý khách làm việc trong khối Hành chính sự nghiệp:&nbsp;</strong><br />
                                                        + Bản sao công chứng hoặc bản sao y đóng dấu công ty Hợp đồng lao động còn hạn, hoặc Quyết
                                                        định tuyển dụng, hoặc Quyết định bổ nhiệm, hoặc Quyết định tăng lương<br />
                                                        + Bản gốc xác nhận công việc ghi rõ tên, vị trí làm việc, đóng đóng dấu Công ty<br />
                                                        + Bảng lương/ xác nhận lương 3 tháng gần nhât đóng đóng dấu Công ty hoặc sao kê lương 3 tháng
                                                        gần nhất đóng đóng dấu của Ngân hàng<br />
                                                        + Đơn xin nghỉ phép có ký duyệt và đóng dấu Công ty.<br />
                                                        <br />
                                                        <strong>-&nbsp;Đối với Quý khách đang làm việc trong khối Doanh nghiệp:&nbsp;</strong><br />
                                                        + Bản sao công chứng hoặc bản sao y đóng dấu công ty Hợp đồng lao động còn hạn, hoặc Quyết
                                                        định tuyển dụng, hoặc Quyết định bổ nhiệm, hoặc Quyết định tăng lương&nbsp;<br />
                                                        + Bản sao công chứng Giấy phép thành lập hoặc giấy Đăng kí kinh doanh của nơi làm việc<br />
                                                        + Bản gốc xác nhận công việc ghi rõ tên, vị trí làm việc, đóng đóng dấu Công ty<br />
                                                        + Bảng lương/ xác nhận lương 3 tháng gần nhât đóng đóng dấu Công ty hoặc sao kê lương 3 tháng
                                                        gần nhất đóng đóng dấu của Ngân hàng<br />
                                                        + Đơn xin nghỉ phép có ký duyệt và đóng dấu Công ty<br />
                                                        <br />
                                                        <strong>-&nbsp;Đối với Quý khách là trẻ em ở độ tuổi đang đi học đi du lịch cùng gia
                                                            đình:&nbsp;</strong><br />
                                                        + Thẻ học sinh/sinh viên có đóng đóng dấu của trường, hoặc Xác nhận của trường (phòng quản lý
                                                        học sinh, sinh viên xác nhận và ký, đóng dấu của trường) là học sinh, sinh viên thuộc trường,
                                                        hoặc đơn xin nghỉ học có duyệt đồng ý, xác nhận và ký, đóng dấu của trường. (Đại sứ quán không
                                                        chấp nhận các loại giấy khen).
                                                    </p>

                                                    <p style={{ textAlign: 'justify' }}><strong>* Chứng minh tài chính:</strong><br />
                                                        - Bản gốc xác nhận số dư của sổ tiết kiệm và Photo mặt sổ tiết kiệm. Sổ tiết kiệm phải đáp ứng
                                                        những yêu cầu sau:<br />
                                                        - Sổ tiết kiệm phải có ít nhất 100.000.000 VNĐ/ người và có ngày đáo hạn sau khi kết thúc
                                                        tour.<br />
                                                        - Ngày lập xác nhận số dư cách ngày nộp hồ sơ không quá 2 tuần.</p>

                                                    <p style={{ textAlign: 'justify' }}><strong>Lưu ý chung: &nbsp;&nbsp;</strong>&nbsp; &nbsp; &nbsp;
                                                        &nbsp; &nbsp;&nbsp;<br />
                                                        - Nếu trẻ em không đi tour cùng bố mẹ ruột: yêu cầu bổ sung các giấy tờ sau:<br />
                                                        + Giấy ủy quyền của bố mẹ cho người dẫn đi (có xác nhận &amp; đóng đóng dấu của cơ quan địa
                                                        phương) hoặc giấy bảo lãnh của bố mẹ nộp cùng photo chứng minh thư của người bảo lãnh<br />
                                                        <br />
                                                        <strong>Trên đây là những thủ tục để xin visa theo quy định của Lãnh sự. Tùy vào mỗi trường
                                                            hợp, trong quá trình xét visa Lãnh sự có quyền yêu cầu bổ sung thêm bất kỳ giấy tờ nào của
                                                            quý khách nếu thấy cần thiết. Vietravel sẽ cập nhật các thủ tục cần thiết cho Quý khách nếu
                                                            có bất cứ thay đổi nào từ phía Lãnh Sự Quán.</strong>
                                                    </p>


                                                </p>
                                            </div>
                                        </article>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </section>
                </div>
                <section class="section-08">
                    <div class="container">
                        <div class="row">
                            <h2>Có thể Quý khách sẽ thích</h2>
                            <div class="products">
                                <div class="product">
                                    <div class="product-inner">
                                        <div class="product-image"><a
                                            href="/tourNNSGN322-073-020824CZ-D-7/trung-quoc-thuong-hai-hang-chau-vo-tich-to-chau-bac-kinh-chinh-phuc-van-ly-truong-thanh.aspx"><img
                                                src="https://media.travel.com.vn/Destination/tf__230519050621_265523.jpg"
                                                alt="Trung Quốc: Thượng Hải - Hàng Châu - Vô Tích - Tô Châu - Bắc Kinh - Chinh phục Vạn Lý Trường Thành"
                                                title="Trung Quốc: Thượng Hải - Hàng Châu - Vô Tích - Tô Châu - Bắc Kinh - Chinh phục Vạn Lý Trường Thành" /></a><a
                                                    href="#" class="wishlist-button"><i class="icon icon--heart"></i></a>
                                            <div class="s-rate"><span>9</span></div>
                                        </div>
                                        <div class="product-content"><span class="meta">02/08/2024 - Giờ đi: 12:08</span>
                                            <h3 class="product-title card-text tour-item__title mb-1"><a
                                                href="/tourNNSGN322-073-020824CZ-D-7/trung-quoc-thuong-hai-hang-chau-vo-tich-to-chau-bac-kinh-chinh-phuc-van-ly-truong-thanh.aspx">Trung
                                                Quốc: Thượng Hải - Hàng Châu - Vô Tích - Tô Châu - Bắc Kinh - Chinh phục Vạn Lý Trường
                                                Thành</a></h3>
                                            <p class="des">Nơi khởi hành TP. Hồ Chí Minh</p>
                                            <div class="tour-item__price--current group-price">
                                                <div class="sale-price"><span class="price">25.990.000&nbsp;₫</span></div>
                                            </div>
                                            <div class="tour-item__price--current">
                                                <div class="btn-book"><a href="#" title="Đặt ngay" class="btn btn-primary btn-sm"><i
                                                    class="icon icon--shopping p-1"></i>Đặt ngay</a></div>
                                                <div class="btn-bloc"><a
                                                    href="/tourNNSGN322-073-020824CZ-D-7/trung-quoc-thuong-hai-hang-chau-vo-tich-to-chau-bac-kinh-chinh-phuc-van-ly-truong-thanh.aspx"
                                                    class="btn product-item__summary__btn-login" title="Xem chi tiết">Xem chi tiết</a></div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                <div class="product">
                                    <div class="product-inner">
                                        <div class="product-image"><a
                                            href="/tourNNSGN322-059-131124VN-D/trung-quoc-thuong-hai-hang-chau-vo-tich-to-chau-bac-kinh-chinh-phuc-van-ly-truong-thanh.aspx"><img
                                                src="https://media.travel.com.vn/Destination/tf__230519050621_265523.jpg"
                                                alt="Trung Quốc: Thượng Hải - Hàng Châu - Vô Tích - Tô Châu - Bắc Kinh - Chinh phục Vạn Lý Trường Thành"
                                                title="Trung Quốc: Thượng Hải - Hàng Châu - Vô Tích - Tô Châu - Bắc Kinh - Chinh phục Vạn Lý Trường Thành" /></a><a
                                                    href="#" class="wishlist-button"><i class="icon icon--heart"></i></a>
                                            <div class="s-rate"><span>9</span></div>
                                        </div>
                                        <div class="product-content"><span class="meta">13/11/2024 - Giờ đi: 08:11</span>
                                            <h3 class="product-title card-text tour-item__title mb-1"><a
                                                href="/tourNNSGN322-059-131124VN-D/trung-quoc-thuong-hai-hang-chau-vo-tich-to-chau-bac-kinh-chinh-phuc-van-ly-truong-thanh.aspx">Trung
                                                Quốc: Thượng Hải - Hàng Châu - Vô Tích - Tô Châu - Bắc Kinh - Chinh phục Vạn Lý Trường
                                                Thành</a></h3>
                                            <p class="des">Nơi khởi hành TP. Hồ Chí Minh</p>
                                            <div class="tour-item__price--current group-price">
                                                <div class="sale-price"><span class="price">26.990.000&nbsp;₫</span></div>
                                            </div>
                                            <div class="tour-item__price--current">
                                                <div class="btn-book"><a href="#" title="Đặt ngay" class="btn btn-primary btn-sm"><i
                                                    class="icon icon--shopping p-1"></i>Đặt ngay</a></div>
                                                <div class="btn-bloc"><a
                                                    href="/tourNNSGN322-059-131124VN-D/trung-quoc-thuong-hai-hang-chau-vo-tich-to-chau-bac-kinh-chinh-phuc-van-ly-truong-thanh.aspx"
                                                    class="btn product-item__summary__btn-login" title="Xem chi tiết">Xem chi tiết</a></div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                <div class="product">
                                    <div class="product-inner">
                                        <div class="product-image"><a
                                            href="/tourNNSGN5170-017-100824VN-D/-han-quoc-busan-ngoi-lang-bich-hoa-gamchoen-seoul-cong-vien-everland-dao-nami-vuon-morning-calm-|-trai-nghiem-tau-cao-toc-ktx.aspx"><img
                                                src="https://media.travel.com.vn/Destination/tf_230710033545_435741_Busan (3).jpg"
                                                alt="	Hàn Quốc: Busan - Ngôi làng bích họa Gamchoen - Seoul - Công viên Everland - Đảo Nami - Vườn Morning Calm | Trải nghiệm tàu cao tốc KTX"
                                                title="	Hàn Quốc: Busan - Ngôi làng bích họa Gamchoen - Seoul - Công viên Everland - Đảo Nami - Vườn Morning Calm | Trải nghiệm tàu cao tốc KTX" /></a><a
                                                    href="#" class="wishlist-button"><i class="icon icon--heart"></i></a>
                                            <div class="s-rate"><span>9</span></div>
                                        </div>
                                        <div class="product-content"><span class="meta">10/08/2024 - Giờ đi: 01:08</span>
                                            <h3 class="product-title card-text tour-item__title mb-1"><a
                                                href="/tourNNSGN5170-017-100824VN-D/-han-quoc-busan-ngoi-lang-bich-hoa-gamchoen-seoul-cong-vien-everland-dao-nami-vuon-morning-calm-|-trai-nghiem-tau-cao-toc-ktx.aspx">
                                                Hàn Quốc: Busan - Ngôi làng bích họa Gamchoen - Seoul - Công viên Everland - Đảo Nami - Vườn
                                                Morning Calm | Trải nghiệm tàu cao tốc KTX</a></h3>
                                            <p class="des">Nơi khởi hành TP. Hồ Chí Minh</p>
                                            <div class="tour-item__price--current group-price">
                                                <div class="sale-price"><span class="price">23.990.000&nbsp;₫</span></div>
                                            </div>
                                            <div class="tour-item__price--current">
                                                <div class="btn-book"><a href="#" title="Đặt ngay" class="btn btn-primary btn-sm"><i
                                                    class="icon icon--shopping p-1"></i>Đặt ngay</a></div>
                                                <div class="btn-bloc"><a
                                                    href="/tourNNSGN5170-017-100824VN-D/-han-quoc-busan-ngoi-lang-bich-hoa-gamchoen-seoul-cong-vien-everland-dao-nami-vuon-morning-calm-|-trai-nghiem-tau-cao-toc-ktx.aspx"
                                                    class="btn product-item__summary__btn-login" title="Xem chi tiết">Xem chi tiết</a></div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                <div class="product">
                                    <div class="product-inner">
                                        <div class="product-image"><a
                                            href="/tourNNSGN3261-009-200724MU-D-7/trung-quoc-bac-kinh-chinh-phuc-van-ly-truong-thanh-to-chau-vo-tich-thuong-hai-hang-chau.aspx"><img
                                                src="https://media.travel.com.vn/Destination/tf_240530025805_281991_Great Wall of China (Van Ly Truong Thanh 2)_.jpg"
                                                alt="Trung Quốc: Bắc Kinh - Chinh phục Vạn Lý Trường Thành - Tô Châu - Vô Tích - Thượng Hải - Hàng Châu"
                                                title="Trung Quốc: Bắc Kinh - Chinh phục Vạn Lý Trường Thành - Tô Châu - Vô Tích - Thượng Hải - Hàng Châu" /></a><a
                                                    href="#" class="wishlist-button"><i class="icon icon--heart"></i></a>
                                            <div class="s-rate"><span>9</span></div>
                                        </div>
                                        <div class="product-content"><span class="meta">20/07/2024 - Giờ đi: 02:07</span>
                                            <h3 class="product-title card-text tour-item__title mb-1"><a
                                                href="/tourNNSGN3261-009-200724MU-D-7/trung-quoc-bac-kinh-chinh-phuc-van-ly-truong-thanh-to-chau-vo-tich-thuong-hai-hang-chau.aspx">Trung
                                                Quốc: Bắc Kinh - Chinh phục Vạn Lý Trường Thành - Tô Châu - Vô Tích - Thượng Hải - Hàng
                                                Châu</a></h3>
                                            <p class="des">Nơi khởi hành TP. Hồ Chí Minh</p>
                                            <div class="tour-item__price--current group-price">
                                                <div class="sale-price"><span class="price">26.990.000&nbsp;₫</span></div>
                                            </div>
                                            <div class="tour-item__price--current">
                                                <div class="btn-book"><a href="#" title="Đặt ngay" class="btn btn-primary btn-sm"><i
                                                    class="icon icon--shopping p-1"></i>Đặt ngay</a></div>
                                                <div class="btn-bloc"><a
                                                    href="/tourNNSGN3261-009-200724MU-D-7/trung-quoc-bac-kinh-chinh-phuc-van-ly-truong-thanh-to-chau-vo-tich-thuong-hai-hang-chau.aspx"
                                                    class="btn product-item__summary__btn-login" title="Xem chi tiết">Xem chi tiết</a></div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div class="row">
                            <div class="col-xs-12 text-right">
                                <div class="pager_simple_orange">
                                    <ul class=" pagination" role="navigation" aria-label="Pagination">
                                        <li class="page-item disabled"><a class="page-link " tabindex="-1" role="button"
                                            aria-disabled="true" aria-label="Previous page" rel="prev">«</a></li>
                                        <li class="active"><a rel="canonical" role="button" class="page-link" tabindex="-1"
                                            aria-label="Page 1 is your current page" aria-current="page">1</a></li>
                                        <li class="page-item disabled"><a class="page-link " tabindex="-1" role="button"
                                            aria-disabled="true" aria-label="Next page" rel="next">»</a></li>
                                    </ul>
                                </div>
                            </div>
                        </div>
                    </div>
                </section>
            </div>
        </div>

    )
}
export default TravelDetail;