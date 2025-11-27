import type { Particle } from "@/shared/model/index.types";

export const generateParticles = (count: number): Particle[] => {
  return Array.from({ length: count }).map((_, idx) => ({
    id: idx,
    top: Math.random() * 100,
    left: Math.random() * 100,
    width: 8 + Math.random() * 22,
    height: 2 + Math.random() * 8,
    delay: Math.random() * 4,
    duration: 3 + Math.random() * 4,
    opacity: 0.15 + Math.random() * 0.35,
    rotate: -25 + Math.random() * 50,
  }));
};
