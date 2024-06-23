
import { useEffect, useState, useRef } from "react";
import { bookingID } from '../services/order.service.js'
import { useParams } from 'react-router-dom';
import { formatDate,formatNumber } from "../constant/help.js";


const Orderdetail = function () {
    const [booking, setBooking] = useState({
        machitiettour: Number,
        madiadiem: String,
        matour: String,
        ngayketthuc: Date,
        ngaykhoihanh: Date,
        thongtindichuyen: String,
        thongtinhuongdanvien: String,
        thongtintaptrung: String,
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
        ngaydangki: Date,
        tinhtrang: String,
        mataikhoan: Number,
        matour: String,
        hanhkhach: Number,
        thanhtien: Float64Array,
        hovaten: String,
        email: String,
        sdt: Number,
        diachi: String
    })
    const { orderID } = useParams();
  

    useEffect(() => {
        const fetchBooking = async () => {
            try {
                const booking = await bookingID(orderID);
                setBooking(booking);
                console.log(booking);
            } catch (error) {
            }
        };
        if (orderID !== "") {
            console.log(orderID);
            fetchBooking();
        }
    }, [orderID]);

    return (

        <main class="find-booking" role="main">
            <div><img src="" width="1" height="1" /></div>
            <section>
                <div class="container">
                    <div class="row py-4 flex-md-row flex-column-reverse">
                        <div class="col-md-8 col-12 left">
                            <section>
                                <div class="contact-info p-4 mb-4">
                                    <div class="heading">
                                        <h5 class="fw-bold tieude" data-gtm-vis-first-on-screen778132_164="127456"
                                            data-gtm-vis-recent-on-screen778132_164="145831"
                                            data-gtm-vis-total-visible-time778132_164="100"
                                            data-gtm-vis-has-fired778132_164="1">THÔNG TIN LIÊN LẠC</h5>
                                    </div>
                                    <div class="row">
                                        <div class="col-12 col-md-6"><span class="label">Họ tên</span>
                                            <p class="info">{booking[0]?.hovaten}</p>
                                        </div>
                                        <div class="col-md-6 col-12"><span class="label">Email</span>
                                            <p class="info">{booking[0]?.email}</p>
                                        </div>
                                        <div class="col-md-6 col-12"><span class="label">Địa chỉ</span>
                                            <p class="info">{booking[0]?.diachi}</p>
                                        </div>
                                        <div class="col-md-3 col-6"><span class="label">Di động</span>
                                            <p class="info">{booking[0]?.sdt}</p>
                                        </div>
                                        <div class="col-md-3 col-6"><span class="label">Điện thoại</span>
                                            <p class="info">{booking[0]?.sdt}</p>
                                        </div>
                                        <div class="col-md-3 col-12 d-none"><span class="label">Số khách</span>
                                            <p class="info">1 Người lớn</p>
                                        </div>
                                        <div class="col-12"><span class="label">Ghi chú</span>
                                            <p class="info">
                                                Booking từ Vietravel </p>
                                        </div>
                                    </div>
                                </div>
                                <div class="booking-detail p-4 mb-4">
                                    <div class="heading">
                                        <h5 class="fw-bold tieude" data-gtm-vis-first-on-screen778132_164="127458">CHI
                                            TIẾT BOOKING</h5>
                                    </div>
                                    <div class="row item">
                                        <div class="col-md-3 col-12 label">Số booking</div>
                                        <div class="col-md-9 col-12 text"><span
                                            class="text-primary fw-bold">{booking[0]?.orderID}</span>(Quý khách vui lòng nhớ
                                            số booking để thuận tiện cho các giao dịch sau này)</div>
                                    </div>
                                    <div class="row item">
                                        <div class="col-md-3 col-12 label">Trị giá booking</div>
                                        <div class="col-md-9 col-12 text"
                                            data-gtm-vis-first-on-screen778132_145="127432">{booking[0]?.thanhtien}&nbsp;₫</div>
                                    </div>
                                    <div class="row item">
                                        <div class="col-md-3 col-12 label">Số tiền đã thanh toán</div>
                                        <div class="col-md-9 col-12 text">{booking[0]?.thanhtien}&nbsp;₫</div>
                                    </div>
                                    <div class="row item">
                                        <div class="col-md-3 col-12 label">Số tiền còn lại</div>
                                        <div class="col-md-9 col-12 text">0&nbsp;₫</div>
                                    </div>
                                    <div class="row item">
                                        <div class="col-md-3 col-12 label">Ngày đăng ký</div>
                                        <div class="col-md-9 col-12 text">{booking[0]?.ngaydangki}</div>
                                    </div>
                                    <div class="row item">
                                        <div class="col-md-3 col-12 label">Hình thức thanh toán</div>
                                        <div class="col-md-9 col-12 text">Thanh toán online<br /><button class="btn btn-primary"
                                            id="btnChangePayment">Thay đổi</button></div>
                                    </div>
                                    <div class="row item">
                                        <div class="col-md-3 col-12 label">Tình trạng</div>
                                        <div class="col-md-9 col-12 text">{booking[0]?.tinhtrang}</div>
                                    </div>
                                    <div class="row item">
                                        <div class="col-md-3 col-12 label">Thời hạn thanh toán</div>
                                        <div class="col-md-9 col-12 text"><span class="text-primary fw-bold">10/06/2024
                                            01:51:59 </span>(Theo giờ Việt Nam. Booking sẽ tự động hủy nếu quá thời
                                            hạn thanh toán trên)</div>
                                    </div>
                                </div>
                            </section>
                        </div>
                        <div class="col-md-4 col-12 right">
                            <div class="group-checkout">
                                <div class="heading">
                                    <h5 class="fw-bold tieude" data-gtm-vis-first-on-screen778132_164="127464"
                                        data-gtm-vis-recent-on-screen778132_164="145832"
                                        data-gtm-vis-total-visible-time778132_164="100"
                                        data-gtm-vis-has-fired778132_164="1">PHIẾU XÁC NHẬN BOOKING</h5>
                                </div>
                                <div class="product">
                                    <div class="product-image"><a href="#1"><img
                                        src={booking[0]?.anhdaidien}
                                        class="img-fluid" alt="" /></a></div>
                                    <div class="product-content">
                                        <p class="title">{booking[0]?.tieudetour}</p><span>Số booking:<span
                                                class="text-primary fw-bold">{booking[0]?.orderID}</span></span>
                                    </div>
                                </div>
                                <div class="detail">
                                    <div class="row item">
                                        <div class="col-4 fw-bold">Mã tour</div>
                                        <div class="col-8 text-end">{booking[0]?.matour}-053-110624VU-H-7</div>
                                    </div>
                                    <div class="row item">
                                        <div class="col-4 fw-bold">Hành trình</div>
                                        <div class="col-8 text-end">{booking[0]?.tieudetour}</div>
                                    </div>
                                    <div class="row item">
                                        <div class="col-4 fw-bold">Ngày đi</div>
                                        <div class="col-8 text-end">{booking[0]?.ngaykhoihanh}</div>
                                    </div>
                                    <div class="row item">
                                        <div class="col-4 fw-bold">Ngày về</div>
                                        <div class="col-8 text-end">{booking[0]?.ngayketthuc}</div>
                                    </div>
                                    <div class="row item">
                                        <div class="col-4 fw-bold">Nơi khởi hành</div>
                                        <div class="col-8 text-end">{booking[0]?.noikhoihanh}</div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    {/* <div class="d-none d-lg-block">
                        <div class="passenger-list p-4 mb-4">
                            <div class="heading">
                                <h5 class="fw-bold tieude" data-gtm-vis-first-on-screen778132_164="139233">DANH SÁCH
                                    HÀNH KHÁCH</h5>
                            </div>
                            <table class="table booking-table" >
                                <thead>
                                    <tr class="fw-bold">
                                        <td>Họ tên</td>
                                        <td class="d-none">Giảm giá?</td>
                                        <td>Ngày sinh</td>
                                        <td>Giới tính</td>
                                        <td>Địa chỉ</td>
                                        <td>Độ tuổi</td>
                                        <td>Phòng đơn</td>
                                    </tr>
                                </thead>
                                <tbody>
                                    <tr>
                                        <td>thanh trung</td>
                                        <td class="d-none">Giảm giá?</td>
                                        <td>17/01/2003</td>
                                        <td>Nam</td>
                                        <td></td>
                                        <td>Người lớn</td>
                                        <td>Không</td>
                                    </tr>
                                </tbody>
                                <tfoot>
                                    <tr>
                                        <td colspan="11" class="text-end"><span>Tổng cộng: </span><span
                                            class="price text-primary fw-bold">9.790.000&nbsp;₫</span></td>
                                    </tr>
                                </tfoot>
                            </table>
                        </div>
                    </div> */}
                </div>
            </section>
        </main>

    )

}
export default Orderdetail