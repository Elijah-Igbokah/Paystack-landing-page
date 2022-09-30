import React from "react";
import "./section-image.styles.scss";


const SectionVideo = (Props) =>{
    return(
        <div className="section-image">
            <video webkit-playsinline playsinline autoplay="autoplay" muted defaultMuted loop>
                <source src={Props.url} type="video/mp4" />
                Your browser does not support the video tag.
            </video>
        </div>
        
    )
};

export default SectionVideo;