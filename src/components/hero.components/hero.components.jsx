import React from "react";
import CreateButton from "../create-button.components/create-button.components";
import dominoLogo from "../../images/Dominos-Plain.svg";
import mtnLogo from "../../images/MTN-Plain.svg";
import boltLogo from "../../images/Bolt-Stack-Blue_200304_153027.svg";
import axaLogo from "../../images/Axa-mansard-_-Plain.svg";
import playIcon from "../../images/icons8-play-96.png"

import "./hero.styles.scss";

const Hero = () => {
    return(
        <div className='hero-section'>
            <div className='container'>
                <div className='hero-text'>
                    <h1>
                    Modern online and offline payments for Africa
                    </h1>
                    <h2>
                    Paystack helps businesses in Africa get paid by anyone, anywhere in the world
                    </h2>
                    <div className="hero-buttons">
                        <CreateButton tag="Create free account"/>
                        <button className="sales-btn">Or Contact Sales</button>
                    </div>
                </div>
                <div className='map'></div>
            </div>
            <div className='header-bottom'>
                <div className='left'>
                    <p>Trusted by over 60,000 businesses</p>
                    <div className='icons'>
                        <img src={dominoLogo} alt="" />
                        <img src={mtnLogo} alt="" />
                        <img src={boltLogo} alt="" />
                        <img src={axaLogo} alt="" />
                    </div>
                </div>
                <div className='right'>
                    <p>Watch MTN Chief Transformation Officer, Olubayo Adekanmbi, discuss working with Paystack</p>
                    <div><img src={playIcon} alt="" /></div>
                </div>
            </div>
        </div>
    );
};

export default Hero;