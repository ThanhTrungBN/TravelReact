import React, { useEffect, useState,useContext } from "react";
import {
    Button, Cascader, DatePicker, Form, Input,
    InputNumber,
    Mentions,
    Select,
    TreeSelect,
} from 'antd';
import { TravelMenu } from "../constant/context";
import { loadIDnull,addTourdetail } from "../services/detail.services";
import { loadIDDD } from "../services/location.services";
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


const AdminTourdetailcr = function () {
    const { MT, MB, MDNB, MTNB ,User} = useContext(TravelMenu);
    const [IDnull, setIDnull] = useState([]);
    const [IDDD, setIDDD] = useState([])
    const handleSubmit = async values => {
        const [ngaykhoihanh, ngayketthuc] = values.RangePicker;

        const newTourdetail = {
            machitiettour: 0, 
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
            const response = await addTourdetail(newTourdetail);
           alert("Thêm thành công");
           Form.resetFields();
        } catch (error) {
          alert("Thêm thất bại");
        }
    };
    useEffect(() => {
        const fetchIdnull = async () => {
            try {
                const data = await loadIDnull();
                setIDnull(data);
                console.log(IDnull);

            } catch (error) {
                console.error('Error fetching tours:', error);
            }
        };
        const fetchIdDD = async () => {
            try {
                const data = await loadIDDD();
                setIDDD(data);

            } catch (error) {
                console.error('Error fetching tours:', error);
            }
        };
        fetchIdDD();
        fetchIdnull();
    }, []);


    return (
        <div style={{width:'100%', padding: '20px'}}>
        <h2 style={{color:'#0A97BB',padding:'30px'}}>Thêm Thông Tin Chi Tiết Tour</h2>
          <Form
            {...formItemLayout}
            onFinish={handleSubmit}
            variant="filled"
            style={{
                width: '100%',
                border: '1px solid #e3e6f0',
                boxShadow: '0 0.15rem 1.75rem rgba(58, 59, 69, 0.15)',
                padding:'30px'
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
                    {IDnull.map(tour => (
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
export default AdminTourdetailcr;