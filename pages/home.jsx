"use client";
import React from "react";
import Banner from "@/organism/Bnner";
import CoinSecion from "@/organism/CoinSecion";
import Footer from "@/organism/Footer";
import Header from "@/organism/Header";
import PlasticHero from "@/organism/PlasticHero";
import ResearchSection from "@/organism/ResearchSection";
import SlideSection from "@/organism/SlideSection";
import Touch from "@/organism/Touch";
import AOS from "aos";
import "aos/dist/aos.css";
import { useEffect } from "react";
import GroupSection from "@/organism/GroupSection";

const Home = () => {
  useEffect(() => {
    AOS.init({
      duration: 800,
      once: false,
    });
  }, []);

  return (
    <div>
      <Header />
      <div id="home">
        <Banner />
      </div>
      <div id="solution">
        <SlideSection />
      </div>
      <div id="about">
        <GroupSection />
      </div>
      <PlasticHero />
      <CoinSecion />
      <ResearchSection />

      <Touch />

      <Footer />
    </div>
  );
};

export default Home;
