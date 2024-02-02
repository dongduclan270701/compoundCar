import React, { useState } from 'react';
import { NavLink } from 'react-router-dom';
// import { StateContext } from 'components/Context'
const Index = (props) => {
    // const state = useContext(StateContext)
    const { isChooseShowIcons, onHandleGetSettingChooseShowIconOnly, isShowSideBarRes } = props
    const [orders, setOrders] = useState(false)
    const [users, setUsers] = useState(false)
    const [ip, setIP] = useState(false)
    const handleSetActive = (index) => {
        const sections = ['orders', 'users', 'ip']
        const newStatus = {}
        sections.forEach(section => newStatus[section] = false)
        newStatus[sections[index - 1]] = !newStatus[sections[index - 1]]
        setOrders(newStatus.orders);
        setUsers(newStatus.users);
        setIP(newStatus.ip);
        if (newStatus[sections[index - 1]] && isChooseShowIcons) {
            onHandleGetSettingChooseShowIconOnly(false);
        }
    };
    return (
        <nav className={isShowSideBarRes ? "sidebar sidebar-offcanvas " : "sidebar sidebar-offcanvas active"} id="sidebar">
            <ul className="nav">
                <li className="nav-item">
                    <NavLink to="/adminDashboard" className="nav-link">
                        <i className="icon-grid menu-icon" />
                        <span className="menu-title">Bảng điều khiển</span>
                    </NavLink>
                </li>
                
                <li className="nav-item" onClick={() => handleSetActive(1)}>
                    <a href className="nav-link" data-toggle="collapse" aria-expanded={orders} aria-controls="users">
                        <i className="mdi mdi-cart menu-icon" />
                        <span className="menu-title">Đơn hàng</span>
                        <i className="menu-arrow" />
                    </a>
                    <div className={orders ? "collapse show" : "collapse"} id="users">
                        <ul className="nav flex-column sub-menu" style={{ padding: "0.25rem 0 0.75rem 1.25rem" }}>
                            <li className="nav-item"> <NavLink to="/adminDashboard/orders" className="nav-link" ><i className="mdi mdi-table" style={{ fontSize: "18px", marginRight: "10px" }} />Danh sách</NavLink></li>
                        </ul>
                    </div>
                </li>
                <li className="nav-item" onClick={() => handleSetActive(2)}>
                    <NavLink to={null} className="nav-link" data-toggle="collapse" aria-expanded={users} aria-controls="icons">
                        <i className="mdi mdi-account menu-icon" />
                        <span className="menu-title">Khách hàng</span>
                        <i className="menu-arrow" />
                    </NavLink>
                    <div className={users ? "collapse show" : "collapse"} id="icons">
                        <ul className="nav flex-column sub-menu" style={{ padding: "0.25rem 0 0.75rem 1.25rem" }}>
                            <li className="nav-item"> <NavLink to="/adminDashboard/users" className="nav-link"><i className="mdi mdi-account" style={{ fontSize: "18px", marginRight: "10px" }} />Danh sách</NavLink></li>
                            <li className="nav-item"> <NavLink to="/adminDashboard/blackList" className="nav-link"><i className="mdi mdi-account-box" style={{ fontSize: "18px", marginRight: "10px" }} />Danh sách đen</NavLink></li>
                        </ul>
                    </div>
                </li>
                <li className="nav-item" onClick={() => handleSetActive(3)}>
                    <NavLink to={null} className="nav-link" data-toggle="collapse" aria-expanded={ip} aria-controls="error">
                        <i className="mdi mdi-access-point-network menu-icon" />
                        <span className="menu-title">IP</span>
                        <i className="menu-arrow" />
                    </NavLink>
                    <div className={ip ? "collapse show" : "collapse"} id="error">
                        <ul className="nav flex-column sub-menu" style={{ padding: "0.25rem 0 0.75rem 1.25rem" }}>
                            <li className="nav-item"> <NavLink to="/adminDashboard/ipList" className="nav-link"><i className="mdi mdi-table" style={{ fontSize: "18px", marginRight: "10px" }} />Danh sách IP</NavLink></li>
                        </ul>
                    </div>
                </li>
                <li className="nav-item">
                    <NavLink to="/adminDashboard/website" className="nav-link">
                        <i className="mdi mdi-web menu-icon" />
                        <span className="menu-title">Website</span>
                    </NavLink>
                </li>
            </ul>
        </nav>
    );
}

export default Index;
