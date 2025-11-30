import type { BookSectionId } from "@/pages/summary/model/summary.types";
import IconCss from "@/shared/components/icons/IconCss";
import IconDocker from "@/shared/components/icons/IconDocker";
import IconGit from "@/shared/components/icons/IconGit";
import IconHtml from "@/shared/components/icons/IconHtml";
import IconNext from "@/shared/components/icons/IconNext";
import IconPnpm from "@/shared/components/icons/IconPnpm";
import IconReact from "@/shared/components/icons/IconReact";
import IconReactNative from "@/shared/components/icons/IconReactNative";
import IconReactQuery from "@/shared/components/icons/IconReactQuery";
import IconTailwindCss from "@/shared/components/icons/IconTailwindCss";
import IconTs from "@/shared/components/icons/IconTs";
import IconVite from "@/shared/components/icons/IconVite";
import IconZustand from "@/shared/components/icons/IconZustand";

export const bookSectionList: {
  id: BookSectionId;
  title: string;
  subtitle: string;
}[] = [
  {
    id: "cover",
    title: "LetYuchan's Portfolio",
    subtitle: "Scroll to turn the page",
  },
  {
    id: "summary",
    title: "DEVELOPER SUMMARY",
    subtitle: "Position, Philosophy, Skills",
  },
  {
    id: "devops",
    title: "DEVOPS CULTURAL CONTRIBUTIONS",
    subtitle: "What i also do beyond coding",
  },
  {
    id: "projects",
    title: "PROJECT LAYERS",
    subtitle: "Web · App",
  },
  {
    id: "contact",
    title: "CONTACT & RESUME",
    subtitle: "Buy during the dip",
  },
];

export const stackNameList = [
  "React",
  "React Native",
  "TypeScript",
  "Next.js",
  "Tailwind CSS",
  "React Query",
  "Vite",
  "Docker",
  "pnpm",
  "HTML",
  "CSS",
  "GitHub",
  "Zustand",
  "Pnpm",
];

export const techLogos = [
  { node: <IconReact />, title: "React", href: "https://react.dev" },
  {
    node: <IconReactNative />,
    title: "React Native",
    href: "https://reactnative.dev",
  },
  {
    node: <IconReactQuery />,
    title: "React Query",
    href: "https://tanstack.com/query/latest",
  },
  { node: <IconNext />, title: "Next.js", href: "https://nextjs.org" },
  { node: <IconGit />, title: "Git", href: "https://git-scm.com/" },
  {
    node: <IconTailwindCss />,
    title: "Tailwind CSS",
    href: "https://tailwindcss.com",
  },
  {
    node: <IconTs />,
    title: "TypeScript",
    href: "https://www.typescriptlang.org",
  },
  {
    node: <IconZustand />,
    title: "Zustand",
    href: "https://zustand-demo.pmnd.rs/",
  },
  { node: <IconDocker />, title: "Docker", href: "https://www.docker.com/" },
  { node: <IconPnpm />, title: "pnpm", href: "https://pnpm.io" },
  {
    node: <IconHtml />,
    title: "HTML",
    href: "https://developer.mozilla.org/en-US/docs/Web/HTML",
  },
  {
    node: <IconCss />,
    title: "CSS",
    href: "https://developer.mozilla.org/en-US/docs/Web/CSS",
  },
  { node: <IconVite />, title: "Vite", href: "https://vitejs.dev" },
];
