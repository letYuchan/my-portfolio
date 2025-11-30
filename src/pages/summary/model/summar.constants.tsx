import ComprehensiveCareerSection from "@/pages/summary/components/CareerAndCourseSection";
import ContactSection from "@/pages/summary/components/ContactSection";
import DeveloperSummarySection from "@/pages/summary/components/DeveloperSummarySection";

export const BOOK_PAGES = [
  {
    id: "developer",
    label: "Developer Summary",
    tag: "Developer Summary",
    gradient:
      "linear-gradient(120deg, rgba(209,191,255,0.35) 0%, rgba(209,191,255,0.05) 65%, transparent 100%)",
    Component: DeveloperSummarySection,
  },
  {
    id: "career",
    label: "Comprehensive Career",
    tag: "Comprehensive Career",
    gradient:
      "linear-gradient(120deg, rgba(255,206,230,0.4) 0%, rgba(255,206,230,0.08) 70%, transparent 100%)",
    Component: ComprehensiveCareerSection,
  },
  {
    id: "contact",
    label: "Contact",
    tag: "Contact",
    gradient:
      "linear-gradient(130deg, rgba(192,215,255,0.35) 0%, rgba(192,215,255,0.08) 70%, transparent 100%)",
    Component: ContactSection,
  },
] as const;
