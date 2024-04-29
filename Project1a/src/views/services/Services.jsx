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
                        Sample text about the services we offer. here
                    </p>
                </div>
                <div className='services-box2'>
                    <p className='services-paragraph2'>
                        Filled with random information about the services we offer. here
                    </p>
                </div>
                <div className='services-box3'>
                    <p className='services-paragraph3'>
                        Random information about the services we offer. here
                    </p>
                </div>
                <div className='services-box4'>
                    <p className='services-paragraph4'>
                        Random information about the services we offer. here
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
