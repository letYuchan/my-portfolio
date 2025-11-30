import CareerCard from "@/pages/summary/components/CareerCard";
import CourseBadge from "@/pages/summary/components/CourseBadge";
import {
  careerDataList,
  courseDataList,
} from "@/pages/summary/model/summary.data";

const ComprehensiveCareerSection = () => {
  return (
    <section className="w-full flex flex-row items-center justify-between">
      {/* 커리어 */}
      <div className="flex flex-col gap-4">
        <h3 className="font-semibold text-xl text-on-surface-muted tracking-[12px] mb-2">
          Career
        </h3>
        {careerDataList.map((careerData, idx) => (
          <CareerCard
            key={idx}
            term={careerData.term}
            title={careerData.title}
            content={careerData.content}
          />
        ))}
      </div>
      {/* Course */}
      <div className="flex flex-col gap-4 flex-wrap">
        <h3 className="font-semibold text-xl text-on-surface-muted tracking-[12px] mb-2">
          Course
        </h3>
        <div className="flex flex-wrap gap-2 w-full max-w-xl">
          {courseDataList.map((courseData, idx) => (
            <CourseBadge key={idx} title={courseData.title} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default ComprehensiveCareerSection;
