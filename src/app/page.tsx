'use client'
import { motion, useScroll, useSpring, MotionGlobalConfig } from "framer-motion";
import Landing from "@/components/bio/landing";
import ProjectLayout from "@/components/projects/project-layout";
import { Boxes } from "@/components/ui/background-boxes"
import { useEffect, useState } from 'react';

export default function Home() {
  const isMobile = /iPhone|iPad|iPod|Android/i.test(navigator.userAgent);

  useEffect(() => {
    console.log("detected", navigator, navigator.vendor);
    console.log("isMobile", isMobile);
    if (isMobile) {
      MotionGlobalConfig.skipAnimations = true
    }
  }, []);

  const { scrollYProgress } = useScroll();
  const scaleX = useSpring(scrollYProgress, {
    stiffness: 100,
    damping: 30,
    restDelta: 0.001
  });

  const landingProps = {
    initial: { opacity: 0 },
    animate: { opacity: 1 },
    transition: { duration: 0.2 }
  }

  const projectsProps = {
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
        </div>
      </div>
    </>
  );
}
