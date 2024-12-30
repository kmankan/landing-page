
import InfoCard from "@/components/info-card";
import { Boxes } from "@/components/ui/background-boxes";
import { cn } from "@/lib/utils";

export default function Home() {
  return (
    <div className="h-screen relative w-full overflow-hidden flex flex-col items-center justify-center rounded-lg bg-[#4f868e]">
      <div className="absolute inset-0 w-full h-full bg-slate-600 z-20 [mask-image:radial-gradient(transparent,white)] pointer-events-none" />
      <Boxes />
      <div className="flex flex-row gap-4">
        <InfoCard title="GitHub" handle="@kmankan" iconName="github" />
        <InfoCard title="LinkedIn" handle="@malin.kankanamge" iconName="linkedin" />
        <InfoCard title="Twitter" handle="@mahlenr" iconName="twitter" />
        <InfoCard title="Email" handle="kmankan@gmail.com" iconName="email" />
      </div>
    </div>
  );
}
