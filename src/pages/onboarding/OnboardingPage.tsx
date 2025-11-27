import { useEffect, useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import MessageBox from "@/pages/onboarding/components/MessageBox";
import CardSection from "@/shared/components/CardSection";
import Division from "@/shared/components/Division";
import IconPerson from "@/shared/components/icons/IconPerson";
import { MESSAGE_ITEMS } from "@/pages/onboarding/model/onboarding.data";
import IconPlanet from "@/shared/components/icons/IconPlanent";
import BlackHoleOrb from "@/pages/onboarding/components/ BlackHoleOrb";
import TypingText from "@/shared/components/TypingText";
import SoftRectParticles from "@/shared/components/SoftRectParticles";
import { PROJECT_ITEMS } from "@/pages/onboarding/model/onboarding.constants";
import OnboardingFooter from "@/pages/onboarding/components/OnboardingFooter";

const OnboardingPage = () => {
  const [isKnowMeButtonOpen, setIsKnowMeButtonOpen] = useState(false);

  useEffect(() => {
    window.scrollTo({
      top: 220,
      behavior: "instant",
    });
  }, []);

  return (
    <main className="w-full min-h-screen flex flex-col justify-between items-center bg-surface-primary relative">
      <div className="flex flex-row justify-between items-center gap-2 my-52">
        <h1 className="font-title font-extrabold text-5xl text-on-surface-accent ">
          Welcome to My World
        </h1>
        <IconPlanet />
      </div>

      {/* 섹션 1: Introduce myself */}
      <section className="w-full max-w-7xl">
        <h2 className="font-title font-semibold text-4xl text-on-surface-primary text-center mb-16">
          Introduce myself
        </h2>

        <div className="relative w-full mx-auto h-[500px] flex items-center justify-center">
          <div className="flex flex-col items-center gap-10">
            <AnimatePresence>
              {!isKnowMeButtonOpen && (
                <motion.button
                  type="button"
                  initial={{ opacity: 0, scale: 0.9, y: -8 }}
                  animate={{ opacity: 1, scale: 1, y: 0 }}
                  exit={{ opacity: 0, scale: 0.85, y: -8 }}
                  transition={{ duration: 0.25 }}
                  onClick={() => setIsKnowMeButtonOpen(true)}
                  className="
                    px-8 py-3 rounded-full 
                    bg-surface-secondary border border-line-accent 
                    text-on-surface-accent font-title font-semibold text-xl
                    shadow-soft hover:shadow-strong
                    transition-all duration-300
                  "
                >
                  Know Me?
                </motion.button>
              )}
            </AnimatePresence>

            <AnimatePresence mode="wait">
              {!isKnowMeButtonOpen && (
                <motion.div
                  key="icon"
                  initial={{ opacity: 0, scale: 0.9, y: 4 }}
                  animate={{ opacity: 1, scale: 1, y: 0 }}
                  exit={{ opacity: 0, scale: 0.8, y: 4 }}
                  transition={{ duration: 0.25 }}
                  className="flex flex-col items-center gap-3"
                >
                  <IconPerson />
                </motion.div>
              )}

              {isKnowMeButtonOpen && (
                <motion.p
                  key="label"
                  initial={{ opacity: 0, y: 4 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: 4 }}
                  transition={{ duration: 0.25 }}
                  className="font-title font-semibold text-on-surface-muted text-xl"
                >
                  This is me
                </motion.p>
              )}
            </AnimatePresence>
          </div>

          <AnimatePresence>
            {isKnowMeButtonOpen &&
              MESSAGE_ITEMS.map((item, index) => (
                <motion.div
                  key={item.text}
                  initial={item.initial}
                  animate={{ opacity: 1, x: 0, y: 0, scale: 1 }}
                  exit={{ opacity: 0, scale: 0.95 }}
                  transition={{
                    duration: 0.4,
                    delay: 0.08 * index,
                    type: "spring",
                    stiffness: 180,
                    damping: 18,
                  }}
                  className={item.className}
                >
                  <MessageBox text={item.text} />

                  <div className="absolute left-1/2 -bottom-[67px] -translate-x-1/2 flex flex-col items-center gap-1">
                    <div className="w-px h-10 border-l border-dotted border-line-accent opacity-70" />
                    <div className="w-3 h-3 rounded-full bg-accent-strong shadow-md" />
                  </div>
                </motion.div>
              ))}
          </AnimatePresence>
        </div>

        <Division />
      </section>

      {/* 섹션 2: 프로젝트 소개 */}
      <section className="w-full max-w-7xl">
        <h2 className="font-title font-semibold text-4xl text-on-surface-primary text-center mb-40">
          Introduce my projects
        </h2>
        <ul className="grid grid-cols-3 grid-row-auto gap-10">
          {PROJECT_ITEMS.map((project, index) => (
            <motion.li
              key={project.title}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: false, amount: 0.2 }}
              transition={{
                duration: 0.5,
                delay: index * 0.08,
                type: "spring",
                stiffness: 140,
                damping: 18,
              }}
            >
              <CardSection
                title={project.title}
                description1={project.description1}
                description2={project.description2}
                description3={project.description3}
                stack={project.stack}
                maxW={450}
                height={380}
                position="left"
              />
            </motion.li>
          ))}
        </ul>

        <Division />
      </section>

      {/* 섹션3: Entry for my exhibition */}
      <section className="relative w-full max-w-7xl flex flex-col items-center py-40">
        {/* 텍스트는 위에 얹혀 있음 */}
        <div className="h-[150px]">
          <h2 className="relative z-10 font-title font-semibold text-4xl text-on-surface-primary text-center mb-16">
            <TypingText
              strings={[
                "Ready to explore the world crafted along my journey as a front-end engineer?",
              ]}
            />
          </h2>
        </div>
        {/* 블랙홀: 섹션 중앙에 고정, 배경처럼 */}
        <BlackHoleOrb
          size={500}
          className="
      pointer-events-none
      absolute
      left-1/2 top-1/2
      -translate-x-1/2 -translate-y-1/2
    "
        />
        <motion.button
          type="button"
          initial={{ opacity: 0, scale: 0.9, y: -8 }}
          animate={{ opacity: 1, scale: 1, y: 0 }}
          exit={{ opacity: 0, scale: 0.85, y: -8 }}
          transition={{ duration: 0.25 }}
          onClick={() => setIsKnowMeButtonOpen(true)}
          className="
                    px-8 py-3 rounded-full 
                    bg-surface-secondary border border-line-accent 
                    text-on-surface-accent font-title font-semibold text-xl
                    shadow-soft hover:shadow-strong
                    transition-all duration-300
                  "
        >
          Click Me!
        </motion.button>
        <Division />
      </section>
      <OnboardingFooter />
      <SoftRectParticles count={44} />
    </main>
  );
};

export default OnboardingPage;
