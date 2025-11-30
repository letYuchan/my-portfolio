import LogoLoop from "@/pages/summary/components/LogoLoop";
import StackBadge from "@/pages/summary/components/StackBadge";
import { stackNameList, techLogos } from "@/pages/summary/model/summary.data";

const DeveloperSummarySection = () => {
  return (
    <section className="w-full mt-12">
      <div className="mx-auto max-w-5xl flex flex-col gap-8">
        <div className="flex flex-col gap-8 md:flex-row md:items-start md:gap-16">
          {/* 왼쪽: 포지션 + 한 줄 소개 */}
          <div className="space-y-4 flex-1 min-w-0">
            <p className="text-[11px] uppercase tracking-[0.35em] text-on-surface-muted">
              POSITION
            </p>
            <div className="space-y-1">
              <p className="text-on-surface-primary font-semibold text-2xl md:text-3xl">
                Frontend · Web Development
              </p>
              <p className="text-on-surface-primary font-semibold text-2xl md:text-3xl">
                Frontend · Mobile Development
              </p>
            </div>
            <p className="text-sm text-on-surface-muted leading-relaxed max-w-lg">
              I build systems with depth, not shortcuts — crafting seamless,
              intentional experiences across web and mobile.
            </p>
          </div>

          {/* 오른쪽: 키워드/역할 스택 배지 */}
          <div className="md:w-64 lg:w-72 shrink-0">
            <p className="mb-3 text-[11px] uppercase tracking-[0.3em] text-on-surface-muted">
              FOCUS AREAS
            </p>
            <div className="flex flex-wrap gap-2">
              {stackNameList.map((stackName, idx) => (
                <StackBadge key={idx} text={stackName} />
              ))}
            </div>
          </div>
        </div>

        <div className="h-px w-full bg-line-primary/40" />

        {/* 하단: 로고 루프 */}
        <div className="space-y-3">
          <div className="flex items-center justify-between gap-4">
            <p className="text-[11px] uppercase tracking-[0.3em] text-on-surface-muted">
              TOOLING & STACK
            </p>
            <p className="text-[10px] text-on-surface-muted/70">
              Hover to slow · Click to explore
            </p>
          </div>

          <div className="w-full overflow-hidden">
            <LogoLoop
              logos={techLogos}
              speed={80}
              direction="right"
              logoHeight={48}
              gap={40}
              hoverSpeed={20}
              fadeOut
            />
          </div>
        </div>
      </div>
    </section>
  );
};

export default DeveloperSummarySection;
