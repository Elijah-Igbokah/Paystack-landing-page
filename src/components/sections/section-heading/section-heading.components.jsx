import React from 'react';

import "./section-heading.styles.scss";




const SectionHeading = (Props) => {
    return(
        <div className='section-heading'>
            <h1>{Props.h1}</h1>
            <p>{Props.p}</p>
        </div>
    );
};

export default SectionHeading;



