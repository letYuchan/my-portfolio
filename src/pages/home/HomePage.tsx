import NebulaLoader from "@/shared/components/NebulaLoader";
import { useEffect, useState } from "react";
import card1 from "@/assets/imgs/digitalCardDateService.png";
import card2 from "@/assets/imgs/ssumpick.png";
import card3 from "@/assets/imgs/trinity.png";
import card4 from "@/assets/imgs/etevers.png";
import card5 from "@/assets/imgs/cloody.png";
import card6 from "@/assets/imgs/velogit.png";
import card7 from "@/assets/imgs/ddareungiMap.png";
import background from "@/assets/imgs/homeBg.png";
import CircularGallery from "@/pages/home/CircularGallery";
import SoftRectParticles from "@/shared/components/SoftRectParticles";

const HomePage = () => {
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    setTimeout(() => {
      setIsLoading(false);
    }, 3000);
  }, []);

  if (isLoading) {
    return <NebulaLoader />;
  }

  return (
    <main
      className="w-full min-h-screen flex flex-col justify-center items-center bg-surface-primary relative bg-cover bg-center bg-no-repeat"
      style={{ backgroundImage: `url(${background})` }}
    >
      <section className="w-full max-w-7xl px-4 flex flex-col justify-center items-center relative h-[600px]">
        <h2 className="font-title font-semibold text-4xl text-on-surface-primary text-center mb-16">
          Choose my recent works
        </h2>
        <CircularGallery
          bend={3}
          textColor="#E7E4F5"
          borderRadius={0.05}
          scrollEase={0.02}
          items={[
            { image: card1, text: "Digital Card Date Service" },
            { image: card2, text: "SSUMPICK" },
            { image: card3, text: "TRINITY" },
            { image: card4, text: "ETEVERS" },
            { image: card5, text: "CLOODY" },
            { image: card6, text: "VELOGIT" },
            { image: card7, text: "DDAREUNGI MAP" },
          ]}
        />
      </section>
      <SoftRectParticles />
    </main>
  );
};

export default HomePage;
