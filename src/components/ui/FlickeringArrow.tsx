import { motion } from "framer-motion";

export default function FlickeringArrow() {
  return (
    <motion.svg
      viewBox="0 0 26 19"
      width="32"
      height="32"
    >
      {[15, 5, 10, 5, 10].map((y, index) => (
        <motion.path
          key={index}
          d={[
            "M 11 15 C 11 16.105 11.895 17 13 17 C 14.105 17 15 16.105 15 15 C 15 13.895 14.105 13 13 13 C 11.895 13 11 13.895 11 15 Z",
            "M 1 5 C 1 6.105 1.895 7 3 7 C 4.105 7 5 6.105 5 5 C 5 3.895 4.105 3 3 3 C 1.895 3 1 3.895 1 5 Z",
            "M 6 10 C 6 11.105 6.895 12 8 12 C 9.105 12 10 11.105 10 10 C 10 8.895 9.105 8 8 8 C 6.895 8 6 8.895 6 10 Z",
            "M 21 5 C 21 6.105 21.895 7 23 7 C 24.105 7 25 6.105 25 5 C 25 3.895 24.105 3 23 3 C 21.895 3 21 3.895 21 5 Z",
            "M 16 10 C 16 11.105 16.895 12 18 12 C 19.105 12 20 11.105 20 10 C 20 8.895 19.105 8 18 8 C 16.895 8 16 8.895 16 10 Z"
          ][index]}
          fill="black"
          animate={{ opacity: [0.2, 1, 0.2] }}
          transition={{
            duration: 1.2,
            repeat: Infinity,
            delay: index * 0.2
          }}
        />
      ))}
    </motion.svg>
  );
} 