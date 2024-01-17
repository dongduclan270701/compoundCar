import React, { useState, memo } from 'react';
import Banner from 'Components/Homepage/Banner'
import Location from 'Components/Homepage/Location'
import Services from 'Components/Homepage/Services'
import Prices from 'Components/Homepage/Prices'
import Cars from 'Components/Homepage/Cars'
import Feedbacks from 'Components/Homepage/Feedbacks'
import Booking from 'Components/Homepage/Booking'
import Quanlity from 'Components/Homepage/Quanlity'
import Image1 from 'assets/images/face2.jpg'
import Image2 from 'assets/images/face4.jpg'
import Image3 from 'assets/images/face19.jpg'
import Image4 from 'assets/images/face23.jpg'
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
    return (
        <>
            <Banner />
            <Location />
            <Services />
            <Prices prices={prices}/>
            <Cars />
            <Feedbacks feedbacks={feedbacks}/>
            <Booking />
            <Quanlity />
        </>
    );
}

export default memo(Index);
