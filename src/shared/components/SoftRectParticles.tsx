import type { Particle } from "@/shared/model/index.types";
import { generateParticles } from "@/shared/utils";
import { motion } from "framer-motion";
import { useEffect, useState } from "react";

interface SoftRectParticlesProps {
  count?: number;
  size?: number;
  className?: string;
}

const SoftRectParticles = ({
  count = 25,
  size = 6,
  className = "",
}: SoftRectParticlesProps) => {
  const [particles, setParticles] = useState<Particle[]>(() =>
    generateParticles(count)
  );

  useEffect(() => {
    setParticles(generateParticles(count));
  }, [count]);

  return (
    <div
      className={`pointer-events-none absolute inset-0 overflow-hidden ${className}`}
    >
      {particles.map((p) => (
        <motion.div
          key={p.id}
          initial={{ opacity: 0 }}
          animate={{
            opacity: [0, p.opacity, 0],
            y: [0, -4, 0],
          }}
          transition={{
            duration: p.duration,
            delay: p.delay,
            repeat: Infinity,
            ease: "easeInOut",
          }}
          style={{
            position: "absolute",
            top: `${p.top}%`,
            left: `${p.left}%`,
            width: `${size}px`,
            height: `${size}px`,
          }}
          className="bg-accent-soft rounded-[2px] shadow-soft"
        />
      ))}
    </div>
  );
};

export default SoftRectParticles;
