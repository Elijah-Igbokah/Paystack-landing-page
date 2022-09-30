import React from 'react';

import "./Card-wrapper.styles.scss";

import Card from "../card.components/card.component"

import icon1 from "../../images/For-International-Businesses_180823_165939.svg"
import icon2 from "../../images/For-Entrepreneurs_180823_165709.svg"
import icon3 from "../../images/For-Large-Corporations_180823_165502.svg"

class CardWrapper extends React.Component {
    constructor(){
        super();


        this.state = {
            details: [
                {
                    icon: `${icon1}`,
                    title: 'Paystack for Global Brands',
                    description: 'We help global brands accept payments from across Africa'
                },
                {
                    icon: `${icon2}`,
                    title: 'Paystack for Entrepreneurs',
                    description: 'From startup to scale-up, we can support you at every stage of your businesses’ growth'
                },
                {
                    icon: `${icon3}`,
                    title: 'Paystack For Large Organizations',
                    description: 'Paystack helps many of the largest corporate and government organizations in Nigeria get paid quickly and securely.'
                }
                
            ]
        };
    }


    render(){
        return(
            <div className='card-wrapper'>
                {this.state.details.map(({ icon, title, description }) => (
                    <Card icon={icon} title ={title} description={description} />
                ))}
            </div>
        );
    }
};


export default CardWrapper;