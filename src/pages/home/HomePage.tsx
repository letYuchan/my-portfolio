import NebulaLoader from "@/shared/components/NebulaLoader";
import { useEffect, useState } from "react";

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

  return <div>Home Page</div>;
};

export default HomePage;
