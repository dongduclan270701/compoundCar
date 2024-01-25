import React, { useState, useEffect } from 'react';
import {
    fetchListOfOrder,
    fetchUpdateOrder,
    fetchSearchOrder,
    fetchBlackListUser,
    fetchInformationBlackListUser
} from 'Apis'
// import { StateContext } from 'components/Context'
import FooterAdmin from 'Components/Admin/Footer'
// import NoAuth from 'components/Error/No-Auth'
import {useLocation} from 'react-router-dom'
import Swal from 'sweetalert2'
const Index = () => {
    const location = useLocation();
    const queryParams = new URLSearchParams(location.search);
    const params = queryParams.get('phoneNumber');
    const optionSelect = ["Chờ xác nhận", "Đã xác nhận", "Thành công", "Thất bại"]
    const [orderList, setOrderList] = useState([])
    const [countPage, setCountPage] = useState(1)
    const [countMaxPage, setCountMaxPage] = useState(1)
    const [loading, setLoading] = useState(true)
    const [searchTimeout, setSearchTimeout] = useState(null);
    const [inputFocused, setInputFocused] = useState(false);
    const [searchOrder, setSearchOrder] = useState({ phoneNumber: params?params:"", status: "" })
    const [error, setError] = useState(null)
    const statusList = [
        "Chờ xác nhận", "Đã xác nhận", "Thành công", "Thất bại"
    ];
    useEffect(() => {
        setSearchOrder({ phoneNumber: params?params:"", status: "" })
        fetchSearchOrder({ phoneNumber: params?params:"", status: "" }, 1)
            .then(result => {
                // state.setAuthentication(result.role)
                setOrderList(result.data)
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
    }, [params]);
    const handleSetPage = (count) => {
        setOrderList()
        setCountPage(count)
        fetchSearchOrder(searchOrder, count)
            .then(result => {
                setOrderList(result.data)
                setLoading(false)
            })
            .catch(error => {
                console.log(error)
                setError(error.response.status)
                setLoading(false)
            })
    }

    const handleChangeStatus = (order, status) => {
        Swal.fire({
            title: 'Bạn muốn cập nhật trạng thái đơn hàng này?',
            icon: 'question',
            showCancelButton: true,
            confirmButtonText: 'Đồng ý',
            cancelButtonText: 'Từ chối',
        })
            .then((result) => {
                if (result.isConfirmed) {
                    const data = { ...order, status }
                    fetchUpdateOrder(data.orderId, data)
                        .then(result => {
                            const updatedOrderList = orderList.map((item) =>
                                item.orderId === data.orderId ? { ...item, status: data.status } : item
                            );
                            setOrderList(updatedOrderList)
                            Swal.fire({
                                title: 'Cập nhật đơn thành công',
                                text: `Đơn đã chuyển sang ${status}`,
                                icon: 'success',
                                confirmButtonText: 'OK!'
                            });
                        })
                        .catch(error => {
                            Swal.fire({
                                title: 'Cập nhật đơn thất bại',
                                text: `Đơn đã chuyển sang ${status}`,
                                icon: 'error',
                                confirmButtonText: 'OK!'
                            });
                            console.log(error)
                        })
                }
            })

    }

    const handleSearchOrder = (e) => {
        const { name, value } = e.target
        setSearchOrder({ ...searchOrder, [name]: value })
        setOrderList()
        if (searchTimeout) {
            clearTimeout(searchTimeout);
        }
        if (inputFocused) {
            const timeoutId = setTimeout(() => {
                fetchSearchOrder({ ...searchOrder, [name]: value }, 1)
                    .then((result) => {
                        setOrderList(result.data);
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

    const handleAddBlackListUser = (user) => {
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

    return (
        <div className="main-panel">
            <div className="content-wrapper">
                {loading === false ?
                    <div className="col-lg-12 grid-margin stretch-card">
                        <div className="card">
                            <div className="card-body">
                                <h4 className="card-title">Danh sách đơn hàng</h4>
                                <div className='row' style={{ display: "flex", "justifyContent": "flex-end" }}>
                                    <div className='col-lg-6' style={{ display: "flex", "flexDirection": "row", "alignItems": "center", "paddingBottom": "15px", "justifyContent": "end" }}>
                                        <p className="card-description" style={{ margin: "0" }}>
                                            Tìm kiếm :
                                        </p>
                                    </div>
                                    <ul className="col-lg-3 navbar-nav" style={{ "paddingBottom": "15px", "paddingLeft": "15px" }}>
                                        <input name='phoneNumber' value={searchOrder.phoneNumber} onChange={(e) => handleSearchOrder(e)} nBlur={() => setInputFocused(false)} onFocus={() => setInputFocused(true)} style={{ borderRadius: "15px" }} type="text" className="form-control" placeholder="Số điện thoại" aria-label="Số điện thoại" />
                                    </ul>
                                    <ul className="col-lg-3 navbar-nav" style={{ "paddingBottom": "15px", "paddingLeft": "15px" }}>
                                        <li className="nav-item nav-search d-lg-block">
                                            <div className="input-group">
                                                <select name='status' onChange={(e) => handleSearchOrder(e)} style={{ borderRadius: "15px" }} nBlur={() => setInputFocused(false)} onFocus={() => setInputFocused(true)} type="text" className="form-control" id="navbar-search-input" placeholder="Search now" aria-label="search" aria-describedby="search" >
                                                    <option value=''>Tất cả</option>\
                                                    {optionSelect.map((item, index) => {
                                                        return <option key={index} value={item}>{item}</option>
                                                    })}
                                                </select>
                                            </div>
                                        </li>
                                    </ul>
                                </div>
                                {orderList ? <>
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
                                                        Địa điểm đón
                                                    </th>
                                                    <th>
                                                        Địa điểm đến
                                                    </th>
                                                    <th>
                                                        Ghi chú&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
                                                    </th>
                                                    <th>
                                                        Ngày tạo
                                                    </th>
                                                    <th>
                                                        Trạng thái
                                                    </th>
                                                </tr>
                                            </thead>
                                            <tbody>
                                                {orderList && orderList.map((item, index) => {
                                                    return <tr className="table" key={index}>
                                                        <td>{item.username}</td>
                                                        <td className="table-cell-container">
                                                            <span className="phone-number">{item.phoneNumber}</span>
                                                            <i onClick={() => handleAddBlackListUser(item)} className="mdi mdi-alert-circle-outline alert-icon" style={{ cursor: "pointer", fontSize: '16px' }} />
                                                        </td>
                                                        <td style={{ whiteSpace: 'wrap', width: 250 }}>
                                                            {item.pick_up_location}
                                                        </td>
                                                        <td style={{ whiteSpace: 'wrap', width: 250 }}>
                                                            {item.destination}
                                                        </td>
                                                        <td style={{ whiteSpace: 'wrap', width: 250 }}>
                                                            {item.destination}
                                                        </td>
                                                        <td>
                                                            {item.createDate.time} &nbsp; {item.createDate.date}
                                                        </td>
                                                        <td>
                                                            <div className="status-dropdown">
                                                                <select name='status' value={item.status} onChange={e => handleChangeStatus(item, e.target.value)} style={{ borderRadius: "15px" }} nBlur={() => setInputFocused(false)} onFocus={() => setInputFocused(true)} type="text" className={item.status === 'Thất bại' ? "form-control badge-danger" : item.status === 'Thành công' ? "form-control badge-success" : item.status === 'Đã xác nhận' ? "form-control badge-process" : "form-control badge-warning"} id="navbar-search-input" placeholder="Search now" aria-label="search" aria-describedby="search" >
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