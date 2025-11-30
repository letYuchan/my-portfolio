import type { BookSectionId } from "@/pages/summary/model/summary.types";
import IconChatGpt from "@/shared/components/icons/IconChatGpt";
import IconCopilot from "@/shared/components/icons/IconCopilot";
import IconCss from "@/shared/components/icons/IconCss";
import IconDocker from "@/shared/components/icons/IconDocker";
import IconFigma from "@/shared/components/icons/IconFigma";
import IconGit from "@/shared/components/icons/IconGit";
import IconHtml from "@/shared/components/icons/IconHtml";
import IconNext from "@/shared/components/icons/IconNext";
import IconNotion from "@/shared/components/icons/IconNotion";
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
  "Zustand",
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
  { node: <IconNotion />, title: "Notion", href: "https://www.notion.so" },
  { node: <IconChatGpt />, title: "ChatGpt", href: "https://chat.openai.com" },
  {
    node: <IconCopilot />,
    title: "Copilot",
    href: "https://copilot.github.com",
  },
  { node: <IconFigma />, title: "Figma", href: "https://www.figma.com" },
];

export const careerDataList = [
  {
    term: "2021.03 - contemporary",
    title: "Seoul National University of Science and Technology",
    content: "Bachelor's Degree in Computer Science and Engineering",
  },
  {
    term: "2024.12 - 2025.03",
    title: "Frontend Developer at SaaS Startup, Flowww",
    content: "Golf track mode development, publishing for B2B services.",
  },
];

export const courseDataList = [
  { title: "Introduction to Programming" },
  { title: "Data Structures" },
  { title: "Descrete Mathematics" },
  { title: "Database System" },
  { title: "Operating System" },
  { title: "Computer Networks" },
  { title: "Software Engineering" },
  { title: "Web Programming" },
  { title: "System Programming" },
  { title: "Data Communication" },
  { title: "Open Source Software" },
  { title: "Unix System" },
  { title: "Digital Logic And System" },
];

export const awardDataList = [
  {
    year: 2024,
    title: "Term project 2024 1st",
    org: "Seoul National University of Science and Technology",
  },
  {
    year: 2025,
    title: "Top rank in startup clubs",
    org: "Seoul National University of Science and Technology",
  },
];

export const certificationDataList = [
  {
    year: 2022,
    title: "워드프로세서",
    org: "대한상공회의소",
  },
];
