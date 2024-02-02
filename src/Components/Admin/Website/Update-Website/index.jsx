import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import Car from 'assets/svg/car-svgrepo-com.svg'
import Price from 'assets/svg/price-tag-offer-badge-svgrepo-com.svg'
import Phone from 'assets/svg/phone-svgrepo-com (1).svg'
import Day from 'assets/svg/day-calendar-svgrepo-com.svg'
import Time from 'assets/svg/time1-svgrepo-com.svg'
import FooterAdmin from 'Components/Admin/Footer'
import { fetchWebsite, fetchUpdateWebsite } from 'Apis'
import Swal from 'sweetalert2'
const Index = () => {
    const navigate = useNavigate();
    const [inputElement, setInputElement] = useState({
        nameCompany: "GEARVN TRADE CO., LTD",
        hotline: "0374216188",
        compound: [
            {
                location: 'Bắc Giang - Hà Nội',
                price: '200.000 VNĐ'
            },
            {
                location: 'Bắc Giang - Bắc Ninh',
                price: '150.000 VNĐ'
            },
            {
                location: 'Bắc Ninh - Hà Nội',
                price: '100.000 VNĐ'
            },
        ],
        lumpSum: [
            {
                location: 'Bắc Giang - Hà Nội',
                price: '500.000 VNĐ'
            },
            {
                location: 'Bắc Giang - Bắc Ninh',
                price: '550.000 VNĐ'
            },
            {
                location: 'Bắc Ninh - Hà Nội',
                price: '600.000 VNĐ'
            },
        ],
        service: {
            no_1: 'Tài xế tìm khách nhanh và dễ dàng.',
            no_2: 'Giá ghép chỉ có 200.000 VNĐ.',
            no_3: 'Giá bao xe 500.000 VNĐ trở lên tuỳ điểm.',
            no_4: 'Giá vận chuyển đồ 50.000 VNĐ.',
            no_5: '0912977981',
            no_6: 'Các ngày trong tuần.',
            no_7: 'Bắt đầu từ 5h đến 21h hằng ngày.',
            no_8: 'Đón và trả tận nơi.',
        },
    })

    useEffect(() => {
        fetchWebsite()
            .then(result => {
                setInputElement(result.data[0])
            })
            .catch(error => {
                console.log(error)
            })
    }, []);

    const handleAddRow = (row, e) => {
        const newData = {
            ...inputElement, [row]: [...inputElement[row], {
                location: '',
                price: ''
            }]
        }
        setInputElement(newData)
    }

    const handleChangePrice = (row, e, index) => {
        const { name, value } = e.target
        const newData = { ...inputElement }
        newData[row][index][name] = value
        setInputElement(newData)
    }
    const handleRemoveRow = (row, index) => {
        const newData = { ...inputElement }
        newData[row].splice(index, 1)
        setInputElement(newData)
    }

    const handleChangeService = (e) => {
        const { name, value } = e.target;
        setInputElement(prevState => ({
            ...prevState,
            service: {
                ...prevState.service,
                [name]: value
            }
        }));
    }

    const handleSubmit = () => {
        Swal.fire({
            title: 'Đang cập nhật!',
            html: 'Vui lòng chờ...',
            allowEscapeKey: false,
            allowOutsideClick: false,
            didOpen: () => {
                Swal.showLoading()
            }
        });
        fetchUpdateWebsite(inputElement)
            .then(result => {
                navigate(-1)
                Swal.close()
                Swal.fire({
                    title: 'Cập nhật thành công!',
                    icon: 'success',
                    confirmButtonText: 'OK!'
                })
            })
            .catch(error => {
                Swal.fire({
                    title: 'Cập nhật thất bại!',
                    text:'Kết nối đến server không ổn định',
                    icon: 'error',
                    confirmButtonText: 'OK!'
                })
                console.log(error)
            })
    }
    return (
        <div className="main-panel">
            <div className="content-wrapper">
                <div className="col-lg-12 grid-margin">
                    <div className="row" style={{ display: "flex", "flexDirection": "row", "alignItems": "center" }}>
                        <button onClick={() => navigate(-1)} type="button" className="col-lg-1 btn btn-outline-secondary btn-fw" style={{ "marginTop": 15 }}>Back</button>
                        <h3 className="col-lg-10 font-weight-bold" style={{ "marginTop": 15 }}>Website</h3>
                    </div>
                </div>
                <div className="grid-margin" style={{ display: "flex", "justifyContent": "center" }}>
                    <button onClick={handleSubmit} className="col-lg-2 btn btn-outline-secondary btn-fw">Lưu</button>
                </div>
                <div className="row">
                    <div className="col-lg-6">
                        <div className="col-md-12" style={{ "padding": 0 }}>
                            <div className="card" style={{ "marginBottom": "25px" }}>
                                <div className="card-body">
                                    <h4 className="card-title">Miêu tả</h4>
                                    <div className="form-group" style={{ display: 'flex', gap: 10, justifyContent: 'center' }}>
                                        <label><img src={Car} style={{ width: 40 }} alt='' /></label>
                                        <input type="text" name='no_1' onChange={e => handleChangeService(e)} className="form-control form-control-sm" placeholder="Tên công ty" aria-label="Tên công ty" value={inputElement.service.no_1} />
                                    </div>
                                    <div className="form-group" style={{ display: 'flex', gap: 10, justifyContent: 'center' }}>
                                        <label><img src={Price} style={{ width: 40 }} alt='' /></label>
                                        <input type="text" name='no_2' onChange={e => handleChangeService(e)} className="form-control form-control-sm" placeholder="Email công ty" aria-label="Email công ty" value={inputElement.service.no_2} />
                                    </div>
                                    <div className="form-group" style={{ display: 'flex', gap: 10, justifyContent: 'center' }}>
                                        <label><img src={Price} style={{ width: 40 }} alt='' /></label>
                                        <input type="text" name='no_3' onChange={e => handleChangeService(e)} className="form-control form-control-sm" placeholder="Gọi mua hàng" aria-label="Gọi mua hàng" value={inputElement.service.no_3} />
                                    </div>
                                    <div className="form-group" style={{ display: 'flex', gap: 10, justifyContent: 'center' }}>
                                        <label><img src={Price} style={{ width: 40 }} alt='' /></label>
                                        <input type="text" name='no_4' onChange={e => handleChangeService(e)} className="form-control form-control-sm" placeholder="Hỗ trợ khách hàng" aria-label="Hỗ trợ khách hàng" value={inputElement.service.no_4} />
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="col-lg-6 stretch-card">
                        <div className="col-md-12" style={{ "padding": 0 }}>
                            <div className="card" style={{ "marginBottom": "25px" }}>
                                <div className="card-body">
                                    <h4 className="card-title">Thông tin</h4>
                                    <div className="form-group" style={{ display: 'flex', gap: 10, justifyContent: 'center' }}>
                                        <label><img src={Phone} style={{ width: 40 }} alt='' /></label>
                                        <input type="text" name='no_5' onChange={e => handleChangeService(e)} className="form-control form-control-sm" placeholder="Tên công ty" aria-label="Tên công ty" value={inputElement.service.no_5} />
                                    </div>
                                    <div className="form-group" style={{ display: 'flex', gap: 10, justifyContent: 'center' }}>
                                        <label><img src={Day} style={{ width: 40 }} alt='' /></label>
                                        <input type="text" name='no_6' onChange={e => handleChangeService(e)} className="form-control form-control-sm" placeholder="Email công ty" aria-label="Email công ty" value={inputElement.service.no_6} />
                                    </div>
                                    <div className="form-group" style={{ display: 'flex', gap: 10, justifyContent: 'center' }}>
                                        <label><img src={Time} style={{ width: 40 }} alt='' /></label>
                                        <input type="text" name='no_7' onChange={e => handleChangeService(e)} className="form-control form-control-sm" placeholder="Gọi mua hàng" aria-label="Gọi mua hàng" value={inputElement.service.no_7} />
                                    </div>
                                    <div className="form-group" style={{ display: 'flex', gap: 10, justifyContent: 'center' }}>
                                        <label><img src={Car} style={{ width: 40 }} alt='' /></label>
                                        <input type="text" name='no_8' onChange={e => handleChangeService(e)} className="form-control form-control-sm" placeholder="Hỗ trợ khách hàng" aria-label="Hỗ trợ khách hàng" value={inputElement.service.no_8} />
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="col-lg-6">
                        <div className="col-md-12" style={{ "padding": 0 }}>
                            <div className="card" style={{ "marginBottom": "25px" }}>
                                <div className="card-body">
                                    <h4 className="card-title">Bảng giá xe ghép</h4>
                                    {inputElement.compound.map((item, index) => {
                                        return <div className="form-group" key={index} style={{ display: 'flex', gap: 10, justifyContent: 'center', alignItems: 'flex-end' }}>
                                            <div style={{ width: '-webkit-fill-available' }}>
                                                <label>Địa điểm</label>
                                                <input type="text" onChange={(e) => handleChangePrice('compound', e, index)} name='location' className="form-control form-control-sm" placeholder="Tên công ty" aria-label="Tên công ty" value={item.location} />
                                            </div>
                                            <div style={{ width: '-webkit-fill-available' }}>
                                                <label>Giá</label>
                                                <input type="text" onChange={(e) => handleChangePrice('compound', e, index)} name='price' className="form-control form-control-sm" placeholder="Tên công ty" aria-label="Tên công ty" value={item.price} />
                                            </div>
                                            <button className="btn btn-outline-secondary btn-fw" onClick={() => handleRemoveRow('compound', index)}>Xoá</button>
                                        </div>
                                    })}
                                    <button className="btn btn-outline-secondary btn-fw" onClick={() => handleAddRow('compound')}>Thêm</button>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="col-lg-6">
                        <div className="col-md-12" style={{ "padding": 0 }}>
                            <div className="card" style={{ "marginBottom": "25px" }}>
                                <div className="card-body">
                                    <h4 className="card-title">Bảng giá bao xe</h4>
                                    {inputElement.lumpSum.map((item, index) => {
                                        return (
                                            <div className="form-group" key={index} style={{ display: 'flex', gap: 10, justifyContent: 'center', alignItems: 'flex-end' }}>
                                                <div style={{ width: '-webkit-fill-available' }}>
                                                    <label>Địa điểm</label>
                                                    <input type="text" onChange={(e) => handleChangePrice('lumpSum', e, index)} name='location' className="form-control form-control-sm" placeholder="Tên công ty" aria-label="Tên công ty" value={item.location} />
                                                </div>
                                                <div style={{ width: '-webkit-fill-available' }}>
                                                    <label>Giá</label>
                                                    <input type="text" onChange={(e) => handleChangePrice('lumpSum', e, index)} name='price' className="form-control form-control-sm" placeholder="Tên công ty" aria-label="Tên công ty" value={item.price} />
                                                </div>
                                                <button className="btn btn-outline-secondary btn-fw" onClick={() => handleRemoveRow('lumpSum', index)}>Xoá</button>
                                            </div>
                                        );
                                    })}
                                    <button className="btn btn-outline-secondary btn-fw" onClick={() => handleAddRow('lumpSum')}>Thêm</button>
                                </div>

                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <FooterAdmin />
        </div>
    );
}

export default Index;
