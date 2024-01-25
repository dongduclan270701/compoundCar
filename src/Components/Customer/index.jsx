import React, { useState, useEffect, memo } from 'react';
import Banner from 'Components/Customer/Banner'
import Location from 'Components/Customer/Location'
import Services from 'Components/Customer/Services'
import Prices from 'Components/Customer/Prices'
import Cars from 'Components/Customer/Cars'
import Feedbacks from 'Components/Customer/Feedbacks'
import Booking from 'Components/Customer/Booking'
import Quanlity from 'Components/Customer/Quanlity'
import Trevor from 'Components/Customer/Trevor'
import Image1 from 'assets/images/face2.jpg'
import Image2 from 'assets/images/face4.jpg'
import Image3 from 'assets/images/face19.jpg'
import Image4 from 'assets/images/face23.jpg'
import { fetchPostIP } from 'Apis'
const Index = () => {
    const [prices, setPrices] = useState([
        {
            title: 'BẢNG GIÁ XE GHÉP BẮC GIANG - BẮC NINH - HÀ NỘI',
            content: [
                {
                    location: 'Bắc Giang - Hà Nội',
                    price: '200.000 VNĐ'
                },
                {
                    location: 'Bắc Giang - Hà Nội',
                    price: '200.000 VNĐ'
                },
                {
                    location: 'Bắc Giang - Hà Nội',
                    price: '200.000 VNĐ'
                },
                {
                    location: 'Bắc Giang - Hà Nội',
                    price: '200.000 VNĐ'
                },

            ]
        },
        {
            title: 'BẢNG GIÁ BAO XE BẮC GIANG - BẮC NINH - HÀ NỘI',
            content: [
                {
                    location: 'Bắc Giang - Hà Nội',
                    price: '200.000 VNĐ'
                },
                {
                    location: 'Bắc Giang - Hà Nội',
                    price: '200.000 VNĐ'
                },
                {
                    location: 'Bắc Giang - Hà Nội',
                    price: '200.000 VNĐ'
                },
                {
                    location: 'Bắc Giang - Hà Nội',
                    price: '200.000 VNĐ'
                },
            ]
        }
    ])
    const [feedbacks, setFeedbacks] = useState([
        {
            image: Image1,
            username: 'Chị X - KHÁCH HÀNG',
            text: 'Mình thường xuyên đi xe từ Hà Nội đi Bắc Ninh, dịch vụ của nhà xe rất tốt. Xe mới, rộng rãi, đặc biệt là bác tài rất vui tính và nhiệt tình. Tôi vẫn sẽ ủng hộ nhà xe lâu dài.'
        },
        {
            image: Image2,
            username: 'ANH Y - KHÁCH HÀNG',
            text: 'Mình thường xuyên đi xe từ Hà Nội đi Bắc Ninh, dịch vụ của nhà xe rất tốt. Xe mới, rộng rãi, đặc biệt là bác tài rất vui tính và nhiệt tình. Tôi vẫn sẽ ủng hộ nhà xe lâu dài.'
        },
        {
            image: Image3,
            username: 'ANH Z - KHÁCH HÀNG',
            text: 'Mình thường xuyên đi xe từ Hà Nội đi Bắc Ninh, dịch vụ của nhà xe rất tốt. Xe mới, rộng rãi, đặc biệt là bác tài rất vui tính và nhiệt tình. Tôi vẫn sẽ ủng hộ nhà xe lâu dài.'
        },
        {
            image: Image4,
            username: 'Chị S - KHÁCH HÀNG',
            text: 'Mình thường xuyên đi xe từ Hà Nội đi Bắc Ninh, dịch vụ của nhà xe rất tốt. Xe mới, rộng rãi, đặc biệt là bác tài rất vui tính và nhiệt tình. Tôi vẫn sẽ ủng hộ nhà xe lâu dài.'
        },
    ])
    useEffect(() => {
        fetchPostIP()
            .then()
            .catch(error => {
                console.log(error)
            })
    }, []);
    return (
        <>
            <Banner />
            <Location />
            <Services />
            <Prices prices={prices} />
            <Cars />
            <Feedbacks feedbacks={feedbacks} />
            <Trevor />
            <Booking />
            <Quanlity />
        </>
    );
}

export default memo(Index);
