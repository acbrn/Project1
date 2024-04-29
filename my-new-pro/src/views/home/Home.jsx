import React from 'react';
import './home.css';
import barn from '../../assets/STS_LOGO.png';
import clientfile from '../../pdf-files/2023_client_tax_organizer.pdf';
import refund from '../../pdf-files/wheres_my_refund_forum.pdf';

const Home = () => {
    const onButtonClick = () => {
        window.open(clientfile); 
    }

    const onButtonClick2 = () => {
        window.open(refund); 
    }
    return (
        <>
        <div className='home-page'>
            <div className='home-title'>Welcome</div>
            <div className='home-outlinks'>
                <div className='home-outlinks-title'>Downloadable Forms:</div>
                <div className='client-link'>
                    <button onClick={onButtonClick}>
                    2023 Client Tax Organizer
                    </button>
                    </div>
                <div className='refund-link'>
                    <button onClick={onButtonClick2}>
                    Where's My Refund?
                    </button>
                    </div>
                <div className='home-outlinks-title'>Helpful Links:</div>
                <div className='irs-link'><a href='https://www.irs.gov/' target='_blank' rel='noreferrer'>IRS</a></div>
                <div className='iowa-link'><a href='https://tax.iowa.gov/' target='_blank' rel='noreferrer'>Iowa Department of Revenue</a></div>
            </div>
            <div className='home-content'>
                <img src={barn} alt='barn' className='home-content-img' />
                <div className='home-content-title'>We are located at:</div>
                <div className='home-content-address'>1971 J Ave<br />Marengo, IA 52301</div>
                <div className='home-content-title'>Contact us at:</div>
                <div className='home-content-phone'>(515) 240-0692</div>
            </div>
            </div>
        </>
    );
};

export default Home;
