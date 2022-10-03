import React from "react";

import "./link-icon.styles.scss"

const LinkIcon = ({linkText, linkText2}) =>{
        
    return(
        <div className="section-link">
                <div className="link-icon">&#62;</div>
                <div style={{ color: "#3bb75e", fontSize: '14px', textAlign: 'center', fontWeight: '500', display:'flex', alignItems:'center', paddingTop: '2px'}}>
                    {linkText}
                </div>
                <div style={{ fontSize: '14px', textAlign: 'center', fontWeight: '500', display:'flex', alignItems:'center', paddingTop: '2px'}}>
                    {linkText2}
                </div>
            </div>
    );
}

export default LinkIcon;