import React from 'react';

import "./card.styles.scss";




const Card = (Props) => {
    return(
        <div className='card'>
            <img src={Props.icon} alt="" />
            <h2>{Props.title}</h2>
            <p>{Props.description}</p>
            <div className='learn-more'>Learn More</div>
        </div>
    );
};

export default Card;