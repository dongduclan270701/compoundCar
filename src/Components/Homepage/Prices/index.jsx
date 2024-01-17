import React from 'react';
import 'assets/scss/Prices.scss'
const Index = (props) => {
    const { prices } = props
    return (
        <div className='prices'>
            <div className='container prices-content'>
                <div className='title-prices'>
                    Bảng giá
                </div>
                <div className='row table-prices'>
                    {prices.map((item, index) => {
                        return <div className='col-12 col-sm-6 table-prices-content' key={index}>
                            <div className='title-table-prices'>
                                {item.title}
                            </div>
                            {item.content.map((item_content, index_content) => {
                                return <div className='content-table-prices' key={index_content}>
                                    <div className='location-table'>{item_content.location}</div>
                                    <div className='price-table'>{item_content.price}</div>
                                </div>
                            })}
                        </div>
                    })}
                </div>
            </div>
        </div>
    );
}

export default Index;
