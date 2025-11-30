interface CourseBadgeProps {
  title: string;
}

const CourseBadge = ({ title }: CourseBadgeProps) => {
  return (
    <div className="px-4 py-2 font-semibold text-sm text-on-surface-primary rounded-2xl border border-line-accent">
      {title}
    </div>
  );
};

export default CourseBadge;
