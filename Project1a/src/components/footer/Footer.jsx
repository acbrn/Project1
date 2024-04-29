import React from 'react';
import ACBRN from '../../assets/acbrn.png'; // Import the image file with the 'acbrn.png' file name
import './footer.css' 


const Footer = () => {
    return (
    <div className='footer-section__padding'>
        <div className='footer-content'>
        </div>
        <div className='footer-social'>
        <div className='footer-links_div'>
            <h4 className='footer-link-title'>Links</h4>
                <p>Social Media</p>
                <p>Contact</p>
        </div>
        <div className='footer-links_div'>
            <h4 className='footer-link-title'>Company</h4>
                <p>Terms & Conditions</p>
                <p>Privacy Policy</p>
                <p>Cookie Policy</p>
        </div>
        <div className='footer-links_div'>
            <h4 className='footer-link-title'>Reach Out</h4>
                <p>Mailing</p>
                <p>Phone</p>
                <p>Email</p>
        </div>
        </div>
        <div className='footer-copyright'>
        <p>© 2024 ACBRN Development. All rights reserved.</p>
        <img src={ACBRN} alt='ACBRN Logo' className='footer-logo'/>
        </div>
    </div>
    );
}

export default Footer;