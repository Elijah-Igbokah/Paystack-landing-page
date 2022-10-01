import React from "react";

import "./Section-Text.styles.scss";


const SectionText = (Props) =>{
    return(
        <div className="section-text">
            <h1> {Props.h2} </h1>
            <p> {Props.p} </p>
        </div>
    );
}

export default SectionText;