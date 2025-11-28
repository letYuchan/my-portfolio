import CardSwap, { Card } from "@/pages/home/components/Card";
import NebulaLoader from "@/shared/components/NebulaLoader";
import { useEffect, useState } from "react";
import card1 from "@/assets/imgs/다운로드.jpeg";

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
    <main className="w-full h-screen bg-surface-primary flex justify-center items-center">
      <div style={{ height: "600px", position: "relative" }}>
        <CardSwap
          cardDistance={60}
          verticalDistance={70}
          delay={5000}
          pauseOnHover={false}
        >
          <Card>
            <h3>Card 1</h3>
            <img
              src={card1}
              alt=""
              className="w-full h-full object-cover rounded-xl"
            />
          </Card>
          <Card>
            <h3>Card 2</h3>
            <p>Your content here</p>
          </Card>
          <Card>
            <h3>Card 3</h3>
            <p>Your content here</p>
          </Card>
        </CardSwap>
      </div>
    </main>
  );
};

export default HomePage;
