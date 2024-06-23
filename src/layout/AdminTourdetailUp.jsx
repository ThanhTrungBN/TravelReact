import React, { useEffect, useState ,useContext} from "react";
import {
    Button, Cascader, DatePicker, Form, Input,
    InputNumber,
    Mentions,
    Select,
    TreeSelect,
} from 'antd';
import { useParams } from 'react-router-dom';
import { updateTourdetail, loadIDDetail } from "../services/detail.services";
import { TravelMenu } from "../constant/context";
import { loadIDDD } from "../services/location.services";
import { loadTourMoi } from "../services/travel.services";
import moment from "moment";
const { RangePicker } = DatePicker;
const formItemLayout = {
    labelCol: {
        xs: {
            span: 24,
        },
        sm: {
            span: 6,
        },
    },
    wrapperCol: {
        xs: {
            span: 24,
        },
        sm: {
            span: 14,
        },
    },
};
const AdminTourdetailup = function () {
    const { MT, MB, MDNB, MTNB ,User} = useContext(TravelMenu);
    const { machitiettour } = useParams();
    console.log(machitiettour);
    const [IDDetail, setIDDetail] = useState([]);
    const [IDDD, setIDDD] = useState([])
    const [IDTour, setIDTour] = useState([]);

    const handleUpdate = async (values) => {
        const [ngaykhoihanh, ngayketthuc] = values.RangePicker;
        const updatedTourData = {
            machitiettour:machitiettour,
            madiadiem: values.diadiem,
            matour: values.matour,
            diemnhan: values.diemnhan,
            ngaykhoihanh: ngaykhoihanh.format(),
            ngayketthuc: ngayketthuc.format(),
            thongtindichuyen: values.thongtindichuyen,
            thongtinhuongdanvien: values.thongtinhuongdanvien,
            thongtintaptrung: values.thongtintaptrung,
        };

        try {
            const response = await updateTourdetail(updatedTourData);
            alert('TourDetail updated successfully!');
            console.log(response)
            window.location.href = '/admin/tourdetail';
        } catch (error) {
            alert('Error updating tour:', error);
        }
    };
    const [form] = Form.useForm();
    useEffect(() => {
        const fetchDetail = async () => {
            const data = await loadIDDetail(machitiettour);
            setIDDetail(data);
            form.setFieldsValue({
                diadiem: data.madiadiem,
                matour: data.matour,
                diemnhan: data.diemnhan,
                thongtindichuyen: data.thongtindichuyen,
                thongtinhuongdanvien: data.thongtinhuongdanvien,
                thongtintaptrung: data.thongtintaptrung,
                RangePicker: [data.ngaykhoihanh, data.ngayketthuc].map(date => moment(date)),
            });
        };
        const fetchIdDD = async () => {
            try {
                const data = await loadIDDD();
                setIDDD(data);

            } catch (error) {
                console.error('Error fetching tours:', error);
            }
        };
        const fetchIdTour = async () => {
            try {
                const data = await loadTourMoi();
                setIDTour(data);
            } catch (error) {
                console.error('Error fetching tours:', error);
            }
        };
        fetchIdTour();
        fetchIdDD();
        fetchDetail();
    }, [machitiettour]);
 
    return (
        <div style={{ width: '100%', padding: '20px' }}>
            <h2 style={{ color: '#0A97BB', padding: '30px' }}>Sửa Thông Tin Chi Tiết Tour Du Lịch</h2>
            <Form
                {...formItemLayout}
                form={form}
                onFinish={handleUpdate}
                variant="filled"
                style={{
                    width: '100%',
                    border: '1px solid #e3e6f0',
                    boxShadow: '0 0.15rem 1.75rem rgba(58, 59, 69, 0.15)',
                    padding: '30px',
                }}
            >
                <Form.Item
                    label="Địa Điểm"
                    name="diadiem"
                    rules={[
                        {
                            required: true,
                            message: 'Please input!',
                        },
                    ]}
                >
                    <Select
                        style={{
                            width: '100%',
                        }}
                    >
                        {IDDD.map(dd => (
                            <Select.Option key={dd.madiadiem} value={dd.madiadiem}>
                                {dd.tendiadiem}
                            </Select.Option>
                        ))}
                    </Select>
                </Form.Item>

                <Form.Item
                    label="Mã Tour Du Lịch"
                    name="matour"
                    rules={[
                        {
                            required: true,
                            message: 'Please input!',
                        },
                    ]}
                >
                    <Select
                        style={{
                            width: '100%',
                        }}
                    >
                        {IDTour.map(tour => (
                            <Select.Option key={tour.matour} value={tour.matour}>
                                {tour.matour}
                            </Select.Option>
                        ))}
                    </Select>
                </Form.Item>

                <Form.Item
                    label="Điểm Nhấn"
                    name="diemnhan"
                    rules={[
                        {
                            required: true,
                            message: 'Please input!',
                        },
                    ]}
                >
                    <Input.TextArea />
                </Form.Item>

                <Form.Item
                    label="Thông Tin Di Chuyển"
                    name="thongtindichuyen"
                    rules={[
                        {
                            required: true,
                            message: 'Please input!',
                        },
                    ]}
                >
                    <Mentions />
                </Form.Item>

                <Form.Item
                    label="Hướng Dẫn Viên"
                    name="thongtinhuongdanvien"
                    rules={[
                        {
                            required: true,
                            message: 'Please input!',
                        },
                    ]}
                >
                    <Input />
                </Form.Item>

                <Form.Item
                    label="Thông Tin Tập Trung"
                    name="thongtintaptrung"
                    rules={[
                        {
                            required: true,
                            message: 'Please input!',
                        },
                    ]}
                >
                    <Input />
                </Form.Item>

                <Form.Item
                    label="Ngày Khởi Hành / Ngày Kết Thúc"
                    name="RangePicker"
                    rules={[
                        {
                            required: true,
                            message: 'Please input!',
                        },
                    ]}
                >
                    <RangePicker />
                </Form.Item>

                <Form.Item
                    wrapperCol={{
                        offset: 6,
                        span: 16,
                    }}
                >
                    <Button type="primary" htmlType="submit">
                        Submit
                    </Button>
                </Form.Item>
            </Form>
        </div>
    )
};
export default AdminTourdetailup;