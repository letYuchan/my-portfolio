const Landing = () => {
  return (
    <div className="min-h-screen bg-surface-primary text-on-surface-primary">
      {/* HERO SECTION */}
      <header className="max-w-4xl mx-auto pt-24 pb-16 px-4">
        <h1 className="text-4xl font-bold text-on-surface-accent mb-4">
          Nebula Portfolio
        </h1>
        <p className="text-on-surface-muted text-lg leading-relaxed max-w-2xl">
          성운처럼 부드럽고 깊은 인터페이스. 3D 인터랙션과 심플한 UI 철학을 담은
          개인 포트폴리오입니다.
        </p>

        <div className="mt-6">
          <NebulaButton>Explore Projects</NebulaButton>
        </div>
      </header>

      {/* PROJECT SECTION */}
      <section className="max-w-5xl mx-auto px-4 pb-24">
        <h2 className="text-2xl font-semibold text-on-surface-accent mb-6">
          Featured Projects
        </h2>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <ProjectCard
            title="Galaxy Route Finder"
            description="Three.js 기반 인터랙티브 우주 네비게이션 시스템."
          />
          <ProjectCard
            title="Castle UI System"
            description="성 테마 기반의 UI/UX 컴포넌트 디자인 시스템."
          />
          <ProjectCard
            title="Nebula Engine"
            description="Luma AI 비디오 기반 자동 3D 모션 생성기."
          />
          <ProjectCard
            title="ZeroGravity Blog"
            description="Tailwind 기반의 미니멀한 개발 블로그."
          />
        </div>
      </section>
    </div>
  );
};

export default Landing;

export function ProjectCard({
  title,
  description,
}: {
  title: string;
  description: string;
}) {
  return (
    <div
      className="
        bg-surface-secondary 
        border border-line-primary 
        rounded-xl p-6
        shadow-strong
        hover:shadow-soft hover:border-line-accent
        transition-all
      "
    >
      <h3 className="text-xl font-semibold text-on-surface-accent mb-2">
        {title}
      </h3>
      <p className="text-on-surface-muted">{description}</p>
    </div>
  );
}

export function NebulaButton({ children }: { children: React.ReactNode }) {
  return (
    <button
      className="
        px-5 py-2 rounded-lg 
        bg-surface-secondary 
        border border-line-accent
        text-on-surface-accent 
        hover:bg-surface-primary hover:shadow-soft
        transition-all duration-300
      "
    >
      {children}
    </button>
  );
}
