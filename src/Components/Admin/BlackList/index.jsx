import React, { useState, useEffect } from 'react';
import { fetchListOfBlackListUser, fetchUpdateBlackListUser, fetchSearchBlackListUser } from 'Apis'
// import { StateContext } from 'components/Context'
// import Footer from "components/Footer"
// import NoAuth from 'components/Error/No-Auth'
// import Chart from 'components/Orders/Chart'
import Swal from 'sweetalert2'
import FooterAdmin from 'Components/Admin/Footer'
const Index = () => {
    const [userList, setUserList] = useState([])
    const [countPage, setCountPage] = useState(1)
    const [countMaxPage, setCountMaxPage] = useState(1)
    const [loading, setLoading] = useState(true)
    const [searchTimeout, setSearchTimeout] = useState(null);
    const [inputFocused, setInputFocused] = useState(false);
    const [searchBlackList, setSearchBlackList] = useState({ phoneNumber: "" })
    const [error, setError] = useState(null)
    useEffect(() => {
        fetchListOfBlackListUser(1)
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
        fetchSearchBlackListUser(searchBlackList, count)
            .then(result => {
                setUserList(result.data)
                setLoading(false)
            })
            .catch(error => {
                console.log(error)
                setError(error.response.status)
                setLoading(false)
            })
    }

    const handleAddBlackList = (user) => {
        Swal.fire({
            title: 'Bạn muốn chuyển người dùng này ra khỏi danh sách đen?',
            icon: 'question',
            showCancelButton: true,
            confirmButtonText: 'Đồng ý',
            cancelButtonText: 'Từ chối',
        })
            .then((result) => {
                if (result.isConfirmed) {
                    Swal.fire({
                        title: 'Đang cập nhật!',
                        html: 'Vui lòng chờ...',
                        allowEscapeKey: false,
                        allowOutsideClick: false,
                        didOpen: () => {
                            Swal.showLoading()
                        }
                    });
                    
                    fetchUpdateBlackListUser(user.phoneNumber, user)
                        .then(result => {
                            const filteredArray = userList.filter(item => item.phoneNumber !== user.phoneNumber);
                            setUserList(filteredArray)
                            Swal.close()
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
    const handleSearchOrder = (e) => {
        const { name, value } = e.target
        setUserList()
        if (searchTimeout) {
            clearTimeout(searchTimeout);
        }

        if (inputFocused) {
            const timeoutId = setTimeout(() => {
                setSearchBlackList({ ...searchBlackList, [name]: value })
                fetchSearchBlackListUser({ ...searchBlackList, [name]: value }, 1)
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
                                <h4 className="card-title">Danh sách đen</h4>
                                <div className='row' style={{ display: "flex", "justifyContent": "flex-end" }}>
                                    <div className='col-lg-9' style={{ display: "flex", "flexDirection": "row", "alignItems": "center", "paddingBottom": "15px", "justifyContent": "end" }}>
                                        <p className="card-description" style={{ margin: "0" }}>
                                            Tìm kiếm :
                                        </p>
                                    </div>
                                    <ul className="col-lg-3 navbar-nav" style={{ "paddingBottom": "15px", "paddingLeft": "15px" }}>
                                        <input name='phoneNumber' onChange={e => handleSearchOrder(e)} nBlur={() => setInputFocused(false)} onFocus={() => setInputFocused(true)} style={{ borderRadius: "15px" }} type="text" className="form-control" placeholder="Số điện thoại" aria-label="Số điện thoại" />
                                    </ul>
                                </div>
                                {userList ? <>
                                    <div className="table-responsive" style={{ paddingBottom: 30 }}>
                                        <table className="table table-hover">
                                            <thead>
                                                <tr>
                                                    <th>
                                                        Số điện thoại
                                                    </th>
                                                </tr>
                                            </thead>
                                            <tbody>
                                                {userList && userList.map((item, index) => {
                                                    return <tr className="table" key={index}>
                                                        <td className="table-cell-container">
                                                            <span className="phone-number">{item.phoneNumber}</span>
                                                            <i onClick={() => handleAddBlackList(item)} className="mdi mdi-alert-circle-outline alert-icon" style={{ cursor: "pointer", fontSize: '16px' }} />
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