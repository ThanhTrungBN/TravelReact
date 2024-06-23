import React, { useEffect, useRef, useState ,useContext} from 'react';
import styles from "../assets/css/sb-admin-2.min.module.css";
import styles2 from "../assets/css/sb-admin-2.module.css";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faTrash, faPen } from '@fortawesome/free-solid-svg-icons';
import { useNavigate } from 'react-router-dom';
import { loadgetALL ,deleteTourdetail} from '../services/detail.services'
import 'datatables.net';
import { TravelMenu } from '../constant/context.js';
import { formatDate,formatNumber } from "../constant/help.js";
const AdminTourdetail = function () {
    const [tourdetail, setTourdetail] = useState([]);
    const navigate = useNavigate();
    useEffect(() => {
        const fetchData = async () => {
            try {
                const data = await loadgetALL();
                setTourdetail(data);
            } catch (error) {
                console.error('Error loading tours:', error);
            }
        };
        fetchData();
    }, []);
    const handleDeleteTour = async (machitiettour) => {
        try {
            await deleteTourdetail(machitiettour);
            setTourdetail(tourdetail.filter(tour => tour.machitiettour !== machitiettour));
            alert('Tour delete successfully!');
            ;
        } catch (error) {
            alert('Error delete tour:', error);
        }
    };
    const handleEditTour = (machitiettour) => {
        navigate(`/admin/tourdetail/update/${machitiettour}`);
    };
    const { MT, MB, MDNB, MTNB ,User} = useContext(TravelMenu);
    return (
        <div id="content-wrapper" className={`${styles["d-flex"]} ${styles["flex-column"]}`}>
            <div id="content">
                <nav className={`${styles["navbar"]} ${styles["navbar-expand"]} ${styles["navbar-light"]} ${styles["bg-white"]} ${styles["topbar"]} ${styles["mb-4"]} ${styles["static-top"]} ${styles["shadow"]}`}>
                    <form className={styles["form-inline"]}>
                        <button id="sidebarToggleTop" className={`${styles["btn"]} ${styles["btn-link"]} ${styles["d-md-none"]} ${styles["rounded-circle"]} ${styles["mr-3"]}`}>
                            <i className="fa fa-bars"></i>
                        </button>
                    </form>
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
                    <ul className={styles["navbar-nav"]} style={{ marginLeft: 'auto' }}>
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
                                    <div className={styles["mr-3"]}>
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
                                    <div className={styles["mr-3"]}>
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
                                        <img className={`${styles["rounded-circle"]}`} src="img/undraw_profile_1.svg" alt="..." />
                                        <div className={`${styles["status-indicator"]} ${styles["bg-success"]}`}></div>
                                    </div>
                                    <div className={styles["font-weight-bold"]}>
                                        <div className={styles["text-truncate"]}>Hi there! I am wondering if you can help me with a problem I've been having.</div>
                                        <div className={`${styles["small"]} ${styles["text-gray-500"]}`}>Emily Fowler · 58m</div>
                                    </div>
                                </a>
                                <a className={`${styles["dropdown-item"]} ${styles["d-flex"]} ${styles["align-items-center"]}`} href="#">
                                    <div className={`${styles["dropdown-list-image"]} ${styles["mr-3"]}`}>
                                        <img className={`${styles["rounded-circle"]}`} src="img/undraw_profile_2.svg" alt="..." />
                                        <div className={styles["status-indicator"]}></div>
                                    </div>
                                    <div>
                                        <div className={styles["text-truncate"]}>I have the photos that you ordered last month, how would you like them sent to you?</div>
                                        <div className={`${styles["small"]} ${styles["text-gray-500"]}`}>Jae Chun · 1d</div>
                                    </div>
                                </a>
                                <a className={`${styles["dropdown-item"]} ${styles["d-flex"]} ${styles["align-items-center"]}`} href="#">
                                    <div className={`${styles["dropdown-list-image"]} ${styles["mr-3"]}`}>
                                        <img className={`${styles["rounded-circle"]}`} src="img/undraw_profile_3.svg" alt="..." />
                                        <div className={`${styles["status-indicator"]} ${styles["bg-warning"]}`}></div>
                                    </div>
                                    <div>
                                        <div className={styles["text-truncate"]}>Last month's report looks great, I am very happy with the progress so far, keep up the good work!</div>
                                        <div className={`${styles["small"]} ${styles["text-gray-500"]}`}>Morgan Alvarez · 2d</div>
                                    </div>
                                </a>
                                <a className={`${styles["dropdown-item"]} ${styles["d-flex"]} ${styles["align-items-center"]}`} href="#">
                                    <div className={`${styles["dropdown-list-image"]} ${styles["mr-3"]}`}>
                                        <img className={`${styles["rounded-circle"]}`} src="https://source.unsplash.com/Mv9hjnEUHR4/60x60" alt="..." />
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
                                <span className={`${styles["mr-2"]} ${styles["d-none"]} ${styles["d-lg-inline"]} ${styles["text-gray-600"]} ${styles["small"]}`}>{User.hoten}</span>
                                <img className={`${styles["img-profile"]} ${styles["rounded-circle"]}`} src={User.anhdaidien} />
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
                    <h1 className={`${styles.h3} ${styles['mb-2']} ${styles['text-gray-800']}`}>Tour Du Lịch</h1>
                    <p className={`${styles['mb-4']}`}>
                    </p>

                    <div className={`${styles.card} ${styles.shadow} ${styles['mb-4']}`}>
                        <div className={`${styles['card-header']} ${styles['py-3']}`}>
                            <h6 className={`${styles['m-0']} ${styles['font-weight-bold']} ${styles['text-primary']}`}>Danh sách Tour Du lịch</h6>
                        </div>
                        <div className={`${styles['card-body']}`}>
                            <div className={`${styles['table-responsive']}`}>
                                <table className={`${styles.table} ${styles['table-bordered']}`} id='Travel' width="100%" cellspacing="0">
                                    <thead>
                                        <tr>
                                            <th>Mã Chi Tiết Tour</th>
                                            <th>Địa Điểm</th>
                                            <th>Mã tour</th>
                                            <th>Thông Tin Thời Gian</th>
                                            <th>Thông Tin Di Chuyển</th>
                                            <th>Thông Tin Hướng Dẫn Viên</th>
                                            <th>Hành Động</th>
                                        </tr>
                                    </thead>
                                    <tbody>
                                        {tourdetail.map(tour => (
                                            <tr key={tour.machitiettour} >
                                                <td>{tour.machitiettour}</td>
                                                <td>{tour.madiadiem}</td>
                                                <td>{tour.matour}</td>
                                                <td>
                                                    <div className={styles.item}>
                                                        <p style={{ whiteSpace: 'nowrap' }}>Ngày Khởi Hành:</p>
                                                        <span style={{ whiteSpace: 'nowrap' }}>{formatDate(tour.ngaykhoihanh)}</span>
                                                    </div>
                                                    <div className={styles.item}>
                                                        <p>Ngày Kết Thúc :</p>
                                                        <span>{formatDate(tour.ngayketthuc)}</span>
                                                    </div>                                                 
                                                </td>
                                                <td>
                                                    <div className={styles.item}>
                                                        <p>Di chuyển :</p>
                                                        <span>{tour.thongtindichuyen}</span>
                                                    </div>
                                                    <div className={styles.item}>
                                                        <p style={{ whiteSpace: 'nowrap' }}>Di Chuyển :</p>
                                                        <span style={{ whiteSpace: 'nowrap' }}>Máy Bay , Tàu</span>
                                                    </div>
                                                    <div className={styles.item}>
                                                        <p style={{ whiteSpace: 'nowrap' }}>Tập Trung :</p>
                                                        <span style={{ whiteSpace: 'nowrap' }}>05:00 09/12/2023</span>
                                                    </div>                                                    
                                                </td>
                                                <td>
                                                    <div className={styles.item}>
                                                        <p>{tour.thongtinhuongdanvien}</p>
                                                    </div>
                                                </td>
                                                <td>
                                                    <div style={{ display: 'flex' }}>
                                                        <FontAwesomeIcon icon={faTrash} style={{ color: 'red', fontSize: '18px', padding: '10px' }} onClick={() => handleDeleteTour(tour.machitiettour)} />
                                                        <FontAwesomeIcon icon={faPen} style={{ color: '#0A97BB', fontSize: '18px', padding: '10px' }} onClick={() => handleEditTour(tour.machitiettour)} />
                                                    </div>
                                                </td>
                                            </tr>
                                        ))}
                                    </tbody>
                                </table>
                            </div>
                        </div>
                    </div>

                </div>

            </div>

            <footer class="sticky-footer bg-white">
                <div class="container my-auto">
                    <div class="copyright text-center my-auto">
                        <span>Copyright &copy; Your Website 2020</span>
                    </div>
                </div>
            </footer>

        </div>
    )
}
export default AdminTourdetail