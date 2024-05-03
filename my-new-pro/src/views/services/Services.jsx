import React from 'react';
import './services.css';
import ServiceForm from './ServiceForm';

const Services = () => {
    return (
        <>
            <div className='services-title'>
                Services We Offer
            </div>
            <div className='services-content'>
                <div className='services-box1'>
                    <p className='services-paragraph1'>
                    Personalize Service Business
                    </p>
                    <li>Provides personal, hands-on,& computerized services 
                    that are delivered at or near the client’s home or business. </li>
                    <li>
                    Using things like: face-to-face, Zoom meetings, cell phones with voice mail and texting capabilities, 
                    secure mail, and  mail to respond to client’s questions.  
                    With the help of state-of-the-art tax software, on-line tax resources, webinars, and personal professional contacts we are able to 
                    advise clients of potential answers and options available to them.
                    </li>
                </div>
                <div className='services-box2'>
                    <p className='services-paragraph2'>
                    Financial and business consulting services including but not limited to:
                    </p>
                    <li>
                    <li> Accounting practices & recordkeeping;</li>
                    <li> Amortization;</li>
                    <li> Arbitration; </li>
                    <li> Asset management;</li>
                    <li> Budgeting; </li>
                    <li> Business entity structuring; </li>
                    <li> Business transition planning; </li>
                    <li> Cash flow budgeting, debt management; </li>
                    <li> Depreciation schedules; </li>
                    <li> Enterprise analysis; </li>
                    <li> Estate planning;</li>
                    </li>
                </div>
                <div className='services-box3'>
                    <p className='services-paragraph3'>
                    Complete tax service including:
                    </p>
                    <ui>
                        <li> W2 </li>
                        <li> 1099 </li>
                        <li> Labor & Depreciation Schdule Preparation </li>
                    </ui>
                </div>
                <div className='services-box4'>
                    <p className='services-paragraph4'>
                    Accounting services
                    </p>
                </div>
                <div className='services-form'>
                    <ServiceForm />
                </div>
            </div>
        </>
    );
};

export default Services;
