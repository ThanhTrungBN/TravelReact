import React, { useState } from 'react';
import { DesktopOutlined, FileOutlined, PieChartOutlined, TeamOutlined, UserOutlined, CalendarOutlined } from '@ant-design/icons';
import { Breadcrumb, Layout, Menu, theme } from 'antd';
import { Routes, Route, useNavigate } from 'react-router-dom';

const { Header, Content, Footer, Sider } = Layout;

function getItem(label, key, icon, children, onClick) {
  return {
    key,
    icon,
    children,
    label,
    onClick,
  };
}

const App = () => {
  const [collapsed, setCollapsed] = useState(false);
  const {
    token: { colorBgContainer, borderRadiusLG },
  } = theme.useToken();
  const navigate = useNavigate();

  const items = [
    getItem('Trang Chủ', '1', <PieChartOutlined />, null, () => navigate('/option1')),
    getItem('Thống Kê', '2', <DesktopOutlined />, null, () => navigate('/admin/thongke')),
    getItem('Quản Lí Người Dùng', 'sub1', <UserOutlined />, [
      getItem('Thông tin Người Dùng', '20', null, null, () => navigate('/admin/cus')),
      getItem('Thêm Người Dùng', '3', null, null, () => navigate('/user/tom')),
      getItem('Xóa Người Dùng', '4', null, null, () => navigate('/user/bill')),
      getItem('Sửa thông tin', '5', null, null, () => navigate('/user/alex')),
    ]),
    getItem('Quản Lí Tour Du Lịch', 'sub2', <TeamOutlined />, [
      getItem('Thông Tin Tour Du Lịch', '6', null, null, () => navigate('/admin/index')),
      getItem('Thông Tin Tour Du Lịch', '19', null, null, () => navigate('/admin/takeplace')),
      getItem('Thêm Tour Du Lịch', '7', null, null, () => navigate('/admin/create')),
    ]),
    getItem('Quản Lí Chi Tiết Tour Du Lịch', 'sub3', <TeamOutlined />, [
      getItem('Thông Tin Chi Tiết Tour Du Lịch', '9', null, null, () => navigate('/admin/tourdetail')),
      getItem('Thêm Chi Tiết Tour Du Lịch', '10', null, null, () => navigate('/admin/tourdetail/create')),
      getItem('Xóa Chi Tiết Tour Du Lịch', '11', null, null, () => navigate('/team/team2')),
      getItem('Sửa Chi Tiết Tour Du Lịch', '12', null, null, () => navigate('/team/team3')),
    ]),
    getItem('Quản Lí Lịch Trình', 'sub5', <FileOutlined />, [
      getItem('Thông tin Lịch Trình', '16', null, null, () => navigate('/admin/lichtrinh')),
      getItem('Thêm Lịch Trình', '15', null, null, () => navigate('/admin/lichtrinh/create')),
      getItem('Xóa Lịch Trình', '17', null, null, () => navigate('/team/team2')),
      getItem('Sửa Lịch Trình', '18', null, null, () => navigate('/team/team3')),
    ]),
    getItem('Quản Lí Booking', 'sub4', <CalendarOutlined />, [
      getItem('Thông Tin booking', '13', null, null, () => navigate('/admin/order')),
      getItem('Sửa Booking', '14', null, null, () => navigate('/team/team3')),
    ]),
  ];

  return (
    <Layout style={{ minHeight: '100vh' }}>
      <Sider collapsible collapsed={collapsed} onCollapse={(value) => setCollapsed(value)}>
        <div className="demo-logo-vertical" style={{ height: '70px', border: '1px solid #e3e6f0', boxShadow: '0 0.15rem 1.75rem rgba(58, 59, 69, 0.15)' }}>
          <img src="/img/4206917.jpg" style={{ width: '100%', height: '100%', imageRendering: 'crisp-edges' }} alt="" />
        </div>
        <Menu theme="dark" defaultSelectedKeys={['1']} mode="inline" items={items} />
      </Sider>
    </Layout>
  );
};

export default App;
