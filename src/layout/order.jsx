import { useEffect, useState } from "react";
import "../assets/css/style_home.css"
import { loadOrderById,DeleteOrder} from "../services/order.service"
import { useNavigate } from 'react-router-dom';
import { faMagnifyingGlass } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { formatDate,formatNumber } from "../constant/help.js";

const Order = function () {
  

    const [orderAcc, setorderAcc] = useState([]);
    const navigate = useNavigate();
    const handleDetail = (orderID) => {
        navigate(`/profile/order/${orderID}`);
    };
    const handleDeleteOrder = async (orderID) => {
        try {
            await DeleteOrder(orderID);
            setorderAcc(orderAcc.filter(order => order.orderID !== orderID));
            alert('Order delete successfully!');
            ;
        } catch (error) {
            alert('Order delete tour:', error);
        }
    };
    useEffect(() => {
        const fetchloadOrderById = async () => {
            try {
                const data = await loadOrderById();
                setorderAcc(data);
                console.log(data);
            } catch (error) {
                console.error('Error fetching tours:', error);
            }
        };

        fetchloadOrderById();
    }, []);
    return (
        <>
            <div class="col-md-9 col-12 right ps-md-4">
                <div class="wrapper order"
                    style={{
                        background: 'rgb(255, 255, 255)',
                        borderRadius: '10px',
                        boxSizing: 'border-box',
                        border: 'none'
                    }}>
                    <div class="tab" style={{
                        boxSizing: 'border-box'
                    }}>
                        <ul class="nav py-3 tab flex-sm-row mb-3" role="tablist"
                            style={{
                                marginTop: '0px',
                                listStyle: 'none',
                                display: 'flex',
                                flexFlow: 'wrap',
                                paddingLeft: '0px',
                                background: 'rgb(255, 255, 255)',
                                border: '0.5px solid rgb(213, 213, 213)',
                                borderRadius: '10px',
                                boxSizing: 'border-box',
                                marginBottom: '1rem',
                                paddingTop: '1rem',
                                paddingBottom: '1rem',
                                WebkitBoxOrient: 'horizontal',
                                WebkitBoxDirection: 'normal'
                            }}>
                            <li class="nav-item flex-sm-fill text-sm-center" role="presentation"
                                style={{
                                    boxSizing: 'border-box',
                                    flex: '1 1 auto',
                                    WebkitBoxFlex: '1',
                                    textAlign: 'center'
                                }}><a
                                    id="pills-all-tab" class="nav-link active" aria-controls="pills-all" aria-selected="true"
                                    role="tab"
                                    style={{
                                        boxSizing: 'border-box',
                                        backgroundColor: 'transparent',
                                        padding: '0.5rem 1rem',
                                        textDecoration: 'none',
                                        transition: 'color 0.15s ease-in-out 0s, background-color 0.15s ease-in-out 0s, border-color 0.15s ease-in-out 0s',
                                        display: 'block',
                                        cursor: 'pointer',
                                        color: 'rgb(45, 66, 113)',
                                        fontWeight: 700
                                    }}>Tất
                                    cả</a></li>
                            <li class="nav-item flex-sm-fill text-sm-center" role="presentation"
                                style={{
                                    boxSizing: 'border-box',
                                    flex: '1 1 auto',
                                    WebkitBoxFlex: '1',
                                    textAlign: 'center'
                                }}><a
                                    id="pills-wait-tab" class="nav-link" aria-controls="pills-wait" aria-selected="false" role="tab"
                                    style={{
                                        boxSizing: 'border-box',
                                        backgroundColor: 'transparent',
                                        padding: '0.5rem 1rem',
                                        textDecoration: 'none',
                                        transition: 'color 0.15s ease-in-out 0s, background-color 0.15s ease-in-out 0s, border-color 0.15s ease-in-out 0s',
                                        display: 'block',
                                        cursor: 'pointer',
                                        color: 'rgb(45, 66, 113)',
                                        fontWeight: 700
                                    }}>Chờ
                                    xác nhận</a></li>
                            <li class="nav-item flex-sm-fill text-sm-center" role="presentation"
                                style={{
                                    boxSizing: 'border-box',
                                    flex: '1 1 auto',
                                    WebkitBoxFlex: '1',
                                    textAlign: 'center'
                                }}><a
                                    id="pills-complete-tab" class="nav-link" aria-controls="pills-complete" aria-selected="false"
                                    role="tab"
                                    style={{
                                        boxSizing: 'border-box',
                                        backgroundColor: 'transparent',
                                        padding: '0.5rem 1rem',
                                        textDecoration: 'none',
                                        transition: 'color 0.15s ease-in-out 0s, background-color 0.15s ease-in-out 0s, border-color 0.15s ease-in-out 0s',
                                        display: 'block',
                                        cursor: 'pointer',
                                        color: 'rgb(45, 66, 113)',
                                        fontWeight: 700
                                    }}>Đã
                                    đặt</a></li>
                        </ul>
                        <div class="form-search mb-4" style={{
                            boxSizing: 'border-box',
                            marginBottom: '1.5rem'
                        }}>
                            <form action="#" method="get"
                                style={{
                                    boxSizing: 'border-box',
                                    border: '0.5px solid rgb(216, 216, 216)',
                                    borderRadius: '5px',
                                    overflow: 'hidden',
                                    height: '50px',
                                    position: 'relative'
                                }}>
                                <input id="myInput" class="form-control px-5" type="text"
                                    placeholder="Tìm kiếm theo tên tour/ tourCode hoặc số booking"
                                    aria-label="default input example"
                                    style={{
                                        boxSizing: 'border-box',
                                        overflow: 'visible',
                                        margin: '0px',
                                        fontFamily: 'inherit',
                                        padding: '0.375rem 3rem',
                                        borderRadius: '0.25rem',
                                        transition: 'border-color 0.15s ease-in-out 0s, box-shadow 0.15s ease-in-out 0s, -webkit-box-shadow 0.15s ease-in-out 0s',
                                        display: 'block',
                                        fontSize: '1rem',
                                        lineHeight: '1.5',
                                        backgroundColor: 'rgb(255, 255, 255)',
                                        backgroundClip: 'padding-box',
                                        appearance: 'none',
                                        border: 'none',
                                        height: '100%',
                                        width: '100%',
                                        color: 'rgb(45, 66, 113)',
                                        fontWeight: 400
                                    }} /><FontAwesomeIcon style={{
                                        boxSizing: 'border-box',
                                        display: 'inline-block',
                                        fontVariant: 'normal',
                                        fontStyle: 'normal',
                                        fontWeight: 400,
                                        textTransform: 'none',
                                        lineHeight: 1,
                                        WebkitFontSmoothing: 'antialiased',
                                        position: 'absolute',
                                        top: '50%',
                                        left: '13px',
                                        transform: 'translateY(-50%)',
                                        zIndex: 1,
                                        pointerEvents: 'none',
                                        fontSize: '18px',
                                        color: 'rgb(45, 66, 113)',
                                        fontFamily: 'fontsvtv'
                                    }} icon={faMagnifyingGlass}  />
                            </form>
                        </div>
                        <div id="pills-tabContent" class="tab-content" style={{
                            boxSizing: 'border-box'
                        }}>
                            <div id="pills-all" class="tab-pane result fade active show" aria-labelledby="pills-all-tab"
                                role="tabpanel"
                                style={{
                                    boxSizing: 'border-box',
                                    transition: 'opacity 0.15s linear 0s',
                                    display: 'block',
                                    color: 'rgb(45, 66, 113)'
                                }}>
                                {orderAcc.map(ord => (
                                    <div class="item mb-4" name="itemOrder" style={{
                                        boxSizing: 'border-box',
                                        marginBottom: '1.5rem'
                                    }}>
                                        <h4 class="fw-bolder"
                                            style={{
                                                boxSizing: 'border-box',
                                                marginTop: '0px',
                                                marginBottom: '0.5rem',
                                                lineHeight: 1.2,
                                                fontSize: 'calc(1.275rem + 0.3vw)',
                                                fontWeight: 900
                                            }}>
                                        </h4>
                                        <p class="text-muted"
                                            style={{
                                                boxSizing: 'border-box',
                                                marginTop: '0px',
                                                marginBottom: '1rem',
                                                color: 'rgb(108, 117, 125)'
                                            }}>
                                            {ord.ngaydangki}</p>
                                        <div class="card mb-3 p-md-3"
                                            style={{
                                                position: 'relative',
                                                display: 'flex',
                                                flexDirection: 'column',
                                                minWidth: '0px',
                                                overflowWrap: 'break-word',
                                                background: 'rgb(255, 255, 255)',
                                                border: '0.5px solid rgb(213, 213, 213)',
                                                borderRadius: '10px',
                                                boxSizing: 'border-box',
                                                marginBottom: '1rem',
                                                padding: '1rem'
                                            }}>
                                            <div class="row g-0" style={{
                                                boxSizing: 'border-box',
                                                display: 'flex',
                                                flexWrap: 'wrap'
                                            }}>
                                                <div class="col-md-3 col-12"
                                                    style={{
                                                        boxSizing: 'border-box',
                                                        maxWidth: '100%',
                                                        marginTop: '0px',
                                                        flex: '0 0 auto',
                                                        WebkitBoxFlex: 0,
                                                        width: '25%'
                                                    }}>
                                                    <div class="image"
                                                        style={{
                                                            boxSizing: 'border-box',
                                                            overflow: 'hidden',
                                                            position: 'relative',
                                                            paddingTop: '68%'
                                                        }}>
                                                        <a href="/travel"
                                                            style={{
                                                                boxSizing: 'border-box',
                                                                backgroundColor: 'transparent',
                                                                textDecoration: 'none',
                                                                color: 'rgb(45, 66, 113)'
                                                            }}><img src={ord.anhdaidien}
                                                                style={{
                                                                    boxSizing: 'border-box',
                                                                    borderStyle: 'none',
                                                                    verticalAlign: 'middle',
                                                                    maxWidth: '100%',
                                                                    borderRadius: '10px',
                                                                    transition: 'transform 200ms ease 0s, -webkit-transform 200ms ease 0s',
                                                                    height: '100%',
                                                                    width: '100%',
                                                                    transform: 'translate(-50%, -50%)',
                                                                    position: 'absolute',
                                                                    top: '50%',
                                                                    left: '50%',
                                                                    right: 'unset',
                                                                    bottom: 'unset',
                                                                    objectFit: 'cover'
                                                                }} /></a>
                                                    </div>
                                                </div>
                                                <div class="col-md-9 col-12 p-3"
                                                    style={{
                                                        boxSizing: 'border-box',
                                                        maxWidth: '100%',
                                                        marginTop: '0px',
                                                        flex: '0 0 auto',
                                                        WebkitBoxFlex: 0,
                                                        width: '75%',
                                                        padding: '1rem'
                                                    }}>
                                                    <h5 class="card-title h5 h6-sm fw-bolder mb-3"
                                                        style={{
                                                            boxSizing: 'border-box',
                                                            marginTop: '0px',
                                                            lineHeight: 1.2,
                                                            fontSize: '1.25rem',
                                                            marginBottom: '1rem',
                                                            fontWeight: 900
                                                        }}>
                                                        <a href=""
                                                            style={{
                                                                boxSizing: 'border-box',
                                                                backgroundColor: 'transparent',
                                                                textDecoration: 'none',
                                                                color: 'rgb(45, 66, 113)'
                                                            }}></a>
                                                    </h5>
                                                    <div class="row align-items-center"
                                                        style={{
                                                            boxSizing: 'border-box',
                                                            display: 'flex',
                                                            flexWrap: 'wrap',
                                                            marginRight: 'calc(-0.75rem)',
                                                            marginLeft: 'calc(-0.75rem)',
                                                            WebkitBoxAlign: 'center',
                                                            alignItems: 'center'
                                                        }}>
                                                        <div class="col-md-8 col-7"
                                                            style={{
                                                                boxSizing: 'border-box',
                                                                maxWidth: '100%',
                                                                paddingRight: 'calc(0.75rem)',
                                                                paddingLeft: 'calc(0.75rem)',
                                                                marginTop: '0px',
                                                                flex: '0 0 auto',
                                                                WebkitBoxFlex: 0,
                                                                width: '66.6667%'
                                                            }}>
                                                            <div class="d-flex d-lg-block justify-content-between"
                                                                style={{
                                                                    boxSizing: 'border-box',
                                                                    WebkitBoxPack: 'justify',
                                                                    justifyContent: 'space-between',
                                                                    display: 'block'
                                                                }}>
                                                                <div style={{
                                                                    boxSizing: 'border-box'
                                                                }}>
                                                                    <div class="s-rate"
                                                                        style={{
                                                                            boxSizing: 'border-box',
                                                                            display: 'flex',
                                                                            WebkitBoxAlign: 'center',
                                                                            alignItems: 'center',
                                                                            marginRight: '22px',
                                                                            marginBottom: '25px'
                                                                        }}>
                                                                        <span
                                                                            style={{
                                                                                boxSizing: 'border-box',
                                                                                background: 'rgb(253, 196, 50)',
                                                                                fontWeight: 700,
                                                                                fontSize: '17px',
                                                                                lineHeight: '20px',
                                                                                color: 'rgb(255, 255, 255)',
                                                                                width: '40px',
                                                                                height: '40px',
                                                                                display: 'flex',
                                                                                WebkitBoxAlign: 'center',
                                                                                alignItems: 'center',
                                                                                WebkitBoxPack: 'center',
                                                                                justifyContent: 'center',
                                                                                position: 'relative',
                                                                                borderTopLeftRadius: '5px',
                                                                                borderTopRightRadius: '5px',
                                                                                borderBottomRightRadius: '5px',
                                                                                marginRight: '11px'
                                                                            }}>9</span>
                                                                        <div class="s-comment" style={{
                                                                            boxSizing: 'border-box'
                                                                        }}>
                                                                            <h6 class="fw-bold mb-0"
                                                                                style={{
                                                                                    boxSizing: 'border-box',
                                                                                    marginTop: '0px',
                                                                                    lineHeight: 1.2,
                                                                                    fontSize: '1rem',
                                                                                    marginBottom: '0px',
                                                                                    fontWeight: 700
                                                                                }}>
                                                                            </h6>
                                                                            <p style={{
                                                                                boxSizing: 'border-box',
                                                                                margin: '0px',
                                                                                color: 'rgb(45, 66, 113)'
                                                                            }}> quan
                                                                                tâm</p>
                                                                        </div>
                                                                    </div>
                                                                    
                                                                    <p style={{
                                                                        boxSizing: 'border-box',
                                                                        marginTop: '0px',
                                                                        marginBottom: '1rem'
                                                                    }}><span
                                                                        class="text-muted"
                                                                        style={{
                                                                            boxSizing: 'border-box',
                                                                            marginTop: '0px',
                                                                            marginBottom: '0px'
                                                                        }}>Số booking:
                                                                            {ord.orderID}</span><br style={{
                                                                                boxSizing: 'border-box'
                                                                            }} /><span
                                                                                class="text-muted"
                                                                                style={{
                                                                                    boxSizing: 'border-box',
                                                                                    marginTop: '0px',
                                                                                    marginBottom: '0px'
                                                                                }}>Tour code: {ord.matour}</span>
                                                                    </p>
                                                                    <p class="card-text"
                                                                        style={{
                                                                            boxSizing: 'border-box',
                                                                            marginTop: '0px',
                                                                            marginBottom: '0px'
                                                                        }}><small
                                                                            class="text-muted"
                                                                            style={{
                                                                                boxSizing: 'border-box',
                                                                                fontSize: '0.875em',
                                                                                color: 'rgb(108, 117, 125)'
                                                                            }}>Số Hành Khách : {ord.hanhkhach}</small>
                                                                    </p>
                                                                </div>
                                                            </div>
                                                        </div>
                                                        <div class="col-md-4 col-5 text-end"
                                                            style={{
                                                                boxSizing: 'border-box',
                                                                maxWidth: '100%',
                                                                paddingRight: 'calc(0.75rem)',
                                                                paddingLeft: 'calc(0.75rem)',
                                                                marginTop: '0px',
                                                                flex: '0 0 auto',
                                                                WebkitBoxFlex: 0,
                                                                width: '33.3333%',
                                                                textAlign: 'right'
                                                            }}>
                                                               <h6 class="text-primary"
                                                                style={{
                                                                    boxSizing: 'border-box',
                                                                    marginTop: '0px',
                                                                    marginBottom: '0.5rem',
                                                                    fontWeight: 500,
                                                                    lineHeight: 1.2,
                                                                    fontSize: '1rem',
                                                                    color: '#0A97BB'
                                                                }}>
                                                                {ord.tinhtrang}</h6>
                                                            <h6 class="text-primary"
                                                                style={{
                                                                    
                                                                    boxSizing: 'border-box',
                                                                    marginTop: '0px',
                                                                    marginBottom: '0.5rem',
                                                                    fontWeight: 500,
                                                                    lineHeight: 1.2,
                                                                    fontSize: '1rem',
                                                                    color: 'rgb(253, 80, 86)'
                                                                }}>
                                                                {ord.tieudetour}</h6>
                                                            <h5 class="text-primary fw-bold"
                                                                style={{
                                                                    boxSizing: 'border-box',
                                                                    marginTop: '0px',
                                                                    marginBottom: '0.5rem',
                                                                    lineHeight: 1.2,
                                                                    fontSize: '1.25rem',
                                                                    fontWeight: 700,
                                                                    color: 'rgb(253, 80, 86)'
                                                                }}>
                                                                {formatNumber(ord.thanhtien)}₫</h5>
                                                            <button style={{color:'#0A97BB'}} onClick={() => handleDetail(ord.orderID)} >
                                                                Xem Chi Tiết
                                                            </button>
                                                            <button style={{color:'#0A97BB',marginTop:'10px'}} onClick={() => handleDeleteOrder(ord.orderID)} >
                                                                Hủy Đặt Chỗ
                                                            </button>
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>  
                                ))}                                                         
                            </div>
                            <div id="pills-wait" class="tab-pane fade" aria-labelledby="pills-wait-tab" role="tabpanel"
                                style={{
                                    boxSizing: 'border-box',
                                    transition: 'opacity 0.15s linear 0s',
                                    opacity: 0,
                                    display: 'none'
                                }}>
                            </div>
                            <div id="pills-complete" class="tab-pane fade" aria-labelledby="pills-complete-tab" role="tabpanel"
                                style={{
                                    boxSizing: 'border-box',
                                    transition: 'opacity 0.15s linear 0s',
                                    opacity: 0,
                                    display: 'none'
                                }}>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

        </>
    )
}
export default Order