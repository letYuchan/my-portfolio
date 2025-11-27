import IconBlog from "@/shared/components/icons/IconBlog";
import IconEmail from "@/shared/components/icons/IconEmail";
import IconGithub from "@/shared/components/icons/IconGithub";

const LandingFooter = () => {
  return (
    <footer className="max-w-7xl px-4 w-full flex flex-row justify-between items-center mb-10">
      <section className="flex flex-col items-start gap-1">
        <p className="font-bold text-base text-on-surface-primary">
          © 2025 letYuchan. All rights reserved
        </p>
        <p className="font-normal text-sm text-on-surface-muted">
          Continuously evolving. Relentlessly improving
        </p>
        <p className="font-normal text-sm text-on-surface-muted">
          Thanks for visiting my world
        </p>
      </section>
      <section className="flex flex-row items-center flex-nowrap gap-6">
        {/* Blog */}
        <a
          href="https://letyuchan.github.io/velogit/"
          target="_blank"
          rel="noopener noreferrer"
          className="
            text-on-surface-primary 
            transition-all duration-300 
            hover:text-accent-strong
            hover:scale-125 
            hover:-translate-y-1
            hover:rotate-3
            hover:drop-shadow-[0_0_12px_rgba(169,124,255,0.8)]
            "
        >
          <IconBlog />
        </a>
        <a
          href="https://github.com/letYuchan"
          target="_blank"
          rel="noopener noreferrer"
          className="
            text-on-surface-primary 
            transition-all duration-300 
            hover:text-accent-strong
            hover:scale-125 
            hover:-translate-y-1
            hover:-rotate-3
            hover:drop-shadow-[0_0_12px_rgba(169,124,255,0.8)]
            "
        >
          <IconGithub />
        </a>
        <a
          href="mailto:yuchancho174@naver.com"
          className="
            text-on-surface-primary 
            transition-all duration-300 
            hover:text-accent-strong
            hover:scale-125 
            hover:-translate-y-1
            hover:rotate-2
            hover:drop-shadow-[0_0_12px_rgba(169,124,255,0.8)]
            "
        >
          <IconEmail />
        </a>
      </section>
    </footer>
  );
};

export default LandingFooter;
