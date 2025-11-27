import MessageBox from "@/pages/landing/components/MessageBox";
import CardSection from "@/shared/components/CardSection";
import IconPerson from "@/shared/components/icons/IconPerson";

const LandingPage = () => {
  return (
    <main className="w-full min-h-screen flex flex-col justify-between items-center bg-surface-primary">
      <h1 className="font-title font-extrabold text-5xl text-on-surface-accent my-52">
        Welcome to My World
      </h1>
      <section className="w-full max-w-7xl">
        <h2 className="font-title font-semibold text-3xl text-on-surface-primary text-center mb-40">
          Introduce myself
        </h2>
        <ul>
          <li className="mb-20">
            <MessageBox text="Passion for self growth "></MessageBox>
          </li>
          <li className="mb-20">
            <MessageBox text="Tenacity for development"></MessageBox>
          </li>
          <li className="mb-20">
            <MessageBox text="Meticulousness for UI publishing"></MessageBox>
          </li>
          <li className="mb-20">
            <MessageBox text="User-centric"></MessageBox>
          </li>
          <li className="mb-20">
            <MessageBox text="Positiveness"></MessageBox>
          </li>
          <li className="mb-20">
            <MessageBox text="Engineer thinking"></MessageBox>
          </li>
          <li className="mb-20">
            <MessageBox text="Systematic collaboration"></MessageBox>
          </li>
          <li className="mb-20">
            <MessageBox text="Responsibility for my work"></MessageBox>
          </li>
        </ul>
        <IconPerson />
        <div className="h-1 w-full bg-line-primary my-52" />
      </section>
      {/* 프로젝트 소개 */}
      <section className="w-full max-w-7xl">
        <h2 className="font-title font-semibold text-3xl text-on-surface-primary text-center mb-40">
          Introduce my projects
        </h2>
        <ul className="grid grid-cols-3 grid-row-auto gap-10">
          <li>
            <CardSection
              title="First Project, Digital Card Blind Date Service"
              description1="A blind dating service for college students"
              description2="Recommended draw and random draw"
              description3="Dating Chatbot Simulation"
              stack="VanillaJS·CSS·HTML"
              maxW={450}
              height={350}
              position="left"
            />
          </li>
          <li>
            <CardSection
              title="Renewal Web Project of Date Service, SSUMPICK"
              description1="Deploy as a real service"
              description2="About 200 users per week"
              description3="Personalization enhanced with similar animal figures and point colors"
              stack="React·TailwindCSS·Zustand·Tanstack Query&Table"
              maxW={450}
              height={350}
              position="left"
            />
          </li>
          <li>
            <CardSection
              title="Serverless Technical Blog platform, Velogit"
              description1="Provides powerful writing automation"
              description2="A high-quality design system with 16 themes"
              description3="Commenting is possible without a server"
              stack="React·TailwindCSS·Zustand"
              maxW={450}
              height={350}
              position="left"
            />
          </li>
          <li>
            <CardSection
              title="Golf course control system, TRINITY Club"
              description1="Responsible for linear course map"
              description2="Real-time coordinates data handling, Using Own Design System"
              description3="Connect player, caddy, hole, and golf cart data"
              stack="React·TailwindCSS·Zustand·TanstackQuery"
              maxW={450}
              height={350}
              position="left"
            />
          </li>
          <li>
            <CardSection
              title="B2B automated quotation system, ETEVERS"
              description1="Display complex quote status in UI"
              description2="All UI publishing within the deadline"
              description3="B2B responsive and complex UI design experience"
              stack="React·TailwindCSS·Zustand·Tanstack Query&Table"
              maxW={450}
              height={350}
              position="left"
            />
          </li>
          <li>
            <CardSection
              title="Integrated route navigation solution, Ddareungi Map"
              description1="Providing walk-bike-walk route for Seoul's public bicycles"
              description2="Real-time voice navigation"
              description3="design Webview-RN data flow"
              stack="React Native·TailwindCSS·Context API·Zustand·Tanstack Query"
              maxW={450}
              height={350}
              position="left"
            />
          </li>
        </ul>
        <div className="h-1 w-full bg-line-primary my-52" />
      </section>
    </main>
  );
};

export default LandingPage;
