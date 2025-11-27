import CardSection from "../../shared/components/CardSection";

const LandingPage = () => {
  return (
    <main className="w-full min-h-screen flex flex-col justify-between items-center bg-surface-primary">
      <h1 className="font-title font-extrabold text-5xl text-on-surface-accent my-52">
        Welcome to My World
      </h1>
      <section>
        <h2>Introduce myself</h2>
        <nav>
          <ul>
            <li>Passion for learning and accumulated knowledge</li>
            <li>Projects completed with persistence</li>
            <li>Continuous challenges and growth</li>
          </ul>
        </nav>
        <section>
          <h2>Introduce my project</h2>
          <nav>
            <ul>
              <CardSection
                title="Online Card Blind Date Service"
                description1="First project"
                description2="Festival events online"
                description3="VanillaJS·CSS·HTML"
                maxW={500}
                height={250}
                position="left"
              />
            </ul>
          </nav>
        </section>
      </section>
    </main>
  );
};

export default LandingPage;
