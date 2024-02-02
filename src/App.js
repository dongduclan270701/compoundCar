import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import React, { useState } from "react";
import HeaderCustomer from 'Components/Customer/Header'
import FooterCustomer from 'Components/Customer/Footer'
import HeaderAdmin from 'Components/Admin/Header'
import Orders from 'Components/Admin/Orders'
import Users from 'Components/Admin/Users'
import BlackList from 'Components/Admin/BlackList'
import IP from 'Components/Admin/IP'
import Login from 'Components/Admin/Login'
import Website from 'Components/Admin/Website/Website'
import UpdateWebsite from 'Components/Admin/Website/Update-Website'
import SideBar from 'Components/Admin/Sidebar'
import Customer from 'Components/Customer'
import Dashboard from 'Components/Admin/Dashboard'
import {
  BrowserRouter as Router,
  Routes,
  Route,
} from 'react-router-dom'
import 'assets/vendors/feather/feather.css'
import 'assets/vendors/ti-icons/css/themify-icons.css'
import 'assets/css/vertical-layout-light/style.css'
import 'assets/vendors/mdi/css/materialdesignicons.min.css'
function App() {
  const [website, setWebsite] = useState({"_id":{"$oid":"65b2d37584b9724868b50638"},"hotline":"0374216188","gmail":"XXX@gmail.com","compound":[{"location":"Bắc Giang - Hà Nội","price":"200.000 VNĐ"},{"location":"Bắc Giang - Bắc Ninh","price":"150.000 VNĐ"},{"location":"Bắc Ninh - Hà Nội","price":"100.000 VNĐ"}],"lumpSum":[{"location":"Bắc Giang - Hà Nội","price":"500.000 VNĐ"},{"location":"Bắc Giang - Bắc Ninh","price":"550.000 VNĐ"},{"location":"Bắc Ninh - Hà Nội","price":"600.000 VNĐ"}],"service":{"no_1":"Tài xế tìm khách nhanh và dễ dàng.","no_2":"Giá ghép chỉ có 200.000 VNĐ.","no_3":"Giá bao xe 500.000 VNĐ trở lên tuỳ điểm.","no_4":"Giá vận chuyển đồ 50.000 VNĐ.","no_5":"0374216188","no_6":"Các ngày trong tuần.","no_7":"Bắt đầu từ 5h đến 21h hằng ngày.","no_8":"Đón và trả tận nơi."}})
  const page = [
    { path: "/adminDashboard", location: Dashboard },
    { path: "/adminDashboard/orders", location: Orders },
    { path: "/adminDashboard/users", location: Users },
    { path: "/adminDashboard/blackList", location: BlackList },
    { path: "/adminDashboard/ipList", location: IP },
    { path: "/adminDashboard/website", location: Website },
    { path: "/adminDashboard/editWebsite", location: UpdateWebsite },
  ]
  const [isShowSideBarRes, setIsShowSideBarRes] = useState(false)
  const [isChooseShowIcons, setIsChooseShowIcons] = useState(false)
  const handleGetSettingChooseShowIconOnly = (data) => {
    setIsChooseShowIcons(data)
  }
  const handleGetShowSideBarRes = (data) => {
    setIsShowSideBarRes(data)
  }
  const handleGetWebsite = (data) => {
    setWebsite(data)
  }
  return (
    <div className="App">
      <Router>
        <Routes>
          <Route path='/' element={
            <>
              <HeaderCustomer />
              <Customer onHandleGetWebsite={handleGetWebsite}/>
              <FooterCustomer website={website}/>
            </>
          } />
          
          {page.map((item, index) => {
          const TagName1 = item.location
          return <Route key={index} path={item.path} element={JSON.parse(localStorage.getItem('auth-token-admin')) ?
          <div className={isChooseShowIcons ? 'sidebar-icon-only' : null}>
            <div className="container-scroller" >
              <HeaderAdmin
                isChooseShowIcons={isChooseShowIcons}
                onHandleGetSettingChooseShowIconOnly={handleGetSettingChooseShowIconOnly}
                isShowSideBarRes={isShowSideBarRes}
                onHandleGetShowSideBarRes={handleGetShowSideBarRes}
              />
              <div className="container-fluid page-body-wrapper">
                <SideBar
                  isChooseShowIcons={isChooseShowIcons}
                  onHandleGetSettingChooseShowIconOnly={handleGetSettingChooseShowIconOnly}
                  isShowSideBarRes={isShowSideBarRes} />
                  <TagName1 />
              </div>
            </div>
          </div>:<><Login /></>}
           />
        })}
        </Routes>
      </Router>
    </div>
  );
}

export default App;
