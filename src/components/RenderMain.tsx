'use client'
import { motion, useScroll, useSpring, MotionGlobalConfig } from "framer-motion";
import Landing from "@/components/bio/landing";
import ProjectLayout from "@/components/projects/project-layout";
import LinkToCV from "@/components/resume/LinkToCV";
import { Boxes } from "@/components/ui/background-boxes"
import { useEffect, useState } from 'react';

export default function RenderMain() {
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    setIsMobile(/iPhone|iPad|iPod|Android/i.test(navigator.userAgent));
    console.log("detected", navigator, navigator.vendor);
    if (/iPhone|iPad|iPod|Android/i.test(navigator.userAgent)) {
      MotionGlobalConfig.skipAnimations = true
    }
  }, []);

  const { scrollYProgress } = useScroll();
  const scaleX = useSpring(scrollYProgress, {
    stiffness: 100,
    damping: 30,
    restDelta: 0.001
  });

  interface LandingProps {
    initial: { opacity: number };
    animate: { opacity: number };
    transition: { duration: number };
  }
  const landingProps: LandingProps = {
    initial: { opacity: 0 },
    animate: { opacity: 1 },
    transition: { duration: 0.2 }
  }

  interface ProjectsProps {
    initial: { opacity: number };
    whileInView: { opacity: number };
    transition: { duration: number };
    viewport: { once: boolean };
  }

  const projectsProps: ProjectsProps = {
    initial: { opacity: 0 },
    whileInView: { opacity: 1 },
    transition: { duration: 1 },
    viewport: { once: true }
  }

  return (
    <>
      {/* Progress bar */}
      <motion.div
        className="fixed top-0 left-0 right-0 h-1 bg-[#ff705c] origin-[0%] z-50"
        style={isMobile ? { scaleX: 0 } : { scaleX }}
      />

      {/* Background boxes */}
      <div className="fixed inset-0">
        {!isMobile && <Boxes />}
      </div>

      {/* Content layer - removed relative */}
      <div className="overflow-y-auto snap-y snap-mandatory min-h-screen">
        <div className="snap-start min-h-screen">
          {!isMobile ? (
            <motion.div
              {...landingProps}
            >
              <Landing />
            </motion.div>
          ) : (
            <Landing />
          )}
        </div>

        {/* Projects section */}
        <div className="min-h-screen snap-start pt-6 z-10">
          {!isMobile ? (
            <motion.div
              {...projectsProps}
            >
              <ProjectLayout />
            </motion.div>
          ) : (
            <ProjectLayout />
          )}
          <div className="relative flex justify-center items-center z-10 my-32">
            <LinkToCV />
          </div>
        </div>
      </div>
    </>
  );
}
