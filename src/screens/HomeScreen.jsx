import React, { useRef } from "react";
import HomeIntro from "../components/Home/HomeIntro";
import TrustCompanies from "../components/Home/TrustCompanies";
import ServicesPortfolio from "../components/Home/ServicesPortfolio";
import HomeCarousel from "../components/Home/HomeCarousel";
import Benefits from "../components/Home/Benefits";
import ContactForm from "../components/Home/ContactForm";

function HomeScreen() {
  const myRef = useRef(null);
  const executeScroll = () => myRef.current.scrollIntoView();
  return (
    <div>
      <HomeIntro executeScroll={executeScroll}/>
      <TrustCompanies />
      <ServicesPortfolio />
      <HomeCarousel />
      <Benefits />
      <div ref={myRef}></div>
      <ContactForm />
    </div>
  );
}

export default HomeScreen;
