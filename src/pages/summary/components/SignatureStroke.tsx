/* ---------------- SVG 서명 애니메이션 ---------------- */
const SignatureStroke = () => {
  return (
    <svg
      className="mt-6 w-56 mx-auto"
      viewBox="0 0 280 100"
      fill="none"
      aria-hidden="true"
    >
      <defs>
        {/* 그라디언트 */}
        <linearGradient
          id="signatureGradient"
          x1="0%"
          y1="0%"
          x2="100%"
          y2="0%"
        >
          <stop offset="0%" stopColor="#D6B6FF" />
          <stop offset="45%" stopColor="#B682FF" />
          <stop offset="100%" stopColor="#7F5CFF" />
        </linearGradient>

        {/* 은은한 글로우 */}
        <filter id="signatureGlow" x="-20%" y="-20%" width="140%" height="140%">
          <feGaussianBlur stdDeviation="3" result="blur" />
          <feColorMatrix
            in="blur"
            type="matrix"
            values="
              0 0 0 0 0.80
              0 0 0 0 0.72
              0 0 0 0 1
              0 0 0 0.55 0
            "
          />
          <feMerge>
            <feMergeNode />
            <feMergeNode in="SourceGraphic" />
          </feMerge>
        </filter>
      </defs>

      {/* 메인 시그니처 그룹 */}
      <g
        transform="translate(6, 4) rotate(-3, 140, 50)"
        filter="url(#signatureGlow)"
      >
        {/* 메인 연속 스트로크 */}
        <path
          d="M10 52 
             C55 5, 185 5, 250 48 
             C210 32, 95 32, 32 65 
             C50 18, 120 8, 140 60 
             S198 88, 215 40
             Q120 64 138 72 
             T176 66"
          className="signature-main"
        />
        {/* 교차선 (이니셜 느낌) */}
        <path d="M142 32 L218 90 M178 20 L220 74" className="signature-cross" />
      </g>

      <style>{`
        .signature-main,
        .signature-cross {
          fill: none;
          stroke: url(#signatureGradient);
          stroke-width: 2.4;
          stroke-linecap: round;
          stroke-linejoin: round;
          stroke-dasharray: 1;
          stroke-dashoffset: 1;
        }

        .signature-main {
          stroke-dasharray: 900;
          stroke-dashoffset: 900;
          animation: signature-draw 1.8s cubic-bezier(0.33, 0.0, 0.17, 1) forwards;
        }

        .signature-cross {
          stroke-dasharray: 260;
          stroke-dashoffset: 260;
          animation: signature-draw 0.9s ease-out forwards 1.4s;
        }

        @keyframes signature-draw {
          to {
            stroke-dashoffset: 0;
          }
        }
      `}</style>
    </svg>
  );
};

export default SignatureStroke;
