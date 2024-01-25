import React, { useState, useEffect } from 'react';
import { fetchListOfUser, fetchUpdateUser, fetchSearchUser, fetchInformationBlackListUser, fetchBlackListUser } from 'Apis'
// import { StateContext } from 'components/Context'
// import Footer from "components/Footer"
// import NoAuth from 'components/Error/No-Auth'
// import Chart from 'components/Orders/Chart'
import Swal from 'sweetalert2'
import FooterAdmin from 'Components/Admin/Footer'
const Index = () => {
    const optionSelect = ["Hoạt động", "Khoá"]
    const [userList, setUserList] = useState([])
    const [countPage, setCountPage] = useState(1)
    const [countMaxPage, setCountMaxPage] = useState(1)
    const [loading, setLoading] = useState(true)
    const [searchTimeout, setSearchTimeout] = useState(null);
    const [inputFocused, setInputFocused] = useState(false);
    const [searchUser, setSearchUser] = useState({ phoneNumber: "", status: "" })
    const [error, setError] = useState(null)
    const statusList = [
        "Hoạt động", "Khoá"
    ];
    useEffect(() => {
        fetchListOfUser(1)
            .then(result => {
                // state.setAuthentication(result.role)
                setUserList(result.data)
                setLoading(false)
                if (0 < result.total % 10 && result.total % 10 < 10) {
                    setCountMaxPage(Math.floor(result.total / 10) + 1)
                } else if (result.total === 0) {
                    setCountMaxPage(1)
                }
                else {
                    setCountMaxPage(Math.floor(result.total / 10))
                }
            })
            .catch(error => {
                // if (error.response.data.message === "You do not have sufficient permissions to perform this function") {
                //     state.setAuthentication(state.authentication ? state.authentication : null)
                // }
                console.log(error)
                setError(error.response.status)
                setLoading(false)
            })
    }, []);
    const handleSetPage = (count) => {
        setUserList()
        setCountPage(count)
        fetchSearchUser(searchUser, count)
            .then(result => {
                console.log(result.data)
                setUserList(result.data)
                setLoading(false)
            })
            .catch(error => {
                console.log(error)
                setError(error.response.status)
                setLoading(false)
            })
    }

    const handleChangeStatus = (user, statusUser) => {
        Swal.fire({
            title: 'Bạn thực sự muốn cập nhật trạng thái này?',
            icon: 'question',
            showCancelButton: true,
            confirmButtonText: 'Đồng ý',
            cancelButtonText: 'Từ chối',
        })
            .then((result) => {
                if (result.isConfirmed) {
                    const data = { ...user, status: statusUser === 'Khoá' ? false : true }
                    fetchUpdateUser(user.phoneNumber, data)
                        .then(result => {
                            const updatedOrderList = userList.map((item) =>
                                item.phoneNumber === data.phoneNumber ? { ...item, status: data.status } : item
                            );
                            setUserList(updatedOrderList)
                            Swal.fire({
                                title: 'Cập nhật thành công',
                                icon: 'success',
                                confirmButtonText: 'OK!'
                            });
                        })
                        .catch(error => {
                            Swal.fire({
                                title: 'Cập nhật thất bại',
                                icon: 'error',
                                confirmButtonText: 'OK!'
                            });
                            console.log(error)
                        })
                }
            })

    }
    const handleAddBlackList = (user) => {
        fetchInformationBlackListUser(user.phoneNumber)
            .then(result => {
                if (result.message === "Not found account user") {
                    Swal.fire({
                        title: 'Bạn muốn chuyển người dùng này vào danh sách đen?',
                        icon: 'question',
                        showCancelButton: true,
                        confirmButtonText: 'Đồng ý',
                        cancelButtonText: 'Từ chối',
                    })
                        .then((result) => {
                            if (result.isConfirmed) {
                                fetchBlackListUser({ phoneNumber: user.phoneNumber })
                                    .then(result => {
                                        if (result === 'Phone number already exists') {
                                            Swal.fire({
                                                title: 'Số điện thoại này thuộc danh sách đen',
                                                icon: 'warning',
                                                confirmButtonText: 'OK!'
                                            });
                                        }
                                        else {
                                            Swal.fire({
                                                title: 'Chuyển số điện thoại vào danh sách đen thành công',
                                                icon: 'success',
                                                confirmButtonText: 'OK!'
                                            });
                                        }
                                    })
                                    .catch(error => {
                                        console.log(error)
                                    })
                            }
                        })
                } else {
                    Swal.fire({
                        title: 'Số điện thoại này thuộc danh sách đen',
                        icon: 'warning',
                        confirmButtonText: 'OK!'
                    });
                }
            })
            .catch(error => {
                console.log(error)
            })

    }
    const handleSearchOrder = (e) => {
        const { name, value } = e.target
        setUserList()
        if (searchTimeout) {
            clearTimeout(searchTimeout);
        }

        if (inputFocused) {
            const timeoutId = setTimeout(() => {
                setSearchUser({ ...searchUser, [name]: value })
                fetchSearchUser({ ...searchUser, [name]: value }, 1)
                    .then((result) => {
                        
                        setUserList(result.data);
                        if (0 < result.total % 10 && result.total % 10 < 10) {
                            setCountMaxPage(Math.floor(result.total / 10) + 1);
                        } else if (result.total === 0) {
                            setCountMaxPage(1);
                        } else {
                            setCountMaxPage(Math.floor(result.total / 10));
                        }
                    })
                    .catch((error) => {
                        Swal.fire({
                            title: "Ops!",
                            text: "Error connect to server!",
                            icon: 'error',
                            confirmButtonText: 'OK!'
                        })
                        console.log(error);
                    });
            }, 1000);

            setSearchTimeout(timeoutId);
        }
    }
    return (
        <div className="main-panel">
            <div className="content-wrapper">
                {loading === false ?
                    <div className="col-lg-12 grid-margin stretch-card">
                        <div className="card">
                            <div className="card-body">
                                <h4 className="card-title">Danh sách khách hàng</h4>
                                <div className='row' style={{ display: "flex", "justifyContent": "flex-end" }}>
                                    <div className='col-lg-6' style={{ display: "flex", "flexDirection": "row", "alignItems": "center", "paddingBottom": "15px", "justifyContent": "end" }}>
                                        <p className="card-description" style={{ margin: "0" }}>
                                            Tìm kiếm :
                                        </p>
                                    </div>
                                    <ul className="col-lg-3 navbar-nav" style={{ "paddingBottom": "15px", "paddingLeft": "15px" }}>
                                        <input name='phoneNumber' onChange={e => handleSearchOrder(e)} style={{ borderRadius: "15px" }} type="text" className="form-control" placeholder="Số điện thoại" aria-label="Số điện thoại" />
                                    </ul>
                                    <ul className="col-lg-3 navbar-nav" style={{ "paddingBottom": "15px", "paddingLeft": "15px" }}>
                                        <li className="nav-item nav-search d-lg-block">
                                            <div className="input-group">
                                            <select name='status' style={{ borderRadius: "15px" }} onChange={e => handleSearchOrder(e)} type="text" className="form-control" id="navbar-search-input" placeholder="Search now" aria-label="search" aria-describedby="search" >
                                                    <option value=''>Tất cả</option>\
                                                    {optionSelect.map((item, index) => {
                                                        return <option key={index} value={item === "Hoạt động" ? true: false}>{item}</option>
                                                    })}
                                                </select>
                                            </div>
                                        </li>
                                    </ul>
                                </div>
                                {userList ? <>
                                    <div className="table-responsive" style={{ paddingBottom: 30 }}>
                                        <table className="table table-hover">
                                            <thead>
                                                <tr>
                                                    <th>
                                                        Họ và Tên
                                                    </th>
                                                    <th>
                                                        Số điện thoại
                                                    </th>
                                                    <th>
                                                        Tổng đơn hàng
                                                    </th>
                                                    <th>
                                                        Ngày tham gia{searchUser.sortDate === 'asc' ?
                                                            <i className="mdi mdi-arrow-up" style={{ cursor: "pointer" }} />
                                                            :
                                                            <i className="mdi mdi-arrow-down" style={{ cursor: "pointer" }} />}
                                                    </th>
                                                    <th>
                                                        Trạng thái
                                                    </th>
                                                </tr>
                                            </thead>
                                            <tbody>
                                                {userList && userList.map((item, index) => {
                                                    return <tr className="table" key={index}>
                                                        <td>{item.username}</td>
                                                        <td className="table-cell-container">
                                                            <span className="phone-number">{item.phoneNumber}</span>
                                                            <i onClick={() => handleAddBlackList(item)} className="mdi mdi-alert-circle-outline alert-icon" style={{ cursor: "pointer", fontSize: '16px' }} />
                                                        </td>
                                                        <td style={{ whiteSpace: 'wrap', width: 250 }}>
                                                            {item.totalOrder}
                                                        </td>
                                                        <td>
                                                            {item.createDate.time} &nbsp; {item.createDate.date}
                                                        </td>
                                                        <td>
                                                            <div className="status-dropdown">
                                                                <select name='status' value={item.status === true ? 'Hoạt động' : 'Khoá'} onChange={e => handleChangeStatus(item, e.target.value)} style={{ borderRadius: "15px" }} type="text" className={item.status === false ? "form-control badge-danger" : "form-control badge-success"} id="navbar-search-input" placeholder="Search now" aria-label="search" aria-describedby="search" >
                                                                    {statusList.map((i, ind) => {
                                                                        let isDuplicate = false;
                                                                        for (let j = 0; j < ind; j++) {
                                                                            if (statusList[j] === i) {
                                                                                isDuplicate = true
                                                                                break
                                                                            }
                                                                        }
                                                                        if (!isDuplicate) {
                                                                            return (
                                                                                <option key={ind} value={i}>
                                                                                    {i}
                                                                                </option>
                                                                            )
                                                                        }
                                                                        return null
                                                                    })}
                                                                </select>
                                                            </div>
                                                        </td>
                                                    </tr>
                                                })}
                                            </tbody>
                                        </table>
                                    </div>
                                    <div className="btn-group" style={{ "display": "flex", "justifyContent": "center", "width": "fit-content", "margin": "auto" }} role="group" aria-label="Basic example">
                                        {countPage > 1 && <button type="button" onClick={() => handleSetPage(1)} className="btn btn-outline-secondary">1</button>}
                                        {countPage > 3 && <input type="text" className="btn btn-outline-secondary input-as-button" placeholder='...' />}
                                        {countPage - 1 > 1 && <button type="button" onClick={() => handleSetPage(countPage - 1)} className="btn btn-outline-secondary">{countPage - 1}</button>}
                                        <button type="button" className="btn btn-outline-secondary active">{countPage}</button>
                                        {countPage + 1 < countMaxPage && <button type="button" onClick={() => handleSetPage(countPage + 1)} className="btn btn-outline-secondary">{countPage + 1}</button>}
                                        {countMaxPage - countPage > 2 && <input type="text" className="btn btn-outline-secondary input-as-button" placeholder='...' />}
                                        {countPage !== countMaxPage && <button type="button" onClick={() => handleSetPage(countMaxPage)} className="btn btn-outline-secondary">{countMaxPage}</button>}
                                    </div>
                                </>
                                    :
                                    <>
                                        <style dangerouslySetInnerHTML={{
                                            __html: "\n.loader {\n  border: 16px solid #f3f3f3;\n  border-radius: 50%;\n  border-top: 16px solid #3498db;\n  margin: 0 auto;\n  width: 120px;\n  height: 120px;\n  -webkit-animation: spin 2s linear infinite; /* Safari */\n  animation: spin 2s linear infinite;\n}\n\n/* Safari */\n@-webkit-keyframes spin {\n  0% { -webkit-transform: rotate(0deg); }\n  100% { -webkit-transform: rotate(360deg); }\n}\n\n@keyframes spin {\n  0% { transform: rotate(0deg); }\n  100% { transform: rotate(360deg); }\n}\n"
                                        }} />
                                        <div className="loader" />
                                    </>
                                }
                            </div>
                        </div>
                    </div>
                    :
                    <>
                        <style dangerouslySetInnerHTML={{
                            __html: "\n.loader {\n  border: 16px solid #f3f3f3;\n  border-radius: 50%;\n  border-top: 16px solid #3498db;\n  margin: 0 auto;\n  width: 120px;\n  height: 120px;\n  -webkit-animation: spin 2s linear infinite; /* Safari */\n  animation: spin 2s linear infinite;\n}\n\n/* Safari */\n@-webkit-keyframes spin {\n  0% { -webkit-transform: rotate(0deg); }\n  100% { -webkit-transform: rotate(360deg); }\n}\n\n@keyframes spin {\n  0% { transform: rotate(0deg); }\n  100% { transform: rotate(360deg); }\n}\n"
                        }} />
                        <div className="loader" />
                    </>
                }
            </div>
            <FooterAdmin />
        </div>
    );
}

export default Index;