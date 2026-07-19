"use client";

import { motion, useScroll } from "framer-motion";

export const ScrollProgress = () => {
  const { scrollYProgress } = useScroll();

  return (
    <motion.div
      className="fixed top-0 left-0 right-0 h-1 bg-green-400 origin-left z-[9999] shadow-[0_0_10px_rgba(34,197,94,0.8)]"
      style={{ scaleX: scrollYProgress }}
    />
  );
};