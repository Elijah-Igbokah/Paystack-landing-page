import React from "react";

import "./section-list.styles.scss"

import check from "../../../images/check.svg"

const SectionList = (Props) => {

    return(
        <div className="section-list">
            <li><div><img src={check} alt="" /></div></li><p>{Props.item1}</p>
            <li><div><img src={check} alt="" /></div><p>{Props.item2}</p></li>
            <li><div><img src={check} alt="" /></div><p>{Props.item3}</p></li>
            <li><div><img src={check} alt="" /></div><p>{Props.item4}</p></li>
        </div>
    );
}

export default SectionList;