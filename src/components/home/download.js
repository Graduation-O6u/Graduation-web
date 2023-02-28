import React from "react";
import "../Home.css"
import { Icon } from '@iconify/react';
import appleIcon from '@iconify/icons-bi/apple';
import googlePlayIcon from '@iconify/icons-logos/google-play-icon';
const Dawnload = () => {
    return (
        <div className="download">
            <button className="down"><p className="only">Download on the </p> <Icon icon={appleIcon} className="icon-app" /> App Store</button>
            <button className="down"> <p className="only">Get it on </p><Icon icon={googlePlayIcon} className="icon-app" /> Google Play</button>
        </div>
    )
}
export default Dawnload;