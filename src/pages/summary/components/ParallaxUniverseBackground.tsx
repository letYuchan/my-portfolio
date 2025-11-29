import { useEffect, useState } from "react";
import type { CSSProperties } from "react";
import { motion } from "framer-motion";
import SoftRectParticles from "@/shared/components/SoftRectParticles";

const ParallaxUniverseBackground = () => {
  const [scrollProgress, setScrollProgress] = useState(0);

  useEffect(() => {
    const handleScroll = () => {
      const scrollTop = window.scrollY;
      const docHeight =
        document.documentElement.scrollHeight - window.innerHeight;
      const progress = docHeight > 0 ? scrollTop / docHeight : 0;
      setScrollProgress(progress);
    };

    handleScroll();
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const deepY = scrollProgress * -80;
  const nebulaY = scrollProgress * -200;
  const nebulaScale = 1 + scrollProgress * 0.15;
  const neonY = scrollProgress * -260;
  const glowY = scrollProgress * -180;
  const glowScale = 0.95 + scrollProgress * 0.15;

  return (
    <div className="fixed inset-0 -z-10 overflow-hidden bg-surface-primary pointer-events-none">
      {/* Layer 1: 아주 깊은 배경 그라디언트 (surface 계열) */}
      <motion.div
        className="
          absolute inset-0
          bg-[radial-gradient(circle_at_top,_#0D0C13,_#05050A_55%,_#020008_95%)]
        "
        style={{ y: deepY } as CSSProperties}
        transition={{ type: "tween", ease: "easeOut", duration: 0.3 }}
      />

      {/* Layer 2: 성운/구름 레이어 (accent/온서피스 계열) */}
      <motion.div
        className="absolute -inset-32 opacity-75 blur-3xl"
        style={{
          y: nebulaY,
          scale: nebulaScale,
        }}
        transition={{ type: "tween", ease: "easeOut", duration: 0.4 }}
      >
        {/* 보라 성운: accent.strong */}
        <div className="absolute left-[55%] top-[40%] h-80 w-80 rounded-full bg-[radial-gradient(circle,_#8F5BFF_0%,_transparent_60%)]" />

        {/* 시원한 블루 성운: 약간 차가운 레이어 */}
        <div className="absolute left-[28%] top-[18%] h-96 w-96 rounded-full bg-[radial-gradient(circle,_#3B82F6_0%,_transparent_65%)] opacity-70" />

        {/* 민트/연보라 하이라이트: accent.soft + on-surface.accent */}
        <div className="absolute left-[64%] top-[64%] h-72 w-72 rounded-full bg-[radial-gradient(circle,_#C6AAFF_0%,_transparent_60%)] opacity-60" />
        <div className="absolute left-[40%] top-[70%] h-64 w-64 rounded-full bg-[radial-gradient(circle,_#A97CFF_0%,_transparent_65%)] opacity-45" />
      </motion.div>

      {/* Layer 4: 네온 라인/시스템 패턴 (line/accent 계열) */}
      <motion.div
        className="absolute inset-0 opacity-55"
        style={{ y: neonY } as CSSProperties}
        transition={{ type: "tween", ease: "easeOut", duration: 0.35 }}
      >
        <div className="absolute right-[14%] top-[45%] h-[340px] w-[260px]">
          {/* line.accent + accent.soft 조합 */}
          <div className="absolute left-0 top-0 h-40 w-32 border border-line-accent/80" />
          <div className="absolute left-16 top-20 h-32 w-40 border border-accent-soft/70" />
          <div className="absolute left-8 top-40 h-40 w-28 border border-accent-strong/40" />
          <div className="absolute left-32 top-4 h-48 w-28 border border-line-primary/70" />
          <div className="absolute left-44 top-10 h-44 w-36 border border-[rgba(96,165,250,0.45)] shadow-[0_0_22px_rgba(96,165,250,0.35)]" />
          <div className="absolute right-12 top-44 h-24 w-20 border border-[rgba(14,165,233,0.40)] shadow-[0_0_16px_rgba(14,165,233,0.25)]" />
        </div>
      </motion.div>

      {/* Layer 5: 중앙 글로우 (on-surface.accent 계열) */}
      <motion.div
        className="
          absolute left-[55%] top-[55%]
          h-72 w-72 -translate-x-1/2 -translate-y-1/2
          rounded-full
          bg-[radial-gradient(circle,_rgba(169,124,255,0.95)_0%,_rgba(169,124,255,0.15)_45%,_transparent_75%)]
          shadow-soft
        "
        style={{
          y: glowY,
          scale: glowScale,
        }}
        initial={{ opacity: 0.6 }}
        animate={{ opacity: [0.55, 0.95, 0.7] }}
        transition={{
          duration: 10,
          repeat: Infinity,
          repeatType: "reverse",
          ease: "easeInOut",
        }}
      />

      {/* 부드러운 사각 파티클 (이것도 surface/accent 계열 안에서 떠다니는 느낌일 듯) */}
      <SoftRectParticles count={60} />
    </div>
  );
};

export default ParallaxUniverseBackground;
