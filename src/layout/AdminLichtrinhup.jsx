import React, { useEffect, useState ,useContext} from "react";
import {
    Button, Cascader, DatePicker, Form, Input,
    InputNumber,
    Mentions,
    Select,
    TreeSelect,
} from 'antd';
import { LoadLichtrinhid, updateLichtrinh } from "../services/schedule.services";
import { useParams } from 'react-router-dom';
import { loadgetALL } from "../services/detail.services";
import { TravelMenu } from "../constant/context";
import FormItem from "antd/es/form/FormItem";
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


const AdminLichtrinhup = function () {
    const { MT, MB, MDNB, MTNB ,User} = useContext(TravelMenu);

    const [form] = Form.useForm();
    const { lichtrinhid } = useParams();
    const [IDALL, setIDALL] = useState([])
    const [LT, setLTID] = useState([])
    const handleUpdate = async (values) => {
        const updatedLichtrinh = {
            lichtrinhid:lichtrinhid,
            machitiettour: values.machitiettour,
            ngay: values.ngay,
            tieude: values.tieude,
            mota: values.mota.replace(/\n/g, '\\n'),
            nghingoi: values.nghingoi,
        };

        try {
            const response = await updateLichtrinh(updatedLichtrinh);
            console.log(response);
            alert('TourDetail updated successfully!');
            window.location.href = '/admin/lichtrinh';
        } catch (error) {
            alert('Error updating tour:', error);
        }
    };
    useEffect(() => {
        const fetchDetailALL = async () => {
            try {
                const data = await loadgetALL();
                setIDALL(data);            
            } catch (error) {
                console.error('Error fetching tours:', error);
            }
        };
        const fetchDetailLT = async () => {
            try {
                const data = await LoadLichtrinhid(lichtrinhid);
                setLTID(data);
                form.setFieldsValue({
                    machitiettour: data.machitiettour,
                    ngay: data.ngay,
                    tieude: data.tieude,
                    mota: data.mota,
                    nghingoi: data.nghingoi,
                });
            } catch (error) {
                console.error('Error fetching tours:', error);
            }
        };
        fetchDetailLT();
        fetchDetailALL();
    }, [lichtrinhid]);
    return (

        <div style={{ width: '100%', padding: '50px' }}>
            <h2 style={{ color: '#0A97BB', padding: '30px' }}>Thêm Thông Tin Lịch Trình</h2>
            <Form
                {...formItemLayout}
                variant="filled"
                form={form}
                onFinish={handleUpdate}
                style={{
                    width: '100%',
                    border: '1px solid #e3e6f0',
                    boxShadow: '0 0.15rem 1.75rem rgba(58, 59, 69, 0.15)',
                    padding: '30px'
                }}
            >
                <Form.Item
                    label="Mã Chi Tiết Tour"
                    name="machitiettour"
                    rules={[
                        {
                            required: true,
                            message: 'Please input!',
                        },
                    ]}
                >
                    <Select disabled>
                        {IDALL.map(dd => (
                            <Select.Option key={dd.machitiettour} value={dd.machitiettour}>
                                {dd.machitiettour}
                            </Select.Option>
                        ))}
                    </Select>
                </Form.Item>
                <Form.Item
                    label="Tiêu Đề"
                    name="tieude"
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
                    label="Ngày"
                    name="ngay"
                    rules={[
                        {
                            required: true,
                            message: 'Please input!',
                        },
                    ]}
                >
                    <InputNumber />
                </Form.Item>
                <Form.Item
                    label="Mô tả"
                    name="mota"
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
                    label="Nghỉ Ngơi"
                    name="nghingoi"
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
export default AdminLichtrinhup;