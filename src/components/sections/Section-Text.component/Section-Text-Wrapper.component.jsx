import React from "react";

import "./Section-Text.styles.scss";


const SectionTextWrapper = ({children}) =>{
    return(
        <div className="section-text-wrapper">
            {children}
        </div>
    );
}

export default SectionTextWrapper;