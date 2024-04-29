import React from 'react';
import banner from '../../assets/FarmBanner.png';
import STS from '../../assets/STS_Name.png'
import './header.css';


const Header = () => {
    return (
        <div className='header'>
            <div className='header-title'>
                <img src={banner} alt='banner' className='banner' />
            </div>
            <div className='header-title-card'>
                <img src={STS} alt='STS' className='header-title-img' />
                </div>
            <div className='header-content'>
                <p>
                Accounting, Consulting, & Taxes for Over 35+ Years
                </p>
            </div>
            <div className='header-content'>
                <p>A Resource for Family Farms & Small Business Owners</p>
            </div>
        </div>
    )
}

export default Header