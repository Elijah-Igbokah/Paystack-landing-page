import React from 'react';

import LinkIcon from "../sections/link-icon.components/link-icon.components";

import "./card.styles.scss";




const Card = (Props) => {
    return(
        <div className='card'>
            <img src={Props.icon} alt="" />
            <h2>{Props.title}</h2>
            <p>{Props.description}</p>
            <LinkIcon linkText2="Learn More" />
            
        </div>
    );
};

export default Card;