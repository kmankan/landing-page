'use client'
import { motion, useScroll, useSpring } from "framer-motion";
import InfoCard from "@/components/bio/info-card";
import BioCard from "@/components/bio/bio-card";
import { Boxes } from "@/components/ui/background-boxes";
import { cn } from "@/lib/utils";
import Landing from "@/components/bio/landing";
import ResumeUp from "@/components/resume/Resume-Up";
import Resume from "@/components/resume/Resume";

export default function Home() {
  const { scrollYProgress } = useScroll();
  const scaleX = useSpring(scrollYProgress, {
    stiffness: 100,
    damping: 30,
    restDelta: 0.001
  });

  return (
    <>
      <motion.div
        className="fixed top-0 left-0 right-0 h-1 bg-[#ff705c] origin-[0%] z-50"
        style={{ scaleX }}
      />
      {/* Boxes as fixed background */}
      <div className="fixed inset-0 z-0">
        <Boxes />
      </div>

      <div className="h-screen w-full overflow-y-auto snap-y snap-mandatory">
        <motion.div
          className="snap-start h-screen w-full relative z-10"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
        >
          <Landing />
        </motion.div>

        <motion.div
          className="snap-start h-screen w-full relative z-10"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
        >
          <ResumeUp />
        </motion.div>

        <motion.div
          className="snap-start h-screen w-full relative z-10"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
        >
          <Resume />
        </motion.div>
      </div>
    </>
  );
}
