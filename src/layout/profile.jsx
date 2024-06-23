import React, { useState, useEffect } from 'react';
import "../assets/css/style_home.css"
import '../assets/css/style_profile.css'
import { useContext } from 'react';
import { TravelMenu } from '../constant/context';
import { formatDate,formatNumber } from "../constant/help.js";
const Profile = function () {
    const [showDiv, setShowDiv] = useState(false);
    const { logout } = useContext(TravelMenu);
    const { MT, MB, MDNB, MTNB, User } = useContext(TravelMenu);
    const [openMenu, setOpenMenu] = useState(null);
    const [isEditing, setIsEditing] = useState(false);

    const toggleEditForm = () => {
        setIsEditing(!isEditing);
    };

    const handleClickOutside = (event) => {
        if (!event.target.closest('.setting-item')) {
            setOpenMenu(null);
        }
    };

    React.useEffect(() => {
        window.addEventListener('click', handleClickOutside);
        return () => {
            window.removeEventListener('click', handleClickOutside);
        };
    }, []);

    const useSubmitLogout = () => {
        const { logout } = useContext(TravelMenu);
        const submitLogout = () => {
            logout();
        };
        return submitLogout;
    };

    return (
        <>
            <div class="col-md-9 col-12 right ps-md-4">
                <div class="wrapper p-md-4">
                    <div class="heading">
                        <h5 class="fw-bold">Thông tin cá nhân</h5>
                        <p class="text-muted mb-4">Cập nhật thông tin của Quý khách và tìm hiểu các thông
                            tin này được sử dụng ra sao.</p>
                    </div>
                    <div class="row section-01">
                        <div class="col-md-12 col-12 setting-wrap">
                            <div class="row setting-item">
                                <div class="col-md-3 col-12 setting-label">Họ và Tên</div>
                                <div class="col-md-9 col-12">
                                    <div class="row">
                                        <div class="col-12 col-md-12">
                                            <div class="display-form">
                                                <span>{User.hoten}</span>
                                                <button
                                                    data-change="fullname"
                                                    className="fw-bold text-underline toggle-edit-form"
                                                    onClick={toggleEditForm}>
                                                    Chỉnh sửa
                                                </button>
                                            </div>
                                            {isEditing && (
                                                <div className="edit-formm">
                                                    <div className="edit-form-wrapper">
                                                        <div className="form-group">
                                                            <label>Họ và Tên</label>
                                                            <input
                                                                className="form-control"
                                                                id="fullname-input"
                                                                name="fullname"
                                                                placeholder="Nhập họ và tên"
                                                                type="text"
                                                                value={User.hoten}
                                                            />
                                                        </div>
                                                    </div>
                                                    <div className="text-end">
                                                        <button className="btn btn-sm btn-secondary edit-form-submit">
                                                            Xong
                                                        </button>
                                                    </div>
                                                </div>
                                            )}
                                        </div>

                                    </div>
                                </div>
                            </div>
                            </div>
                            <div class="row setting-item">
                                <div class="col-md-3 col-12 setting-label">Điểm vàng</div>
                                <div class="col-md-9 col-12">
                                    <div class="row">
                                        <div class="col-12 col-md-12">
                                            <div class="display-form"><span>Đang cập nhật</span></div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div class="row setting-item">
                                <div class="col-md-3 col-12 setting-label">Điểm thưởng</div>
                                <div class="col-md-9 col-12">
                                    <div class="row">
                                        <div class="col-12 col-md-12">
                                            <div class="display-form"><span>Đang cập nhật</span></div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div class="row setting-item">
                                <div class="col-md-3 col-12 setting-label">Loại thẻ</div>
                                <div class="col-md-9 col-12">
                                    <div class="row">
                                        <div class="col-12 col-md-12">
                                            <div class="display-form"><span>Đang cập nhật</span></div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div class="row setting-item">
                                <div class="col-md-3 col-12 setting-label">Điểm cần đạt để giữ hạng</div>
                                <div class="col-md-9 col-12">
                                    <div class="row">
                                        <div class="col-12 col-md-12">
                                            <div class="display-form"><span>Đang cập nhật</span></div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div class="row setting-item">
                                <div class="col-md-3 col-12 setting-label">Điểm cần đạt để nâng hạng Đang
                                    cập nhật</div>
                                <div class="col-md-9 col-12">
                                    <div class="row">
                                        <div class="col-12 col-md-12">
                                            <div class="display-form"><span>Đang cập nhật</span></div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div class="row setting-item">
                                <div class="col-md-3 col-12 setting-label">Ngày xét nâng hạng</div>
                                <div class="col-md-9 col-12">
                                    <div class="row">
                                        <div class="col-12 col-md-12">
                                            <div class="display-form"><span>Đang cập nhật</span></div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div class="row setting-item">
                                <div class="col-md-3 col-12 setting-label">Tổng số tour đã đi</div>
                                <div class="col-md-9 col-12">
                                    <div class="row">
                                        <div class="col-12 col-md-12">
                                            <div class="display-form"><span>Đang cập nhật</span></div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div class="row setting-item">
                                <div class="col-md-3 col-12 setting-label">Địa chỉ Email</div>
                                <div class="col-md-9 col-12">
                                    <div class="row">
                                        <div class="col-12 col-md-12">
                                            <div class="display-form">
                                                <div class="display-form-content">
                                                    <p>thanhtrung26012003@gmail.com</p><span></span>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div class="row setting-item">
                                <div class="col-md-3 col-12 setting-label">Số điện thoại</div>
                                <div class="col-md-9 col-12">
                                    <div class="row">
                                        <div class="col-12 col-md-12">
                                            <div class="display-form">
                                                <div class="display-form-content">
                                                    <p></p>
                                                </div><button data-change="telephone"  onClick={toggleEditForm}
                                                    class="fw-bold text-underline toggle-edit-form">Chỉnh
                                                    sửa</button>
                                            </div>
                                            <div class="edit-form" data-id="telephone">
                                                <div class="edit-form-wrapper">
                                                    <div class="form-group"><input class="form-control"
                                                        id="telephone" name="telephone"
                                                        placeholder="Số điện thoại" type="text"
                                                        value="" /></div>
                                                </div>
                                                <div class="text-end"><button
                                                    class="btn btn-sm btn-secondary edit-form-submit">Xong</button>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div class="row setting-item">
                                <div class="col-md-3 col-12 setting-label">Ngày sinh</div>
                                <div class="col-md-9 col-12">
                                    <div class="row">
                                        <div class="col-12 col-md-12">
                                            <div class="display-form">
                                                <div class="display-form-content">
                                                    <p>{User.ngaysinh}</p>
                                                </div><button data-change="dateOfBirth"
                                                    class="fw-bold text-underline toggle-edit-form">Chỉnh
                                                    sửa</button>
                                            </div>
                                            <div class="edit-form">
                                                <div class="edit-form-wrapper">
                                                    <div class="form-group col-md-4">
                                                        <div
                                                            class="form-control input-sm text-center form-control input-sm text-center rs-picker rs-picker-date rs-picker-default rs-picker-toggle-wrapper rs-picker-has-value rs-picker-cleanable">
                                                            <div role="combobox" aria-haspopup="dialog"
                                                                aria-expanded="false"
                                                                aria-owns="dateOfBirth-listbox"
                                                                mindate="Sun Jun 02 2024 20:30:47 GMT+0700 (Giờ Đông Dương)"
                                                                tabindex="-1"
                                                                class="rs-picker-toggle rs-btn rs-btn-default">
                                                                <div class="rs-stack"
                                                                    style={{ alignItems: 'center' }}>
                                                                    <div class="rs-stack-item"
                                                                        style={{ flexGrow: 1, overflow: 'hidden' }}>
                                                                        <input name="dateOfBirth"
                                                                            id="dateOfBirth"
                                                                            aria-hidden="true" readonly=""
                                                                            aria-controls="dateOfBirth-listbox"
                                                                            tabindex="0"
                                                                            class="rs-picker-toggle-textbox rs-picker-toggle-read-only"
                                                                            placeholder="dd/MM/yyyy"
                                                                            value="02/06/2024" /><span
                                                                                class="rs-picker-toggle-value"
                                                                                aria-placeholder="02/06/2024">02/06/2024</span>
                                                                    </div>
                                                                    <div class="rs-stack-item"><span
                                                                        role="button" tabindex="-1"
                                                                        class="rs-picker-toggle-clean rs-btn-close"
                                                                        title="Clear"
                                                                        aria-label="Clear"><svg
                                                                            width="1em" height="1em"
                                                                            viewBox="0 0 16 16"
                                                                            fill="currentColor"
                                                                            aria-hidden="true"
                                                                            focusable="false"
                                                                            class="rs-icon"
                                                                            aria-label="close"
                                                                            data-category="application">
                                                                            <path
                                                                                d="M2.784 2.089l.069.058 5.146 5.147 5.146-5.147a.5.5 0 01.765.638l-.058.069L8.705 8l5.147 5.146a.5.5 0 01-.638.765l-.069-.058-5.146-5.147-5.146 5.147a.5.5 0 01-.765-.638l.058-.069L7.293 8 2.146 2.854a.5.5 0 01.638-.765z">
                                                                            </path>
                                                                        </svg></span></div>
                                                                </div>
                                                            </div>
                                                        </div>
                                                    </div>
                                                </div>
                                                <div class="text-end"><button
                                                    class="btn btn-sm btn-secondary edit-form-submit">Xong</button>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div class="row setting-item">
                                <div class="col-md-3 col-12 setting-label">Giới tính</div>
                                <div class="col-md-9 col-12">
                                    <div class="row">
                                        <div class="col-12 col-md-12">
                                            <div class="display-form">
                                                <div class="display-form-content">
                                                    <p>{User.gioitinh}</p>
                                                </div><button data-change="gender"
                                                    class="fw-bold text-underline toggle-edit-form">Chỉnh
                                                    sửa</button>
                                            </div>
                                            <div class="edit-form" data-id="gender">
                                                <div class="edit-form-wrapper">
                                                    <div class="form-group"><label>Giới tính</label><select
                                                        class="form-control" id="gender" name="gender">
                                                        <option value="">Chọn giới tính</option>
                                                        <option value="0">Nam</option>
                                                        <option value="1">Nữ</option>
                                                    </select></div>
                                                </div>
                                                <div class="text-end"><button
                                                    class="btn btn-sm btn-secondary edit-form-submit">Xong</button>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div class="row setting-item">
                                <div class="col-md-3 col-12 setting-label">Quốc tịch</div>
                                <div class="col-md-9 col-12">
                                    <div class="row">
                                        <div class="col-12 col-md-12">
                                            <div class="display-form">
                                                <div class="display-form-content">
                                                    <p></p>
                                                </div><button data-change="countryId"
                                                    class="fw-bold text-underline toggle-edit-form">Chỉnh
                                                    sửa</button>
                                            </div>
                                            <div class="edit-form" data-id="countryId">
                                                <div class="edit-form-wrapper">
                                                    <div class="form-group"><label>Quốc tịch </label><select
                                                        id="countryId" name="countryId"
                                                        class="form-control">
                                                        <option>Chọn quốc tịch</option>
                                                        <option value="AD">Andorra</option>
                                                    </select></div>
                                                </div>
                                                <div class="text-end"><button
                                                    class="btn btn-sm btn-secondary edit-form-submit">Xong</button>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div class="row setting-item">
                                <div class="col-md-3 col-12 setting-label">Địa chỉ</div>
                                <div class="col-md-9 col-12">
                                    <div class="row">
                                        <div class="col-12 col-md-12">
                                            <div class="display-form">
                                                <div class="display-form-content">
                                                    <p>{User.diachi}</p>
                                                </div><button data-change="address"
                                                    class="fw-bold text-underline toggle-edit-form">Chỉnh
                                                    sửa</button>
                                            </div>
                                            <div class="edit-form" data-id="address">
                                                <div class="edit-form-wrapper">
                                                    <div class="row">
                                                        <div class="col-12">
                                                            <div class="form-group"><label>Địa
                                                                chỉ</label><input class="form-control"
                                                                    id="address" name="address" type="text"
                                                                    value="" /></div>
                                                        </div>
                                                        <div class="col-6">
                                                            <div class="form-group">
                                                                <label>Tỉnh/TP</label>
                                                                <select
                                                                    id="provinceId" name="provinceId"
                                                                    class="form-control">
                                                                    <option>Chọn tỉnh/tp</option>
                                                                    <option
                                                                        value="5f451d79-fc4b-4569-b3d1-fa78adc187b3">
                                                                        An Giang
                                                                    </option>
                                                                </select>
                                                            </div>
                                                        </div>
                                                        <div class="col-6">
                                                            <div class="form-group">
                                                                <label>Quận/Huyện</label><select
                                                                    id="districtId" name="districtId"
                                                                    class="form-control">
                                                                    <option>Chọn quận/huyện</option>
                                                                    <option
                                                                        value="5bace117-0fe3-4e1b-be34-6b0ef1819557">
                                                                        Bình Chánh</option>
                                                                    <option
                                                                        value="fc1c0778-779e-4f35-9eaa-ab89934bb030">
                                                                        Huyện Cần Giờ</option>
                                                                </select>
                                                            </div>
                                                        </div>
                                                    </div>
                                                </div>
                                                <div class="text-end"><button
                                                    class="btn btn-sm btn-secondary edit-form-submit">Xong</button>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div class="row setting-item">
                                <div class="col-md-3 col-12 setting-label">CMND</div>
                                <div class="col-md-9 col-12">
                                    <div class="row">
                                        <div class="col-12 col-md-12">
                                            <div class="display-form">
                                                <div class="display-form-content">
                                                    <p>Chưa có thông tin</p>
                                                </div><button data-change="idCard"
                                                    class="fw-bold text-underline toggle-edit-form">Chỉnh
                                                    sửa</button>
                                            </div>
                                            <div class="edit-form">
                                                <div class="edit-form-wrapper">
                                                    <div class="row">
                                                        <div class="col-12">
                                                            <div class="form-group">
                                                                <label>CMND/CCCD</label><input
                                                                    class="form-control" id="idCard"
                                                                    name="idCard" type="text" value="" />
                                                            </div>
                                                        </div>
                                                        <div class="col-6">
                                                            <div class="form-group"><label>Ngày
                                                                cấp</label><input class="form-control"
                                                                    id="dateOfIssueIdCard" max="2024-06-02"
                                                                    name="dateOfIssueIdCard"
                                                                    placeholder="DD/MM/YYYY" type="date"
                                                                    value="" /></div>
                                                        </div>
                                                        <div class="col-6">
                                                            <div class="form-group"><label>Nơi
                                                                cấp</label><input class="form-control"
                                                                    id="placeOfIssueIdCard"
                                                                    name="placeOfIssueIdCard" type="text"
                                                                    value="" /></div>
                                                        </div>
                                                    </div>
                                                </div>
                                                <div class="text-end"><button
                                                    class="btn btn-sm btn-secondary edit-form-submit">Xong</button>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div class="row setting-item">
                                <div class="col-md-3 col-12 setting-label">Passport</div>
                                <div class="col-md-9 col-12">
                                    <div class="row">
                                        <div class="col-12 col-md-12">
                                            <div class="display-form">
                                                <div class="display-form-content">
                                                    <p>Chưa có thông tin</p>
                                                </div><button data-change="passport"
                                                    class="fw-bold text-underline toggle-edit-form">Chỉnh
                                                    sửa</button>
                                            </div>
                                            <div class="edit-form">
                                                <div class="edit-form-wrapper">
                                                    <div class="row">
                                                        <div class="col-12">
                                                            <div class="form-group">
                                                                <label>Passport</label><input
                                                                    class="form-control" id="passport"
                                                                    name="passport" type="text" value="" />
                                                            </div>
                                                        </div>
                                                        <div class="col-6">
                                                            <div class="form-group"><label>Ngày
                                                                cấp</label><input class="form-control"
                                                                    id="dateOfIssuePassport"
                                                                    max="2024-06-02"
                                                                    name="dateOfIssuePassport"
                                                                    placeholder="DD/MM/YYYY" type="date"
                                                                    value="" /></div>
                                                        </div>
                                                        <div class="col-6"><label>Ngày hết hạn</label><input
                                                            class="form-control"
                                                            id="dateOfExpirationPassport"
                                                            min="Invalid date"
                                                            name="dateOfExpirationPassport"
                                                            placeholder="DD/MM/YYYY" type="date"
                                                            value="" /></div>
                                                    </div>
                                                </div>
                                                <div class="text-end"><button
                                                    class="btn btn-sm btn-secondary edit-form-submit">Xong</button>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                       
                    </div>
                </div>
            </div >

        </>
    )
}
export default Profile