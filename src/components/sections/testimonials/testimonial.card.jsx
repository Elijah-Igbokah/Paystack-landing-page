import React from 'react';

import "./testimonials.scss";


const TestimonialCard = (Props) => {
    return(
        <div className='testimonial-card'>
            <img className='icon' src={Props.icon} alt="" />
            <p className='testimony'>{Props.testimony}</p>
            <div className='profile'>
                <div>
                    <div className='profile-pic'><img src={Props.picture} alt="" /></div>
                </div>
                <div className='bio'>
                    <h2>{Props.name}</h2>
                    <p> { Props.position } </p>
                </div>
            </div>            
        </div>
    );
};

export default TestimonialCard;