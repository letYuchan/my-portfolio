import AwardCard from "@/pages/summary/components/AwardCard";
import CertificationCard from "@/pages/summary/components/CertificationCard";
import {
  awardDataList,
  certificationDataList,
} from "@/pages/summary/model/summary.data";

const AwardAndCertificationSection = () => {
  return (
    <section className="w-full flex flex-row items-center justify-between">
      {/* 수상경력 */}
      <div className="flex flex-col gap-4">
        <h3 className="font-semibold text-xl text-on-surface-muted tracking-[12px] mb-2">
          Award
        </h3>
        {awardDataList.map((awardData, idx) => (
          <AwardCard
            key={idx}
            year={awardData.year.toString()}
            title={awardData.title}
            org={awardData.org}
          />
        ))}
      </div>
      {/* 자격증 */}
      <div className="flex flex-col gap-4">
        <h3 className="font-semibold text-xl text-on-surface-muted tracking-[12px] mb-2">
          Certification
        </h3>
        {certificationDataList.map((certificationData, idx) => (
          <CertificationCard
            key={idx}
            year={certificationData.year.toString()}
            title={certificationData.title}
            org={certificationData.org}
          />
        ))}
      </div>
    </section>
  );
};

export default AwardAndCertificationSection;
