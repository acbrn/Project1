import React from 'react'
import { FacebookLogo, PinterestLogo, InstagramLogo, TwitterLogo } from 'phosphor-react'

import './footer.css'

const Footer = () => {
    return (
        <>
            <div className='footer'>
                <div className='footer-content'>
                    <div className='footer-socials'>
                        <h4>Social Media</h4>
                        <p>
                            <FacebookLogo size={24} weight='fill' />
                        </p>
                        <p>
                            <InstagramLogo size={24} weight='fill' />
                        </p>
                        <p>
                            <TwitterLogo size={24} weight='fill' />
                        </p>
                        <p>
                            <PinterestLogo size={24} weight='fill' />
                        </p>
                    </div>
                    <div className='footer-links'>
                        <h4>Links</h4>
                        <p>Home</p>
                        <p>Shop</p>
                        <p>About</p>
                        <p>Contact</p>
                    </div>
                    <div className='footer-title'>
                        <p>© 2021 Ecostyle Mart</p>
                    </div>
                    <div className='footer-slogan'>
                        <p>"Sustainable Shopping for a Greener Tomorrow"</p>
                    </div>
                </div>
            </div>
        </>
    )
}

export default Footer
