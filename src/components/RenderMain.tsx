'use client'
import { motion, useScroll, useSpring, MotionGlobalConfig } from "framer-motion";
import Landing from "@/components/bio/landing";
import ProjectLayout from "@/components/projects/project-layout";
import LinkToCV from "@/components/resume/LinkToCV";
import { Boxes } from "@/components/ui/background-boxes"
import { useEffect, useState } from 'react';

export default function RenderMain() {
  const [isMobile, setIsMobile] = useState(true);

  useEffect(() => {
    // This only runs once on mount
    const width = window.innerWidth;
    const isMobileView = width < 768;
    setIsMobile(isMobileView);
    if (isMobileView) {
      MotionGlobalConfig.skipAnimations = true;
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
    //transition: { duration: number, ease: string };
  }
  const landingProps: LandingProps = {
    initial: { opacity: 1 },
    animate: { opacity: 1 },
    //transition: { duration: 0.1, ease: "easeOut" }
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
        {!isMobile && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 2.5, ease: "easeOut" }}
          >
            <Boxes />
          </motion.div>
        )}
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
