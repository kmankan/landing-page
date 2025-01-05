import { motion } from "motion/react";

export default function LinkToCV() {
  return (
    <motion.a
      href="https://cv.mahlen.dev"
      target="_blank"
      rel="noopener noreferrer"
      initial={{ opacity: 1, y: 0 }}
      animate={{
        y: [0, 10, 0]
      }}
      transition={{
        duration: 2,
        repeat: Infinity,
        ease: "easeInOut"
      }}
    >
      <button className="bg-[#ff705c] font-geist-mono text-white px-4 py-2 rounded-md">View CV</button>
    </motion.a>
  );
}