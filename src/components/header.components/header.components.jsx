import React from 'react';

import "./header.styles.scss";
import dominoLogo from "../../images/Dominos-Plain.svg";
import mtnLogo from "../../images/MTN-Plain.svg";
import boltLogo from "../../images/Bolt-Stack-Blue_200304_153027.svg";
import axaLogo from "../../images/Axa-mansard-_-Plain.svg";

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
    );
}

export default Header;