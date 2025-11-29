import ParallaxUniverseBackground from "@/pages/summary/components/ParallaxUniverseBackground";

const SummaryPage = () => {
  return (
    <main className="w-full min-h-screen flex flex-col justify-center items-center relative">
      <section className="w-full max-w-7xl px-4 flex flex-col justify-center items-center">
        <h2 className="font-title font-semibold text-4xl text-on-surface-primary text-center mb-16">
          My Skill Stack
        </h2>
      </section>
      <ParallaxUniverseBackground />
    </main>
  );
};

export default SummaryPage;
