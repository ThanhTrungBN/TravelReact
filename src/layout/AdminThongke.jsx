import React, { useEffect, useRef, useState, useContext } from 'react';
import styles from "../assets/css/sb-admin-2.min.module.css";
import styles2 from "../assets/css/sb-admin-2.module.css";
import 'datatables.net';
import { Bar } from 'react-chartjs-2';
import { Pie } from 'react-chartjs-2';
import { TravelMenu } from '../constant/context.js';
import { Chart as ChartJS, ArcElement, Tooltip, Legend } from 'chart.js';
import { Loaddoanhthuthang, loadSoluongAcc, loadSoluongOrder, loadSoluongTour } from '../services/admin.services';
import { Chart, registerables } from 'chart.js';
import { text } from '@fortawesome/fontawesome-svg-core';
Chart.register(...registerables);
ChartJS.register(ArcElement, Tooltip, Legend);

const AdminThongke = function () {
    const { MT, MB, MDNB, MTNB, User } = useContext(TravelMenu);
    const [countTour, setCountTour] = useState(0);
    const [countAcc, setCountAcc] = useState(0);
    const [countOrder, setCountOrder] = useState(0);
    const [doanhThuData, setDoanhThuData] = useState([]);
    const data = {
        labels: ['Số lượng Tour', 'Số lượng Account', 'Số lượng Booking'],
        datasets: [
            {
                text: 'Số Lượng',
                label: '# Số Lượng',
                data: [countTour, countAcc, countOrder],
                backgroundColor: [
                    'rgba(255, 99, 132, 0.2)',
                    'rgba(54, 162, 235, 0.2)',
                    'rgba(255, 206, 86, 0.2)',
                ],
                borderColor: [
                    'rgba(255, 99, 132, 1)',
                    'rgba(54, 162, 235, 1)',
                    'rgba(255, 206, 86, 1)',
                ],
                borderWidth: 2,
            },
        ],
    };
    const labels = doanhThuData.map(item => `Tháng ${item.thang}/${item.nam}`);


    const chartData = {
        labels: labels,
        datasets: [
            {
                label: 'Doanh thu (VND)',
                data: doanhThuData.map(item => item.doanhThu),
                backgroundColor: 'rgba(54, 162, 235, 0.6)',
                borderColor: 'rgba(54, 162, 235, 1)',
                borderWidth: 1,
            },
        ],
    };
    const optionst = {
        maintainAspectRatio: false,
        scales: {
            y: {
                beginAtZero: true,
                title: {
                    display: true,
                    text: 'Doanh thu (VND)',
                    font: {
                        size: 15,
                        weight: 'bold',
                    },
                },
            },
            x: {
                title: {
                    display: true,
                    text: 'Thời gian',
                    font: {
                        size: 15,
                        weight: 'bold',
                    },
                },
            },
        },
    };
    useEffect(() => {
        const fetchCountTour = async () => {
            try {
                const data = await loadSoluongTour();
                setCountTour(data);
            } catch (error) {
                console.error('Error tour tours:', error);
            }
        };
        const fetchCountAcc = async () => {
            try {
                const data = await loadSoluongAcc();
                setCountAcc(data);
            } catch (error) {
                console.error('Error acc tours:', error);
            }
        };
        const fetchCountOrder = async () => {
            try {
                const data = await loadSoluongOrder();
                setCountOrder(data);
            } catch (error) {
                console.error('Error order tours:', error);
            }
        };
        const fetchdoanhthuthang = async () => {
            try {
                const data = await Loaddoanhthuthang();
                setDoanhThuData(data);
            } catch (error) {
                console.error('Error order tours:', error);
            }
        };
        fetchdoanhthuthang();
        fetchCountOrder();
        fetchCountTour();
        fetchCountAcc();
    }, []);

    const options = {
        maintainAspectRatio: false,
    };

    return (
        <div id="content-wrapper" style={{ width: '100%' }} className={`${styles['d-flex']} ${styles['flex-column']}`}>
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
                <h2 style={{paddingLeft:'30px'}}>Số Lượng</h2>
                <div style={{display:'flex',width:'100%',height:'500px'}}>
                    <div style={{ width: '50%', padding: '20px', display: 'flex', flex: 'align-item' }}>
                        <Pie style={{ padding: '10px' }} data={data} options={options} />
                    </div>
                    <div style={{width:'50%',padding: '20px'}}>
                        <Bar data={chartData} options={optionst} />
                    </div>
                </div>
            </div>
        </div>
    );
}

export default AdminThongke;
