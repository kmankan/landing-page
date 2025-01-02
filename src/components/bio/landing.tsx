'use client'

import InfoCardLarge from "@/components/bio/info-card-large";
import InfoCardSmall from "@/components/bio/info-card-small";
import BioCard from "@/components/bio/bio-card";
import RippleButton from "../ui/ripple-button";

export default function Landing() {
  return (
    <div className="w-full overflow-hidden rounded-lg">
      <h1 className="text-4xl font-bold text-center mt-6">About Me</h1>
      <div className="flex flex-row justify-center gap-60 mx-auto mt-16">
        <div className="flex items-center justify-center">
          <BioCard />
        </div>
        <div className="flex flex-col items-end justify-center gap-6">
          <InfoCardLarge title="GitHub" handle="@kmankan" iconName="github" />
          <InfoCardLarge title="Twitter" handle="@mahlenr" iconName="twitter" />
          <InfoCardLarge title="Blog" handle="mkan.xyz" iconName="blog" />
          <div className="flex gap-4">
            <InfoCardSmall iconName="email" />
            <InfoCardSmall iconName="calendar" />
            <InfoCardSmall iconName="linkedin" />
          </div>
        </div>
      </div>
    </div>
  );
}