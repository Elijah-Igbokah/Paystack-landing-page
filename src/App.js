import React from "react";

import "./App.css";

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

import image1 from "./images/Collect-Payments-for-Multiple-Channels-1.1.gif"
import image2 from "./images/Robust-Suite-of-APIs-Opt.png"

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
          </SectionTextWrapper>
        </FlexWrapper>
      </Section>
      <Section>
        <FlexWrapper>
          <SectionTextWrapper>
            <SectionText h2="Build custom payments experiences with well-documented APIs" p="Developers love our thorough, well-documented APIs that let you to build everything from simple weekend projects, to complex financial products serving hundreds of thousands of customers. If you can imagine it, you can build it with Paystack."/>
            <SectionList item1="Collect one-time and recurring payments from your app or website" item2="Make instant transfers" item3="Retrieve all your transaction and customer data" item4="Verify the identity of customers"/>
          </SectionTextWrapper>
          <SectionImage img={image2}/>
        </FlexWrapper>
      </Section>
      <Section>
        <FlexWrapper>
          <SectionVideo url="https://assets.paystack.com/assets/video/content/Advanced-Fraud-Protection.mp4" />
          <SectionTextWrapper>
            <SectionText h2="Protect yourself and your customers with advanced fraud detection" p="Paystack’s combination of automated and manual fraud systems protect you from fraudulent transactions and associated chargeback claims."/>
            <SectionText h2="Detailed reporting for accounting, reconciliation, and audits" p="Understand your customers’ purchase patterns and do easy reconciliations with a robust data Dashboard and easy exports."/>
          </SectionTextWrapper>
          
        </FlexWrapper>
      </Section>
        <div className="colored-sect">
          <SectionHeading h1="Trusted by 70,000+ businesses" p="Thousands of organizations of all sizes trust Paystack to grow their business" />
          <CardWrapper />
        </div>
      <Section>
        <SectionHeading h1="Powering growth for amazing businesses" p="Paystack is a growth engine for a new generation of innovative, forward-looking organizations operating in Africa." />
      </Section>
      <div className="colored-sect" style={{background: 'rgb(249,251,252)'}}>
        <SectionHeading h1="Backed by strong global partners" p="Paystack is backed by notable investors as well as some of the best payments companies on the planet." />
      </div>
      



    </div>
  );
};

export default App;
