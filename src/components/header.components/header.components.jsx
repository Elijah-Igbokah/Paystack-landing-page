import React from 'react';

import "./header.styles.scss";

import TopBanner from "../top-banner.components/top-banner.components";
import NavBar from "../nav-bar.components/nav-bar.components";


const Header = () => {
    return(
        <div className='Header'>
            <TopBanner />
            <NavBar />
            <div className='hero-section'></div>
        </div>
    );
}

export default Header;