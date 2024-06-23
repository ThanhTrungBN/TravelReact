import { useEffect } from "react";
import styles from "../assets/css/sb-admin-2.min.module.css";
import styles2 from "../assets/css/sb-admin-2.module.css";


const AdminSearch = function () {

    return (
        <div id="content-wrapper" className={`${styles['d-flex']} ${styles['flex-column']}`}>
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
                                <img className={`${styles["img-profile"]} ${styles["rounded-circle"]}`} src="img/undraw_profile.svg" />
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
                <div className={`${styles['container-fluid']}`}>
                    <div className={`${styles['d-sm-flex']} ${styles['align-items-center']} ${styles['justify-content-between']} mb-4`}>
                        <h1 className={`${styles.h3} ${styles['mb-0']} ${styles['text-gray-800']}`}>Dashboard</h1>
                        <a href="#" className={`${styles['d-none']} ${styles['d-sm-inline-block']} ${styles.btn} ${styles['btn-sm']} ${styles['btn-primary']} ${styles.shadow} ${styles['shadow-sm']}`}>
                            <i className={`${styles.fas} ${styles['fa-download']} ${styles['fa-sm']} ${styles['text-white-50']}`}></i> Generate Report
                        </a>

                    </div>
                    <div className={`${styles.row}`}>
                        <div className={`${styles["col-xl-3"]} ${styles["col-md-6"]} mb-4`}>
                            <div className={`${styles.card} ${styles["border-left-primary"]} ${styles.shadow} ${styles['h-100']} ${styles['py-2']}`}>
                                <div className={styles["card-body"]}>
                                    <div className={`${styles.row} ${styles["no-gutters"]} ${styles["align-items-center"]}`}>
                                        <div className={`${styles.col} ${styles['mr-2']}`}>
                                            <div className={`${styles["text-xs"]} ${styles["font-weight-bold"]} ${styles['text-primary']} ${styles["text-uppercase"]} ${styles['mb-1']}`}>
                                                Earnings (Monthly)
                                            </div>
                                            <div className={`${styles.h5} ${styles['mb-0']} ${styles["font-weight-bold"]} ${styles["text-gray-800"]}`}>
                                                $40,000
                                            </div>
                                        </div>
                                        <div className={`${styles.col} ${styles["col-auto"]}`}>
                                            <i className={`${styles["fas"]} ${styles["fa-calendar"]} ${styles["fa-2x"]} ${styles["text-gray-300"]}`}></i>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>

                        <div className={`${styles["col-xl-3"]} ${styles["col-md-6"]} mb-4`}>
                            <div className={`${styles.card} ${styles["border-left-success"]} ${styles.shadow} ${styles['h-100']} ${styles['py-2']}`}>
                                <div className={styles["card-body"]}>
                                    <div className={`${styles.row} ${styles["no-gutters"]} ${styles["align-items-center"]}`}>
                                        <div className={`${styles.col} ${styles['mr-2']}`}>
                                            <div className={`${styles["text-xs"]} ${styles["font-weight-bold"]} ${styles['ext-success']} ${styles["text-uppercase"]} ${styles['mb-1']}`}>
                                                Earnings (Annual)
                                            </div>
                                            <div className={`${styles.h5} ${styles['mb-0']} ${styles["font-weight-bold"]} ${styles["text-gray-800"]}`}>
                                                $215,000
                                            </div>
                                        </div>
                                        <div className={`${styles.col} ${styles["col-auto"]}`}>
                                            <i className={`${styles["fas"]} ${styles["fa-dollar-sign"]} ${styles["fa-2x"]} ${styles["text-gray-300"]}`}></i>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>

                        <div className={`${styles["col-xl-3"]} ${styles["col-md-6"]} mb-4`}>
                            <div className={`${styles.card} ${styles["border-left-info"]} ${styles.shadow} ${styles['h-100']} ${styles['py-2']}`}>
                                <div className={styles["card-body"]}>
                                    <div className={`${styles.row} ${styles["no-gutters"]} ${styles["align-items-center"]}`}>
                                        <div className={`${styles.col} ${styles['mr-2']}`}>
                                            <div className={`${styles["text-xs"]} ${styles["font-weight-bold"]} ${styles['text-info']} ${styles["text-uppercase"]} ${styles['mb-1']}`}>
                                                Tasks
                                            </div>
                                            <div className={`${styles.row} ${styles["no-gutters"]} ${styles["align-items-center"]}`}>
                                                <div className={`${styles.col} ${styles["col-auto"]}`}>
                                                    <div className={`${styles.h5} ${styles['mb-0']} ${styles['mr-3']} ${styles["font-weight-bold"]} ${styles["text-gray-800"]}`}>
                                                        50%
                                                    </div>
                                                </div>
                                                <div className={styles.col}>
                                                    <div className={`${styles.progress} ${styles["progress-sm"]} ${styles['mr-2']}`}>
                                                        <div className={`${styles["progress-bar"]} ${styles["bg-info"]}`} role="progressbar" style={{ width: '50%' }} aria-valuenow="50" aria-valuemin="0" aria-valuemax="100"></div>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                        <div className={`${styles.col} ${styles["col-auto"]}`}>
                                            <i className={`${styles["fas"]} ${styles["fa-clipboard-list"]} ${styles["fa-2x"]} ${styles["text-gray-300"]}`}></i>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>

                        <div className={`${styles["col-xl-3"]} ${styles["col-md-6"]} mb-4`}>
                            <div className={`${styles.card} ${styles["border-left-warning"]} ${styles.shadow} ${styles['h-100']} ${styles['py-2']}`}>
                                <div className={styles["card-body"]}>
                                    <div className={`${styles.row} ${styles["no-gutters"]} ${styles["align-items-center"]}`}>
                                        <div className={`${styles.col} ${styles['mr-2']}`}>
                                            <div className={`${styles["text-xs"]} ${styles["font-weight-bold"]} ${styles['text-warning']} ${styles["text-uppercase"]} ${styles['mb-1']}`}>
                                                Pending Requests
                                            </div>
                                            <div className={`${styles.h5} ${styles['mb-0']} ${styles["font-weight-bold"]} ${styles["text-gray-800"]}`}>
                                                18
                                            </div>
                                        </div>
                                        <div className={`${styles.col} ${styles["col-auto"]}`}>
                                            <i className={`${styles["fas"]} ${styles["fa-comments"]} ${styles["fa-2x"]} ${styles["text-gray-300"]}`}></i>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className={`${styles.row}`}>
                        <div className={`${styles['col-xl-8']} ${styles['col-lg-7']}`}>
                            <div className={`${styles.card} ${styles.shadow} mb-4`}>
                                {/* Card Header - Dropdown */}
                                <div className={`${styles['card-header']} py-3 d-flex flex-row align-items-center justify-content-between`}>
                                    <h6 className={`${styles['m-0']} ${styles['font-weight-bold']} ${styles['text-primary']}`}>Earnings Overview</h6>
                                    <div className="dropdown no-arrow">
                                        <a className="dropdown-toggle" href="#" role="button" id="dropdownMenuLink"
                                            data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                                            <i className={`${styles2.fas} ${styles2['fa-ellipsis-v']} ${styles2['fa-sm']} ${styles2['fa-fw']} ${styles2['text-gray-400']}`}></i>
                                        </a>
                                        <div className={`${styles['dropdown-menu']} ${styles['dropdown-menu-right']} ${styles.shadow} ${styles['animated--fade-in']}`}
                                            aria-labelledby="dropdownMenuLink">
                                            <div className={`${styles['dropdown-header']}`}>Dropdown Header:</div>
                                            <a className={`${styles['dropdown-item']}`} href="#">Action</a>
                                            <a className={`${styles['dropdown-item']}`} href="#">Another action</a>
                                            <div className={`${styles['dropdown-divider']}`}></div>
                                            <a className={`${styles['dropdown-item']}`} href="#">Something else here</a>
                                        </div>
                                    </div>
                                </div>
                                {/* Card Body */}
                                <div className={`${styles['card-body']}`}>
                                    <div className={`${styles['chart-area']}`}>
                                        <canvas id="myAreaChart"></canvas>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className={`${styles["col-xl-4"]} ${styles["col-lg-5"]}`}>
                            <div className={`${styles.card} ${styles.shadow} ${styles['mb-4']}`}>
                                {/* Card Header - Dropdown */}
                                <div className={`${styles["card-header"]} ${styles["py-3"]} ${styles["d-flex"]} ${styles["flex-row"]} ${styles["align-items-center"]} ${styles["justify-content-between"]}`}>
                                    <h6 className={`${styles['m-0']} ${styles["font-weight-bold"]} ${styles["text-primary"]}`}>Revenue Sources</h6>
                                    <div className={`${styles.dropdown} ${styles["no-arrow"]}`}>
                                        <a className={`${styles['dropdown-toggle']}`} href="#" role="button" id="dropdownMenuLink"
                                            data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                                            <i className={`${styles["fas"]} ${styles["fa-ellipsis-v"]} ${styles["fa-sm"]} ${styles["fa-fw"]} ${styles["text-gray-400"]}`}></i>
                                        </a>
                                        <div className={`${styles['dropdown-menu']} ${styles["dropdown-menu-right"]} ${styles.shadow} ${styles["animated--fade-in"]}`} aria-labelledby="dropdownMenuLink">
                                            <div className={`${styles["dropdown-header"]}`}>Dropdown Header:</div>
                                            <a className={`${styles["dropdown-item"]}`} href="#">Action</a>
                                            <a className={`${styles["dropdown-item"]}`} href="#">Another action</a>
                                            <div className={`${styles["dropdown-divider"]}`}></div>
                                            <a className={`${styles["dropdown-item"]}`} href="#">Something else here</a>
                                        </div>
                                    </div>
                                </div>
                                {/* Card Body */}
                                <div className={`${styles["card-body"]}`}>
                                    <div className={`${styles["chart-pie"]} ${styles['pt-4']} ${styles['pb-2']}`}>
                                        <canvas id="myPieChart"></canvas>
                                    </div>
                                    <div className={`${styles['mt-4']} ${styles["text-center"]} ${styles.small}`}>
                                        <span className={`${styles['mr-2']}`}>
                                            <i className={`${styles["fas"]} ${styles["fa-circle"]} ${styles["text-primary"]}`}></i> Direct
                                        </span>
                                        <span className={`${styles['mr-2']}`}>
                                            <i className={`${styles["fas"]} ${styles["fa-circle"]} ${styles["text-success"]}`}></i> Social
                                        </span>
                                        <span className={`${styles['mr-2']}`}>
                                            <i className={`${styles["fas"]} ${styles["fa-circle"]} ${styles["text-info"]}`}></i> Referral
                                        </span>
                                    </div>
                                </div>
                            </div>
                        </div>


                    </div>


                    <div className={styles.row}>


                        <div className={`${styles['col-lg-6']} ${styles['mb-4']}`}>
                            <div className={`${styles2.card} ${styles2.shadow} ${styles2['mb-4']}`}>
                                <div className={`${styles2['card-header']} ${styles2['py-3']}`}>
                                    <h6 className={`${styles2['m-0']} ${styles2['font-weight-bold']} ${styles2['text-primary']}`}>Projects</h6>
                                </div>
                                <div className={`${styles2['card-body']}`}>
                                    <h4 className={`${styles2.small} ${styles2['font-weight-bold']}`}>Server Migration <span
                                        className={`${styles2['float-right']}`}>20%</span></h4>
                                    <div className={`${styles2.progress} ${styles2['mb-4']}`}>
                                        <div className={`${styles2['progress-bar']} ${styles2['bg-danger']}`} role="progressbar" style={{ width: '20%' }}
                                            aria-valuenow="20" aria-valuemin="0" aria-valuemax="100"></div>
                                    </div>
                                    <h4 className={`${styles2.small} ${styles2['font-weight-bold']}`}>Sales Tracking <span
                                        className={`${styles2['float-right']}`}>40%</span></h4>
                                    <div className={`${styles2.progress} ${styles2['mb-4']}`}>
                                        <div className={`${styles2['progress-bar']} ${styles2['bg-warning']}`} role="progressbar" style={{ width: '40%' }}
                                            aria-valuenow="40" aria-valuemin="0" aria-valuemax="100"></div>
                                    </div>
                                    <h4 className={`${styles2.small} ${styles2['font-weight-bold']}`}>Customer Database <span
                                        className={`${styles2['float-right']}`}>60%</span></h4>
                                    <div className={`${styles2.progress} ${styles2['mb-4']}`}>
                                        <div className={`${styles2['progress-bar']}`} role="progressbar" style={{ width: '60%' }}
                                            aria-valuenow="60" aria-valuemin="0" aria-valuemax="100"></div>
                                    </div>
                                    <h4 className={`${styles2.small} ${styles2['font-weight-bold']}`}>Payout Details <span
                                        className={`${styles2['float-right']}`}>80%</span></h4>
                                    <div className={`${styles2.progress} ${styles2['mb-4']}`}>
                                        <div className={`${styles2['progress-bar']} ${styles2['bg-info']}`} role="progressbar" style={{ width: '80%' }}
                                            aria-valuenow="80" aria-valuemin="0" aria-valuemax="100"></div>
                                    </div>
                                    <h4 className={`${styles2.small} ${styles2['font-weight-bold']}`}>Account Setup <span
                                        className={`${styles2['float-right']}`}>Complete!</span></h4>
                                    <div className={`${styles2.progress}`}>
                                        <div className={`${styles2['progress-bar']} ${styles2['bg-success']}`} role="progressbar" style={{ width: '100%' }}
                                            aria-valuenow="100" aria-valuemin="0" aria-valuemax="100"></div>
                                    </div>
                                </div>
                            </div>

                            <div className={`${styles2.row}`}>
                                <div className={`${styles2['col-lg-6']} ${styles2['mb-4']}`}>
                                    <div className={`${styles2.card} ${styles2['bg-primary']} ${styles2['text-white']} ${styles2.shadow}`}>
                                        <div className={`${styles2['card-body']}`}>
                                            Primary
                                            <div className={`${styles2['text-white-50']} ${styles2.small}`}>#4e73df</div>
                                        </div>
                                    </div>
                                </div>
                                <div className={`${styles2['col-lg-6']} ${styles2['mb-4']}`}>
                                    <div className={`${styles2.card} ${styles2['bg-success']} ${styles2['text-white']} ${styles2.shadow}`}>
                                        <div className={`${styles2['card-body']}`}>
                                            Success
                                            <div className={`${styles2['text-white-50']} ${styles2.small}`}>#1cc88a</div>
                                        </div>
                                    </div>
                                </div>
                                <div className={`${styles2['col-lg-6']} ${styles2['mb-4']}`}>
                                    <div className={`${styles2.card} ${styles2['bg-info']} ${styles2['text-white']} ${styles2.shadow}`}>
                                        <div className={`${styles2['card-body']}`}>
                                            Info
                                            <div className={`${styles2['text-white-50']} ${styles2.small}`}>#36b9cc</div>
                                        </div>
                                    </div>
                                </div>
                                <div className={`${styles2['col-lg-6']} ${styles2['mb-4']}`}>
                                    <div className={`${styles2.card} ${styles2['bg-warning']} ${styles2['text-white']} ${styles2.shadow}`}>
                                        <div className={`${styles2['card-body']}`}>
                                            Warning
                                            <div className={`${styles2['text-white-50']} ${styles2.small}`}>#f6c23e</div>
                                        </div>
                                    </div>
                                </div>
                                <div className={`${styles2['col-lg-6']} ${styles2['mb-4']}`}>
                                    <div className={`${styles2.card} ${styles2['bg-danger']} ${styles2['text-white']} ${styles2.shadow}`}>
                                        <div className={`${styles2['card-body']}`}>
                                            Danger
                                            <div className={`${styles2['text-white-50']} ${styles2.small}`}>#e74a3b</div>
                                        </div>
                                    </div>
                                </div>
                                <div className={`${styles2['col-lg-6']} ${styles2['mb-4']}`}>
                                    <div className={`${styles2.card} ${styles2['bg-secondary']} ${styles2['text-white']} ${styles2.shadow}`}>
                                        <div className={`${styles2['card-body']}`}>
                                            Secondary
                                            <div className={`${styles2['text-white-50']} ${styles2.small}`}>#858796</div>
                                        </div>
                                    </div>
                                </div>
                                <div className={`${styles2['col-lg-6']} ${styles2['mb-4']}`}>
                                    <div className={`${styles2.card} ${styles2['bg-light']} ${styles2['text-black']} ${styles2.shadow}`}>
                                        <div className={`${styles2['card-body']}`}>
                                            Light
                                            <div className={`${styles2['text-black-50']} ${styles2.small}`}>#f8f9fc</div>
                                        </div>
                                    </div>
                                </div>
                                <div className={`${styles2['col-lg-6']} ${styles2['mb-4']}`}>
                                    <div className={`${styles2.card} ${styles2['bg-dark']} ${styles2['text-white']} ${styles2.shadow}`}>
                                        <div className={`${styles2['card-body']}`}>
                                            Dark
                                            <div className={`${styles2['text-white-50']} ${styles2.small}`}>#5a5c69</div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>


                        <div className={`${styles2['col-lg-6']} ${styles2['mb-4']}`}>
                            <div className={`${styles2.card} ${styles2.shadow} ${styles2['mb-4']}`}>
                                <div className={`${styles2['card-header']} ${styles2['py-3']}`}>
                                    <h6 className={`${styles2['m-0']} ${styles2['font-weight-bold']} ${styles2['text-primary']}`}>Illustrations</h6>
                                </div>
                                <div className={`${styles2['card-body']}`}>
                                    <div className={`${styles2['text-center']}`}>
                                        <img className={`${styles2['img-fluid']} ${styles2['px-3']} ${styles2['px-sm-4']} ${styles2['mt-3']} ${styles2['mb-4']}`} style={{ width: '25rem' }}
                                            src="img/undraw_posting_photo.svg" alt="..." />
                                    </div>
                                    <p>Add some quality, svg illustrations to your project courtesy of <a
                                        target="_blank" rel="nofollow" href="https://undraw.co/">unDraw</a>, a
                                        constantly updated collection of beautiful svg images that you can use
                                        completely free and without attribution!</p>
                                    <a target="_blank" rel="nofollow" href="https://undraw.co/">Browse Illustrations on
                                        unDraw &rarr;</a>
                                </div>
                            </div>

                            <div className={`${styles2.card} ${styles2.shadow} ${styles2['mb-4']}`}>
                                <div className={`${styles2['card-header']} ${styles2['py-3']}`}>
                                    <h6 className={`${styles2['m-0']} ${styles2['font-weight-bold']} ${styles2['text-primary']}`}>Development Approach</h6>
                                </div>
                                <div className={`${styles2['card-body']}`}>
                                    <p>SB Admin 2 makes extensive use of Bootstrap 4 utility classes in order to reduce
                                        CSS bloat and poor page performance. Custom CSS classes are used to create
                                        custom components and custom utility classes.</p>
                                    <p className={`${styles2['mb-0']}`}>Before working with this theme, you should become familiar with the
                                        Bootstrap framework, especially the utility classes.</p>
                                </div>
                            </div>
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
export default AdminSearch