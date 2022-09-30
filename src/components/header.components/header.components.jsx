import React from 'react';

import "./header.styles.scss";

import TopBanner from "../top-banner.components/top-banner.components";
import NavBar from "../nav-bar.components/nav-bar.components";
import Hero from '../hero.components/hero.components';


const Header = () => {
    return(
        <div className='Header'>
            <TopBanner />
            <NavBar />
            <Hero />
        </div>
    )
};

export default Header;