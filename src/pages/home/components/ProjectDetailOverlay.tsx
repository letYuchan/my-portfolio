import type { Project } from "@/pages/home/model/home.types";
import IconClose from "@/shared/components/icons/IconClose";
import { useEffect } from "react";

interface ProjectDetailModalProps {
  project: Project;
  onClose: () => void;
}

const ProjectDetailModal = ({ project, onClose }: ProjectDetailModalProps) => {
  useEffect(() => {
    const handleEscKey = (e: KeyboardEvent) => {
      if (e.key === "Escape") onClose();
    };
    window.addEventListener("keydown", handleEscKey);
    return () => window.removeEventListener("keydown", handleEscKey);
  }, [onClose]);

  return (
    <div
      className="fixed inset-0 z-10 flex items-center justify-center bg-surface-primary/50 backdrop-blur-md"
      aria-modal="true"
      role="dialog"
      onClick={onClose}
    >
      <div
        className="relative z-20 flex h-[700px] w-[900px] flex-col overflow-hidden rounded-3xl border-2 border-line-accent bg-surface-primary shadow-soft"
        onClick={(e) => e.stopPropagation()}
      >
        <header className="flex flex-none items-center justify-between gap-4 border-b border-line-accent px-8 py-5">
          <div className="space-y-1">
            <p className="text-xs uppercase tracking-[0.22em] text-on-surface-muted">
              Project
            </p>
            <h2 className="text-3xl font-semibold text-on-surface-accent">
              {project.name}
            </h2>
            <p className="text-lg text-on-surface-primary">{project.role}</p>
          </div>

          <div className="flex flex-col items-end gap-1 text-on-surface-muted">
            <div>
              <span className="text-lg text-on-surface-muted">Period</span>
              <span className="ml-2 text-lg text-on-surface-primary">
                {project.period}
              </span>
            </div>
          </div>

          <button
            type="button"
            onClick={onClose}
            className="ml-4 inline-flex h-9 w-9 items-center justify-center rounded-full border-2 border-line-primary hover:border-line-accent hover:bg-surface-secondary"
          >
            <IconClose />
          </button>
        </header>

        {/* 본문 */}
        <div className="flex flex-1 gap-6 overflow-hidden bg-surface-secondary px-8 py-6">
          <div className="flex h-full flex-[0.55] items-center justify-center overflow-hidden rounded-2xl bg-gradient-to-b from-surface-primary via-accent-strong/40 to-transparent">
            <div className="origin-bottom rotate-[-2.5deg] rounded-[26px] border border-line-primary bg-black">
              <div className="flex items-center gap-1 border-b border-zinc-800/80 px-4 py-2">
                <span className="h-2.5 w-2.5 rounded-full bg-red-500/80" />
                <span className="h-2.5 w-2.5 rounded-full bg-yellow-400/80" />
                <span className="h-2.5 w-2.5 rounded-full bg-green-500/80" />
                <span className="ml-3 h-5 flex-1 rounded-md bg-zinc-800/80" />
              </div>
              <div className="h-[calc(100%-32px)] w-full overflow-hidden rounded-b-[24px] bg-black">
                <img
                  src={project.heroImage}
                  alt={project.name}
                  className="h-full w-full object-cover object-top"
                />
              </div>
            </div>
          </div>

          <div className="flex min-h-0 flex-[0.45] flex-col gap-4 overflow-y-auto pr-2 text-sm">
            {/* Overview */}
            <section className="space-y-2">
              <h3 className="text-md font-semibold uppercase tracking-[0.22em] text-on-surface-muted">
                Overview
              </h3>
              <p className="text-xs leading-relaxed text-on-surface-primary">
                {project.summary}
              </p>
            </section>

            {/* Problem */}
            <section className="space-y-2">
              <h3 className="text-md font-semibold uppercase tracking-[0.22em] text-on-surface-muted">
                Problem
              </h3>
              <p className="text-xs leading-relaxed text-on-surface-primary">
                {project.problem}
              </p>
            </section>

            {/* Solution */}
            <section className="space-y-2">
              <h3 className="text-md font-semibold uppercase tracking-[0.22em] text-on-surface-muted">
                Solution
              </h3>
              <p className="text-xs leading-relaxed text-on-surface-primary">
                {project.solution}
              </p>
            </section>

            {/* Highlights */}
            <section className="space-y-2">
              <h3 className="text-md font-semibold uppercase tracking-[0.22em] text-on-surface-muted">
                Highlights
              </h3>
              <ul className="list-disc space-y-1 pl-4 text-xs leading-relaxed text-on-surface-primary">
                {project.highlights.map((item) => (
                  <li key={item}>{item}</li>
                ))}
              </ul>
            </section>
            <div className="h-4" />
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProjectDetailModal;
