import { motion } from "motion/react";

export const BackgroundBeams = () => (
  <div className="absolute inset-0 overflow-hidden pointer-events-none">
    <div className="absolute inset-0 bg-gradient-to-br from-[#0a2540] via-[#1a5490] to-[#0a2540]" />
    {[...Array(20)].map((_, i) => (
      <motion.div
        key={i}
        className="absolute h-px bg-gradient-to-r from-transparent via-blue-400 to-transparent"
        style={{
          top: `${Math.random() * 100}%`,
          left: `${Math.random() * 100}%`,
          width: `${Math.random() * 300 + 100}px`,
          opacity: 0.1,
        }}
        animate={{
          x: [0, Math.random() * 100 - 50],
          opacity: [0, 0.3, 0],
        }}
        transition={{
          duration: Math.random() * 3 + 2,
          repeat: Infinity,
          delay: Math.random() * 2,
        }}
      />
    ))}
  </div>
);
