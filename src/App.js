import React from "react";
import "./App.scss";

import Header from "./components/header.components/header.components";
import SectionImage from "./components/sections/section-image.component/section-image.component";
import SectionVideo from "./components/sections/section-image.component/section-video.components";
import Section from "./components/sections/section.components/section.components";
import SectionHeading from "./components/sections/section-heading/section-heading.components";
import FlexWrapper from "./components/sections/section.components/flex-wrapper.components";
import CardWrapper from "./components/Card-wrapper.component/Card-wrapper.component";
import SectionText from "./components/sections/Section-Text.component/Section-Text.component";
import SectionTextWrapper from "./components/sections/Section-Text.component/Section-Text-Wrapper.component";
import SectionList from "./components/sections/section-list.components/section-list.component";
import LinkIcon from "./components/sections/link-icon.components/link-icon.components";
import IconGrid from "./components/sections/icon-grid/icon-grid.component";
import Testimonial from "./components/sections/testimonials/testimonial.wrapper";
import CreateButton from "./components/create-button.components/create-button.components";

import image1 from "./images/Collect-Payments-for-Multiple-Channels-1.1.gif";
import image2 from "./images/Robust-Suite-of-APIs-Opt.png";
import bgImage1 from "./images/checked-pattern-blue.png";
import bgImage2 from "./images/circular-pattern.png";
import bgImage3 from "./images/curved-pattern.png";


function App() {
  return (
    <div className="App">
      <Header />
      <Section>
        <SectionHeading h1="Simple, easy payments" p="Building a business is hard, Getting paid shouldn't be"/>
        <FlexWrapper>
          <SectionImage img={image1}/>
          <SectionTextWrapper>
            <SectionText h2="Delight customers with a seamless payments experience" p="Give your customers the gift of modern, frictionless, painless payments. Integrate Paystack once and let your customers pay you however they want."/>
            <FlexWrapper>
              <SectionList item1="Card" item2="Bank Account" item3="Bank Transfer" item4="USSD"/>
              <SectionList item1="Apple Pay" item2="Visa QR" item3="Mobile Money" item4="POS (Coming Soon)"/>
            </FlexWrapper>
            <SectionText h2="Enjoy phenomenal transaction success rates" p="We automatically route payments through the most optimal channels, ensuring the highest transaction success rates in the market."/>
            <LinkIcon linkText="Find out how we achieve high success rates" />
          </SectionTextWrapper>
        </FlexWrapper>
      </Section>
      <Section>
        <FlexWrapper>
          <div className="hidden">
            <SectionImage img={image2}/>
          </div>
          <SectionTextWrapper>
            <SectionText h2="Build custom payments experiences with well-documented APIs" p="Developers love our thorough, well-documented APIs that let you to build everything from simple weekend projects, to complex financial products serving hundreds of thousands of customers. If you can imagine it, you can build it with Paystack."/>
            <SectionList item1="Collect one-time and recurring payments from your app or website" item2="Make instant transfers" item3="Retrieve all your transaction and customer data" item4="Verify the identity of customers"/>
            <LinkIcon linkText="Paystack API Quickstart" />
          </SectionTextWrapper>
          <div className="current">
            <SectionImage img={image2}/>
          </div>
        </FlexWrapper>
      </Section>
      <Section>
        <FlexWrapper>
          <div className="current">
            <SectionVideo url="https://assets.paystack.com/assets/video/content/Advanced-Fraud-Protection.mp4" />
          </div>
          <SectionTextWrapper>
            <SectionText h2="Protect yourself and your customers with advanced fraud detection" p="Paystack’s combination of automated and manual fraud systems protect you from fraudulent transactions and associated chargeback claims."/>
            <SectionText h2="Detailed reporting for accounting, reconciliation, and audits" p="Understand your customers’ purchase patterns and do easy reconciliations with a robust data Dashboard and easy exports."/>
          </SectionTextWrapper>
        </FlexWrapper>
      </Section>
      <div className="colored-wrapper">
          <div className="colored-sect">
            <SectionHeading h1="Trusted by 70,000+ businesses" p="Thousands of organizations of all sizes trust Paystack to grow their business" />
            <CardWrapper />
          </div>
          <div className="bg-Image">
              <img src={bgImage1} alt=""/>
          </div>
      </div>
        
      <div style={{padding: '0 5%'}}>
        <SectionHeading h1="Powering growth for amazing businesses" p="Paystack is a growth engine for a new generation of innovative, forward-looking organizations operating in Africa." />
        <IconGrid />
      </div>
      <div className="colored-wrapper2">
        <div className="colored-sect2">
          <SectionHeading h1="Backed by strong global partners" p="Paystack is backed by notable investors as well as some of the best payments companies on the planet." />
          <Testimonial />
        </div>
        <div className="bg-Image2">
          <img src={bgImage2} alt=""/>
        </div>
      </div>
      
      <div style={{padding: '100px 50px', position: "relative"}}>
        <div style={{
          position: "absolute",
          zIndex: "1"
        }}>
          <p style={{fontSize: "20px"}}>Try Paystack Now</p>
          <div style={{display: "flex", flexDirection:"row", justifyContent: "space-between"}}>
            <div style={{width: "70%"}}>
              <SectionHeading h1="Start accepting payments in just 30 minutes" />
            </div>
            <CreateButton tag="Create free account"/>
          </div>
        </div>
        <div className="bg-Image3">
          <img src={bgImage3} alt=""/>
        </div>
      </div>
    </div>
  );
};

export default App;
