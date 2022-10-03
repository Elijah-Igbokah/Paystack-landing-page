import React from "react";
import "./icon-grid.styles.scss";

const GridList = (Props)=>{
    return(
        <div className="grid-list">
            <img src={Props.icon1} alt="" />
            <img src={Props.icon2} alt="" />
            <img src={Props.icon3} alt="" />
        </div>
    );
};

export default GridList;