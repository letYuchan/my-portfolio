import NebulaLoader from "@/shared/components/NebulaLoader";
import { useEffect, useMemo, useState } from "react";
import background from "@/assets/imgs/homeBg.png";
import CircularGallery from "@/pages/home/components/CircularGallery";
import { projects } from "@/pages/home/model/home.data";
import ProjectDetailModal from "@/pages/home/components/ProjectDetailOverlay";

const HomePage = () => {
  const [isLoading, setIsLoading] = useState(true);
  const [selectedProjectIndex, setSelectedProjectIndex] = useState<
    number | null
  >(null);

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
    <main
      className="w-full min-h-screen flex flex-col justify-center items-center relative bg-cover bg-center bg-no-repeat"
      style={{ backgroundImage: `url(${background})` }}
    >
      <section className="w-full max-w-7xl px-4 flex flex-col justify-center items-center relative h-[600px]">
        <h2 className="font-title font-semibold text-4xl text-on-surface-primary text-center mb-16">
          Choose my recent works
        </h2>

        <div className="relative w-full h-[500px]">
          <CircularGallery
            bend={3}
            textColor="#E7E4F5"
            borderRadius={0.05}
            scrollEase={0.02}
            items={galleryItems}
            onItemClick={handleItemClick}
          />
        </div>
      </section>
      <button></button>

      {selectedProjectIndex !== null && (
        <ProjectDetailModal
          project={projects[selectedProjectIndex]}
          onClose={() => setSelectedProjectIndex(null)}
        />
      )}
    </main>
  );
};

export default HomePage;
