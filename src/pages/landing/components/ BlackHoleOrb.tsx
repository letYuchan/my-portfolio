import { motion } from "framer-motion";

interface BlackHoleOrbProps {
  size?: number; // px
  className?: string;
}

const BlackHoleOrb = ({ size = 260, className = "" }: BlackHoleOrbProps) => {
  const dim = `${size}px`;

  return (
    <div
      style={{ width: dim, height: dim }}
      className={`relative flex items-center justify-center ${className}`}
    >
      {/* 바깥 글로우 (보라빛 성운) */}
      <motion.div
        className="
          absolute inset-0 rounded-full
          blur-3xl
        "
        style={{
          background:
            "radial-gradient(circle at center, rgba(201,170,255,0.24), transparent 60%)",
        }}
        animate={{ opacity: [0.4, 0.75, 0.4] }}
        transition={{ duration: 5, repeat: Infinity, ease: "easeInOut" }}
      />

      {/* 바깥 링 1 (느리게 회전) */}
      <motion.div
        className="
          absolute inset-[6%] rounded-full
          border border-line-primary/60
        "
        animate={{ rotate: 360 }}
        transition={{ duration: 20, repeat: Infinity, ease: "linear" }}
      />

      {/* 바깥 링 2 (반대 방향으로 회전) */}
      <motion.div
        className="
          absolute inset-[14%] rounded-full
          border border-line-accent
        "
        animate={{ rotate: -360 }}
        transition={{ duration: 12, repeat: Infinity, ease: "linear" }}
      />

      {/* 사건의 지평선 디스크(Conic gradient) */}
      <motion.div
        className="
          absolute inset-[25%] rounded-full
          shadow-soft
        "
        style={{
          background:
            "conic-gradient(from 110deg, rgba(143,91,255,0.9), rgba(198,170,255,0.05), rgba(143,91,255,0.9))",
        }}
        animate={{ rotate: 360 }}
        transition={{ duration: 9, repeat: Infinity, ease: "linear" }}
      />

      {/* 디스크 안쪽 얇은 링 */}
      <div
        className="
          absolute inset-[30%] rounded-full
          border border-line-accent/80
          opacity-80
        "
      />

      {/* 코어(블랙홀 중심) */}
      <motion.div
        className="
          absolute inset-[40%] rounded-full
          bg-surface-primary
          shadow-strong
        "
        animate={{ scale: [1, 1.08, 1] }}
        transition={{ duration: 3.5, repeat: Infinity, ease: "easeInOut" }}
      />

      {/* 작은 별 포인트들 */}
      <motion.div
        className="
          absolute w-2 h-2 rounded-full
          bg-on-surface-accent/80
          left-3 top-7
        "
        animate={{ opacity: [0.2, 1, 0.2], scale: [1, 1.3, 1] }}
        transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
      />
      <motion.div
        className="
          absolute w-1.5 h-1.5 rounded-full
          bg-on-surface-muted/80
          right-6 top-2
        "
        animate={{ opacity: [0.3, 1, 0.3], scale: [1, 1.2, 1] }}
        transition={{ duration: 3.2, repeat: Infinity, ease: "easeInOut" }}
      />
      <motion.div
        className="
          absolute w-1.5 h-1.5 rounded-full
          bg-on-surface-accent/60
          left-12 bottom-3
        "
        animate={{ opacity: [0.2, 1, 0.2], scale: [1, 1.25, 1] }}
        transition={{ duration: 5, repeat: Infinity, ease: "easeInOut" }}
      />
    </div>
  );
};

export default BlackHoleOrb;
