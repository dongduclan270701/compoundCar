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
import Image3 from 'assets/images/faces/face26.jpg'
import Image4 from 'assets/images/face23.jpg'
import { fetchPostIP, fetchWebsite } from 'Apis'
const Index = (props) => {
    const { onHandleGetWebsite } = props
    const [website, setWebsite] = useState({ "_id": { "$oid": "65b2d37584b9724868b50638" }, "hotline": "0374216188", "gmail": "XXX@gmail.com", "compound": [{ "location": "Bắc Giang - Hà Nội", "price": "200.000 VNĐ" }, { "location": "Bắc Giang - Bắc Ninh", "price": "150.000 VNĐ" }, { "location": "Bắc Ninh - Hà Nội", "price": "100.000 VNĐ" }], "lumpSum": [{ "location": "Bắc Giang - Hà Nội", "price": "500.000 VNĐ" }, { "location": "Bắc Giang - Bắc Ninh", "price": "550.000 VNĐ" }, { "location": "Bắc Ninh - Hà Nội", "price": "600.000 VNĐ" }], "service": { "no_1": "Tài xế tìm khách nhanh và dễ dàng.", "no_2": "Giá ghép chỉ có 200.000 VNĐ.", "no_3": "Giá bao xe 500.000 VNĐ trở lên tuỳ điểm.", "no_4": "Giá vận chuyển đồ 50.000 VNĐ.", "no_5": "0374216188", "no_6": "Các ngày trong tuần.", "no_7": "Bắt đầu từ 5h đến 21h hằng ngày.", "no_8": "Đón và trả tận nơi." } })
    const [feedbacks, setFeedbacks] = useState([
        {
            image: Image1,
            star: 5,
            type: 'Bao xe',
            username: 'Phạm Phương Thuý',
            text: 'Tôi đã sử dụng dịch vụ xe ghép của đơn vị này và thật sự ấn tượng. Tài xế rất chuyên nghiệp và phục vụ tận tình. Giá cả hợp lý và dịch vụ đáng tin cậy. Tôi sẽ tiếp tục sử dụng dịch vụ của họ trong tương lai.'
        },
        {
            image: Image2,
            star: 5,
            type: 'Xe ghép',
            username: 'Nguyễn Bình Minh',
            text: 'Sử dụng dịch vụ xe ghép ở đây là một quyết định đúng đắn. Tôi đã tiết kiệm được thời gian và công sức khi di chuyển. Đặc biệt, dịch vụ bao xe cũng rất ổn định và chất lượng. Tôi rất hạnh phúc với sự phục vụ của họ và sẽ tiếp tục ủng hộ trong tương lai.'
        },
        {
            image: Image3,
            star: 5,
            type: 'Xe ghép',
            username: 'Phan Phương Thảo',
            text: 'Mình thường xuyên đi xe từ Hà Nội đi Bắc Ninh, dịch vụ của nhà xe rất tốt. Xe mới, rộng rãi, đặc biệt là bác tài rất vui tính và nhiệt tình. Tôi vẫn sẽ ủng hộ nhà xe lâu dài.'
        },
        {
            image: Image4,
            star: 5,
            type: 'Bao xe',
            username: 'Nguyễn Thu Hằng',
            text: 'Điều tuyệt vời khi sử dụng dịch vụ bao xe ở đây. Giao hàng được thực hiện đúng hẹn và an toàn. Giá cả phải chăng và phù hợp với chất lượng dịch vụ. Tôi hoàn toàn hài lòng và sẽ giới thiệu cho bạn bè và gia đình của tôi.'
        },
    ])
    useEffect(() => {
        fetchPostIP()
            .then()
            .catch(error => {
                console.log(error)
            })
    }, []);
    useEffect(() => {
        fetchWebsite()
            .then(result => {
                setWebsite(result.data[0])
                onHandleGetWebsite(result.data[0])
            })
            .catch(error => {
                console.log(error)
            })
    }, []);
    return (
        <>
            <Banner />
            <Location />
            <Services website={website} />
            <Prices website={website} />
            <Cars />
            <Feedbacks feedbacks={feedbacks} />
            <Trevor />
            <Booking />
            <Quanlity />
        </>
    );
}

export default memo(Index);
