'use client'

import InfoCard from "@/components/bio/info-card";
import BioCard from "@/components/bio/bio-card";

export default function Landing() {
  return (
    <div className="w-full overflow-hidden rounded-lg">
      <div className="flex flex-row justify-center gap-60 mx-auto">
        <div className="flex items-center justify-center">
          <BioCard />
        </div>
        <div className="flex flex-col items-end justify-center min-h-screen gap-4">
          <InfoCard title="GitHub" handle="@kmankan" iconName="github" />
          <InfoCard title="LinkedIn" handle="@malin.kankanamge" iconName="linkedin" />
          <InfoCard title="Twitter" handle="@mahlenr" iconName="twitter" />
          <InfoCard title="Blog" handle="mkan.xyz" iconName="blog" />
        </div>
      </div>
    </div>
  );
}