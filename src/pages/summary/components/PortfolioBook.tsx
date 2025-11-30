import DeveloperSummarySection from "@/pages/summary/components/DeveloperSummarySection";

const PortfolioBook = () => {
  return (
    <div className="relative h-screen w-full overflow-hidden bg-surface-primary">
      {/* 페이지 인디케이터 (오른쪽 상단 작은 점들) */}
      <div className="pointer-events-none absolute right-6 top-6 z-20 flex gap-2">
        <div
          className={`h-1.5 w-4 rounded-full transition-all bg-accent-soft`}
        />
      </div>

      {/* 전체 가로 트랙 */}
      <div className="flex h-full justify-start">
        {/* 책등 Spine */}
        <div className="h-full w-20 bg-accent-strong py-8 flex flex-col justify-between items-center flex-nowrap">
          {/* 동그라미 바인딩 구멍들 */}
          <div className="flex flex-col gap-10 items-center">
            <div className="bg-surface-primary h-10 w-10 rounded-full" />
            <div className="bg-surface-primary h-10 w-10 rounded-full" />
            <div className="bg-surface-primary h-10 w-10 rounded-full" />
            <div className="bg-surface-primary h-10 w-10 rounded-full" />
            <div className="bg-surface-primary h-10 w-10 rounded-full" />
          </div>
          {/* 책등 텍스트  */}
          <div className="relative bottom-12 -rotate-90">
            <p className="font-title text-sm tracking-[0.35em] text-on-surface-primary/70">
              PORTFOLIO
            </p>
          </div>
        </div>
        <div className="flex-1 w-full grow flex-col bg-surface-primary px-16 py-16">
          {/* 페이지 내용 */}
          <header className="w-full flex flex-col items-start gap-4 mb-16">
            <h2 className="font-normal text-on-surface-muted text-xl">hello</h2>
            <h1 className="font-bold text-on-surface-accent text-4xl">HELLO</h1>
          </header>
          <DeveloperSummarySection />
        </div>
      </div>
    </div>
  );
};

export default PortfolioBook;
