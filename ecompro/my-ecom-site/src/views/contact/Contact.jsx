import React from 'react';
import './contact.css';

const Contact = () => {
    return (
        <div className='contact-container'>
            <div className='contact-header'>
                Contact Us
            </div>
            <div className='contact-content'>
                <p>Customer Service Email: <a href="mailto:support@ecostylemart.com">support@ecostylemart.com</a></p>
                <p>Sales Inquiries Email: <a href="mailto:sales@ecostylemart.com">sales@ecostylemart.com</a></p>
                <p>Phone Number: +1 (800) 123-4567</p>
                <p>Address: 123 Green Lane, Suite 101, Eco City, CA 90210, USA</p>
            </div>
        </div>
    );
};

export default Contact;
