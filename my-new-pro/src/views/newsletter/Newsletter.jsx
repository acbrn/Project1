import React from 'react';
import { Link } from 'react-router-dom';
import './newsletter.css';
import ContactForm from './ContactForm';

const Newsletter = () => {

    return (
        <>
            <div className='newsletter-header'>
                Newsletter
            </div>
            <div className='newsletter-title-card'>
                <h5>Subscribe to our newsletter</h5>
            </div>
        <div className='newsletter-content-card'>
                    <div className='newsletter-content1'>
                        <ContactForm />
                    </div>
                    <div className='newsletter-content2'>
                        <Link to='/newsletter/archives'>
                            <button type='button'>Archive</button>
                        </Link>
                    </div>
                    <div className='newsletter-content3'>
                        <Link to='/newsletter/latest'>
                            <button type='button'>Latest</button>
                        </Link>
                    </div>
        </div>
        </>
    );
};

export default Newsletter;