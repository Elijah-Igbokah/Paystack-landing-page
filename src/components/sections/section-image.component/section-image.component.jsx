import React from "react";
import "./section-image.styles.scss";


const SectionImage = (Props) =>{
    return(
        <div className="section-image">
            <img src={Props.img} alt="" />
        </div>
        
    )
};

export default SectionImage;