import React from 'react';

import "./section.styles.scss";




const FlexWrapper = ({children}) => {
    return(
        <div className='flex-wrapper'>
            {children}
        </div>
    );
}

export default FlexWrapper;