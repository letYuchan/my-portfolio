interface AwardCardProps {
  year: string;
  title: string;
  org: string;
}

const AwardCard = ({ year, title, org }: AwardCardProps) => {
  return (
    <article
      className="
        w-full rounded-xl border border-line-primary/60 
        bg-surface-secondary/70 px-5 py-4
        flex items-center justify-between
        transition-all hover:border-accent-strong/80 hover:shadow-soft
        flex-nowrap
      "
    >
      <p className="text-xs tracking-[0.25em] text-on-surface-muted w-20 shrink-0">
        {year}
      </p>

      <div className="flex-1 px-4">
        <p className="text-on-surface-primary font-semibold text-sm">{title}</p>
      </div>

      <p className="text-xs text-on-surface-muted whitespace-nowrap">{org}</p>
    </article>
  );
};

export default AwardCard;
