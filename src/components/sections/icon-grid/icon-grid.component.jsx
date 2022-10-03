import React from "react";

import "./icon-grid.styles.scss";

import GridList from "./Grid-list.component";


import icon1 from "../../../images/Air-Peace-Stack-Blue_200305_154114.svg";
import icon2 from "../../../images/Dominos-Plain--WcT5wU.svg";
import icon3 from "../../../images/Axa-mansard-_-Plain.svg";
import icon4 from "../../../images/FilmHouse-Stack-Blue_200304_153641.svg";
import icon5 from "../../../images/MTN-Plain.svg";
import icon6 from "../../../images/Abia-State-University.svg";
import icon7 from "../../../images/Piggyvest-Stack-Blue_200304_153734.svg";
import icon8 from "../../../images/Lagos-Internal-Revenue-Service.svg";
import icon9 from "../../../images/GIGM-Plain_180827_172142.svg";
import icon10 from "../../../images/Ibom-Air-Stack-Blue_200304_154259.svg";
import icon11 from "../../../images/Bolt-Stack-Blue_200304_153027--exZ0mp.svg";
import icon12 from "../../../images/IrokoTV-Plain.svg";
import icon13 from "../../../images/kuda-Stack-Blue_200304_154345.svg";
import icon14 from "../../../images/Betway-Plain.svg";
import icon15 from "../../../images/Smile-Plain_180827_172218.svg";
import icon16 from "../../../images/Ariiya-Stack-Blue_200304_155307.svg";
import icon17 from "../../../images/carbon-dark.svg";
import icon18 from "../../../images/Cowrywise-dark.svg";


class IconGrid extends React.Component {
    constructor(){
        super();

        this.state = {
            rows: [
                {
                    icon1: `${icon1}`,
                    icon2: `${icon2}`,
                    icon3: `${icon3}`
                },
                {
                    icon1: `${icon4}`,
                    icon2: `${icon5}`,
                    icon3: `${icon6}`
                },
                {
                    icon1: `${icon7}`,
                    icon2: `${icon8}`,
                    icon3: `${icon9}`
                },
                {
                    icon1: `${icon10}`,
                    icon2: `${icon11}`,
                    icon3: `${icon12}`
                },
                {
                    icon1: `${icon13}`,
                    icon2: `${icon14}`,
                    icon3: `${icon15}`
                },
                {
                    icon1: `${icon16}`,
                    icon2: `${icon17}`,
                    icon3: `${icon18}`
                }
            ],

        };
        

    }

    render(){
        return(
            <div className='icon-grid'>
                {this.state.rows.map(({ icon1, icon2, icon3 }) => (
                    <GridList icon1={icon1} icon2={icon2} icon3={icon3} />
                ))}
            </div>
        );
    }
};

export default IconGrid;