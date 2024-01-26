import React from 'react';
import 'assets/scss/Prices.scss'
const Index = (props) => {
    const { website } = props
    return (
        <div className='prices'>
            <div className='container prices-content'>
                <div className='title-prices'>
                    Bảng giá
                </div>
                <div className='row table-prices'>
                    <div className='col-12 col-sm-6 table-prices-content'>
                        <div className='title-table-prices'>
                        BẢNG GIÁ XE GHÉP BẮC GIANG - BẮC NINH - HÀ NỘI
                        </div>
                        {website.compound.map((item_content, index_content) => {
                            return <div className='content-table-prices' key={index_content}>
                                <div className='location-table'>{item_content.location}</div>
                                <div className='price-table'>{item_content.price}</div>
                            </div>
                        })}
                    </div>
                    <div className='col-12 col-sm-6 table-prices-content'>
                        <div className='title-table-prices'>
                        BẢNG GIÁ BAO XE BẮC GIANG - BẮC NINH - HÀ NỘI
                        </div>
                        {website.lumpSum.map((item_content, index_content) => {
                            return <div className='content-table-prices' key={index_content}>
                                <div className='location-table'>{item_content.location}</div>
                                <div className='price-table'>{item_content.price}</div>
                            </div>
                        })}
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Index;
