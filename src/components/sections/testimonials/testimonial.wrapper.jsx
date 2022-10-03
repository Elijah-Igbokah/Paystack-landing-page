import React from 'react';

import "./testimonials.scss";

import TestimonialCard from './testimonial.card';

import icon1 from "../../../images/Stripe-Logo-blue--y3005a.png";
import icon2 from "../../../images/Visa-_-Color--D2ohsg.png";
import icon3 from "../../../images/ycombinator-logo.png";
import patrickPhoto from "../../../images/patrick-collison-headshot.jpg";
import ottoPhoto from "../../../images/otto-williams.jpeg";
import michaelPhoto from "../../../images/michael-siebel-headshot.jpeg";


class Testimonial extends React.Component {
    constructor(){
        super();

        this.state = {
            details: [
                {
                    icon: `${icon1}`,
                    testimony: "Paystack is highly technical and fanatically customer oriented. We’re excited to back such people in one of the world’s fastest-growing regions.",
                    picture: `${patrickPhoto}`,
                    name: 'Patrick Collison',
                    position: 'CEO, Stripe'
                },
                {
                    icon: `${icon2}`,
                    testimony: 'Our investment in Paystack aligns with the kind of investments we look for - those that will help extend our reach into the global commerce ecosystem.',
                    picture: `${ottoPhoto}`,
                    name: 'Otto Williams',
                    position: 'Head of Strategic Partnerships, Fintech & Ventures CEMEA, Visa'
                },
                {
                    icon: `${icon3}`,
                    testimony: "As YC's first Nigerian startup Paystack leads the charge of great companies coming out of Africa, powering modern payments for an entire continent.",
                    picture: `${michaelPhoto}`,
                    name: 'Michael Seibel',
                    position: 'CEO, Partner, Y Combinator'
                }
                
            ]
        };
    }


    render(){
        return(
            <div className='testimonial-wrapper'>
                {this.state.details.map(({ icon, testimony, picture, name, position }) => (
                    <TestimonialCard icon={icon} testimony ={testimony} picture={picture} name={name} position={position} />
                ))}
            </div>
        );
    }
};


export default Testimonial;