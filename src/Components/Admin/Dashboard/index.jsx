import React, { useState, useEffect } from 'react'
import { NavLink, useNavigate } from 'react-router-dom'
import Car from 'assets/svg/car-svgrepo-com.svg'
import Price from 'assets/svg/price-tag-offer-badge-svgrepo-com.svg'
import Phone from 'assets/svg/phone-svgrepo-com (1).svg'
import Day from 'assets/svg/day-calendar-svgrepo-com.svg'
import Time from 'assets/svg/time1-svgrepo-com.svg'
import FooterAdmin from 'Components/Admin/Footer'
import { fetchWebsite } from 'Apis'
const Index = () => {
    const navigate = useNavigate();
    const [inputElement, setInputElement] = useState({
        hotline: "0374216188",
        gmail: 'XXX@gmail.com',
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
            no_5: '0374216188',
            no_6: 'Các ngày trong tuần.',
            no_7: 'Bắt đầu từ 5h đến 21h hằng ngày.',
            no_8: 'Đón và trả tận nơi.',
        },
    })

    useEffect(() => {
        fetchWebsite()
            .then(result => {
                console.log(result.data[0])
                setInputElement(result.data[0])
            })
            .catch(error => {
                console.log(error)
            })
    }, []);

    return (
        <div className="main-panel">
            <div className="content-wrapper">
                <div className="col-lg-12 grid-margin">
                    <div className="row">
                        <div className="col-md-12 grid-margin">
                            <div className="row">
                                <div className="col-12 col-xl-8 mb-4 mb-xl-0">
                                    <h3 className="font-weight-bold">Chào đừng đến với website quản lý xe ghép bắc giang - bắc ninh - hà nội </h3>
                                    <h6 className="font-weight-normal mb-0">Hãy lựa chọn các danh mục ở menu!</h6>
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
