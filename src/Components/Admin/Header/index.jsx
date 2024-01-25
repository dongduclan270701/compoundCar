import React, { useState, useEffect } from 'react';
import logo from 'assets/svg/car-white-svgrepo-com.svg'
import logoMini from 'assets/svg/car-white-svgrepo-com.svg'
import faceUser from "assets/images/face2.jpg"
import { NavLink } from 'react-router-dom'
import {fetchListOfNotice} from 'Apis'

const Index = (props) => {
    const { getChooseSettingThemePages, isChooseShowIcons, onHandleGetSettingChooseShowIconOnly, isShowSideBarRes, onHandleGetShowSideBarRes } = props
    const [chooseNotifications, setChooseNotifications] = useState(false)
    const [chooseSettingUser, setChooseSettingUser] = useState(false)
    const [listNotice, setListNotice] = useState(null)
    const handleLogout = () => {
        localStorage.removeItem("auth-token-admin");
        window.location.reload();
    }
    useEffect(() => {
        fetchListOfNotice()
            .then(result => {
                setListNotice(result)
            })
            .catch(error => {
                console.log(error)
            })
    }, []);

    const handleReadNotice = (id, isReadAdmin) => {

    }

    return (
        <nav className={"navbar col-lg-12 col-12 p-0 fixed-top d-flex flex-row " + getChooseSettingThemePages}>
            <div className="text-center navbar-brand-wrapper d-flex align-items-center justify-content-center">
                <a className="navbar-brand brand-logo" href="index.html"><img src={logo} className="mr-2" style={{ filter: 'drop-shadow(2px 4px 6px black)' }} alt="logo" /></a>
                <a className="navbar-brand brand-logo-mini" href="index.html"><img src={logoMini} style={{ filter: 'drop-shadow(2px 4px 6px black)' }} alt="logo" /></a>
            </div>
            <div className="navbar-menu-wrapper d-flex align-items-center justify-content-end">
                <button onClick={() => onHandleGetSettingChooseShowIconOnly(!isChooseShowIcons)} className="navbar-toggler navbar-toggler align-self-center" type="button" data-toggle="minimize">
                    <span className="icon-menu" />
                </button>
                <ul className="navbar-nav navbar-nav-right">
                    <li className="nav-item dropdown">
                        <span className="nav-link count-indicator dropdown-toggle" id="notificationDropdown" data-toggle="dropdown" aria-expanded={chooseNotifications}>
                            <i className="icon-bell mx-0" />
                            <span className="count" />
                        </span>
                        <div className="dropdown-menu dropdown-menu-right navbar-dropdown preview-list" aria-labelledby="notificationDropdown">
                            <p className="mb-0 font-weight-normal float-left dropdown-header">Notifications</p>
                            {listNotice && listNotice.map((item, index) => {
                                return <NavLink to={'/adminDashboard/orders?phoneNumber=' + item.phoneNumber} key={index} style={{ textDecoration: 'none' }}>
                                    <span onClick={() => handleReadNotice(item._id, item.isReadAdmin)} style={{ width: 340 }} key={index} className={item.isReadAdmin ? "dropdown-item preview-item" : "dropdown-item preview-item isRead"}>
                                        <div className="preview-thumbnail">
                                            <img src={logoMini} alt='' />
                                        </div>
                                        <div className="preview-item-content">
                                            <h6 className="preview-subject font-weight-normal">{item.status}</h6>
                                            <p className="font-weight-light small-text mb-0 text-muted">
                                                {item.content}
                                            </p>
                                            <p className="font-weight-light small-text mb-0 text-muted">
                                                {item.createDate.time} {item.createDate.date}
                                            </p>
                                        </div>
                                    </span>
                                </NavLink>
                            })
                            }
                        </div>
                    </li>
                    <li className='nav-item nav-profile dropdown'>
                        <span className="nav-link dropdown-toggle" data-toggle="dropdown" id="profileDropdown">
                            <img src={faceUser} alt="profile" />
                        </span>
                        <div className={chooseSettingUser ? "dropdown-menu dropdown-menu-right navbar-dropdown show" : "dropdown-menu dropdown-menu-right navbar-dropdown"} aria-labelledby="profileDropdown">
                            <span className="dropdown-item">
                                <i className="ti-settings text-primary" />
                                Settings
                            </span>
                            <span onClick={handleLogout} className="dropdown-item">
                                <i className="ti-power-off text-primary" />
                                Logout
                            </span>
                        </div>
                    </li>
                    <li className="nav-item nav-settings d-none d-lg-flex">
                        <span className="nav-link" href="#">
                            <i className="icon-ellipsis" />
                        </span>
                    </li>
                </ul>
                <button className="navbar-toggler navbar-toggler-right d-lg-none align-self-center" type="button" data-toggle="offcanvas">
                    <span className="icon-menu" onClick={() => onHandleGetShowSideBarRes(!isShowSideBarRes)} />
                </button>
            </div>
        </nav>
    );
}

export default Index;
