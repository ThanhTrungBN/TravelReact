import React, { useEffect, useState,useContext} from 'react';
import { useParams } from 'react-router-dom';
import styles from "../assets/css/sb-admin-2.min.module.css";
import { loadTourID } from '../services/detail.services.js';
import { updateTour } from '../services/admin.services.js';
import {TravelMenu} from '../constant/context.js';

const AdminUpdate = function () {
    const { MT, MB, MDNB, MTNB ,User} = useContext(TravelMenu);
    const { matour } = useParams();
    const [tour, setTour] = useState(
        {
            danhmucID: '',
            tieudetour: '',
            matour: '',
            gia: '',
            noikhoihanh: '',
            sochoconnhan: '',
            songaydi: '',
            madanhmuctour: '',
            ngaythangnam: '',
            anhdaidien: ''
        }
    );
    useEffect(() => {
        const fetchData = async () => {
            try {
                const data = await loadTourID(matour);
                const formattedDate = data.ngaythangnam.split('T')[0];
                setTour({ ...data, ngaythangnam: formattedDate });
                console.log(data);
            } catch (error) {
                console.error('Error loading tours:', error);
            }
        };
        fetchData();
    }, [matour]);
    const handleUpdate = async (event) => {
        event.preventDefault();
        const formData = new FormData(event.target);

        const updatedTourData = {
            danhmucID: formData.get('danhmucID'),
            tieudetour: formData.get('tieudetour'),
            matour: formData.get('matour'),
            Gia: formData.get('Gia'),
            noikhoihanh: formData.get('noikhoihanh'),
            sochoconnhan: formData.get('sochoconnhan'),
            songaydi: formData.get('songaydi'),
            madanhmuctour: formData.get('madanhmuctour'),
            ngaythangnam: formData.get('ngaythangnam'),
            anhdaidien: formData.get('anhdaidien')
        };
        try {
            const response = await updateTour(updatedTourData);
            alert('Tour update successfully!');
            window.location.href = '/admin/index';
        } catch (error) {
            alert('Error update tour:', error);
        }
    };
    const handleInputChange = (e) => {
        const { name, value } = e.target;
        setTour(prevState => ({
            ...prevState,
            [name]: value
        }));
    };


    return (
        <div id="content-wrapper" className={`${styles['d-flex']} ${styles['flex-column']}`} style={{ width: '100%' }}>
            <div id="content">
                <nav className={`${styles["navbar"]} ${styles["navbar-expand"]} ${styles["navbar-light"]} ${styles["bg-white"]} ${styles["topbar"]} ${styles["mb-4"]} ${styles["static-top"]} ${styles["shadow"]}`}>
                    <button id="sidebarToggleTop" className={`${styles["btn"]} ${styles["btn-link"]} ${styles["d-md-none"]} ${styles["rounded-circle"]} ${styles["mr-3"]}`}>
                        <i className="fa fa-bars"></i>
                    </button>
                    <form className={`${styles["d-none"]} ${styles["d-sm-inline-block"]} ${styles["form-inline"]} ${styles["mr-auto"]} ${styles["ml-md-3"]} ${styles["my-2"]} ${styles["my-md-0"]} ${styles["mw-100"]} ${styles["navbar-search"]}`}>
                        <div className={styles["input-group"]}>
                            <input type="text" className={`${styles["form-control"]} ${styles["bg-light"]} ${styles["border-0"]} ${styles["small"]}`} placeholder="Search for..." aria-label="Search" aria-describedby="basic-addon2" />
                            <div className={styles["input-group-append"]}>
                                <button className={`${styles["btn"]} ${styles["btn-primary"]}`} type="button">
                                    <i className="fas fa-search fa-sm"></i>
                                </button>
                            </div>
                        </div>
                    </form>

                    <ul className={`${styles["navbar-nav"]} ${styles["ml-auto"]}`}>
                        <li className={`${styles["nav-item"]} ${styles["dropdown"]} ${styles["no-arrow"]} ${styles["d-sm-none"]}`}>
                            <a className={styles["nav-link"]} href="#" id="searchDropdown" role="button" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                                <i className="fas fa-search fa-fw"></i>
                            </a>
                            <div className={`${styles["dropdown-menu"]} ${styles["dropdown-menu-right"]} ${styles["p-3"]} ${styles["shadow"]} ${styles["animated--grow-in"]}`} aria-labelledby="searchDropdown">
                                <form className={`${styles["form-inline"]} ${styles["mr-auto"]} ${styles["w-100"]} ${styles["navbar-search"]}`}>
                                    <div className={styles["input-group"]}>
                                        <input type="text" className={`${styles["form-control"]} ${styles["bg-light"]} ${styles["border-0"]} ${styles["small"]}`} placeholder="Search for..." aria-label="Search" aria-describedby="basic-addon2" />
                                        <div className={styles["input-group-append"]}>
                                            <button className={`${styles["btn"]} ${styles["btn-primary"]}`} type="button">
                                                <i className="fas fa-search fa-sm"></i>
                                            </button>
                                        </div>
                                    </div>
                                </form>
                            </div>
                        </li>

                        <li className={`${styles["nav-item"]} ${styles["dropdown"]} ${styles["no-arrow"]} ${styles["mx-1"]}`}>
                            <a className={styles["nav-link"]} href="#" id="alertsDropdown" role="button" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                                <i className="fas fa-bell fa-fw"></i>
                                <span className={`${styles["badge"]} ${styles["badge-danger"]} ${styles["badge-counter"]}`}>3+</span>
                            </a>
                            <div className={`${styles["dropdown-list"]} ${styles["dropdown-menu"]} ${styles["dropdown-menu-right"]} ${styles["shadow"]} ${styles["animated--grow-in"]}`} aria-labelledby="alertsDropdown">
                                <h6 className={styles["dropdown-header"]}>Alerts Center</h6>
                                <a className={`${styles["dropdown-item"]} ${styles["d-flex"]} ${styles["align-items-center"]}`} href="#">
                                    <div className={`{styles["mr-3"]}`}>
                                        <div className={`${styles["icon-circle"]} ${styles["bg-primary"]}`}>
                                            <i className="fas fa-file-alt text-white"></i>
                                        </div>
                                    </div>
                                    <div>
                                        <div className={`${styles["small"]} ${styles["text-gray-500"]}`}>December 12, 2019</div>
                                        <span className={styles["font-weight-bold"]}>A new monthly report is ready to download!</span>
                                    </div>
                                </a>
                                <a className={`${styles["dropdown-item"]} ${styles["d-flex"]} ${styles["align-items-center"]}`} href="#">
                                    <div className={`{styles["mr-3"]}`}>
                                        <div className={`${styles["icon-circle"]} ${styles["bg-success"]}`}>
                                            <i className="fas fa-donate text-white"></i>
                                        </div>
                                    </div>
                                    <div>
                                        <div className={`${styles["small"]} ${styles["text-gray-500"]}`}>December 7, 2019</div>
                                        $290.29 has been deposited into your account!
                                    </div>
                                </a>
                                <a className={`${styles["dropdown-item"]} ${styles["d-flex"]} ${styles["align-items-center"]}`} href="#">
                                    <div className={styles["mr-3"]}>
                                        <div className={`${styles["icon-circle"]} ${styles["bg-warning"]}`}>
                                            <i className="fas fa-exclamation-triangle text-white"></i>
                                        </div>
                                    </div>
                                    <div>
                                        <div className={`${styles["small"]} ${styles["text-gray-500"]}`}>December 2, 2019</div>
                                        Spending Alert: We've noticed unusually high spending for your account.
                                    </div>
                                </a>
                                <a className={`${styles["dropdown-item"]} ${styles["text-center"]} ${styles["small"]} ${styles["text-gray-500"]}`} href="#">Show All Alerts</a>
                            </div>
                        </li>

                        <li className={`${styles["nav-item"]} ${styles["dropdown"]} ${styles["no-arrow"]} ${styles["mx-1"]}`}>
                            <a className={styles["nav-link"]} href="#" id="messagesDropdown" role="button" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                                <i className="fas fa-envelope fa-fw"></i>
                                <span className={`${styles["badge"]} ${styles["badge-danger"]} ${styles["badge-counter"]}`}>7</span>
                            </a>
                            <div className={`${styles["dropdown-list"]} ${styles["dropdown-menu"]} ${styles["dropdown-menu-right"]} ${styles["shadow"]} ${styles["animated--grow-in"]}`} aria-labelledby="messagesDropdown">
                                <h6 className={styles["dropdown-header"]}>Message Center</h6>
                                <a className={`${styles["dropdown-item"]} ${styles["d-flex"]} ${styles["align-items-center"]}`} href="#">
                                    <div className={`${styles["dropdown-list-image"]} ${styles["mr-3"]}`}>
                                        <img className={styles["rounded-circle"]} src="img/undraw_profile_1.svg" alt="..." />
                                        <div className={`${styles["status-indicator"]} ${styles["bg-success"]}`}></div>
                                    </div>
                                    <div className={styles["font-weight-bold"]}>
                                        <div className={styles["text-truncate"]}>Hi there! I am wondering if you can help me with a problem I've been having.</div>
                                        <div className={`${styles["small"]} ${styles["text-gray-500"]}`}>Emily Fowler · 58m</div>
                                    </div>
                                </a>
                                <a className={`${styles["dropdown-item"]} ${styles["d-flex"]} ${styles["align-items-center"]}`} href="#">
                                    <div className={`${styles["dropdown-list-image"]} ${styles["mr-3"]}`}>

                                        <img className={styles["rounded-circle"]} src="img/undraw_profile_2.svg" alt="..." />
                                        <div className={styles["status-indicator"]}></div>
                                    </div>
                                    <div>
                                        <div className={styles["text-truncate"]}>I have the photos that you ordered last month, how would you like them sent to you?</div>
                                        <div className={`${styles["small"]} ${styles["text-gray-500"]}`}>Jae Chun · 1d</div>

                                    </div>
                                </a>
                                <a className={`${styles["dropdown-item"]} ${styles["d-flex"]} ${styles["align-items-center"]}`} href="#">
                                    <div className={`${styles["dropdown-list-image"]} ${styles["mr-3"]}`}>

                                        <img className={styles["rounded-circle"]} src="img/undraw_profile_3.svg" alt="..." />
                                        <div className={`${styles["status-indicator"]} ${styles["bg-warning"]}`}></div>
                                    </div>
                                    <div>
                                        <div className={styles["text-truncate"]}>Last month's report looks great, I am very happy with the progress so far, keep up the good work!</div>
                                        <div className={`${styles["small"]} ${styles["text-gray-500"]}`}>Morgan Alvarez · 2d</div>
                                    </div>
                                </a>
                                <a className={`${styles["dropdown-item"]} ${styles["d-flex"]} ${styles["align-items-center"]}`} href="#">
                                    <div className={`${styles["dropdown-list-image"]} ${styles["mr-3"]}`}>

                                        <img className={styles["rounded-circle"]} src="https://source.unsplash.com/Mv9hjnEUHR4/60x60" alt="..." />
                                        <div className={`${styles["status-indicator"]} ${styles["bg-success"]}`}></div>
                                    </div>
                                    <div>
                                        <div className={styles["text-truncate"]}>Am I a good boy? The reason I ask is because someone told me that people say this to all dogs, even if they aren't good...</div>
                                        <div className={`${styles["small"]} ${styles["text-gray-500"]}`}>Chicken the Dog · 2w</div>
                                    </div>
                                </a>
                                <a className={`${styles["dropdown-item"]} ${styles["text-center"]} ${styles["small"]} ${styles["text-gray-500"]}`} href="#">Read More Messages</a>
                            </div>
                        </li>

                        <div className={`${styles["topbar-divider"]} ${styles["d-none"]} ${styles["d-sm-block"]}`}></div>

                        <li className={`${styles["nav-item"]} ${styles["dropdown"]} ${styles["no-arrow"]}`}>
                            <a className={styles["nav-link"]} href="#" id="userDropdown" role="button" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                                <span className={`${styles["mr-2"]} ${styles["d-none"]} ${styles["d-lg-inline"]} ${styles["text-gray-600"]} ${styles["small"]}`}>Douglas McGee</span>
                                <img className={`${styles["img-profile"]} ${styles["rounded-circle"]}`} src={User.anhdaidien}/>
                            </a>
                            <div className={`${styles["dropdown-menu"]} ${styles["dropdown-menu-right"]} ${styles["shadow"]} ${styles["animated--grow-in"]}`} aria-labelledby="userDropdown">
                                <a className={styles["dropdown-item"]} href="#">
                                    <i className={`${styles["fas"]} ${styles["fa-user"]} ${styles["fa-sm"]} ${styles["fa-fw"]} ${styles["mr-2"]} ${styles["text-gray-400"]}`}></i>
                                    Profile
                                </a>
                                <a className={styles["dropdown-item"]} href="#">
                                    <i className={`${styles["fas"]} ${styles["fa-cogs"]} ${styles["fa-sm"]} ${styles["fa-fw"]} ${styles["mr-2"]} ${styles["text-gray-400"]}`}></i>
                                    Settings
                                </a>
                                <a className={styles["dropdown-item"]} href="#">
                                    <i className={`${styles["fas"]} ${styles["fa-list"]} ${styles["fa-sm"]} ${styles["fa-fw"]} ${styles["mr-2"]} ${styles["text-gray-400"]}`}></i>
                                    Activity Log
                                </a>
                                <div className={styles["dropdown-divider"]}></div>
                                <a className={styles["dropdown-item"]} href="#" data-toggle="modal" data-target="#logoutModal">
                                    <i className={`${styles["fas"]} ${styles["fa-sign-out-alt"]} ${styles["fa-sm"]} ${styles["fa-fw"]} ${styles["mr-2"]} ${styles["text-gray-400"]}`}></i>
                                    Logout
                                </a>
                            </div>
                        </li>
                    </ul>
                </nav>
                <div className={styles['container-fluid']}>
                    <h1 className={`${styles.h3} ${styles['mb-2']} ${styles['text-gray-800']}`}>Sửa Thông Tin Tour Du Lịch</h1>

                    <div className={`${styles.card} ${styles.shadow} ${styles['mb-4']}`}>
                        <div className={`${styles['card-header']} ${styles['py-3']}`}>
                            <h6 className={`${styles['m-0']} ${styles['font-weight-bold']} ${styles['text-primary']}`}>Thông tin tour du lịch</h6>
                        </div>
                        <div className={styles['card-body']}>
                            <form method="POST" onSubmit={handleUpdate} >
                                <input type="hidden" name="_token" value="RKZSblX1CRUBXpdoEHnBo284eywQZJG3AsuiBhNJ" autoComplete="off" />
                                <div className={styles['form-group']}>
                                    <label>Mã danh mục
                                        <span title="Tên sản phẩm không bao gồm các giá trị thuộc tính như màu sắc, chất liệu, kích cỡ...">
                                            <svg viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg" width="16" height="16" fontSize="16" color="primary" style={{ fontSize: '16px', cursor: 'pointer' }}>
                                                <path d="M7.4 5v1.2h1.2V5H7.4ZM7.4 8.6V11h1.8V9.8h-.6V7.4H6.8v1.2h.6Z" fill="#0088FF"></path>
                                                <path fillRule="evenodd" clipRule="evenodd" d="M8 2C4.688 2 2 4.688 2 8s2.688 6 6 6 6-2.688 6-6-2.688-6-6-6ZM3.2 8c0 2.646 2.154 4.8 4.8 4.8s4.8-2.154 4.8-4.8S10.646 3.2 8 3.2A4.806 4.806 0 0 0 3.2 8Z" fill="#0088FF"></path>
                                            </svg>
                                        </span>
                                    </label>
                                    <input type="text" name="danhmucID" id="danhmucID" value={tour.danhmucID} onChange={handleInputChange} className={styles['form-control']} />
                                </div>
                                <div className={styles.row}>
                                    <div className={styles['col-md-6']}>
                                        <div className={styles['form-group']}>
                                            <label>Tiêu đề Tour
                                                <span title="Tên sản phẩm không bao gồm các giá trị thuộc tính như màu sắc, chất liệu, kích cỡ...">
                                                    <svg viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg" width="16" height="16" fontSize="16" color="primary" style={{ fontSize: '16px', cursor: 'pointer' }}>
                                                        <path d="M7.4 5v1.2h1.2V5H7.4ZM7.4 8.6V11h1.8V9.8h-.6V7.4H6.8v1.2h.6Z" fill="#0088FF"></path>
                                                        <path fillRule="evenodd" clipRule="evenodd" d="M8 2C4.688 2 2 4.688 2 8s2.688 6 6 6 6-2.688 6-6-2.688-6-6-6ZM3.2 8c0 2.646 2.154 4.8 4.8 4.8s4.8-2.154 4.8-4.8S10.646 3.2 8 3.2A4.806 4.806 0 0 0 3.2 8Z" fill="#0088FF"></path>
                                                    </svg>
                                                </span>
                                            </label>
                                            <input type="text" name="tieudetour" id="tieudetour" value={tour.tieudetour} onChange={handleInputChange} className={styles['form-control']} />
                                        </div>
                                    </div>
                                    <div className={styles['col-md-6']}>
                                        <div className={styles['form-group']}>
                                            <label>Mã Tour</label>
                                            <input type="text" name="matour" id="matour" value={tour.matour} onChange={handleInputChange} className={styles['form-control']} />
                                        </div>
                                    </div>
                                </div>
                                <div className={styles.row}>
                                    <div className={styles['col-md-6']}>
                                        <div className={styles['form-group']}>
                                            <label>Giá
                                                <span title="Tên sản phẩm không bao gồm các giá trị thuộc tính như màu sắc, chất liệu, kích cỡ...">
                                                    <svg viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg" width="16" height="16" fontSize="16" color="primary" style={{ fontSize: '16px', cursor: 'pointer' }}>
                                                        <path d="M7.4 5v1.2h1.2V5H7.4ZM7.4 8.6V11h1.8V9.8h-.6V7.4H6.8v1.2h.6Z" fill="#0088FF"></path>
                                                        <path fillRule="evenodd" clipRule="evenodd" d="M8 2C4.688 2 2 4.688 2 8s2.688 6 6 6 6-2.688 6-6-2.688-6-6-6ZM3.2 8c0 2.646 2.154 4.8 4.8 4.8s4.8-2.154 4.8-4.8S10.646 3.2 8 3.2A4.806 4.806 0 0 0 3.2 8Z" fill="#0088FF"></path>
                                                    </svg>
                                                </span>
                                            </label>
                                            <input type="text" name="Gia" id="Gia" value={tour.gia} onChange={handleInputChange} className={styles['form-control']} />
                                        </div>
                                    </div>
                                    <div className={styles['col-md-6']}>
                                        <div className={styles['form-group']}>
                                            <label>Nơi khởi hành</label>
                                            <input type="text" name="noikhoihanh" id="noikhoihanh" value={tour.noikhoihanh} onChange={handleInputChange} className={styles['form-control']} />
                                        </div>
                                    </div>
                                </div>
                                <div className={styles.row}>
                                    <div className={styles['col-md-6']}>
                                        <div className={styles['form-group']}>
                                            <label>Số chỗ
                                                <span title="Tên sản phẩm không bao gồm các giá trị thuộc tính như màu sắc, chất liệu, kích cỡ...">
                                                    <svg viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg" width="16" height="16" fontSize="16" color="primary" style={{ fontSize: '16px', cursor: 'pointer' }}>
                                                        <path d="M7.4 5v1.2h1.2V5H7.4ZM7.4 8.6V11h1.8V9.8h-.6V7.4H6.8v1.2h.6Z" fill="#0088FF"></path>
                                                        <path fillRule="evenodd" clipRule="evenodd" d="M8 2C4.688 2 2 4.688 2 8s2.688 6 6 6 6-2.688 6-6-2.688-6-6-6ZM3.2 8c0 2.646 2.154 4.8 4.8 4.8s4.8-2.154 4.8-4.8S10.646 3.2 8 3.2A4.806 4.806 0 0 0 3.2 8Z" fill="#0088FF"></path>
                                                    </svg>
                                                </span>
                                            </label>
                                            <input type="number" name="sochoconnhan" id="sochoconnhan" value={tour.sochoconnhan} onChange={handleInputChange} className={styles['form-control']} />
                                        </div>
                                    </div>
                                    <div className={styles['col-md-6']}>
                                        <div className={styles['form-group']}>
                                            <label>Số ngày đi</label>
                                            <input type="text" name="songaydi" id="songaydi" value={tour.songaydi} onChange={handleInputChange} className={styles['form-control']} />
                                        </div>
                                    </div>
                                </div>
                                <div className={styles.row}>
                                    <div className={styles['col-md-12']}>
                                        <div className={styles['form-group']}>
                                            <label>Mã Danh mục Tour
                                                <span title="Tên sản phẩm không bao gồm các giá trị thuộc tính như màu sắc, chất liệu, kích cỡ...">
                                                    <svg viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg" width="16" height="16" fontSize="16" color="primary" style={{ fontSize: '16px', cursor: 'pointer' }}>
                                                        <path d="M7.4 5v1.2h1.2V5H7.4ZM7.4 8.6V11h1.8V9.8h-.6V7.4H6.8v1.2h.6Z" fill="#0088FF"></path>
                                                        <path fillRule="evenodd" clipRule="evenodd" d="M8 2C4.688 2 2 4.688 2 8s2.688 6 6 6 6-2.688 6-6-2.688-6-6-6ZM3.2 8c0 2.646 2.154 4.8 4.8 4.8s4.8-2.154 4.8-4.8S10.646 3.2 8 3.2A4.806 4.806 0 0 0 3.2 8Z" fill="#0088FF"></path>
                                                    </svg>
                                                </span>
                                            </label>
                                            <input type="text" name="madanhmuctour" id="madanhmuctour" value={tour.madanhmuctour} onChange={handleInputChange} className={styles['form-control']} />
                                        </div>
                                        <div className={styles['form-group']}>
                                            <label>Ngày Bắt Đầu
                                                <span title="Tên sản phẩm không bao gồm các giá trị thuộc tính như màu sắc, chất liệu, kích cỡ...">
                                                    <svg viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg" width="16" height="16" fontSize="16" color="primary" style={{ fontSize: '16px', cursor: 'pointer' }}>
                                                        <path d="M7.4 5v1.2h1.2V5H7.4ZM7.4 8.6V11h1.8V9.8h-.6V7.4H6.8v1.2h.6Z" fill="#0088FF"></path>
                                                        <path fillRule="evenodd" clipRule="evenodd" d="M8 2C4.688 2 2 4.688 2 8s2.688 6 6 6 6-2.688 6-6-2.688-6-6-6ZM3.2 8c0 2.646 2.154 4.8 4.8 4.8s4.8-2.154 4.8-4.8S10.646 3.2 8 3.2A4.806 4.806 0 0 0 3.2 8Z" fill="#0088FF"></path>
                                                    </svg>
                                                </span>
                                            </label>
                                            <input type="date" name="ngaythangnam" id="ngaythangnam" value={tour.ngaythangnam} onChange={handleInputChange} className={styles['form-control']} />
                                        </div>
                                        <div className={styles['form-group']}>
                                            <label>Ảnh Đại diện
                                                <span title="Tên sản phẩm không bao gồm các giá trị thuộc tính như màu sắc, chất liệu, kích cỡ...">
                                                    <svg viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg" width="16" height="16" fontSize="16" color="primary" style={{ fontSize: '16px', cursor: 'pointer' }}>
                                                        <path d="M7.4 5v1.2h1.2V5H7.4ZM7.4 8.6V11h1.8V9.8h-.6V7.4H6.8v1.2h.6Z" fill="#0088FF"></path>
                                                        <path fillRule="evenodd" clipRule="evenodd" d="M8 2C4.688 2 2 4.688 2 8s2.688 6 6 6 6-2.688 6-6-2.688-6-6-6ZM3.2 8c0 2.646 2.154 4.8 4.8 4.8s4.8-2.154 4.8-4.8S10.646 3.2 8 3.2A4.806 4.806 0 0 0 3.2 8Z" fill="#0088FF"></path>
                                                    </svg>
                                                </span>
                                            </label>
                                            <input type="text" name="anhdaidien" id="anhdaidien" value={tour.anhdaidien} onChange={handleInputChange} className={styles['form-control']} />
                                        </div>
                                    </div>
                                </div>
                                <button type="submit" className={`${styles.btn} ${styles['btn-primary']} ${styles['text-right']}`}>Sửa</button>
                            </form>
                        </div>
                    </div>
                </div>
            </div>
            <footer class="sticky-footer bg-white">
                <div class="container my-auto">
                    <div class="copyright text-center my-auto">
                        <span>Copyright © Your Website 2021</span>
                    </div>
                </div>
            </footer>
        </div>
    )
}
export default AdminUpdate