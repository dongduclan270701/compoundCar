import React from 'react';
import One from 'assets/svg/number-one-svgrepo-com.svg'
import Two from 'assets/svg/number-two-svgrepo-com.svg'
import Three from 'assets/svg/number-three-svgrepo-com.svg'
import Connect from 'assets/svg/arrow-left-right-svgrepo-com.svg'
import 'assets/scss/Location.scss'
const Index = () => {
    return (
        <div className='container-location'>
            <div className='location'>
                <div className='location-one'>
                    <img src={One} className='location-icon' alt="Logo" />
                    <div className='location-content'>Bắc Giang</div>
                </div>
                <img src={Connect} className='location-connect-icon' alt="Logo" />
                <div className='location-two'>
                    <img src={Two} className='location-icon' alt="Logo" />
                    <div className='location-content'>Bắc Ninh</div>
                </div>
                <img src={Connect} className='location-connect-icon' alt="Logo" />
                <div className='location-three'>
                    <img src={Three} className='location-icon' alt="Logo" />
                    <div className='location-content'>Hà Nội</div>
                </div>
            </div>
        </div>
    );
}

export default Index;
