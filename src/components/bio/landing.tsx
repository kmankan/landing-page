'use client'

import InfoCard from "@/components/bio/info-card";
import BioCard from "@/components/bio/bio-card";
import { Boxes } from "@/components/ui/background-boxes";

export default function Landing() {
  return (
    <div className="w-full overflow-hidden rounded-lg">
      <div className="absolute inset-0 w-full h-full pointer-events-none" />
      {/* <Boxes /> */}
      <div className="flex flex-row justify-center gap-60 border-2 border-red-500 mx-auto">
        <div className="flex items-center justify-center border-2">
          <BioCard />
        </div>
        <div className="flex flex-col items-end justify-center min-h-screen gap-4 border-2">
          <InfoCard title="GitHub" handle="@kmankan" iconName="github" />
          <InfoCard title="LinkedIn" handle="@malin.kankanamge" iconName="linkedin" />
          <InfoCard title="Twitter" handle="@mahlenr" iconName="twitter" />
          {/* <InfoCard title="Email" handle="malin.kankanamge@gmail.com" iconName="email" /> */}
          <InfoCard title="Blog" handle="mkan.xyz" iconName="blog" />
        </div>
      </div>
    </div>
  );
}