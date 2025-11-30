import NebulaLoader from "@/shared/components/NebulaLoader";
import { useEffect, useMemo, useState } from "react";
import CircularGallery from "@/pages/home/components/CircularGallery";
import { projects } from "@/pages/home/model/home.data";
import ProjectDetailModal from "@/pages/home/components/ProjectDetailOverlay";
import AnimationButton from "@/shared/components/AnimationButton";
import { useNavigate } from "react-router-dom";
import ParallaxUniverseBackground from "@/pages/home/components/ParallaxUniverseBackground";

const HomePage = () => {
  const [isLoading, setIsLoading] = useState(true);
  const [selectedProjectIndex, setSelectedProjectIndex] = useState<
    number | null
  >(null);

  const navigate = useNavigate();

  useEffect(() => {
    const timer = setTimeout(() => {
      setIsLoading(false);
    }, 3000);
    return () => clearTimeout(timer);
  }, []);

  const galleryItems = useMemo(
    () =>
      projects.map((p) => ({
        image: p.heroImage,
        text: p.shortName,
      })),
    []
  );

  const handleItemClick = (
    _item: { image: string; text: string },
    index: number
  ) => {
    setSelectedProjectIndex(index);
  };

  if (isLoading) {
    return <NebulaLoader />;
  }

  return (
    <main className="w-full min-h-screen flex flex-col justify-center items-center relative">
      <section className="w-full max-w-7xl px-4 flex flex-col justify-center items-center relative h-[800px]">
        <h2 className="font-title font-semibold text-4xl text-on-surface-primary text-center mb-16">
          Choose my recent works
        </h2>

        <div className="relative w-full h-[500px]">
          <CircularGallery
            bend={2}
            textColor="#E7E4F5"
            borderRadius={0.05}
            scrollEase={0.02}
            items={galleryItems}
            onItemClick={handleItemClick}
          />
        </div>
      </section>
      <section
        style={{ width: "100%", height: 2000 }}
        className="flex flex-col justify-between items-center py-4 gap-40"
      >
        <p className="font-normal text-xl text-on-surface-muted">So...</p>
        <p className="font-normal text-xl text-on-surface-muted">
          Are you interested in me?
        </p>
        <p className="font-normal text-xl text-on-surface-muted">I always...</p>
        <p className="font-normal text-xl text-on-surface-muted">
          Ready To join your team!
        </p>
        <p className="font-normal text-xl text-on-surface-muted">
          Do you want to...
        </p>
        <AnimationButton
          onClick={() => navigate("/summary")}
          title="Contact Me?"
        />
      </section>
      {selectedProjectIndex !== null && (
        <ProjectDetailModal
          project={projects[selectedProjectIndex]}
          onClose={() => setSelectedProjectIndex(null)}
        />
      )}
      <ParallaxUniverseBackground />
    </main>
  );
};

export default HomePage;
