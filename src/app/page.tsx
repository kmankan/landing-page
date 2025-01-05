'use client'
//import { motion, useScroll, useSpring } from "framer-motion";
import Landing from "@/components/bio/landing";
import ProjectLayout from "@/components/projects/project-layout";
import { Boxes } from "@/components/ui/background-boxes"
//import { useEffect, useState } from 'react';

export default function Home() {
  // const { scrollYProgress } = useScroll();
  // const scaleX = useSpring(scrollYProgress, {
  //   stiffness: 100,
  //   damping: 30,
  //   restDelta: 0.001
  // });

  // const [isSafari, setIsSafari] = useState(false);

  // useEffect(() => {
  //   if (typeof navigator === 'undefined' || navigator.vendor === "Apple Computer, Inc.") {
  //     setIsSafari(true);
  //     console.log("detected", navigator, navigator.vendor);
  //   }
  // }, []);

  return (
    <>
      {/* Progress bar */}
      {/* <motion.div
        className="fixed top-0 left-0 right-0 h-1 bg-[#ff705c] origin-[0%] z-50"
        style={{ scaleX }}
      /> */}

      {/* Background boxes */}
      <div className="fixed inset-0">
        <Boxes />
      </div>

      {/* Content layer - removed relative */}
      <div className="overflow-y-auto snap-y snap-mandatory min-h-screen">
        {/* Landing section */}
        <div className="snap-start min-h-screen">
          {/* {!isSafari && (
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.2 }}
            >
              <Landing />
            </motion.div>
          )}
          {isSafari && <Landing />} */}
          <Landing />
        </div>

        {/* Projects section */}
        <div className="min-h-screen snap-start pt-6 z-10">
          {/* {!isSafari && (
            <motion.div
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              transition={{ duration: 1 }}
              viewport={{ once: true }}
            >
              <ProjectLayout />
            </motion.div>
          )}
          {isSafari && <ProjectLayout />} */}
          <ProjectLayout />
        </div>
      </div>
    </>
  );
}
