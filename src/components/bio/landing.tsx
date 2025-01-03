'use client'

import InfoCardLarge from "@/components/bio/info-card-large";
import InfoCardSmall from "@/components/bio/info-card-small";
import BioCard from "@/components/bio/bio-card";
import { motion } from "motion/react";
import FlickeringArrow from "../FlickeringArrow";

export default function Landing() {
  return (
    <div>
      <h1 className="relative text-4xl font-bold text-center mt-6 font-comfortaa">About Me</h1>
      <div className="flex flex-col md:flex-row justify-center md:gap-60 gap-8 mx-auto mt-8 md:mt-14">
        <div className="flex items-center justify-center font-nunito text-base">
          <BioCard />
        </div>
        <div className="flex flex-col items-center md:items-end justify-center gap-6 font-nunito font-normal">
          <InfoCardLarge handle="@kmankan" iconName="github" />
          <InfoCardLarge handle="@mahlenr" iconName="twitter" />
          <InfoCardLarge handle="mkan.xyz" iconName="blog" />
          <div className="flex gap-4">
            <InfoCardSmall iconName="email" />
            <InfoCardSmall iconName="calendar" />
            <InfoCardSmall iconName="linkedin" />
          </div>
        </div>
      </div>
      <motion.div
        initial={{ opacity: 1, y: 0 }}
        animate={{
          y: [0, 20, 0]
        }}
        transition={{
          duration: 2,
          repeat: Infinity,
          ease: "easeInOut"
        }}
        className="flex flex-row justify-center gap-60 mx-auto mt-12">
        <FlickeringArrow />
      </motion.div>
    </div>
  );
}


