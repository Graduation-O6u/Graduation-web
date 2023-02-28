import React from "react";
import "../Home.css"
import { Icon } from '@iconify/react';
import messageIcon from '@iconify/icons-ep/message';
import baselineLocalPhone from '@iconify/icons-ic/baseline-local-phone';
import googlePlayIcon from '@iconify/icons-logos/google-play-icon';
import appleIcon from '@iconify/icons-bi/apple';
const Footer = () => {
    return (
        <div className="box-footer">
            <div className="Us">
                <div className="email">
                    <div className="Us">
                        <Icon icon={messageIcon} className="icon1" />
                        <p>Chat to us</p><br></br>
                    </div>
                    <p>our friendly team is here to help!</p>
                    <p>jobber@gmail.com</p>
                </div>
                <div className="call">
                    <div className="Us">
                        <Icon icon={baselineLocalPhone} className="icon1" />
                        <p>Call us</p><br></br>
                    </div>
                    <p>Mon-Fri from 9Pm to 4Pm.</p>
                    <p>+20 1016794852</p>
                </div>
            </div>
        </div>
    )
}
export default Footer;