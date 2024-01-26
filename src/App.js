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
  return (
    <div className="App">
      <Router>
        <Routes>
          <Route path='/' element={
            <>
              <HeaderCustomer />
              <Customer />
              <FooterCustomer />
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
