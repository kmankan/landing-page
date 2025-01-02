'use client'
import { motion, useScroll, useSpring } from "framer-motion";
import InfoCard from "@/components/bio/info-card";
import BioCard from "@/components/bio/bio-card";
import { Boxes } from "@/components/ui/background-boxes";
import { cn } from "@/lib/utils";
import Landing from "@/components/bio/landing";
import ResumeUp from "@/components/resume/Resume-Up";
import Resume from "@/components/resume/Resume";
import ProjectLayout from "@/components/projects/project-layout";

export default function Home() {
  const { scrollYProgress } = useScroll();
  const scaleX = useSpring(scrollYProgress, {
    stiffness: 100,
    damping: 30,
    restDelta: 0.001
  });

  return (
    <>
      {/* Progress bar */}
      <motion.div
        className="fixed top-0 left-0 right-0 h-1 bg-[#ff705c] origin-[0%] z-50"
        style={{ scaleX }}
      />

      {/* Background boxes */}
      <div className="fixed inset-0">
        <Boxes />
      </div>

      {/* Content layer - removed relative */}
      <div className="overflow-y-auto snap-y snap-mandatory min-h-screen">
        {/* Landing section */}
        <div className="snap-start min-h-screen">
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.2 }}
          >
            <Landing />
          </motion.div>
        </div>

        {/* Projects section */}
        <div className="min-h-screen snap-start pt-6 z-10">
          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ duration: 1 }}
            viewport={{ once: true }}
          >
            <ProjectLayout />
          </motion.div>
        </div>
      </div>
    </>
  );
}
