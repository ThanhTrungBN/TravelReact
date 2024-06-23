import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';

import TrangChu from './pages/Trangchu.jsx';
import DuLich from './pages/DuLich.jsx';
import Thanhtoan from './pages/ThanhToan.jsx';
import TravelDetail from './layout/traveldetails.jsx';
import Canhan from './pages/CaNhan.jsx';
import Tour from './pages/DonTour.jsx';
import Dangnhap from './pages/Dangnhap.jsx';
import Quantri from './pages/Quantri.jsx';
import QuantriIdex from './pages/QuantriIndex.jsx';
import QuantriCreate from './pages/QuantriCreate.jsx';
import QuantriUpdate from './pages/QuantriUpdate.jsx';
import DuLichDetail from './pages/DuLichDetail.jsx';
import QuantriOrder from './pages/QuantriOrder.jsx';
import HoaDon from './pages/HoaDon.jsx';
import QuantriTourdetailcr from './pages/QuantriTourdetailcr.jsx';
import QuantriLichtrinhcr from './pages/QuantriLichtrinhcr.jsx';
import QuantriLichtrinh from './pages/QuantriLichtrinh.jsx';
import QuantriTourdetail from './pages/QuantriTourdetail.jsx';
import QuantriTourdetailup from './pages/QuantriTourdetailup.jsx';
import QuantriLichtrinhup from './pages/QuantriLichtrinhup.jsx';
import QuantriThongke from './pages/QuantriThongke.jsx';
import DonTourdetail from './pages/DonTourdetail.jsx';
import QuantriTakeplace from './pages/QuantriTakeplace.jsx';
import TravelMenuProvider from './constant/context.js';
import QuantriCus from './pages/QuantriCus.jsx';
const App = () => {
  return (
    <TravelMenuProvider>
      <Router>
        <Routes>
          <Route path="/" element={<TrangChu />} />
          <Route path="/:mataikhoan" element={<TrangChu />} />
          <Route path="/travel" element={<DuLich />} />
          <Route path="/pay/:matour" element={<Thanhtoan />} />
          <Route path="/booking/PaymentCallback" element={<HoaDon />} />
          <Route path="/travel/:matour" element={<DuLichDetail />} />
          <Route path="/profile" element={<Canhan />} />
          <Route path="/profile/order" element={<Tour />} />
          <Route path="/profile/order/:orderID" element={<DonTourdetail />} />
          <Route path="/login" element={<Dangnhap />} />
          <Route path="/admin" element={<Quantri />} />
          <Route path="/admin/Index" element={<QuantriIdex />} />
          <Route path="/admin/takeplace" element={<QuantriTakeplace />} />
          <Route path="/admin/thongke" element={<QuantriThongke />} />
          <Route path="/admin/Order" element={<QuantriOrder />} />
          <Route path="/admin/cus" element={<QuantriCus />} />
          <Route path="/admin/Create" element={<QuantriCreate />} />
          <Route path="/admin/tourdetail/create" element={<QuantriTourdetailcr />} />
          <Route path="/admin/tourdetail" element={<QuantriTourdetail />} />
          <Route path="/admin/tourdetail/update/:machitiettour" element={<QuantriTourdetailup />} />
          <Route path="/admin/lichtrinh/update/:lichtrinhid" element={<QuantriLichtrinhup />} />
          <Route path="/admin/lichtrinh/create" element={<QuantriLichtrinhcr />} />
          <Route path="/admin/lichtrinh" element={<QuantriLichtrinh />} />
          <Route path="/admin/Update/:matour" element={<QuantriUpdate />} />
        </Routes>
      </Router>
    </TravelMenuProvider>
  );
};

export default App;