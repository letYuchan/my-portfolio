import { useEffect, useMemo, useRef, useState } from "react";
import CareerAndCourseSection from "@/pages/summary/components/CareerAndCourseSection";
import ContactSection from "@/pages/summary/components/ContactSection";
import DeveloperSummarySection from "@/pages/summary/components/DeveloperSummarySection";
import AwardAndCertificationSection from "@/pages/summary/components/AwardAndCertificationSection";
import pageFlipSound from "@/assets/sounds/pageFlip.mp3";
import NebulaLoader from "@/shared/components/NebulaLoader";

const BOOK_PAGES = [
  {
    id: "developer",
    label: "Developer Summary",
    tag: "Developer Summary",
    gradient:
      "linear-gradient(120deg, rgba(209,191,255,0.35) 0%, rgba(209,191,255,0.05) 65%, transparent 100%)",
    Component: DeveloperSummarySection,
  },
  {
    id: "career",
    label: "Career & Course",
    tag: "Career & Course",
    gradient:
      "linear-gradient(120deg, rgba(255,206,230,0.4) 0%, rgba(255,206,230,0.08) 70%, transparent 100%)",
    Component: CareerAndCourseSection,
  },
  {
    id: "awards",
    label: "Awards & Certifications",
    tag: "Awards & Certs",
    gradient:
      "linear-gradient(125deg, rgba(255,224,185,0.45) 0%, rgba(255,224,185,0.1) 75%, transparent 100%)",
    Component: AwardAndCertificationSection,
  },
  {
    id: "contact",
    label: "Contact",
    tag: "Contact",
    gradient:
      "linear-gradient(130deg, rgba(192,215,255,0.35) 0%, rgba(192,215,255,0.08) 70%, transparent 100%)",
    Component: ContactSection,
  },
] as const;

const PortfolioBook = () => {
  const [activePage, setActivePage] = useState(0);
  const [isLoading, setIsLoading] = useState(true);

  const isLockedRef = useRef(false);
  const releaseTimeout = useRef<number>();
  const audioRef = useRef<HTMLAudioElement | null>(null);

  const totalPages = BOOK_PAGES.length;

  const pageMeta = useMemo(
    () => BOOK_PAGES.map((page, idx) => ({ ...page, order: idx })),
    []
  );

  const clearLockTimeout = () => {
    if (releaseTimeout.current) {
      window.clearTimeout(releaseTimeout.current);
      releaseTimeout.current = undefined;
    }
  };

  const scheduleRelease = () => {
    clearLockTimeout();
    releaseTimeout.current = window.setTimeout(() => {
      isLockedRef.current = false;
    }, 900);
  };

  const goToPage = (target: number) => {
    if (target === activePage) {
      isLockedRef.current = false;
      return;
    }

    const clamped = Math.min(Math.max(target, 0), totalPages - 1);
    if (clamped === activePage) {
      isLockedRef.current = false;
      return;
    }

    if (audioRef.current) {
      audioRef.current.currentTime = 0;
      audioRef.current.play();
    }

    setActivePage(clamped);
    scheduleRelease();
  };

  const handleWheel = (event: React.WheelEvent<HTMLDivElement>) => {
    if (Math.abs(event.deltaY) < 12) return;
    event.preventDefault();
    if (isLockedRef.current) return;
    isLockedRef.current = true;

    if (event.deltaY < 0) {
      goToPage(activePage + 1);
      return;
    }

    goToPage(activePage - 1);
  };

  useEffect(() => {
    return () => {
      clearLockTimeout();
    };
  }, []);

  useEffect(() => {
    const timer = setTimeout(() => {
      setIsLoading(false);
    }, 3000);
    return () => clearTimeout(timer);
  }, []);

  if (isLoading) {
    return <NebulaLoader />;
  }

  return (
    <div
      className="relative h-screen w-full overflow-hidden bg-surface-primary"
      style={{ overscrollBehaviorY: "contain" }}
      onWheelCapture={handleWheel}
    >
      <audio ref={audioRef} src={pageFlipSound} preload="auto" />

      {/* 상단 페이지 인디케이터 */}
      <div className="absolute right-8 top-6 z-30 flex items-center gap-6 rounded-full border border-line-primary/30 bg-surface-primary/85 px-6 py-3 backdrop-blur">
        {pageMeta.map((page, idx) => {
          const isActive = idx === activePage;
          return (
            <button
              key={page.id}
              className="group flex items-center gap-3 text-right"
              onClick={() => {
                if (isLockedRef.current) return;
                isLockedRef.current = true;
                goToPage(idx);
              }}
            >
              <span
                className={`text-[10px] tracking-[0.3em] uppercase transition-colors ${
                  isActive
                    ? "text-on-surface-accent"
                    : "text-on-surface-muted/40"
                }`}
              >
                {String(idx + 1).padStart(2, "0")} · {page.tag}
              </span>
              <span
                className={`h-[3px] rounded-full transition-all duration-500 ${
                  isActive
                    ? "w-10 bg-accent-strong shadow-[0_0_10px_rgba(169,124,255,0.6)]"
                    : "w-4 bg-line-primary/50"
                }`}
              />
            </button>
          );
        })}
      </div>

      <div className="flex h-full justify-start">
        {/* 책등 */}
        <div className="relative h-full w-24 bg-gradient-to-b from-accent-strong to-accent-soft text-surface-primary shadow-2xl">
          <div className="absolute inset-y-6 left-1/2 -translate-x-1/2 flex flex-col justify-between py-10">
            {[...Array(5)].map((_, idx) => (
              <span
                key={idx}
                className="h-10 w-10 rounded-full border-2 border-surface-primary/40 bg-transparent"
              />
            ))}
          </div>
          <div className="absolute bottom-16 left-1/2 -translate-x-1/2 -rotate-90">
            <p className="font-title tracking-[0.5em] text-xs text-surface-primary/80">
              PORTFOLIO
            </p>
          </div>
        </div>

        {/* 페이지 트랙 */}
        <div className="relative flex-1 h-full bg-surface-primary/80 px-6 py-10 overflow-hidden">
          <div className="absolute inset-0 pointer-events-none">
            <div className="absolute inset-y-0 left-0 w-24 bg-gradient-to-r from-black/15 to-transparent" />
            <div className="absolute inset-y-0 right-0 w-16 bg-gradient-to-l from-black/10 to-transparent" />
          </div>

          <div
            className="relative flex h-full transition-transform duration-[900ms] ease-[cubic-bezier(0.22,1,0.36,1)]"
            style={{
              transform: `translateX(-${activePage * 100}%)`,
            }}
          >
            {pageMeta.map((page, idx) => {
              const PageComponent = page.Component;
              const offset = idx - activePage;
              const clampedOffset = Math.max(-1, Math.min(1, offset));
              const isActive = offset === 0;
              const depth = Math.abs(offset);
              const tiltBias = idx % 2 === 0 ? -2 : 2;
              const tilt = clampedOffset * 8 + tiltBias;

              return (
                <section
                  key={page.id}
                  className="relative min-w-full h-full flex-shrink-0 px-8 py-10"
                  style={{
                    transform: `perspective(1600px) rotateY(${tilt}deg) scale(${
                      isActive ? 1 : 0.95
                    })`,
                    transition:
                      "transform 0.85s cubic-bezier(0.16,1,0.3,1), opacity 0.6s ease",
                    opacity: depth > 1 ? 0.25 : depth === 1 ? 0.6 : 1,
                    filter: isActive
                      ? "drop-shadow(0px 30px 60px rgba(15,15,20,0.35))"
                      : "brightness(0.92)",
                  }}
                >
                  <div
                    className="absolute inset-4 rounded-[26px] pointer-events-none mix-blend-soft-light"
                    style={{ background: page.gradient }}
                  />

                  <div className="relative h-full rounded-[28px] border border-line-primary/40 bg-surface-primary/95 backdrop-blur-md shadow-[0_20px_60px_rgba(10,10,15,0.35)] flex flex-col overflow-hidden">
                    <header className="flex items-center justify-between gap-4 border-b border-line-primary/30 px-10 py-6 uppercase tracking-[0.4em] text-[10px] text-on-surface-muted/70">
                      <span>{page.label}</span>
                      <span>
                        {String(idx + 1).padStart(2, "0")} /{" "}
                        {String(totalPages).padStart(2, "0")}
                      </span>
                    </header>
                    <div className="flex-1 overflow-hidden px-10 py-8">
                      <div className="h-full w-full overflow-y-auto pr-4">
                        <PageComponent />
                      </div>
                    </div>
                  </div>
                </section>
              );
            })}
          </div>
        </div>
      </div>
    </div>
  );
};

export default PortfolioBook;
