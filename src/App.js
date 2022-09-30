import React from "react";

import "./App.css";

import Header from "./components/header.components/header.components";
import SectionImage from "./components/sections/section-image.component/section-image.component";
import SectionVideo from "./components/sections/section-image.component/section-video.components";
import Section from "./components/sections/section.components/section.components";
import SectionHeading from "./components/sections/section-heading/section-heading.components";
import FlexWrapper from "./components/sections/section.components/flex-wrapper.components";
import CardWrapper from "./components/Card-wrapper.component/Card-wrapper.component";

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
          <div>
            <h1>
              Hello WORLD
            </h1>
          </div>
        </FlexWrapper>
      </Section>
      <Section>
        <FlexWrapper>
          <div>
            <h1>
              Hello WORLD
            </h1>
          </div>
          <SectionImage img={image2}/>
        </FlexWrapper>
      </Section>
      <Section>
        <FlexWrapper>
          <SectionVideo url="https://assets.paystack.com/assets/video/content/Advanced-Fraud-Protection.mp4" />
          <div>
            <h1>
              Hello WORLD
            </h1>
          </div>
        </FlexWrapper>
      </Section>
        <div className="colored-sect">
          <SectionHeading h1="Trusted by 70,000+ businesses" p="Thousands of organizations of all sizes trust Paystack to grow their business" />
          <CardWrapper />
        </div>
      



    </div>
  );
};

export default App;
